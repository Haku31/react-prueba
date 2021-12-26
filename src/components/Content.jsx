import React from 'react'
import '../styles/Content.scss'
import Niña from '../assets/images/niña.png'
import Niños from '../assets/images/niños.png'
const Content = () => {
    return (
        <div className="row mt-lg-5 ">
            <div id='c-img' className="col-lg-5 offset-1 col-10 mt-3">
                <img id='lol' src={Niña} alt="hello"></img>
                <div className='txt'>
                    <h1 className='d-none d-md-block d-lg-block' >MODA INFANTIL</h1>
                </div>
            </div>
            <div id='c-img' className="col-lg-5 col-10 mt-3  ">
                <img  id='lol2' src={Niños} alt="hello"></img>
                <div className='txt'>
                    <h1 className='d-none d-md-block d-lg-block' >PROTECCION</h1>
                </div>
            </div>
        </div>
        
    );
}

export default Content;