import {Box, Flex, Spacer, useBreakpointValue} from '@chakra-ui/react'
import {Link} from 'gatsby'
import * as Scroll from 'react-scroll'
import React from 'react'
import {StaticImage} from 'gatsby-plugin-image'
import styled from '@emotion/styled'

const LogoStyle = styled(Box)`
  .logo {
    width: 200px;
  }
`

const Navbar = () => {
  const [bgColor, setBgColor] = React.useState<string>('transparent')
  const [color, setColor] = React.useState<string>('white')
  const [logo, setLogo] = React.useState<boolean>(false)

  const isMobile = useBreakpointValue({base: true, md: false})

  const listenScrollEvent = () => {
    if (window.scrollY > document.documentElement.clientHeight) {
      setBgColor('white')
      setColor('black')
      setLogo(true)
    } else {
      setBgColor('transparent')
      setColor('white')
      setLogo(false)
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
      height="85px"
      shadow={logo ? 'lg' : 'none'}>
      <Flex mx="150" mt="5" fontSize="2rem" color={color}>
        <Link to="" style={{marginTop: '5'}}>
          Home
        </Link>
        <Spacer />
        <Box cursor="pointer">
          <Scroll.Link smooth isDynamic to="calculatorsection" offset={-100}>
            Plan & Preise
          </Scroll.Link>
        </Box>
        <Spacer display={logo ? 'inline' : 'none'} />
        <Box display={logo ? 'block' : 'none'} mt="-3">
          <LogoStyle>
            <StaticImage
              src="../../../images/logo.svg"
              alt="logo"
              className="logo"
            />
          </LogoStyle>
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
