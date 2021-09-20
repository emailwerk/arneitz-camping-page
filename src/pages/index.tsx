//#region > Imports
// Contains all the functionality necessary to define React components

// import BlogSection from '../../organisms/BlogSection'
//> Components
import {Box} from '@chakra-ui/react'
import PriceList from '../components/molecules/PirceList'
import {usePages} from '@snek-at/jaen-pages/src/contexts/cms'
//#endregion

//#region > Components
const IndexPage = () => {
  const fields = usePages()?.nodes?.['SitePage /']?.fields
  console.log(fields)

  return (
    <Box width="60%">
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
