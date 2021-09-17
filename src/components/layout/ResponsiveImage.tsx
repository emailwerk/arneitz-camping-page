import {Box} from '@chakra-ui/react'

import styled from '@emotion/styled'

import {mq} from '../../utils'

export const ResponsiveImage = styled(Box)`
  .responsiveImage {
    ${mq[0]} {
      width: 300px;
      height: 180px;
      margin-left: auto;
      margin-right: auto;
    }
    ${mq[1]} {
      width: 300px;
      height: 180px;
      margin-left: auto;
      margin-right: auto;
    }
    ${mq[2]} {
      width: 300px;
      height: 180px;
      margin-left: auto;
      margin-right: auto;
    }
    ${mq[3]} {
      width: 300px;
      height: 180px;
      margin-left: auto;
      margin-right: auto;
    }
    ${mq[4]} {
      width: 22vw;
      height: 26vh;
    }
    ${mq[5]} {
      width: 22vw;
      height: 26vh;
    }
  }
`
