import React from "react";
import { VscGistSecret } from "react-icons/vsc";
import { RiGitRepositoryFill } from "react-icons/ri";
// const [loading, setLoading] = useState(true)
import detective from "../Assests/detective-kids.avif"

const Card = ({ data, loading, setLoading }) => {
  const valu = data.created_at;

  const day = new Date(valu);

  console.log("Data is ",data)

  const m = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let str_op =
    day.getFullYear()  + " " + day.getDate()+" " + m[day.getMonth()]
  return (
    <div className="w-[90%] relative mx-auto flex flex-row justify-end mt-4h-[500px]  ">
    
      {loading ? (
        <div>Data is loading</div>
      ) : (
        <div className=" w-full flex flex-row gap-6">
        <img src={detective} className=" w-[35%] rounded-2xl"></img>
        <div className=" w-[50%] flex flex-row items-center h-[400px] bg-[rgb(245,248,255)] pt-8 mt-5 rounded-md  shadow-lg   ">
        
          <div className=" w-[90%] flex flex-row items-center  justify-between">
            <img
              src={data.avatar_url}
              className="w-[30%] rounded-full ml-4"
            ></img>

            <div className="w-[60%] flex flex-col pt-5 gap-2 ">
              <div className=" w-full flex flex-col  gap-3  ">
                <h2 className=" text-xl  "><span className=" text-2xl font-semibold">Name:</span>{data.name}</h2>
                <p className=" text-xl  mr-2"><span className=" text-2xl font-semibold">Created_at:-</span>{str_op}</p>
              </div>
              <a href={data.html_url} className=" text-lg text-blue-500  font-medium">
                <span className=" text-2xl">UserName:</span>{" "}{data.login}
              </a>
              <div className=" w-full flex flex-col  justify-between">
                <div className="flex flex-row justify-between  w-full h-[90px] items-center rounded-lg  mt-8 ">
                  <div className=" w-[40%] flex flex-row items-center gap-6 bg-white rounded-lg">
                    <RiGitRepositoryFill
                      size={30}
                      color="pink"
                    ></RiGitRepositoryFill>
                    <div className=" w-[50%] ">
                      <h3 className="text-lg font-medium">
                        {data.public_repos}
                      </h3>
                      <h3 className=" text-base ">Repos </h3>
                    </div>
                  </div>
                  <div className=" w-[40%] flex flex-row items-center gap-6 bg-white rounded-md">
                    <VscGistSecret
                      size={30}
                      color="pink"
                    ></VscGistSecret>
                    <div className=" w-[50%] ">
                      <h3 className="text-lg font-medium">
                        {data.public_gists}
                      </h3>
                      <h3 className=" text-base ">Gists </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <a href={data.html_url} className=" text-lg">{data.login}</a> */}
        </div>
        </div>
      )}
    </div>
  );
};

export default Card;
