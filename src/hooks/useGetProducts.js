import { useEffect, useState } from "react";
import axios from "axios";
const useGetProducts = (API) => {
	
    const [results, setResults]=useState([])
	
	const peticionGet=async()=>(
		await axios.get(API)
		.then(response =>{
			
			
			
				setResults(response.data.results);
				
			}).catch(error =>{
			console.log(error);
		})
	)
	useEffect(()=>{
		peticionGet();
	},[])

    return results;
};



export default useGetProducts