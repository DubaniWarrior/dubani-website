import React from 'react';
import SousTitreStc from './SousTitre.stc';

const SousTitre=(props)=>{
    return (
        <SousTitreStc 
                couleur={props.couleur} 
                margeHaut={props.margeHaut} 
                margeBas={props.margeBas}
                taille={props.taille} 
                poidFont={props.poidFont}>
            {props.texte}
        </SousTitreStc>
    )
}

export default SousTitre;