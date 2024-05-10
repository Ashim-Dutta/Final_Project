import React from 'react'
import "react-multi-carousel/lib/styles.css";
import { Box, Img, Popover, PopoverContent, PopoverTrigger, Stack } from '@chakra-ui/react'
import CarouselSubItem from '../Components/carouselSubItem';

const CarouselItems = ({ele,mode}) => {
    return (
        <Box p={1} cursor={'pointer'} >
            <Popover trigger={'hover'} placement={'bottom-start'}>
                <PopoverTrigger>
                    <Box
                        // as="a"
                        // href={ele.href ?? '#'}
                        fontSize={'sm'}
                        fontWeight={500}
                        _hover={{
                            textDecoration: 'none',
                        }}>
                        <Img borderRadius={5} h={'40vh'} src={ele.src} />
                    </Box>
                </PopoverTrigger>

                {ele.children && (
                    <PopoverContent
                        border={0}
                        boxShadow={'xl'}
                        rounded={'xl'}
                        position={'relative'}
                        top={'-41vh'}
                        left={'-3vw'}
                        bg={mode?'black':'white'}
                        color={mode?'white':'black'}
                        maxW={'100%'}
                        maxH={'38vh'}
                        minH={'40vh'}
                    >
                        <Stack boxShadow={'black 10px 5px 100px'} >
                            {ele.children.map((element,i) => (
                                <CarouselSubItem key={i} {...element} ele={ele} />
                            ))}
                        </Stack>
                    </PopoverContent>
                )}
            </Popover>
        </Box>
    )
}

export default CarouselItems
