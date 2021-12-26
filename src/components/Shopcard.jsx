import React from 'react';
import '../styles/Shopcard.scss';

const Shopcard = (product) => {
	return (
        <div className='row mt-5'>
            <div className='container'>
                            <div className="Shopcard">
                                <img id='imge' src={product.product.thumbnail} alt={product.title} />
                                <div className="product-info">
                                    <div >
                                        <p id='parrafo'>{product.product.title}</p>
                                        <p id='parrafo'>${product.product.price}</p>
                                    </div>
                                </div>
                                <div className='product'>
                                    <figure>
                                        <button><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-cart"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path fill='black' d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>Agregar al carrito</button>
                                    </figure>
                                </div>
                            </div>  
                        </div> 
        </div>
                         
            )                       
}

export default Shopcard;