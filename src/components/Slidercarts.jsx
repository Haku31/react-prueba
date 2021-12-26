import React from 'react'
import Shopcard from './Shopcard';
import useGetSlider from '../hooks/useGetSlider';
import '../styles/Slidercarts.scss'
const API = 'https://api.mercadolibre.com/sites/MCO/search?category=MCO1430'
    const slidercarts = () => {
        const results = useGetSlider(API);

        return (
            
            <div className='row mb-4'>
                <div><h1 id='pr'>PRODUCTOS MAS BUSCADOS</h1></div>
                <section className="main-container">
                            <div className="ProductList">
                                    
                            {results.map((product)=>(
					
                            <Shopcard product={product} key={product.id}/>
                            ))}          
                                    
                                
                                
                            </div>
                        </section>
            </div>
        );
    }
    
    export default slidercarts;