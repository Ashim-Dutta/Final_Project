import { Box, Button, Collapse, Flex, IconButton, Img, Stack, Text, useBreakpointValue, useColorModeValue, useDisclosure } from '@chakra-ui/react'
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'
import DesktopNav from './DesktopNav'
import MobileNav from './MobileNav'
import AvatarWithRipple from './AvatarWithRipple'
import ModeToggle from './ModeToggle'

export default function WithSubnavigation() {
    const { isOpen, onToggle } = useDisclosure()
    return (
        <Box bg={'black'} >
            <Flex
                minH={'60px'}
                py={2}
                mx={4}
                borderColor={useColorModeValue('gray.200', 'gray.900')}
                align={'center'}>
                <Flex
                    flex={[1, 1, 'auto']}
                    ml={-2}
                    display={['flex', 'flex', 'none']}>
                    <IconButton
                        py={2}
                        border={'1px solid white'}
                        color={'white'}
                        onClick={onToggle}
                        icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
                        variant={'ghost'}
                        aria-label={'Toggle Navigation'}
                    />
                </Flex>
                <Flex flex={1} justify={'start'} alignItems={'center'} >
                    <Text>
                        <Img src='https://img.hotstar.com/image/upload/v1656431456/web-images/logo-d-plus.svg' />
                    </Text>

                    <Flex display={['none', 'none', 'flex']} ml={10}>
                        <DesktopNav />
                    </Flex>
                </Flex>

                <Stack direction={'row'}>
                    <Box display={['none', 'none', 'block']} my={'auto'} >
                        <ModeToggle />
                    </Box>
                    <AvatarWithRipple />
                </Stack>
            </Flex>

            <Collapse in={isOpen} animateOpacity>
                <MobileNav />
            </Collapse>
        </Box>
    )
}