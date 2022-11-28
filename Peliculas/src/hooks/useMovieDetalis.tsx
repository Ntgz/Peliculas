import { useEffect,useState } from 'react';
import movieDB from '../api/movieDB';
import { CreditsResponse, Cast } from '../interfaces/creditsInterface';
import { MovieFull } from '../interfaces/movieInterfaces';

interface MovieDetalis {
    isLoading: boolean;
    movieFull?: MovieFull;
    cast: Cast[];
}


const useMovieDetalis = ( movieId: number) => {

    const [state,setState] = useState<MovieDetalis>({
        isLoading: true,
        movieFull: undefined,
        cast: []
    });

    const getMovieDetails = async() => {
        const movieDetailsPromise = await movieDB.get<MovieFull>(`/${movieId}`)
        const castPromise = await movieDB.get<CreditsResponse>(`/${movieId}/credits`)

        const [movieDetailsResp,castPromiseResp] = await Promise.all([ movieDetailsPromise, castPromise ]);

        setState({
            isLoading:false,
            movieFull: movieDetailsResp.data,
            cast: castPromiseResp.data.cast
        })
    }

    useEffect(() => {
        getMovieDetails();
    }, [])
    
    return {
        ...state
    }

}

export default useMovieDetalis
