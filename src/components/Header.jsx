import React, {useState}from 'react'
import '../styles/Header.css'
import ClothesStore from '../assets/images/ClothesStore.png'
import { Link } from 'react-router-dom';



const Menu = () => {  
    
        const [busqueda, setBusqueda]= useState("");
        const handleChange= pol =>{
        setBusqueda(pol.target.value)
        console.log(pol.target.value);
        return busqueda;
        }
    return (
        <div  className="row">
                        <div className="col-lg-4 col-md-12 col-12 mt-2 mb-2">  
                        <Link to ="/"><img id="img" src={ClothesStore} alt="hello"></img></Link>
                        </div>
                        <div className="col-lg-4 col-md-10 col-12 mt-2">
                            <form className="d-flex">
                            <input id="input" className="form-control me-2" type="search" placeholder="Buscar aqui tu producto" value={busqueda} aria-label="Buscar aqui tu producto" onChange={handleChange} ></input>
                            <Link to ="/search"><button id="btn"  className="btn btn-outline-success" type="submit"><svg xmlns="http://www.w3.org/2000/svg" width="20.995" height="20.889" viewBox="0 0 33.995 33.889"><defs></defs><path className="a" d="M37,35l-9.145-9.23a13.032,13.032,0,1,0-1.978,2l9.085,9.171A1.407,1.407,0,0,0,36.944,37,1.417,1.417,0,0,0,37,35ZM17.609,27.886a10.291,10.291,0,1,1,7.278-3.014A10.227,10.227,0,0,1,17.609,27.886Z" transform="translate(-4 -3.993)"/></svg></button></Link>
                            </form>
                        </div>
                        <div className="col-lg-4  col-1 mt-4 ">
                            <a id="a" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="30.575" height="38.298" viewBox="0 0 43.575 38.298"><g transform="translate(0 0)"><g transform="translate(0 0)"><path d="M14.039,56.533H37.192a1.277,1.277,0,0,0,1.227-.926l5.106-17.873A1.277,1.277,0,0,0,42.3,36.106H11.1L10.183,32a1.277,1.277,0,0,0-1.246-1H1.277a1.277,1.277,0,1,0,0,2.553H7.912l4.609,20.742a3.829,3.829,0,0,0,1.521,7.344H37.192a1.277,1.277,0,1,0,0-2.553H14.043a1.276,1.276,0,0,1,0-2.553ZM40.606,38.66,36.229,53.979H15.067l-3.4-15.319Z" transform="translate(0 -31)"/><path d="M150,394.83a3.83,3.83,0,1,0,3.83-3.83A3.834,3.834,0,0,0,150,394.83Zm3.83-1.277a1.277,1.277,0,1,1-1.277,1.277A1.278,1.278,0,0,1,153.83,393.553Z" transform="translate(-137.234 -360.361)"/><path d="M362,394.83a3.83,3.83,0,1,0,3.83-3.83A3.834,3.834,0,0,0,362,394.83Zm3.83-1.277a1.277,1.277,0,1,1-1.277,1.277A1.278,1.278,0,0,1,365.83,393.553Z" transform="translate(-331.191 -360.361)"/></g></g></svg></a>
                            <a id="a" className='d-sm-none d-none d-lg-inline-block' href="#"><svg xmlns="http://www.w3.org/2000/svg" width="30.11" height="38.128" viewBox="0 0 38.11 38.128"><g transform="translate(0 0)"><g transform="translate(0 0)"><path d="M600.575,67.984a10.267,10.267,0,1,1,12.095-.011c.118.052.218.1.321.141a18.912,18.912,0,0,1,12.451,15.052,19.287,19.287,0,0,1,.221,2.736,1.456,1.456,0,0,1-1.6,1.633q-6.185.005-12.37,0l-22.312,0c-1.32,0-1.84-.52-1.826-1.825A19.088,19.088,0,0,1,600.115,68.17C600.257,68.119,600.4,68.057,600.575,67.984Zm-9.981,16.595h32.033a16.082,16.082,0,0,0-32.033,0Zm16.067-32.237a7.331,7.331,0,1,0,7.282,7.354A7.333,7.333,0,0,0,606.661,52.342Z" transform="translate(-587.556 -49.411)"/></g></g></svg></a>
                            <button  className="btn d-sm-none d-none d-lg-inline-block" type="submit">Iniciar sesion</button>
                        </div> 
                    
        </div>
        
    );
}

export default Menu;