import React, { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { ButtonBase } from '@mui/material';
import { mens_kurta } from '../../../Data/mens_kurta';

const HomeSectionCarousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    //Giới hạn số lượng product sẽ hiển thị
    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5.5 },
    };

    const slidePrev = () => setActiveIndex(activeIndex - 1);
    const slideNext = () => setActiveIndex(activeIndex + 1);

    const syncActiveIndex = ({ item }) => setActiveIndex(item);
    const items = mens_kurta.slice(0, 10).map((item) => <HomeSectionCard product={item} />);

    return (
        <div className="border">
            <div className="relative p-5">
                <AliceCarousel
                    items={items}
                    disableButtonsControls
                    infinite
                    responsive={responsive}
                    disableDotsControls
                    onSlideChange={syncActiveIndex}
                    activeIndex={activeIndex}
                />
                {activeIndex !== items.length - 5 && (
                    <ButtonBase
                        variant="contained"
                        className="z-50 bg-white"
                        onClick={slideNext}
                        sx={{
                            position: 'absolute',
                            top: '8rem',
                            right: '0rem',
                            transform: 'translateX(50%) rotate(90deg)',
                            bgcolor: 'white',
                            '&:hover': {
                                bgcolor: 'grey.300',
                            },
                        }}
                        aria-label="next"
                    >
                        <KeyboardArrowLeftIcon sx={{ transform: 'rotate(90deg)', color: 'black' }} />
                    </ButtonBase>
                )}

                <ButtonBase
                    variant="contained"
                    className="z-50 bg-white"
                    onClick={slidePrev}
                    sx={{
                        position: 'absolute',
                        top: '8rem',
                        left: '0rem',
                        transform: 'translateX(-50%) rotate(-90deg)',
                        bgcolor: 'white',
                        '&:hover': {
                            bgcolor: 'grey.300',
                        },
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
