import React, { useState, useEffect } from "react";
import "./App.css";
import Axios from "axios";
import Header from "./Components/UI/Header";
import CharactersGrid from "./Components/Characters/CharactersGrid";
import Search from "./Components/UI/Search";

const App = () => {
	const [items, setItems] = useState([]);
	const [isloading, setIsloading] = useState(true);
	const [query,setQuery] = useState('')

	useEffect(() => {
		const fetch = async () => {
			const result = await Axios.get(
				`https://www.breakingbadapi.com/api/characters?name=${query}`
			);
			// console.log(result);
			setItems(result.data);
			setIsloading(false);
		};
		fetch();
	}, [query]);



	return (
		<div className="container">
			<Header />
			<Search getQuery={(q)=>setQuery(q)} />
			<CharactersGrid items={items} isloading={isloading} />
		</div>
	);
};

export default App;
