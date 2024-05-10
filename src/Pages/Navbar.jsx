import React from 'react'
import WithSubnavigation from '../Components/WithSubnavigation'
import { Box } from '@chakra-ui/react'

const Navbar = () => {
  return (
    <Box position={'absolute'} w={'100%'}top={0} >
      <WithSubnavigation/>
    </Box>
  )
}

export default Navbar
