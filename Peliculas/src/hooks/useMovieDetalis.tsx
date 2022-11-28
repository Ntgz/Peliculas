import React from 'react'
import { useEffect,useState } from 'react';
import movieDB from '../api/movieDB';
import { MovieFull } from '../interfaces/movieInterfaces';

interface MovieDetalis {
    isLoading: boolean;
    movieFull: MovieFull;
    cast: any[];
}


const useMovieDetalis = ( movieId: number) => {

    const [state,setState] = useState<MovieDetalis>();

    const getMovieDetails = async() => {
        const resp = await movieDB.get<MovieFull>(`/${movieId}`)
        console.log(resp.data.overview);

    }

    useEffect(() => {
        getMovieDetails();
    }, [])
    
    return {
        state
    }

}

export default useMovieDetalis
