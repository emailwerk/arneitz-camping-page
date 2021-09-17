import {
  Box,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  Center
} from '@chakra-ui/react'
import {useOptions, withRedux} from '@snek-at/jaen-pages'
import * as React from 'react'
import styled from '@emotion/styled'

interface LightBoxProps {
  previewImage: React.ReactNode
}

const DefaultImage = styled(Box)`
  cursor: ${props => (props.isEditing ? 'normal' : 'zoom-in')};
  filter: ${props => (props.isEditing ? '' : 'brightness(80%)')};
`

const LightBox: React.FC<LightBoxProps> = ({previewImage, children}) => {
  const {onToggle, isOpen, onClose} = useDisclosure()
  const {isEditing} = useOptions()
  const togglePreview = () => isEditing === false && onToggle()

  return (
    <>
      <DefaultImage isEditing onClick={togglePreview}>
        {children}
      </DefaultImage>
      <Modal onClose={onClose} isOpen={isOpen} isCentered size="6xl">
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton color="white" />
          <ModalBody p="0" width="100%" height="100%">
            <Center>{previewImage}</Center>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default withRedux(LightBox)
