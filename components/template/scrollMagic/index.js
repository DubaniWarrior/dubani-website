import React, {useEffect, useRef} from "react";
import {Back,TimelineLite ,TweenMax, Power3,Power2,Expo,Circ} from 'gsap';
import { gsap } from 'gsap/dist/gsap';
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger';
import ScrollStc from './scrollMagic.stc';
import Titre from '../../shared/Titre';
import SousTitre from '../../shared/SousTitre';
import {Container,Row,Col} from 'reactstrap';

const Scroll=()=>{

    gsap.registerPlugin(ScrollTrigger);
    let tl = new TimelineLite({ delay: .8});
  useEffect(() => {

    gsap.utils.toArray('.section').forEach(section => {
        ScrollTrigger.create({
          trigger: section,
          start: 'top top',
          pin: true,
          pinSpacing: false
        });
      });

  });

    return (
        <ScrollStc>
            <section className="section one">
                <div className="container">
                    <div className="column-left">
                    <h1 className="text">Organic Fruits</h1>
                    <p className="text">Choose from a <br />wide variety of options.</p>
                    <button>Get Started</button>
                    </div>
                    <div className="column-right">
                    <img src="https://raw.githubusercontent.com/briancodex/html-css-gsap-scroll-effect/main/images/img-1.jpg" alt="food" className="image" />
                    </div>
                </div>
                </section>
                <section className="section two">
                <div className="container">
                    <div className="column-left">
                    <p className="text">
                        Delicious and nutritious foods that you can easily access
                    </p>
                    </div>
                    <div className="column-right">
                    <img src="https://raw.githubusercontent.com/briancodex/html-css-gsap-scroll-effect/main/images/img-2.jpg" alt="food" className="image" />
                    </div>
                </div>
                </section>
                <section className="section three">
                <div className="container">
                    <div className="column-left">
                    <p className="text">Unique flavors and options to choose from</p>
                    </div>
                    <div className="column-right">
                    <img src="https://raw.githubusercontent.com/briancodex/html-css-gsap-scroll-effect/main/images/img-3.jpg" alt="food" className="image" />
                    </div>
                </div>
                </section>
                <section className="section four">
                <div className="container">
                    <div className="column-left">
                    <p className="text">We even serve ice cream</p>
                    </div>
                    <div className="column-right">
                    <img src="https://raw.githubusercontent.com/briancodex/html-css-gsap-scroll-effect/main/images/img-4.jpg" alt="food" className="image" />
                    </div>
                </div>
            </section>
        </ScrollStc>
    )
}

export default Scroll;