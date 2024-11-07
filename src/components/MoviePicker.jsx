/* eslint-disable react/prop-types */
import React from "react";
import { useState, useEffect } from "react";
import '../App.css';
import SeatMap from "./SeatMap";

//Hämtar filmer och priser samt sparar dom i state.
function MovieList () {
    const [movies, setMovies] = useState([]);
    const [selectedMoviePrice, setSelectedMoviePrice] = useState(0);
    
//Hämtar filmer från movies.json
    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await fetch('/data/movies.json');
                const data = await response.json();
                setMovies(data.movies);
            }
            catch (error) {
                console.error('There was an error fetching the movies:', error);
            }
        };
        fetchMovies();

    }, []);
    //Hanterar pris för vald film och sparar det i state.
    const handleMovieChange = (price) => {
        setSelectedMoviePrice(price);
    };
    //Renderar MoviePicker och SeatMap
    return (
    <>
     <MoviePicker movies={movies} onMovieChange={handleMovieChange}/>
        <SeatMap selectedMoviePrice={selectedMoviePrice} />
    </>
    );
}


export const MoviePicker = ({ movies, onMovieChange }) => {

    const [selectedMovie, setSelectedMovie] = useState(null);
    
    if (!movies || movies.length === 0) {
        return <div>Loading movies...</div>;
    }
    const handleMovieChange = (event) => {
        const selectedMovie = movies.find((movie) => movie.title === event.target.value);
        setSelectedMovie(selectedMovie);
        onMovieChange(selectedMovie.price);
    };

    //Visar filmer för användaren beroende på val. Titel och pris visas i option menyn. 
    return (
        <div className="movie-container">
            <h3>Welcome to the J.R.R. Tolkien Cinema</h3>
            <select name="movie" id="movie" onChange={handleMovieChange} defaultValue="">
            <option value="" disabled>
                    Pick a movie...
                </option>
                {movies.map((movie) => (
                    <option key={movie.id} value={movie.title}>   
                        {movie.title} &nbsp;|&nbsp; {movie.price.toLocaleString("sv-SE", {style: "currency", currency: "SEK"})}
                    </option>
                ))}
            </select>
            {selectedMovie && (
                <div className="selected-movie-info">

                    <img src= {selectedMovie.poster} className="movie-poster" alt="Poster"></img>
                    <p><strong>Title:</strong> {selectedMovie.title}</p>
                    <p><strong>Price:</strong> {selectedMovie.price.toLocaleString("sv-SE", { style: "currency", currency: "SEK" })}</p>
                </div>
            )}
            
        </div>
    );
};
export default MovieList;