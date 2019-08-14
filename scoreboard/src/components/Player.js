import React, {PureComponent} from 'react';
import Counter from  './Counter';
import PropTypes from 'prop-types';

class Player extends PureComponent  {

    //Call from here no needed to instatiate classs
    static propTypes = {
        changeScore:PropTypes.func,
        removePlayer:PropTypes.func,
        name:PropTypes.string,
        score:PropTypes.number.isRequired,
        id:PropTypes.number,
        index:PropTypes.number,
    }

    render(){
        // Destructuring or pass into function rather than props
        const {score, index, id, removePlayer,name, changeScore} = this.props;

        return(<div className="player">
        <span className="player-name">
        <button className="remove-player" onClick={() => removePlayer(id)}>✖</button>
             { name }
            </span>
            <Counter index={index} score={score} changeScore = {changeScore} />
        </div>)
    }
}



export default Player;