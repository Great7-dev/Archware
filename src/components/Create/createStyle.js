import styled from "styled-components";

export const CreateContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMoDKRmfAotlW6mDkVoaJoHFVEJfP-woJOVn9LDE7XLPdS5ELPkZ-j54RQd_hvooEyPO0&usqp=CAU');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
.upload{
      display: flex;
      margin: 4% 0;
      align-items: center;
      justify-content: center;
      color: red;
      width: 100%;
      height: 48px;
      background-color: black;
      border: none;
      cursor: pointer;
}
 .datecontainer{
    display: flex;
    gap: 10px;
    margin-bottom: 10px;
 }
 input{
        background: #ffffff;
        border: solid #d9d9d9;
        border-width: 1px;
        padding: 8px 16px 8px 16px;
        margin: 4% 0 5% 0; 
        outline: none;
        width: 100%;
        height: 48px; 
 }
 .from{
    display:flex;
    flex-direction: row;
    align-items: center;
    gap: 3px;
 }
 .to{
    display:flex;
    flex-direction: row;
    align-items: center;
    gap: 3px;
 }
 .form{
    display: flex;
    flex-direction: column;
    margin: 100px auto;
    max-width: 450px;
    padding: 20px;
    width: 100%;
    height:100vh;
    background: #ffffff;
 }
 .submit-btn{
    border:none;
background-image: linear-gradient(to right,#DE3D6D 40% ,#F5844C );
color: #F5F5F5;
width: 100%;
height: 48px;
margin: 4% 0;
box-sizing: border-box;
font-weight:600;
cursor: pointer;
 }
 .cancel{
   margin-bottom: 10px;
   color: #DE3D6D;
   cursor: pointer;
   font-size: 30px;
   align-self: flex-end;
 }
`;
