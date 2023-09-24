import React, { useContext, useEffect, useState } from 'react'
// import { AppContext } from '../context/AppContext'
import Card from './Card';
import { MyContext } from '../Context/MyContext';
import Loader from './Loader';

const UserData = () => {
  // const {author, setAuthor} = useContext(AppContext)

  const url = "https://api.github.com/users/";
  const{searchVal}=useContext(MyContext)
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true)
  async function fetchdata() {
    setLoading(true);
    try {

      const respond = await fetch(url + searchVal);
      console.log(searchVal);
      const result = await respond.json();
      setData(result)
      console.log(result.length);
      // console.log(data)
    }
    catch (error) {
      console.log("something went wrong")
    }

    setLoading(false);
  }

  useEffect(() => {
    console.log("hello ji")
    fetchdata();
  }, [searchVal])
  return (
    <div>

      {
         loading?(<Loader></Loader>):(<Card data={data} loading={loading} setLoading={setLoading}></Card>
         )
      }
      
    </div>
  )
}

export default UserData
