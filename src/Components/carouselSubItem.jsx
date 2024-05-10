import { ChevronRightIcon } from '@chakra-ui/icons'
import { Box, Button, Flex, Icon, Img, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { useDispatch } from 'react-redux';
import { getItemObj } from '../redux/action';

const CarouselSubItem = ({ label,src, href, subLabel ,ele}) => {
    const des = `${label.substring(0,150) } ...` ;

    const type = `${subLabel.substring(0,45) } ...` ;

    const dispatch = useDispatch() ;

    const handleWatch= (ele)=>{
        dispatch(getItemObj(ele)) ;
        window.scrollTo(0,0) ;
    }
    return (
        <Box
            // as="a"
            // href={href}
            role={'group'}
            display={'block'}
            rounded={'md'}
            >
            <Stack direction={'column'} align={'center'}>
                <Box>
                    <Text
                        transition={'all .3s ease'}
                        _groupHover={{ color: 'pink.400' }}
                        fontWeight={500}>
                        <Img borderRadius={5} src={src} />
                    </Text>
                    <Flex p={1} justifyContent={'space-between'} >
                        <Button w={'80%'}onClick={()=>handleWatch(ele)} >Watch Now</Button>
                        <Button>+</Button>
                    </Flex>
                    <Text textAlign={'center'} pt={1} fontWeight={700} fontSize={'12px'}>{type}</Text>
                    <Text py={1} fontSize={'sm'}>{des}</Text>
                </Box>
            </Stack>
        </Box>
    )
}

export default CarouselSubItem
