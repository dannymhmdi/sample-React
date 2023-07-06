import React, { useState } from "react";
import styles from "./search-bar.module.css";
const SearchBar = ({ searchBar , onChange}) => {
//   const [searchBar, setSearchBar] = useState('');
//   const onChangesearchBarHandler = (e) => {
//     e.preventDefault();
//     setSearchBar(e.target.value);
//   };

//   if(searchBar.length > 0){
//   let filterBar =  users.filter(user => {
//    return (user.firstName.match(searchBar))
//    })
//    console.log(filterBar)
//   }
//   console.log('searchBar.length=',searchBar.length)


  return (
    <div className={styles["search-bar-container"]}>
      <span className="material-symbols-outlined">search</span>
      <input
        type="text"
        name="searchBar"
        id="search-bar"
        value={searchBar}
        onChange={onChange}
      />
    </div>
  );
};

export default SearchBar;
