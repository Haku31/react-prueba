import React from 'react'
import Slider from '../components/Slider';
import Content from '../components/Content';
import Menu from '../components/Menu';
import Header from '../components/Header'
import Slidercarts from '../components/Slidercarts';


const Home = () => {
    return (
        <div>
        <Header />
        <Menu />
        <Slider /> 
        <Content /> 
        <Slidercarts />
        </div>
        
    );
}

export default Home;