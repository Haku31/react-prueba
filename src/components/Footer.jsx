import React from 'react'
import '../styles/Footer.scss'

const Footer = () => {
    return (

        <footer className="bg-black text-left text-lg-start text-white">

            <div id='rowf' className="row mt-4">
           
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0 offset-lg-2 mt-4 p-4">
                <h5 className="text-uppercase">Politicas</h5>
      
                <ul className="list-unstyled mb-0 text-left">
                  <li id='li'>
                    <a  href="#!" className="text-white ">Politicas de privacidad</a>
                  </li>
                  <li id='li'>
                    <a href="#!" className="text-white">Politicas de cambio</a>
                  </li>
                  <li id='li'>
                    <a href="#!" className="text-white">Politicas de envio</a>
                  </li>
                  <li id='li'>
                    <a href="#!" className="text-white">Terminos y condiciones</a>
                  </li>
                  <li id='li'>
                    <a href="#!" className="text-white">Responsabilidad social</a>
                  </li>
                </ul>
              </div>
              
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0 mt-4  p-4">
                <h5 className="text-uppercase">Sobre nosotros</h5>
                    <ul className="list-unstyled">
                    <li id='li'>
                    <a href="#!" className="text-white"><i className="fas fa-shipping-fast fa-fw fa-sm me-2"></i>Encuentra tu tienda</a>
                    </li>
                    <li id='li'>
                    <a href="#!" className="text-white"><i className="fas fa-backspace fa-fw fa-sm me-2"></i>Trabaja con nosotros</a>
                    </li>
                    <li id='li'>
                    <a href="#!" className="text-white"><i className="far fa-file-alt fa-fw fa-sm me-2"></i>Contactanos</a>
                    </li>
                </ul>
                </div>
                
                <div className="col-lg-3 col-md-6 mb-4 mb-md-0 mt-4 p-4 text-left">
                <h5 className="text-uppercase">Siguenos en</h5>

                
                <div class="mt-4 text-left">
                <svg xmlns="http://www.w3.org/2000/svg" width="62.839" height="50.839" viewBox="0 0 62.839 62.839"><defs></defs><g transform="translate(-3530.955 -3105.602)"><path fill='white' class="a" d="M3530.955,3137.021a31.419,31.419,0,1,1,31.419,31.42A31.419,31.419,0,0,1,3530.955,3137.021Z"/><path d="M3581.766,3124.992a15.893,15.893,0,0,1-4.57,1.253,7.982,7.982,0,0,0,3.5-4.4,15.936,15.936,0,0,1-5.053,1.931,7.963,7.963,0,0,0-13.559,7.258,22.589,22.589,0,0,1-16.4-8.315,7.965,7.965,0,0,0,2.462,10.624,7.909,7.909,0,0,1-3.6-1c0,.034,0,.068,0,.1a7.963,7.963,0,0,0,6.384,7.8,7.993,7.993,0,0,1-3.594.137,7.964,7.964,0,0,0,7.433,5.525,16.074,16.074,0,0,1-11.78,3.3,22.513,22.513,0,0,0,12.2,3.575c14.636,0,22.64-12.124,22.64-22.641,0-.344-.008-.688-.023-1.029a16.149,16.149,0,0,0,3.97-4.119Zm0,0"/></g></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="62.838" height="52.838" viewBox="0 0 62.838 62.838"><defs></defs><g transform="translate(-3689.445 -3105.602)"><circle fill='white' class="a" cx="31.419" cy="31.419" r="31.419" transform="translate(3689.445 3105.602)"/><path class="b" d="M3739.645,3129.492a5.614,5.614,0,0,0-5.614-5.616H3707.7a5.613,5.613,0,0,0-5.614,5.616v15.059a5.614,5.614,0,0,0,5.614,5.616h26.333a5.615,5.615,0,0,0,5.614-5.616Zm-22.537,13.883v-14.144l10.728,7.071Zm0,0"/></g></svg>
        
                <svg xmlns="http://www.w3.org/2000/svg" width="66.839" height="50.839" viewBox="0 0 62.839 62.839"><defs></defs><g transform="translate(-3613.129 -3105.935)"><circle fill='white' class="a" cx="31.419" cy="31.419" r="31.419" transform="translate(3613.129 3105.935)"/><path fill='black' d="M3644.581,3118.127c2.58.046,5.16.071,7.739.144a12.575,12.575,0,0,1,6.355,1.649,9.558,9.558,0,0,1,4.614,6.767,34.26,34.26,0,0,1,.432,5.311c.058,3.814.036,7.63-.006,11.445a18.592,18.592,0,0,1-.752,5.938,9.651,9.651,0,0,1-7.751,6.733,31.043,31.043,0,0,1-5.31.432c-3.8.058-7.6.035-11.4-.006a18.714,18.714,0,0,1-5.939-.746,9.652,9.652,0,0,1-6.749-7.737,30.568,30.568,0,0,1-.435-5.31c-.059-3.814-.036-7.63.005-11.445a18.592,18.592,0,0,1,.753-5.938,9.652,9.652,0,0,1,7.751-6.731,35.974,35.974,0,0,1,5.31-.436c1.793-.07,3.59-.016,5.386-.016Zm15.775,18.939-.078,0c0-1.515.031-3.031-.009-4.545-.038-1.456-.094-2.916-.241-4.365a6.455,6.455,0,0,0-5.459-6.093,30.535,30.535,0,0,0-5.144-.4c-3.254-.059-6.51-.052-9.763,0a35.038,35.038,0,0,0-4.859.336,6.268,6.268,0,0,0-5.443,4.776,11.283,11.283,0,0,0-.412,2.733c-.083,3.477-.134,6.955-.122,10.433.008,2.213.058,4.433.251,6.636a6.444,6.444,0,0,0,5.551,6.145,31.713,31.713,0,0,0,5.107.37c3.211.054,6.425.04,9.637.005,1.47-.016,2.943-.1,4.406-.243a7.024,7.024,0,0,0,3.75-1.456,7.113,7.113,0,0,0,2.579-5.54C3660.249,3142.927,3660.278,3140,3660.356,3137.066Z"/><path fill='black' d="M3654.41,3137.383a9.862,9.862,0,1,1-9.768-9.871A9.824,9.824,0,0,1,3654.41,3137.383Zm-9.866,6.389a6.4,6.4,0,1,0-6.394-6.4A6.43,6.43,0,0,0,3644.544,3143.772Z"/><path fill='black' d="M3657.1,3127.113a2.311,2.311,0,0,1-2.3,2.331,2.344,2.344,0,0,1-2.321-2.334,2.31,2.31,0,0,1,2.3-2.292A2.264,2.264,0,0,1,3657.1,3127.113Z"/></g></svg>
                 
                <svg xmlns="http://www.w3.org/2000/svg" width="68.156" height="78.157" viewBox="0 0 88.156 88.157"><defs></defs><g transform="translate(-3437.385 -3093.231)"><circle fill='white' class="a" cx="31.419" cy="31.419" r="31.419" transform="matrix(0.791, -0.612, 0.612, 0.791, 3437.385, 3131.7)"/><path fill='black' d="M3489.426,3137.321h-5.208v18.571H3476.5v-18.571h-3.672v-6.56h3.672v-4.245c0-3.035,1.441-7.789,7.788-7.789l5.718.024v6.368h-4.149a1.572,1.572,0,0,0-1.638,1.788v3.861h5.882Zm0,0"/></g></svg>
                
                </div>
               
                </div>
                
    
            </div>



<div className="text-center p-3" >
?? Copyright Colombia. Todos los derechos reservados

</div>

</footer>


)
}

export default Footer;