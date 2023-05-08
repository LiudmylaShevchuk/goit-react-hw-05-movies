import { useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import { MovieList, MovieItem, MovieLink, MovieImg, MovieName} from './MoviesList.styled';

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  const imgBaseUrl = 'https://image.tmdb.org/t/p/w300';

  return (
    <MovieList>
      {movies.map(({ id, title, name, poster_path }) => (
 <MovieItem key={id}>
          <MovieLink to={`/movies/${id}`} state={{ from: location }}>
            <MovieImg src={imgBaseUrl.concat(poster_path)} alt="" />
            <MovieName>{title ?? name}</MovieName>
          </MovieLink>
        </MovieItem>      ))}
    </MovieList>
  );
};

MovieList.propTypes = {
  movies: PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      poster_path: PropTypes.string,
      name: PropTypes.string,
    })
};