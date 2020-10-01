import React from 'react';
import {Grid, Image, Header} from "semantic-ui-react";
import logo from '../../assets/img/themoviedb.svg';

const Footer = () => {
    return (
        <Grid
            padded
            centered
        >
            <Grid.Column width={4}>
                <Header textAlign="center" inverted>Data by</Header>
                <a
                    href="https://www.themoviedb.org/"
                   target="_blank"
                >
                    <Image
                        src={logo}
                        alt="TheMovieDB Logo"
                    />
                </a>
            </Grid.Column>
        </Grid>
    );
};

export default Footer;