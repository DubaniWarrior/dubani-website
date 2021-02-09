import React from 'react';
import TitreStc from './Titre.stc';

const Titre=(props)=>{
    return (
        <TitreStc couleur={props.couleur} taille={props.taille} poidFont={props.poidFont}>
            {props.texte}
        </TitreStc>
    )
}

export default Titre; 