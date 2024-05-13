import { useSelector } from "react-redux";

function MovieItem() {
    const movies = useSelector(state => state.movie.movies);

    return (
        movies && (
            <pre style={{ textAlign: 'left', color: '#ffffff' }}>
                {movies && JSON.stringify(movies, null, 2)}
            </pre>
        )
    )
}

export default MovieItem;