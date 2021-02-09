import React from 'react';
import SousTitreStc from './SousTitre.stc';

const SousTitre=(props)=>{
    return (
        <SousTitreStc couleur={props.couleur} taille={props.taille}>
            {props.texte}
        </SousTitreStc>
    )
}

export default SousTitre;