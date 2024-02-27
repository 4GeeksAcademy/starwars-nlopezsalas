const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			planets: [],
			characters: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			getPlanets: () => {
				const myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");

				const requestOptions = {
					method: "GET",
					headers: myHeaders,
					redirect: "follow"
				};

				fetch("https://www.swapi.tech/api/planets/", requestOptions)
					.then((response) => response.json())
					.then((result) => {
						console.log(result);
						setStore({ planets: result.results})
					})
					.catch((error) => console.error(error));
			},
			getCharacters: ()=>{
				const requestOptions = {
					method: "GET",
					redirect: "follow"
				  };
				  
				  fetch("https://www.swapi.tech/api/people/", requestOptions)
					.then((response) => response.json())
					.then((result) => {
						console.log(result);
						setStore({ characters: result.results })
					})
					.catch((error) => console.error(error));
			}
		}
	};
};

export default getState;
