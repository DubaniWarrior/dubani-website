import React from 'react';
import Styled from 'styled-components';
const SousTitreStc=Styled.h1`
    color:${(props)=>props.couleur || "#000"};
    font-size:${(props)=>props.taille || "20px"};
    font-weight:${(props)=>props.poidFont || "600"};
    margin-top:${(props)=>props.margeHaut || "auto"};
    margin-bottom:${(props)=>props.margeBas || "auto"};
`;
export default SousTitreStc;