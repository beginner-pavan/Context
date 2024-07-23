import React, { useContext, useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { LoginContext } from "./Logincontext";


const getCurrentpage = (pagenNumber)=>{
  pagenNumber =Number(pagenNumber);
  if(typeof pagenNumber !== "number" && pagenNumber <=0){
    pagenNumber =1;
  }
  if(!pagenNumber){
    pagenNumber =1;
  }
  return pagenNumber
}
const Users = () => {
  const {auth,handleLogin,handleLogout}=useContext(LoginContext)
    const[data,setData]=useState([])
    const [searchParam,setSearchparam] = useSearchParams();
    const initialPage = getCurrentpage(searchParam.get("page"));
    const[page,setPage] = useState(initialPage)
    
 
  async function fetchData(page) {
    try {
      let response = await fetch(`https://reqres.in/api/users?page=${page}`);
      let data = await response.json();
      setData(data?.data || [])
    } catch (error) {
      console.log(error);
    }
  }


  useEffect(() => {
    fetchData();
    console.log(searchParam);
  }, [page]);

  useEffect(()=>{
    setSearchparam({page})
  },[page])

  const handlepagechange = (val)=>{
    const changeBy = page+val;
    setPage(changeBy)

  }
  if(!auth){
    <Link to='/'/>
  
   }
   
  return  ( <div>
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

<button onClick={()=>handlepagechange(-1)}>Previous</button>
<button onClick={()=>handlepagechange(1)}>Next</button>
  </div>

  )
};

export default Users;
