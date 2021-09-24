import {
  Box,
  Collapse,
  Flex,
  VStack,
  IconButton,
  Spacer,
  useBreakpointValue,
  useDisclosure
} from '@chakra-ui/react'
import {Link} from 'gatsby'
import * as Scroll from 'react-scroll'
import React from 'react'
import {StaticImage} from 'gatsby-plugin-image'
import styled from '@emotion/styled'
import {HamburgerIcon} from '@chakra-ui/icons'

const LogoStyle = styled(Box)`
  .logo {
    width: 200px;
  }
  .favicon {
    width: 50px;
    height: 50px;
  }
`

const Navbar = () => {
  const [bgColor, setBgColor] = React.useState<string>('transparent')
  const [color, setColor] = React.useState<string>('white')
  const [logo, setLogo] = React.useState<boolean>(false)
  const {isOpen, onToggle} = useDisclosure()

  const isMobile = useBreakpointValue({base: true, md: false})

  const listenScrollEvent = () => {
    if (window.scrollY > 0) {
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
      <Flex
        mx="150"
        mt={logo ? '6' : '4'}
        fontSize={logo ? '1.75rem' : '2rem'}
        color={color}>
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
        <Box display={logo ? 'block' : 'none'} mt="-4">
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

  const mobileNavbar = (
    <LogoStyle>
      <Box
        position="fixed"
        top="0"
        left="0"
        zIndex="10"
        bg={bgColor}
        width="100%"
        height="85px"
        shadow={logo ? 'lg' : 'none'}>
        <Flex mt="5" color={color} width="100%" px="5">
          <StaticImage
            src="../../../images/favicon.svg"
            alt="logo"
            className="favicon"
          />
          <Spacer />
          <IconButton
            color={color}
            aria-label="menu"
            h="50px"
            w="50px"
            icon={<HamburgerIcon color="black" boxSize="40px" />}
            onClick={() => onToggle()}
          />
        </Flex>
        <Collapse in={isOpen}>
          <VStack
            shadow={logo ? 'lg' : 'none'}
            spacing="3"
            fontSize="1.75rem"
            color={color}
            bg={bgColor}
            w="100vw">
            <Link to="" style={{marginTop: '5'}}>
              Home
            </Link>
            <Box cursor="pointer">
              <Scroll.Link
                smooth
                isDynamic
                to="calculatorsection"
                offset={-100}>
                Plan & Preise
              </Scroll.Link>
            </Box>
            <Link to="">Anreise & Aufenthalt</Link>
            <Link to="">Kontakt</Link>
          </VStack>
        </Collapse>
      </Box>
    </LogoStyle>
  )
  const navbar = isMobile ? mobileNavbar : normalNavbar

  return navbar
}

export default Navbar
