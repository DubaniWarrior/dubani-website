import React from 'react';
import Styled from 'styled-components';
const TitreStc=Styled.h1`
    color:${(props)=>props.couleur || "#000"};
    font-size:${(props)=>props.taille || "18px"};
`;
export default TitreStc;