import React from "react";
import "./fund.css";
import tech from './tech.jpg';
import IT from './it.jpg';
import design from './design.jpg';
import couleur from './couleur.jpg'
export function Fund() {
    return (
        <React.Fragment>
            <h1>AURES BUSINESS FUNDAMENTALS</h1>
            <h4>
                LE DESIGN
            </h4>
            <img src={design} alt="design" className="design" />
            
            <p className="pr1">
                Le design est au cœur de la stratégie et de l’ADN du Groupe AURES, qui développe depuis 2005 des équipements informatiques de gestion et d’encaissement aux lignes résolument différentes et très contemporaines.<br />

                Cette capacité à innover par le design – dans la durée – a été saluée à plusieurs reprises par de multiples récompenses (IF Design Awards, Red Dot, label Observeur du Design, Good Design Award du Musée Athenaum de Chicago, etc).<br />

                Les jurés de ces Prix internationaux, experts et personnalités reconnus de l’univers du design, ont salué les formes, la légèreté, l’ergonomie et la robustesse des produits AURES en compétition.
            </p>


            <h4>
                LES COULEURS
            </h4>
            <img src={couleur} alt="couleur" className="couleur" />

            <p className="pr2"> Avec le lancement du terminal Odyssé en 2005, le Groupe AURES fut le premier constructeur de systèmes Point de Vente à proposer un choix de coloris variés et inédits,
                afin d’accompagner l’identité visuelle des enseignes et des points de service jusqu’à l’espace de caisse.</p>
            <h4 >
                LES TECHNOLOGIES
            </h4>
            <img src={tech} alt="tech" className="tech" />
            <p className="pr3">Avec l’intégration de la technologie USB-C, un seul câble suffit désormais pour la transmission simultanée de tous les signaux nécessaires au fonctionnement des matériels (alimentation, données USB et vidéo) ;
                ceci simplifie également la maintenance tout en apportant un plus esthétique majeur.<br />
                Les lecteurs codes-barres 1 et 2 D – NFC et Bluetooth de dernière génération sont intégrés (et parfois détachables) des TPV – pour une meilleure ergonomie et des performances inégalées.</p>
            <h4 className="p4">
                GREEN IT AND ECO-RESPONSIBILITY
            </h4>
            <img src={IT} alt="IT" className="IT" />
            <p className="pr4">
                AURES uses specialist service providers for the management and recycling of its electrical and electronic waste equipment and
                is committed to its customers to take back products at the end of their life cycle in order to recycle them.

            </p>

        </React.Fragment>
    );
}
