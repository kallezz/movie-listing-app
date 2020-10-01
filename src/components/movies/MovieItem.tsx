import React, {FunctionComponent, useState} from 'react';
import { Image, Header, Button, Dimmer } from 'semantic-ui-react';
import {Link} from "react-router-dom";

type MovieItemProps = {
    id: number,
    title: string,
    description: string,
    rating: number,
    url: string,
    imageUrl: string
}

const MovieItem: FunctionComponent<MovieItemProps> = ({ title, description, rating, url, imageUrl, id }) => {
    const [active, setActive] = useState<boolean>(false);
    const content = (
        <div>
            <Header as='h3' inverted>
                {title}
                <Header
                    subheader
                    inverted
                >
                    {rating}
                </Header>
            </Header>
            <Button
                inverted
                as={Link}
                to={`/movie/${id}`}
            >
                View
            </Button>
        </div>
    );

    return (
        <Dimmer.Dimmable
            className="movie-card"
            as={Image}
            dimmed={active}
            dimmer={{ active, content }}
            blurring
            onMouseEnter={() => setActive(true)}
            onMouseLeave={() => setActive(false)}
            alt={title}
            src={`https://image.tmdb.org/t/p/w500${imageUrl}`}
        />
    )
};

export default MovieItem;