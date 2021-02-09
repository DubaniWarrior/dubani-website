import React from 'react';
import Styled from 'styled-components';
const SousTitreStc=Styled.h1`
    color:${(props)=>props.couleur || "#000"};
    font-size:${(props)=>props.taille || "15px"};
`;
export default SousTitreStc;