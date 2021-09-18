import {Box, Flex, Heading} from '@chakra-ui/react'
import {fields} from '@snek-at/jaen-pages'

export const StandardColumn = (props: {
  icon: any
  text: string
  lowseasonPrice: string
  mainseasonPrice: string
  fieldNameAddon: string
}): JSX.Element => {
  return (
    <>
      <Flex>
        <Box width="60%">
          <Heading>
            {props.icon} {props.text}
          </Heading>
        </Box>
        <Box width="20%">
          <fields.TextField
            fieldName={`pricelist-lowseason-${props.fieldNameAddon}`}
            initValue={`<p>${props.lowseasonPrice}</p>`}
            rtf={false}
          />
        </Box>
        <Box width="20%">
          <fields.TextField
            fieldName={`pricelist-mainseason-${props.fieldNameAddon}`}
            initValue={`<p>${props.mainseasonPrice}</p>`}
            rtf={false}
          />
        </Box>
      </Flex>
    </>
  )
}

export const MultiIconColumn = (props: {
  icons: any[]
  seperators: string[]
  mainseasonPrice: string
  lowseasonPrice: string
  fieldNameAddon: string
}) => {
  return null
}

export const ColoredColumn = (props: {
  bgcolor: string
  color: string
  lowseasonPrice: string
  mainseasonPrice: string
}) => {
  return null
}

export const BikeshowColumn = (props: {
  seperators: string[]
  values: any[]
  priceAdult: string
  priceChild: string
  priceParking: string
  fieldNameAddon: string
}) => {
  return null
}
