import Head from 'next/head'
import React, {useEffect, useRef} from "react";
import {Back,TimelineLite ,TweenMax, Power3,Power2,Expo,Circ} from 'gsap';
import { gsap } from 'gsap/dist/gsap';
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger';
import SectionAccueil from '../components/template/SectionAccueil';
import SectionProjects from '../components/template/SectionProjects';
import SectionProduction from '../components/template/SectionProduction';
import SectionClient from '../components/template/SectionClients';
import SectionTestimonial from '../components/template/SectionTestimonial';
import SectionWhatWeDo from '../components/template/SectionwhatWeDo';

export default function Home() {
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
    <div className="App">
      <Head>
        <title>dubani agency</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <SectionAccueil/>
        <SectionProjects/>
        <SectionWhatWeDo/>
        <SectionProduction/>
        <SectionClient/>
        <SectionTestimonial/>
      </main>

    </div>
  )
}
