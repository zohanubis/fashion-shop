import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { ButtonBase } from '@mui/material';

const HomeSectionCarousel = () => {
    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 4 },
    };

    const items = [1, 1, 1, 1, 1].map((item, index) => <HomeSectionCard key={index} />);

    return (
        <div className="px-4 lg:px-8 border border-black">
            <div className="relative p-5">
                <AliceCarousel
                    items={items}
                    disableButtonsControls
                    infinite
                    responsive={responsive}
                    disableDotsControls
                />
                <ButtonBase
                    variant="contained"
                    className="z-50 bg-white"
                    sx={{
                        position: 'absolute',
                        top: '8rem',
                        right: '0rem',
                        transform: 'translateX(50%) rotate(90deg)',
                        bgcolor: 'white',
                    }}
                    aria-label="next"
                >
                    <KeyboardArrowLeftIcon sx={{ transform: 'rotate(90deg)', color: 'black' }} />
                </ButtonBase>

                <ButtonBase
                    variant="contained"
                    className="z-50 bg-white"
                    sx={{
                        position: 'absolute',
                        top: '8rem',
                        left: '0rem',
                        transform: 'translateX(50%) rotate(-90deg)',
                        bgcolor: 'white',
                    }}
                    aria-label="next"
                >
                    <KeyboardArrowLeftIcon sx={{ transform: 'rotate(90deg)', color: 'black' }} />
                </ButtonBase>
            </div>
        </div>
    );
};

export default HomeSectionCarousel;
