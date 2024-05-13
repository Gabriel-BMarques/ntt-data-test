import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchMoviesRequest, searchMoviesSuccess, searchMoviesFailure, clearMovies } from '../../store/actions/movieActions';
import { searchMovies } from '../../services/movieService';
import SearchBar from '../../components/SearchBar/SearchBar';
import MovieItem from '../../components/MovieItem/MovieItem';

function Home() {
    const [query, setQuery] = useState('');
    const dispatch = useDispatch();
    
    const handleSearch = async () => {
        dispatch(searchMoviesRequest());

        try {
            const movies = await searchMovies(query);
            dispatch(searchMoviesSuccess(movies));
        } catch (error) {
            dispatch(searchMoviesFailure(error.message));
        }
    };

    const handleReset = () => {
        dispatch(clearMovies());
        setQuery('');
    }

    return (
        <>
            <SearchBar
                handleSubmit={handleSearch}
                handleReset={handleReset}
                placeholder={'Buscas filmes, séries, etc.'}
                onChange={setQuery}
                value={query}
            />
            <MovieItem />
        </>
    );
}

export default Home;