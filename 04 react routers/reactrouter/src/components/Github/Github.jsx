import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github(){
    const data = useLoaderData()
    // const [data, setData] = useState({})
    // useEffect(()=>{
    //     fetch('http://api.github.com/users/Phoenix2868')
    //     .then(res=>res.json())
    //     .then(data=>setData(data))
    // },[])
    return(
        <>
        <div className="text-center m-4 bg-gray-600 text-white text-3xl flex flex-col items-center">GitHub Followers: {data.followers}
        <img src={data.avatar_url} alt="cover-img" width={300}/>
        </div>
        </>
    )
}

export default Github

// export const githubInfoLoader = async ()=>{
//     const response = await fetch('http://api.github.com/users/hiteshchoudhary')
//     return response.json()
// }