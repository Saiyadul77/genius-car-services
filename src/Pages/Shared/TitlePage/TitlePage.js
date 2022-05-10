import React from 'react';
import { Helmet } from 'react-helmet-async';

const TitlePage = ({ title }) => {
    return (
        <div>
            <Helmet>
                <title>{title}-Genius Car Services</title>
            </Helmet>
        </div>
    );
};

export default TitlePage;