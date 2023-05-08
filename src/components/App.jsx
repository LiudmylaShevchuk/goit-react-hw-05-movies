import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
import { Layout } from './Layout/Layout';
import { NotFound } from '../Error/NotFound';
import { Home } from '../pages/Home/Home';
import { MovieDetails } from 'pages/MovieDetails/MovieDetails';

const Movies = lazy(() =>
  import('../pages/Movies/Movies').then(module => ({
    ...module,
    default: module.Movies,
  }))
);

const Cast = lazy(() =>
  import('./Cast/Cast').then(module => ({
    ...module,
    default: module.Cast,
  }))
);

const Reviews = lazy(() =>
  import('./Reviews/Reviews').then(module => ({
    ...module,
    default: module.Reviews,
  }))
);

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="*" element={<NotFound />}></Route>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails/>}>
            <Route path="cast" element={ <Cast/>} />
            <Route path="reviews" element={ <Reviews/>} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};
