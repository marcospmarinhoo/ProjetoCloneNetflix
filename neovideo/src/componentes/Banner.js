import React from 'react';
import categories from '../api';
import { getMovies } from '../api';
import "./Banner.css";
import { useEffect } from 'react';

 function Banner() {
    const [movie, setMovie] = React.useState({});
    const fetchRandomMovie = async ()=>{
        try {
            const netflixOriginalsCategory = categories.find(
            (category) => category.name === "netflixOriginals"
            );
        const data = await getMovies(netflixOriginalsCategory.path);
        const movies = data?.results;
        const randomIndex = Math.floor(Math.random() * movies.length)
        setMovie(movies[randomIndex])
        } catch (error) {
            console.log("Banner fetchRandoMovie error: ", error)
        }
    }

    useEffect(() => {
        fetchRandomMovie()
    }, []);

    function truncate(str, n) {
        return str?.length > n ? str.subtr(0, n - 1) + "..." : str;
    }
    
    return <header className='banner-container' style={{backgroundSize:"cover",
    backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
    roundPosition: "center-center"}}>
        <div className='banner-content'>
            <h1 className='banner-title'>
                {movie?.title || movie?.name || movie?.original_name}
            </h1>
            <div className='banner-button-container'>
                <div className='banner-button'>Assistir</div>
                <div className='banner-button'>Minha lista</div>
            </div>
            
            <div className='banner-desciption'>
                <h2>{truncate(movie?.overview)}</h2>
            </div>
        </div>
    </header>
 }
    


export default Banner;