//#region > Imports
// Contains all the functionality necessary to define React components

// import BlogSection from '../../organisms/BlogSection'
//> Components
import {Box, Center} from '@chakra-ui/react'
import CalculatorSection from '../components/organisms/CalculatorSection'
import HeroSection from '../components/organisms/HeroSection'
import FactSection from '../components/organisms/FactSection'
import ImageCollection from '../components/organisms/ImageCollection'
import GroundsSection from '../components/organisms/GroundsSection'
import VideoSection from '../components/organisms/VideoSection'
//#endregion

//#region > Components
const IndexPage = () => {
  return (
    <Box>
      <HeroSection />
      <FactSection />
      <VideoSection />
      <CalculatorSection />
      <GroundsSection />
      <Center>
        <ImageCollection />
      </Center>
    </Box>
  )
}
//#endregion

//#region > Exports
export default IndexPage
//#endregion

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2021 Christian Aichner
 */
