import React from "react";
import styles from "../styles/styles.module.css";
const MovieCard: React.FC<any> = ({ movie }) => {
  const baseURL = "https://image.tmdb.org/t/p/";
  const imageSize = "w300";
  const imageURL = `${baseURL}${imageSize}${movie.poster_path}`;
  const imageNotFound =
    "https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled-1150x647.png";

  const handleImageError = (
    e: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    e.currentTarget.src = imageNotFound;
  };
  return (
    <div className={styles.card}>
      <img src={imageURL} alt={movie.title} onError={handleImageError} />
      <p className="text-warning">
        Title: <span className="text-secondary">{movie.title}</span>
      </p>
      <p className="overview">{movie.overview}</p>
    </div>
  );
};

export default MovieCard;
