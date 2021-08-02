import style from './Content.module.css'
import Header from './ContentComponents/Header/Header'
import Footer from './ContentComponents/Footer/Footer'
import MidleContent from './ContentComponents/MidleContent/MidleContent';
import React from 'react';
import video from './imagies/video.mp4'

let wrapRef = React.createRef()
let wrapSlider = () => {
    if (wrapRef.current.classList[0] === style.mainWrap) {
        wrapRef.current.classList.remove(style.mainWrap)
        wrapRef.current.classList.add(style.mainWrap2)
    } else if (wrapRef.current.classList[0] === style.mainWrap2) {
        wrapRef.current.classList.remove(style.mainWrap2)
        wrapRef.current.classList.add(style.mainWrap3)
    } else {
        wrapRef.current.classList.remove(style.mainWrap3)
        wrapRef.current.classList.add(style.mainWrap)
    }
}

var interval = 10000; // ms
var expected = Date.now() + interval;
setTimeout(step, interval);
function step() {
    var dt = Date.now() - expected; // the drift (positive for overshooting)
    if (dt > interval) {
        // something really bad happened. Maybe the browser (tab) was inactive?
        // possibly special handling to avoid futile "catch up" run
    }
    wrapSlider() // do what is to be done

    expected += interval;
    setTimeout(step, Math.max(0, interval - dt)); // take into account drift
}

const Content = (props) => {
    return (
        <div>
            <div className={style.momWrap}><div ref={wrapRef} className={style.mainWrap}>
            </div>
            </div>
            <div>
                <Header />
                <MidleContent />
            </div>
            <div className={style.momFootWrap}>
                <div className={style.footWrap}>
                    <video width='100%' autoPlay loop muted>
                        <source src={video} type='video/mp4' />
                    </video>
                </div>
                <div>
                    
                </div>
            </div>
            <div className={style.footer}>
                <Footer />
            </div>
        </div>
    );
}

export default Content;