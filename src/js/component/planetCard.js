
import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function PlanetCard(props) {

	const [planetInfo, setPlanetInfo] = useState({});

	console.log("UID: " + props.uid);

	function getPlanetInfo() {
		const myHeaders = new Headers();
		myHeaders.append("Content-Type", "application/json");

		const requestOptions = {
			method: "GET",
			headers: myHeaders,
		};

		fetch(`https://www.swapi.tech/api/planets/${props.uid}`, requestOptions)
			.then((response) => response.json())
			.then((result) => {
				console.log(result);
				setPlanetInfo({...result.result.properties});
			})
			.catch((error) => console.error(error));
		return planetInfo;
	}

	useEffect(() => {
		getPlanetInfo();
		console.log(planetInfo);

	}, []);

	return (
		<Card className="card" style={{ width: '18rem' }} key={props.key}>
			<Card.Img variant="top" src="holder.js/100px180" />
			<Card.Body>
				<Card.Title>{props.name}</Card.Title>
				<Card.Text className="no-wrap">
					Terrain: {planetInfo.terrain}<br/>
					Population: {planetInfo.population}
				</Card.Text>
				<Button variant="primary">Go somewhere</Button>
			</Card.Body>
		</Card>
	);
}

export default PlanetCard;