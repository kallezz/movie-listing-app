import React from 'react';
import { Input, Menu} from "semantic-ui-react";
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
    return (
        <Menu attached inverted stackable>
            <Menu.Item
                header
                as={Link}
                to="/"
            >MovieList</Menu.Item>
            <Menu.Menu position="right">
                <Menu.Item
                    position='right'
                >
                    <Input
                        inverted
                        icon='search'
                        placeholder='Search for movies...'
                    />
                </Menu.Item>
                <Menu.Item
                    position='right'
                    name='about'
                    as={NavLink}
                    to="/about"
                />
            </Menu.Menu>
        </Menu>
    );
};

export default Header;