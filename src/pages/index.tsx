//#region > Imports
// Contains all the functionality necessary to define React components

// import BlogSection from '../../organisms/BlogSection'
//> Components
import {Box} from '@chakra-ui/react'
import CalculatorSection from '../components/organisms/CalculatorSection'
//#endregion

//#region > Components
const IndexPage = () => {
  return (
    <Box>
      <CalculatorSection />
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
