import React, {useEffect, useState} from 'react';
import moviedb from "../../api/moviedb";
import { Grid, Button } from 'semantic-ui-react';
import MovieItem from "./MovieItem";
import MainContent from "../layout/MainContent";

const MovieList = () => {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState<number>(1);
    const [scroll, setScroll] = useState<number>(0);

    useEffect(() => {
        const fetchTrending = async () => {
            try {
                const response = await moviedb.get(`/trending/movie/week?page=${page}`);
                setMovies(m => m.concat(response.data.results))
                window.scroll(window.scrollX, scroll)
            } catch (e) {
                console.log(e)
            }
        };

        fetchTrending()
    }, [setMovies, page]);


    const fetchMore = () => {
        setScroll(window.scrollY);
        setPage(page + 1)
    };

    return (
        <>
            <MainContent>
                {
                    movies && movies.map(({ id, title, vote_average, overview, poster_path }) => (
                        <Grid.Column key={id}>
                            <MovieItem
                                id={id}
                                title={title}
                                description={overview}
                                rating={vote_average}
                                url="/"
                                imageUrl={poster_path}
                            />
                        </Grid.Column>
                    ))
                }
            </MainContent>
            <Grid
                padded
                textAlign="center"
            >
                <Grid.Column>
                    <Button
                        inverted
                        size="big"
                        onClick={fetchMore}
                    >
                        Load more
                    </Button>
                </Grid.Column>
            </Grid>
        </>
    );
};

export default MovieList;