import React from 'react';
import SousTitreStc from './Titre.stc';

const Titre=(props)=>{
    return (
        <TitreStc couleur={props.couleur} taille={props.taille}>
            {props.texte}
        </TitreStc>
    )
}

export default Titre;