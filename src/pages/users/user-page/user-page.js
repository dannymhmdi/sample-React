import React, { useEffect } from "react";
import { GridView } from "../user-grid";
import BasePage from "../../../components/base-page/base-page";
import styles from "./user-page.module.css";
import { ToggleButton } from "../../../components/toggle-switch-button";
import * as viewModeConstants from "../constant/constant";
import { useState } from "react";
import CardView from "../user-card/card-view";
import Modal from "../../../components/modal-conformation/modal";
import ModalMessage from "../../../components/modal-conformation/modal-message";
import axios from "axios";
import Loading from "../../../components/loading/loading";
import { Pagination } from "../../../components/pagination";
import { SearchBar } from "../../../components/search-bar-input";

const UserPage = () => {
  const [viewMode, setViewMode] = useState(viewModeConstants.GRID_VIEW);
  const [usersList, setUsersList] = useState([]);
  const [isShowModal, setIsShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [userToDelete, setUserToDelete] = useState(null);
  const [count, setCount] = useState([
    {
      id: 3,
      firstName: "Pouya",
      lastName: "Farahani",
      phone: 12345667,
      email: "pouya@gmail.com",
    },
    {
      id: 4,
      firstName: "Hamid",
      lastName: "Jafari",
      phone: 12345667,
      email: "hamid@gmail.com",
    },
  ]);
  const deleteHandler = (id) => {
    // setUsersList(
    //   usersList.filter((user) => {
    //     return user.id !== users.id;
    //   })
    // );
    setIsShowModal(true);
    setUserToDelete(id);
  };

  const viewModeHandler = () => {
    setViewMode(!viewMode);
    console.log("viewMode = ", viewMode);
  };

  const notShowModal = () => {
    setIsShowModal(false);
  };

  const onYesConfirm = () => {
    axios
      .delete(`http://localhost:3001/user/${userToDelete}`)
      .then((response) => console.log("response=", response.data));
    setIsShowModal(false);
    setIsLoading(true);
  };

  useEffect(() => {
    // fetch("http://localhost:3001/user")
    //   .then((response) => response.json())
    //   .then((result) => {return (setUsersList(result))}
    //   );
    if (isLoading) {
      axios.get("http://localhost:3001/user").then((response) => {
        setUsersList(response.data);
      });
      setIsLoading(false);
    }
  }, [isLoading]);

  //////////////////////////////////search-bar/////////////////////////////////////////

  const [searchBar, setSearchBar] = useState("");
  const onChangesearchBarHandler = (e) => {
    e.preventDefault();
    setSearchBar(e.target.value);
  };

  useEffect(() => {
    let filterBar = usersList.filter((user) => {
      return user.firstName.match(searchBar);
    });
    setUsersList(filterBar)
    console.log(filterBar);
    // axios.get('http://localhost:3001/user').then(res => {setUsersList(res.data)})
  }, [searchBar]);

  return (
    <BasePage fluid={true} title={"user"}>
      {isShowModal && (
        <Modal onShowModal={notShowModal} onYesClick={onYesConfirm} />
      )}
      {isLoading && <Loading />}
      <h3 className={styles["user-head"]}>userpage</h3>
      <div className={styles["toggle-btn-container"]}>
        <button onClick={viewModeHandler} className={styles["toggle-view"]}>
          toggle view
        </button>
      </div>
      <SearchBar searchBar={searchBar} onChange={onChangesearchBarHandler} />
      {viewMode == 0 ? (
        <GridView user={usersList} onDelete={deleteHandler} />
      ) : viewMode == 1 ? (
        <CardView onClick={deleteHandler} user={usersList} />
      ) : (
        <h3>there is no users</h3>
      )}

      <Pagination itemsCount={usersList.length} pageSize={2} />
    </BasePage>
  );
};

export default UserPage;
