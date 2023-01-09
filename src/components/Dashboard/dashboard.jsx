import React, { useEffect, useState } from "react";
import { useQuery } from 'react-query';
import { useRecoilState } from "recoil";
import { editInfoStateId, editModalState } from "../../atoms/editMod";
import { getHandler, getOneHandler } from "../../axios/axios";
// import Card from "../Card/card";
import { CardStyle } from "../Card/cardStyle";
import EditModal from "../EditModal/editModal";
import Navbar from "../Navbar/navbar";
import { DashboardContainer } from "./dashboardStyle";


const Dashboard = () => {  

  const [editInfoId, setEditInfoId] = useRecoilState(editInfoStateId);

  const [edit, setEdit] = useRecoilState(editModalState);


  const handleEdit = (id) => {
      setEdit(true);
      setEditInfoId(id)
  } 

  const { data, refetch } = useQuery('campaign', getHandler);
  
  return (
      <DashboardContainer>
        <Navbar />
        <div className="grid-container">
        {
          data?.data.campaign.map((item) => (
        <CardStyle key={item._id}>
          <div className="text">
          <h1 className="first">Name</h1>
          <h1 className="sec">{item.name}</h1>
          <h1 className="third">Date</h1>
          <div className="datecont">
          <h1 className="fourth">From: {item.from}</h1>   
          <h1 className="fourth"> To: {item.to}</h1>         
          </div> 
          <h1 className="fifth">Total Budget</h1>
          <h1 className="sixth">{item.totalbudget}</h1>
          <h1 className="seventh">Daily Budget</h1>
          <h1 className="eighth">{item.dailybudget}</h1>
          </div>
          <div className="btn">
          <button className="edit" onClick={(e)=>{
              handleEdit(item._id)
          }}>Edit</button>
          <button className="preview">Preview</button>
          </div>
          {edit && <EditModal refetch={refetch}/>}
      </CardStyle>
              ))
            }
    </div>
      </DashboardContainer>
  );
};

export default Dashboard;