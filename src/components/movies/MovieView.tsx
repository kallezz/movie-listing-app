import React, {FunctionComponent, useEffect, useState} from 'react';
import {Image} from "semantic-ui-react";
import moviedb from "../../api/moviedb";

type MovieViewTypes = {
    match: {
        params: {
            id: string
        }
    }
}

interface MovieState {
    backdrop_path?: string
}

const MovieView: FunctionComponent<MovieViewTypes> = ({match}) => {
    const [movie, setMovie] = useState<MovieState>({});

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const response = await moviedb.get(`/movie/${match.params.id}`);
                setMovie(response.data)
            } catch (e) {
                console.log(e)
            }
        };

        fetchMovie();
    }, [match]);

    return (
        <>
            {
                // @ts-ignore
                movie.backdrop_path && <Image src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} />
            }
        </>
    );
};

export default MovieView;