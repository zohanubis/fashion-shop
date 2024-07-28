import React from 'react';
import MainCrosel from '../../components/HomeCarousel/MainCrosel';
import HomeSectionCarousel from '../../components/HomeSectionCarousel/HomeSectionCarousel';
const HomePage = () => {
    return (
        <div>
            <MainCrosel />
            <div className="space-y-10 py-20 flex flex-col justify-center">
                <HomeSectionCarousel />
                <HomeSectionCarousel />
                <HomeSectionCarousel />
                <HomeSectionCarousel />
                <HomeSectionCarousel />
            </div>
        </div>
    );
};

export default HomePage;
