import React from "react";
import styles from "../src/styles/styles.module.css";
import SearchMovie from "./components/SearchMovie";
import MovieSearchList from "./components/MovieSearchList";

// create serverside which creates users and user can add his movie to favorite list, in frontside when user logins by id find all the movies user has liked. Finish creating movie card, implement search , pagination, filter, create login logout pages.
const App: React.FC = () => {
  return (
    <div className={styles.test}>
      <SearchMovie />
      <MovieSearchList />
    </div>
  );
};

export default App;
