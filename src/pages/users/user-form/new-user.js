import React from "react";
import BasePage from "../../../components/base-page/base-page";
import UserForm from "./user-form";
import axios from "axios";

const NewUser = () => {
  const onSaveNewUser = (user) => {
    console.log("newuser save", user);
    axios
      .post("http://localhost:3001/user", user)
      .then((res) => console.log('res=',res));
  };

  const defaultUser = {
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  };

  return (
    <BasePage fluid={true} title={"new user"}>
      <UserForm formTitle={"New user form"} onSave={onSaveNewUser} user={defaultUser}/>
    </BasePage>
  );
};

export default NewUser;
