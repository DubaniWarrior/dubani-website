import React from "react";
import SectionAccueilMoleculeLeftStc from './MoleculeLeftSectionAccueil.stc';
import Bouton from '../../shared/Bouton';
import Courbe from '../../shared/CourbeOndulaire';
import Titre from '../../shared/Titre';
import SousTitre from '../../shared/SousTitre';



const SectionAccueilMoleculeLeft=(props)=>{

    return(
        <SectionAccueilMoleculeLeftStc ref={props.reference}>
            <Courbe couleur="#0a2db0" marge_bas="40px" className="CourbeAccueil" />
            <SousTitre 
                texte="WE DESIGN AND DEVELOP" 
                marge_haut="30px" 
                marge_bas="20px" 
                poid_font="400"/>
            <Titre 
                texte="Persuasive Websites And " 
                poid_font="700"/>
            <Titre 
                texte="Mobile App " 
                poid_font="700"/>
            <Bouton 
                texte="HIRE US" 
                bg="#ccc" 
                bg_after="#0a2db0"
                couleur="#fff"/>

        </SectionAccueilMoleculeLeftStc>
    )
}

export default SectionAccueilMoleculeLeft;