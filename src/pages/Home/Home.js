import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchMoviesRequest, searchMoviesSuccess, searchMoviesFailure } from '../../store/actions/movieActions';
import { searchMovies } from '../../services/movieService';
import SearchBar from '../../components/SearchBar/SearchBar';

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

    return (
        <SearchBar
            handleSubmit={handleSearch}
            onChange={setQuery}
            value={query}
        />
    );
}

export default Home;