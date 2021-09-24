import {Box, Center, Container, Heading, Stat} from '@chakra-ui/react'
import {fields} from '@snek-at/jaen-pages'
import {StaticImage} from 'gatsby-plugin-image'
import Lottie from 'react-lottie'
import * as Scroll from 'react-scroll'

import animationData from '../../../images/Scrolldown.json'

import {HeroStyle} from './style'

const HeroSection = () => {
  return (
    <HeroStyle>
      <Box>
        <fields.ImageField
          fieldName="hero-background"
          initValue={{src: '', alt: 'herobackground'}}
          className="herobackground"
        />
        <Box position="absolute" top="35vh" textAlign="center" width="100%">
          <Center>
            <Box maxW="450px">
              <StaticImage
                alt="logo"
                src="../../../images/logo.svg"
                className="herologo"
              />
              <Heading mt="5" fontSize="3rem">
                Camping am Faaker See
              </Heading>
            </Box>
          </Center>
          <Center mt="20">
            <Box pointerEvents="none">
              <Lottie
                options={{
                  loop: true,
                  autoplay: true,
                  animationData: animationData
                }}
                heigth={100}
                width={100}
              />
            </Box>
          </Center>
        </Box>
      </Box>
    </HeroStyle>
  )
}

export default HeroSection
