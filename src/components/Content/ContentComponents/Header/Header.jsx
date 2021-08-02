import style from './Header.module.css'
import logo from './imagies/rain-logo.png'
import song from './imagies/song2.mp3'
import React from 'react';

class Header extends React.Component {
    state = {
        play: false
    }
    url = song
    audio = new Audio(this.url)

    play = () => {
        this.audio.volume = 0.2
        this.setState({play: !this.state.play}, () => {
            this.state.play ? this.audio.play() : this.audio.pause()
        })
    }

    render() {
        return (
            <div className={style.head}>
                <button onClick={this.play}><img src={logo} alt="" /></button>
            </div>
        );
    }
}

export default Header;