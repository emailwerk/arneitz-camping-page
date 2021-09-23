import styled from '@emotion/styled'
import {Box} from '@chakra-ui/react'

import {mq} from '../../../utils'

export const HeroStyle = styled(Box)`
  .herologo {
    ${mq[0]} {
      width: 300px;
      height: 100px;
    }
    ${mq[2]} {
      width: 450px;
      height: 150px;
    }
  }
  .herobackground {
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }
`
