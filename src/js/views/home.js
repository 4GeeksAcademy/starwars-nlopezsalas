import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.css";

import { Context } from "../store/appContext.js";
import PlanetCard from "../component/planetCard.js";


export const Home = () => {

	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getPlanets();
		actions.getCharacters();
	}, []);

	console.log(store.planets);

	return (

		<div className="container">
			<div className="text-center mt-5">
				<h1>Planets</h1>

				<div className="row">
					<div className="col">
						<div className="scroll-horizontal">
							{/* <div className="d-flex flex-nowrap overflow-auto"> */}
							{store.planets.map((planet) => {
								return (
									<PlanetCard uid={planet.uid} name={planet.name} />
								)
							})}
						</div>
					</div>

				</div>
			</div>
		</div>
	);
}


