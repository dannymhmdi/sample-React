import React, { useState } from "react";
import user1 from "../../../assets/images/avatar2.jpg";
import styles from "./card-view.module.css";
import UserCardFlex from "./user-card-flex";
import CardBody from "./card-body";
const CardView = ({user,onClick}) => {
    // console.log('vvvvvvvv',user)
  return (
    <UserCardFlex>
        {user.map(student => {
            return(<CardBody onClick={onClick} stu={student} name={student.firstName} phone={student.phone} email={student.email} lastName={student.lastName}/>)
        })}
    </UserCardFlex>
   );
};

export default CardView;
