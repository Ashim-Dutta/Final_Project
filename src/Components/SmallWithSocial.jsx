import { Box, Container, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import SocialButton from './SocialButton'
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { useSelector } from 'react-redux'

const SmallWithSocial = () => {
    const mode = useSelector(store => store.mode) ;
    return (
        <Box color={mode ? 'white' : 'black'}>
            <Container as={Stack} maxW={'6xl'} py={4} direction={{ base: 'column', md: 'row' }} spacing={4} justify={{ base: 'center', md: 'space-between' }} align={{ base: 'center', md: 'center' }}>
                <Text>© 2024 STAR. All rights reserved</Text>
                <Stack direction={'row'} spacing={6}>
                    <SocialButton label={'Twitter'} href={'#'}>
                        <Box fontSize={20}color={mode ? 'white' : 'black'} >
                            <FaTwitter />
                        </Box>
                    </SocialButton>
                    <SocialButton label={'YouTube'} href={'#'}>
                        <Box fontSize={20} color={mode ? 'white' : 'black'}>
                            <FaYoutube />
                        </Box>
                    </SocialButton>
                    <SocialButton label={'Instagram'} href={'#'}>
                        <Box fontSize={20}color={mode ? 'white' : 'black'} >
                            <FaInstagram />
                        </Box>
                    </SocialButton>
                </Stack>
            </Container>
        </Box>
    )
}

export default SmallWithSocial
