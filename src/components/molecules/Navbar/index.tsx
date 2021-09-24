import {Box, Flex, Spacer, useBreakpointValue} from '@chakra-ui/react'
import {Link} from 'gatsby'
import * as Scroll from 'react-scroll'
import React from 'react'

const Navbar = () => {
  const [bgColor, setBgColor] = React.useState<string>('transparent')
  const isMobile = useBreakpointValue({base: true, md: false})

  const listenScrollEvent = () => {
    if (window.scrollY > document.documentElement.clientHeight) {
      setBgColor('black')
    } else {
      setBgColor('transparent')
    }
  }

  React.useEffect(
    () => window.addEventListener('scroll', listenScrollEvent),
    []
  )

  const normalNavbar = (
    <Box
      position="fixed"
      top="0"
      left="0"
      zIndex="10"
      bg={bgColor}
      width="100%"
      height="85px">
      <Flex mt="5" mx="150" fontSize="2rem" color="white">
        <Link to="">Home</Link>
        <Spacer />
        <Box cursor="pointer">
          <Scroll.Link smooth isDynamic to="calculatorsection" offset={-100}>
            Plan & Preise
          </Scroll.Link>
        </Box>
        <Spacer />
        <Link to="">Anreise & Aufenthalt</Link>
        <Spacer />
        <Link to="">Kontakt</Link>
      </Flex>
    </Box>
  )

  const mobileNavbar = <Box></Box>
  const navbar = isMobile ? mobileNavbar : normalNavbar

  return navbar
}

export default Navbar
