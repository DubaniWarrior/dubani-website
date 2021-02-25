import React, {useEffect, useRef} from "react";
import {Back,TimelineLite ,TweenMax, Power3,Power2,Expo,Circ} from 'gsap';
import { gsap } from 'gsap/dist/gsap';
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger';
import TrainStc from './train.stc';
import Titre from '../../shared/Titre';
import SousTitre from '../../shared/SousTitre';
import {Container,Row,Col} from 'reactstrap';

const Scroll=()=>{

    gsap.registerPlugin(ScrollTrigger);
    

  useEffect(() => {

    // gsap.to('.green',{
    //     scrollTrigger:{
    //         trigger:'.green',
    //         scrub:true,
    //         toggleActions:"restart pause reverse none",
    //         markers:true
    //     },
    //     x:600,
    //     rotation:360,
    //     duration:3
    // });

    const tl=gsap.timeline({
        scrollTrigger:{
            trigger:'.green',
            scrub:true,
            toggleActions:"restart pause reverse none",
            markers:true
        }
      })

    tl.to('.green',{
        x:800,
        rotation:360,
        duration:3
    })
    tl.to('.green',{
        backgroundColor:"red",
        duration:1
    })
    tl.to('.green',{
        x:0,
        duration:3
    });


  });

    return (
        <TrainStc className="wedo">
            <div className="red block">a</div>
            <div className="yellow block">b</div>
            
        </TrainStc>
    )
}

export default Scroll;