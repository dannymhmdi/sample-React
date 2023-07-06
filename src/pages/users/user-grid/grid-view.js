import React from "react";
import GridHeader from "./grid-header";
import GridBody from "./grid-body";
import { Fragment } from "react";
import GridColumn from "./grid-column";
import styles from "./grid-view.module.css";
import ListEmpty from "../../../components/list-empty/list-empty";
import { Link } from "react-router-dom";
const GridView = ({ user, onDelete }) => {
  return (
    <Fragment>
      <div className={styles['new-button-container']}> 
        <Link className={styles["new-button"]} to={'/user/new-user'}>
          <span className="material-symbols-outlined">add</span>
        </Link>
      </div>
      <GridHeader></GridHeader>
      <GridBody>
        {user?.length > 0 ? (
          user.map((student) => {
            return (
              <>
                <GridColumn>{student.firstName}</GridColumn>
                <GridColumn>{student.lastName}</GridColumn>
                <GridColumn>{student.phone}</GridColumn>
                <GridColumn>{student.email}</GridColumn>
                <GridColumn className={styles["icon-btn"]}>
                  <button onClick={() => onDelete(student.id)}>
                    <span className="material-symbols-outlined">delete</span>
                  </button>
                  <Link className={styles["edit-button"]} to={`/user/edit-user/${student.id}/${student.firstName}`}>
                    <span className="material-symbols-outlined">edit</span>
                  </Link>
                </GridColumn>
              </>
            );
          })
        ) : (
          <ListEmpty />
        )}
      </GridBody>
    </Fragment>
  );
};

export default GridView;
