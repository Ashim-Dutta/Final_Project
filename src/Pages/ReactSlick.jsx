import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Component } from "react";
import Slider from "react-slick";
import { Box } from '@chakra-ui/react';
import arr from '../NAV_ITEMS.json'
import CaroueslItems from './CarouselItems'
import { useSelector } from 'react-redux';

const ReactSlick = ({initSlide}) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 2,
        initialSlide: initSlide,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };
    const MOVIES_ITEMS = arr.MOVIES_ITEMS ;
    const mode = useSelector(store => store.mode) ;
    return (
        <Box bg={mode ? '' : '#f56565'} my={5} >
            <Box w={'95%'} m={'auto'} bg={mode ? 'black' : 'white'} >
                <Box fontSize={25}fontWeight={700}color={mode?'white':'black'} >Latest Releases</Box>
                <Slider {...settings} >
                    {
                        MOVIES_ITEMS.map((ele, i) => {
                            return <CaroueslItems ele={ele} key={i} mode={mode} />
                        })
                    }
                </Slider>
            </Box>
        </Box>
    )
}

export default ReactSlick
