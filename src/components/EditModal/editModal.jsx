import React, { useEffect, useRef, useState } from "react";
import { EditModalStyle } from "./editModalStyle";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { editInfoStateId, editModalState, newDataReload } from "../../atoms/editMod";
import { getOneHandler, updateHandler } from "../../axios/axios";
import {MdCancel} from "react-icons/md"


const EditModal = ({refetch}) => {
    const navigate = useNavigate();

    const [edit, setEdit] = useRecoilState(editModalState);
    const [editInfoId, setEditInfoId] = useRecoilState(editInfoStateId);
    const [userEdit, setUserEdit] = useState({})


    const handleChange = (e) => {
      const { name, value } = e.target;
      setUserEdit({ ...userEdit, [name]: value });
    };

    const fetchCurrentRecord = async() => {
      const response = await getOneHandler(editInfoId);
      setUserEdit(response)
    }

    const { _id, __v, createdAt, updatedAt, ... rest} = userEdit;

    const handleSubmit = () => {
      updateHandler(rest, editInfoId, refetch)
      setEdit(false);
      navigate("/")
    }

    useEffect(() => {
      fetchCurrentRecord();
    }, [])


    return (
        <EditModalStyle>
          <form className="mymodal" onSubmit={handleSubmit}>
            <MdCancel className="cancel" onClick={() => setEdit(false)}/>
            <div className="">
       <label>Name</label>
        <input
          name="name"
          type="text"
          className="input"
          label="Name"
          value={userEdit.name}
          onChange={handleChange}
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
          value={userEdit.from}
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
          value={userEdit.to}
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
          value={userEdit.totalbudget}
          onChange={handleChange}
          
        />
      </div>
      <label>Daily Budget</label>
      <div className="">
        <input
          name="dailybudget"
          type="text"
          className="input"
          label="Daily Budget"
          value={userEdit.dailybudget}
          onChange={handleChange}
          
        />
      </div>
        <button className="submit-btn" type="submit" onClick={handleSubmit} >
          Save
        </button>
          </form>
        </EditModalStyle>
    );
}

export default EditModal;