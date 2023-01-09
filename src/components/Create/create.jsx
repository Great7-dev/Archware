import React, { useState } from "react";
import { CreateContainer } from "./createStyle";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { createHandler } from "../../axios/axios";
import {MdCancel} from "react-icons/md"

const initialValue = {
  name: "",
  from: "",
  to: "",
  totalbudget: "",
  dailybudget: "",
}

const Create = ({... props}) => {

  const [user, setUser] = useState(initialValue);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    
  };


  const navigate = useNavigate();

  const createCamp = async (user) => {
    try{
      const res = await createHandler({
        name: user.name,
        from: user.from,
        to: user.to,
        totalbudget: user.totalbudget,
        dailybudget: user.dailybudget,
        
    })

    console.log("RESPONSE", res)
    if(res.status === 201){
        navigate("/")
    }
    toast.success("campaign created successfully", {
        position: "top-center",
      });
    }
    catch(err){
      console.log(err)
      toast.error("Error creating campaign", {
        position: "top-center",
      });
    }
   
  };
  
  const [image, setImage] =useState({})


  const formData = new FormData()
   
  formData.append("testImage", image)
   
  const handleUpload = async (e) => {
    e.preventDefault();
    fetch('http://localhost:4000/users/upload', {
      method :"post",
      body: formData
     })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
   createCamp(user);
  
  };
const fileChange = (e) => {
  setImage(e.target.files[0])
}

  return (
    <CreateContainer>
      <form className="form" onSubmit={handleSubmit}>
        <MdCancel className="cancel" onClick={() => navigate("/")}/>
      <div className="">  
      <div className="upload">
        <input 
        type="file" 
        onChange={fileChange} 
        />
        <button onClick={handleUpload}>Upload</button>
      </div>
       <label>Name</label>
        <input
          name="name"
          type="text"
          className="input"
          label="Name"
          value={user?.name}
          onChange={handleChange}
          placeholder="Enter your name"
        />
      </div>
      <label>Date</label>
      <div className="datecontainer">
      <div className="from">
        <label>From:</label>
        <input
          name="from"
          type="date"
          className="input"
          label="From"
          value={user?.from}
          onChange={handleChange}
        />
      </div>
      <div className="to">
      <label>To:</label>
        <input
          name="to"
          type="date"
          className="input"
          label="To"
          value={user?.to}
          onChange={handleChange}
      
        />
      </div>
      </div>
      <label>Total Budget</label>
      <div className="">
        <input
          name="totalbudget"
          type="text"
          className="input"
          label="Total Budget"
          value={user?.totalbudget}
          onChange={handleChange}
          placeholder="Enter your Total Budget"
        />
      </div>
      <label>Daily Budget</label>
      <div className="">
        <input
          name="dailybudget"
          type="text"
          className="input"
          label="Daily Budget"
          value={user?.dailybudget}
          onChange={handleChange}
          placeholder="Enter your Daily Budget"
        />
      </div>
        <button className="submit-btn" type="submit" >
          Create
        </button>
      </form>
    </CreateContainer>
  );
};

export default Create;
