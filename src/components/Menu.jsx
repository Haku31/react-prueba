import React from 'react'
import '../styles/Menu.scss'

const Menu = () => {
    return (
        <div className='row'>
            <div className='col-lg-12 col-12'>
                <nav id="nav" className="navbar navbar-expand-lg navbar-ligth ">
                    <div className="container-fluid ">
                        <button id='togle' className="navbar-toggler bg-black" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" >
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className='col-9 offset-2'>
                            <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                            <li className="nav-item">
                            <a id="a1" className="nav-link active" aria-current="page" href="#">Hombre</a>
                            </li>
                            <li className="nav-item">
                            <a id="a1" className="nav-link" href="#">Mujer</a>
                            </li>
                            <li className="nav-item">
                            <a id="a1" className="nav-link" href="#">Junior</a>
                            </li>
                            <li className="nav-item">
                            <a id="a1" className="nav-link" href="#" >Niños</a>
                            </li>
                            <li className="nav-item">
                            <a id="a1" className="nav-link" href="#" >Accesorios</a>
                            </li>
                            <li className="nav-item">
                            <a id="a2" className="nav-link" href="#" >Ofertas</a>
                            </li>
                        </ul>
                        </div>
                        </div>
                        
                        
                    </div>
                </nav>
            </div>
            
        </div>
        
    );
}

export default Menu;