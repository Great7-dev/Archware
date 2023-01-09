import styled from "styled-components";

export const EditModalStyle = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;

  .mymodal{
    width: 30%;
    height: 610px;
    padding: 20px 20px 20px 20px;
    background-color: #ffffff;
    margin: 120px auto;
    display: flex;
    flex-direction: column;
  }
  .datecontainer{
    display: flex;
    gap: 18px;
    margin-bottom: 20px;
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
 input{
        background: #ffffff;
        border: solid #d9d9d9;
        border-width: 1px;
        padding: 8px 16px 8px 16px;
        margin: 2% 0 5% 0; 
        outline: none;
        width: 100%;
        height: 48px; 
 }
 .submit-btn{
    border:none;
background-image: linear-gradient(to right,#DE3D6D 40% ,#F5844C );
color: #F5F5F5;
width: 100%;
height: 48px;
margin: 10% 0;
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