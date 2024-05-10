'use client'

import { Avatar, Box, Flex, keyframes } from '@chakra-ui/react'

export default function AvatarWithRipple() {
    const pulseRing = keyframes`
	    0% {
           transform: scale(0.33);
        }
        40%,
        50% {
           opacity: 0;
        }
        100% {
           opacity: 0;
        }
	`

    return (
        <Flex
            justifyContent="center"
            alignItems="center"
            w="full"
            overflow="hidden">
            <Box
                as="div"
                position="relative"
                w={'43px'}
                h={'40px'}
                my={'auto'}
                _before={{
                    content: "''",
                    position: 'relative',
                    display: 'block',
                    width: '300%',
                    height: '300%',
                    boxSizing: 'border-box',
                    marginLeft: '-100%',
                    marginTop: '-100%',
                    borderRadius: '50%',
                    bgColor: 'teal',
                    animation: `2.25s ${pulseRing} cubic-bezier(0.455, 0.03, 0.515, 0.955) -0.4s infinite`,
                }}>
                <Avatar src="https://res.cloudinary.com/dbbuqesjg/image/upload/v1705506706/Desney_hotstar/thumnails/shiva_verma_asvtuu.jpg" size="full" position="absolute" top={0} />
            </Box>
        </Flex>
    )
}