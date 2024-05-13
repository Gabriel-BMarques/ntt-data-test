import React from 'react';
import './MovieItem.scss';
import { useSelector } from 'react-redux';
import MovieCard from '../MovieCard/MovieCard';

function MovieItem() {
    const movies = useSelector(state => state.movie.movies);

    if (!movies) return null;

    const { Title, Plot, Actors, Poster, Ratings } = movies;

    return (
        <MovieCard
            title={Title}
            plot={Plot}
            actors={Actors}
            poster={Poster}
            ratings={Ratings}
        />
    );
}

export default MovieItem;
