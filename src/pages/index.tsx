//#region > Imports
// Contains all the functionality necessary to define React components

// import BlogSection from '../../organisms/BlogSection'
//> Components
import {Box} from '@chakra-ui/react'
import CalculatorSection from '../components/organisms/CalculatorSection'
import HeroSection from '../components/organisms/HeroSection'
//#endregion

//#region > Components
const IndexPage = () => {
  return (
    <Box>
      <HeroSection />
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
