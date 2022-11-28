import { useEffect,useState } from 'react';
import movieDB from '../api/movieDB';
import { MovieDBNowPlaying,Movie } from '../interfaces/movieInterfaces';

const useMovies = () => {

    const [isLoading, setisLoading] = useState(true)

    const [peliculasEnCine, setPeliculasEnCine] = useState<Movie[]>([])

    const getMovies = async() => {

        const resp = await movieDB.get<MovieDBNowPlaying>('/now_playing')
        const peliculas = resp.data.results;
        setPeliculasEnCine( peliculas)

        setisLoading( false );
    }

    useEffect(() => {
        //now_playing
        getMovies();

    }, [])

    return {
        peliculasEnCine,
        isLoading
    }
}

export default useMovies
