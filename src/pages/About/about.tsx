import React from "react";
import map from './map.jpg';
import design from './design.jpg';
import team from './team.jpg';
import technologie from './technologie.jpg';

import "./about.css";

export function About() {
    return (
        <React.Fragment>
            <h1>Who We Are</h1>
            < p className="aures">
                Founded in 1989 and listed on Euronext since 1999, AURES is an IT Manufacturer of Hardware (POS, Mobile POS & KIOSK)
                and Digital Application Solutions for all sectors of the POS and Retail industry.<br />

                The AURES Group has a global presence, with Headquarters in France, subsidiaries in the UK, Germany,
                Australia and the USA (AURES Technologies Inc & Retail Technology Group – RTG), in Tunisia (LST) as well as a network of partners,
                distributors and resellers in over 60 other countries.

            </p>

            <img src={map} alt="map" className="map" />
            <h1> GET TO KNOW US</h1>
            <div className="box">
                <div className="card">
                    <i className="fas fa-bars"></i>
                    <div className="pra">

                        <div className="container">
                            <img src={design} alt="fact" className="fact" />
                            <div className="middle">
                                <a className="btn" href="./fact">FACTS   & FIGURES</a>
                                <button className="btn" type="submit"></button>

                            </div>
                        </div>

                        {/*  <img src={design} alt="design" className="design" />

                        <h2>
                            FACTS & FIGURES
                        </h2>*/}
                    </div>
                </div>
                <div className="card">
                    <i className="fas fa-bars"></i>
                    <div className="pra">
                        <div className="container">
                            <img src={team} alt="team" className="team" />
                            <div className="middle">
                                <a className="btn" href="./team">MANAGEMENT TEAM</a>
                                <button className="btn" type="submit"></button>
                            </div>
                        </div>
                        {/*
                        <h2>
                            MANAGEMENT TEAM
                        </h2>*/}
                    </div>
                </div>
                <div className="card">
                    <i className="fas fa-bars"></i>
                    <div className="pra">
                        <div className="container">
                            <img src={technologie} alt="technologie" className="technologie" />
                            <div className="middle">
                                <a className="btn" href="./fund">AURES FUNDAMENTALS</a>
                                <button className="btn" type="submit"></button>
                            </div>
                        </div>
                        {/*
                        <h2>
                            AURES FUNDAMENTALS
                        </h2>*/}
                    </div>
                </div>
            </div>

            {/*   <h1>
                NOS FONDAMENTAUX
            </h1>
            <h4>
                LE DESIGN
            </h4>
            <img src={design} alt="design" className="design" />
            <p className="p1">
                Le design est au cœur de la stratégie et de l’ADN du Groupe AURES, qui développe depuis 2005 des équipements informatiques de gestion et d’encaissement aux lignes résolument différentes et très contemporaines.<br />

                Cette capacité à innover par le design – dans la durée – a été saluée à plusieurs reprises par de multiples récompenses (IF Design Awards, Red Dot, label Observeur du Design, Good Design Award du Musée Athenaum de Chicago, etc).<br />

                Les jurés de ces Prix internationaux, experts et personnalités reconnus de l’univers du design, ont salué les formes, la légèreté, l’ergonomie et la robustesse des produits AURES en compétition.
            </p>


            <h4>
                LES COULEURS
            </h4>
            <img src={couleur} alt="couleur" className="couleur" />

            <p className="p2"> Avec le lancement du terminal Odyssé en 2005, le Groupe AURES fut le premier constructeur de systèmes Point de Vente à proposer un choix de coloris variés et inédits,
                afin d’accompagner l’identité visuelle des enseignes et des points de service jusqu’à l’espace de caisse.</p>
            <h4 >
                LES TECHNOLOGIES
            </h4>
            <img src={technologie} alt="technologie" className="technologie" />
            <p className="p3">Avec l’intégration de la technologie USB-C, un seul câble suffit désormais pour la transmission simultanée de tous les signaux nécessaires au fonctionnement des matériels (alimentation, données USB et vidéo) ;
                ceci simplifie également la maintenance tout en apportant un plus esthétique majeur.<br />
                Les lecteurs codes-barres 1 et 2 D – NFC et Bluetooth de dernière génération sont intégrés (et parfois détachables) des TPV – pour une meilleure ergonomie et des performances inégalées.</p>
            <h4 className="p4">
                GREEN IT AND ECO-RESPONSIBILITY
            </h4>
            <img src={IT} alt="IT" className="IT" />
            <p className="p4">
                AURES uses specialist service providers for the management and recycling of its electrical and electronic waste equipment and
                is committed to its customers to take back products at the end of their life cycle in order to recycle them.

            </p>

            <h1>
                THE EMPLOYEES

            </h1>
*/}
        </React.Fragment>
    );
}