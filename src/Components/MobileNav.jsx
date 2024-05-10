import { Stack, useColorModeValue } from "@chakra-ui/react";
import MobileNavItem from "./MobileNavItem";
import navData from '../NAV_ITEMS.json'
import ModeToggle from "./ModeToggle";

const MobileNav = () => {
    const NAV_ITEMS = navData.NAV_ITEMS
    return (
        <>
            <Stack p={4} >
                {NAV_ITEMS.map((ele) => (
                    <MobileNavItem key={ele.label} {...ele} />
                ))}
            <ModeToggle />
            </Stack>
        </>
    )
}

export default MobileNav;