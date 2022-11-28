import { useEffect,useState } from 'react';
import movieDB from '../api/movieDB';
import { MovieDBNowResponse,Movie } from '../interfaces/movieInterfaces';

interface MoviesState {
    nowPlaying: Movie[]; 
    popular: Movie[];
    toprated: Movie[];
    upcoming: Movie[];
}

const useMovies = () => {

    const [isLoading, setisLoading] = useState(true)
    const [ moviesState, setMoviesState ] = useState<MoviesState>({

        nowPlaying: [],
        popular: [],
        toprated: [],
        upcoming: [],
    })


    const getMovies = async() => {

        const nowPlayingPromise = await movieDB.get<MovieDBNowResponse>('/now_playing')
        const popularPromise = await movieDB.get<MovieDBNowResponse>('/popular')
        const topRatedPromise = await movieDB.get<MovieDBNowResponse>('/top_rated')
        const upcomingPromise = await movieDB.get<MovieDBNowResponse>('/upcoming')

        const resps = await Promise.all([nowPlayingPromise,popularPromise,topRatedPromise,upcomingPromise])

        setMoviesState({
            nowPlaying: resps[0].data.results,
            popular: resps[1].data.results,
            toprated: resps[2].data.results,
            upcoming: resps[3].data.results,
        })

        setisLoading( false );
    }

    useEffect(() => {
        //now_playing

        getMovies();

    }, [])

    return {
        ...moviesState,
        isLoading,
        
    }
}

export default useMovies
