import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Users = () => {
    const[data,setData]=useState([])
  async function fetchData() {
    try {
      let response = await fetch("https://reqres.in/api/users");
      let data = await response.json();
      setData(data?.data || [])
    } catch (error) {
      console.log(error);
    }
  }
  console.log(data);

  useEffect(() => {
    fetchData();
  }, []);
  return <div>
{
    data.map((user)=>{
        return (
            <div key={user.id} style={{border:"2px solid #fff"}}>
              <Link to={`${user.id}`}>{user.first_name}</Link>
                <img src={user.avatar} alt="" />
            </div>
        )
    })
}
  </div>;
};

export default Users;
