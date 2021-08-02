import style from './MidleContent.module.css'
import React from 'react'
import logo from './imagies/play4.png'
import song1 from './imagies/song1.mp3'
import teleg from './imagies/telegram.png'
import instag from './imagies/instagram.png'
import facebook from './imagies/facebook.png'
import gp from './imagies/gp.png'

class MidleContent extends React.Component {
    state = {
        play: false
    }
    url = song1
    audio = new Audio(this.url)

    play = () => {
        this.setState({play: !this.state.play}, () => {
            if (this.state.play) {
                this.audio.play()
            } else {
                this.audio.pause()
                this.audio = new Audio(this.url)
            }
        })
    }

    render() {
        return (
            <div className={style.cont}>
                <div className={style.helloUser}>
                    <p>Rain Mod Player</p>
                </div>
                <div className={style.btn}>
                    <button onClick={this.play} type='button'><img src={logo} alt="" /></button>
                </div>
                <div className={style.messages}>
                    <a href="https://telegram.org/" rel='noreferrer' target='_blank'><img src={teleg} alt="" /></a>
                    <a href="https://www.instagram.com/" rel='noreferrer' target='_blank'><img src={instag} alt="" /></a>
                    <a href="https://ru-ru.facebook.com/" rel='noreferrer' target='_blank'><img src={facebook} alt="" /></a>
                </div>
                <div className={style.stores}>
                    <a href="https://play.google.com/store" rel='noreferrer' target='_blank'><img src={gp} alt="" /></a>
                    <a href="https://play.google.com/store" rel='noreferrer' target='_blank'><img src={gp} alt="" /></a>
                </div>
            </div>
        )
    }
}

export default MidleContent;