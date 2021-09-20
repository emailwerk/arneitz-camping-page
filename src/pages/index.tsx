//#region > Imports
// Contains all the functionality necessary to define React components

// import BlogSection from '../../organisms/BlogSection'
//> Components
import {Box} from '@chakra-ui/react'
import Calculator from '../components/molecules/Calculator'
import PriceList from '../components/molecules/PirceList'
//#endregion

//#region > Components
const IndexPage = () => {
  return (
    <Box width="60%">
      <Calculator />
      <PriceList />
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
