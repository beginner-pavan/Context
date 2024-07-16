import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Userdetail = () => {
  const [data, setData] = useState({});
  const params = useParams();

  useEffect(() => {
    fetchData(params);
  }, [params]);
  async function fetchData(params) {
    try {
      let response = await fetch(`https://reqres.in/api/users/${params.id}`);
      let op= await response.json();
      
      setData(op?.data );
    
    } catch (error) {
      console.log(error);
    }
  }
  console.log(data,"single data");


  

  return (
    <div>
      <div   style={{ border: "2px solid #fff" }}>
        {/* <Link to={"/Userdetail"}>{data.first_name}</Link> */}
        <p>{data.first_name}</p>
        <img src={data.avatar} alt="" />
      </div>
      {/* {data.data.map((el)=>{
        console.log(el);
      })} */
      
      }
    </div>
  );
};

export default Userdetail;
