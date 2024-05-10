import { Box, Popover, PopoverContent, PopoverTrigger, Stack, useColorModeValue } from "@chakra-ui/react"
import DesktopSubNav from "./DesktopSubNav"
import navData from '../NAV_ITEMS.json'



const DesktopNav = () => {
    const NAV_ITEMS = navData.NAV_ITEMS ;

    const linkColor = useColorModeValue('gray.200', 'gray.900')
    const linkHoverColor = useColorModeValue('gray.800', 'white')
    const popoverContentBgColor = useColorModeValue('white', 'gray.800')
  
    return (
      <Stack direction={'row'} spacing={4}>
        {NAV_ITEMS.map((ele) => (
          <Box key={ele.label}>
            <Popover trigger={'hover'} placement={'bottom-start'}>
              <PopoverTrigger>
                <Box
                  as="a"
                  p={2}
                  href={ele.href ?? '#'}
                  fontSize={'sm'}
                  fontWeight={500}
                  color={linkColor}
                  _hover={{
                    textDecoration: 'none',
                  }}>
                  {ele.label}
                </Box>
              </PopoverTrigger>
  
              {ele.children && (
                <PopoverContent
                  border={0}
                  boxShadow={'xl'}
                  bg={popoverContentBgColor}
                  p={4}
                  rounded={'xl'}
                  minW={'sm'}>
                  <Stack>
                    {ele.children.map((ele) => (
                      <DesktopSubNav key={ele.label} {...ele} />
                    ))}
                  </Stack>
                </PopoverContent>
              )}
            </Popover>
          </Box>
        ))}
      </Stack>
    )
  }

  export default DesktopNav ;