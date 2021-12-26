import { useEffect, useState } from "react";
import axios from "axios";
const useGetSlider = (API) => {
	
    const [results, setResults]=useState([])
	
	const peticionGet=async()=>(
		await axios.get(API)
		.then(response =>{
			const limit=5
			
			
				setResults(response.data.results.slice(0, limit));
				
			}).catch(error =>{
			console.log(error);
		})
	)
	useEffect(()=>{
		peticionGet();
	},[])

    return results;
};



export default useGetSlider