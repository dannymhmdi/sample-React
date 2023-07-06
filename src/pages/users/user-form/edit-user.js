import React, { useEffect, useState } from "react";
import BasePage from "../../../components/base-page/base-page";
import UserForm from "./user-form";
import axios from "axios";
import { useParams } from "react-router-dom";
const EditUser = () => {
  const { id } = useParams();
  const [editedUser, setEditedUser] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  });
  console.log("param", useParams());
  
  const onSaveEditUser = (user) => {
    console.log("edituser onsave", user);
    axios.put(`http://localhost:3001/user/${user.id}`,user)
  };

  useEffect(() => {
    axios.get(`http://localhost:3001/user/${id}`).then((response) => {
      console.log('response.data',response.data);
      setEditedUser(response.data);
    });
  }, [id]);
  console.log("editedUser", editedUser);
  return (
    <BasePage fluid={true} title={"edit user"}>
      <UserForm
        formTitle={"edit user form"}
        onSave={onSaveEditUser}
        user={editedUser}
      />
    </BasePage>
  );
};

export default EditUser;
