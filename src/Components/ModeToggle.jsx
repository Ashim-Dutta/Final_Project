import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getSwitchModeToggle } from '../redux/action';
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

const ModeToggle = () => {
    // ---------- MODE TOGGLE ----------
    const mode = useSelector(store => store.mode);
    const dispatch = useDispatch() ;
    return (
        <Flex justifyContent={'center'} cursor={'pointer'} onClick={() => dispatch(getSwitchModeToggle())} color={'white'} my={'auto'} fontSize={25} mr={5} >
            {
                mode ? <MdDarkMode /> : <MdLightMode />
            }
        </Flex>
    )
}

export default ModeToggle
