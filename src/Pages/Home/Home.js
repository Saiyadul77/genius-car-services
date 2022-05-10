import React from 'react';
import TitlePage from '../Shared/TitlePage/TitlePage';

import Banner from './Banner/Banner';
import Experts from './Experts/Experts';
import Services from './Services/Services';

const Home = () => {
    return (

        <div>
            <TitlePage title="Home"></TitlePage>
            <Banner></Banner>
            <Services></Services>
            <Experts></Experts>
        </div>
    );
};

export default Home;