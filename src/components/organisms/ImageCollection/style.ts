import styled from '@emotion/styled'
import {Box} from '@chakra-ui/react'

import {mq} from '../../../utils'

export const ImageCollectionStyle = styled(Box)`
  .lightboxPreviewImage {
    object-fit: fill;
  }
  .lightboxImage {
    ${mq[0]} {
      width: 300px;
      height: 180px;
    }
    ${mq[1]} {
      width: 300px;
      height: 180px;
    }
    ${mq[2]} {
      width: 300px;
      height: 180px;
    }
    ${mq[3]} {
      width: 400px;
      height: 240px;
    }
    ${mq[7]} {
      width: 700px;
      height: 420px;
    }
  }
`
