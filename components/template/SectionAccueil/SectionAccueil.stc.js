import React from 'react';
import {Container} from "react-bootstrap";
import Styled from 'styled-components';

const SectionAccueilStc=Styled(Container)`
   padding-bottom:40px;
   height:100vh !important;
   padding-top:33%;
   overflow:hidden;

   @media (min-width: 525px) {
      padding-top:10%;
    }

   .row
   {
      margin:0px;
   }
`;
export default SectionAccueilStc;
