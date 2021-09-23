import {Box, Center, Container, Heading} from '@chakra-ui/react'
import {fields} from '@snek-at/jaen-pages'
import {StaticImage} from 'gatsby-plugin-image'

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
        <Center>
          <Container
            maxWidth="450px"
            centerContent
            position="absolute"
            top="35vh"
            textAlign="center">
            <StaticImage
              alt="logo"
              src="../../../images/logo.svg"
              className="herologo"
            />
            <Heading mt="5" fontSize="3rem">
              Camping am Faaker See
            </Heading>
          </Container>
        </Center>
      </Box>
    </HeroStyle>
  )
}

export default HeroSection
