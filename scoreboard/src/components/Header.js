import React from 'react';
import Stats from  './Stats';
import Stopwatch from  './Stopwatch';
import PropTypes from 'prop-types';

const Header = (props) => {

    // Destructuring or pass into function rather than props
    const {players,title} = props;

    return (
        <header>
            <Stats players = {players}/>
            <h1>{title }</h1>
            <Stopwatch/>
        </header>
    );
}

Header.propTypes = {
    title:PropTypes.string,
    players:PropTypes.arrayOf(PropTypes.object)
}

//Sets defaulst values
Header.defaultProps = {
    title:'scoreboard'
}

export default  Header;