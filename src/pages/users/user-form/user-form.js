import React, { Fragment, useEffect, useState } from "react";
import styles from "./user-form.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const UserForm = ({ formTitle, onSave, user }) => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  });

  const navigate = useNavigate()

  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log("form submited");
    onSave(data);
  };

  const onChangeInputHandler = (e) => {
    const newData = {
      ...data,
      [e.target.name]: e.target.value,
    };
    setData(newData);
    console.log(`${e.target.name} =`, e.target.value);
  };

  const onCancelHandler = () => {
    navigate('/user')
  }

  const onSaveHandler = () => {
    navigate('/user')
  }

  useEffect(() => console.log("data =", data), [data]);

  useEffect(() => {
    setData(user);
  }, [user]);


  return (
    <Fragment>
      <h3 className={styles["user-form-head"]}>user form</h3>

      <div className={styles["form-container"]}>
        <form
          action=""
          className={`${styles["user-form"]} ${styles["col-7"]}`}
          onSubmit={onFormSubmit}
        >
          <h3 className={styles["col-12"]}>{formTitle}</h3>
          <div className={`${styles["col-2"]} ${styles["label-container"]}`}>
            <label htmlFor="firstName">first name </label>
          </div>
          <div
            className={styles["col-10"]}
            style={{ border: "1pxs solid green", padding: "6px" }}
          >
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={data.firstName}
              onChange={onChangeInputHandler}
              placeholder="enter firstname"
            />
          </div>

          <div className={`${styles["col-2"]} ${styles["label-container"]}`}>
            <label htmlFor="lastName">last name </label>
          </div>
          <div
            className={styles["col-10"]}
            style={{ border: "1pxs solid green", padding: "6px" }}
          >
            <input
              type="text"
              name="lastName"
              id="lastName"
              value={data.lastName}
              onChange={onChangeInputHandler}
              placeholder="enter lastname"
            />
          </div>

          <div className={`${styles["col-2"]} ${styles["label-container"]}`}>
            <label htmlFor="phone">phone </label>
          </div>
          <div
            className={styles["col-10"]}
            style={{ border: "1pxs solid green", padding: "6px" }}
          >
            <input
              type="number"
              name="phone"
              id="phone"
              value={data.phone}
              onChange={onChangeInputHandler}
              placeholder="enter phone number"
            />
          </div>

          <div className={`${styles["col-2"]} ${styles["label-container"]}`}>
            <label htmlFor="email">email </label>
          </div>
          <div
            className={styles["col-10"]}
            style={{ border: "1pxs solid green", padding: "6px" }}
          >
            <input
              type="email"
              name="email"
              id="email"
              value={data.email}
              onChange={onChangeInputHandler}
              placeholder="enter email address"
            />
          </div>
          <div className={styles["save-cancel-container"]}>
            <button type="submit" className={styles["save-btn"]} onClick={onSaveHandler}>
              save
            </button>
            <button type="button" className={styles["cancel-btn"]} onClick={onCancelHandler}>cancel</button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default UserForm;
