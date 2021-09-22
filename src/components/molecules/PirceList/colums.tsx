import {Box, Flex, Heading, Text} from '@chakra-ui/react'
import {fields} from '@snek-at/jaen-pages'

interface StandardProps {
  icon: any
  text: string
  lowseasonPrice: string
  mainseasonPrice: string
  fieldNameAddon: string
}

export const StandardColumn = ({
  icon,
  fieldNameAddon,
  text,
  lowseasonPrice,
  mainseasonPrice
}: StandardProps) => {
  return (
    <Flex fontSize="sm">
      <Box width="60%" border="1px" borderColor="white" bg="gray.300">
        <Heading fontSize="sm">
          {icon} {text}
        </Heading>
      </Box>
      <Box
        width="20%"
        textAlign="center"
        border="1px"
        borderColor="white"
        bg="gray.400">
        <fields.TextField
          fieldName={`pricelist-lowseason-${fieldNameAddon}`}
          initValue={`<p>${lowseasonPrice}</p>`}
          rtf={false}
        />
      </Box>
      <Box
        width="20%"
        textAlign="center"
        border="1px"
        borderColor="white"
        bg="gray.400">
        <fields.TextField
          fieldName={`pricelist-mainseason-${fieldNameAddon}`}
          initValue={`<p>${mainseasonPrice}</p>`}
          rtf={false}
        />
      </Box>
    </Flex>
  )
}

interface MultiProps {
  type: string // standard or bike-show
  values: any[]
  seperators: string[]
  initValues: string[]
  fieldNameAddon: string
}

export const MultiIconColumn = ({
  type,
  values,
  seperators,
  initValues,
  fieldNameAddon
}: MultiProps) => {
  let seperatedValues = []

  if (seperators.length > 0) {
    for (let i = 0; i < values.length; i++) {
      seperatedValues.push(values[i])
      if (i !== values.length - 1) {
        if (seperators.length > i) {
          seperatedValues.push(seperators[i])
        } else {
          seperatedValues.push(seperators[seperators.length - 1])
        }
      }
    }
  } else {
    seperatedValues = values
  }

  const fieldNames = []

  if (type === 'standard') {
    fieldNames.push(`pricelist-lowseason-${fieldNameAddon}`)
    fieldNames.push(`pricelist-mainseason-${fieldNameAddon}`)
  } else if (type === 'bike-show') {
    fieldNames.push(`pricelist-bikeshow-${fieldNameAddon}-adult`)
    fieldNames.push(`pricelist-bikeshow-${fieldNameAddon}-child`)
    fieldNames.push(`pricelist-bikeshow-${fieldNameAddon}-parking`)
  }

  return (
    <Flex fontSize="sm">
      <Box
        width={type === 'standard' ? '60%' : '40%'}
        bg="gray.300"
        border="1px"
        borderColor="white">
        {seperatedValues}
      </Box>
      <Box
        width="20%"
        textAlign="center"
        bg="gray.400"
        border="1px"
        borderColor="white">
        <fields.TextField
          fieldName={fieldNames[0]}
          initValue={initValues[0]}
          rtf={false}
        />
      </Box>
      <Box
        width="20%"
        textAlign="center"
        bg="gray.400"
        border="1px"
        borderColor="white">
        <fields.TextField
          fieldName={fieldNames[1]}
          initValue={initValues[1]}
          rtf={false}
        />
      </Box>
      {type === 'bike-show' ? (
        <Box
          width="20%"
          textAlign="center"
          bg="gray.400"
          border="1px"
          borderColor="white">
          <fields.TextField
            fieldName={fieldNames[2]}
            initValue={initValues[2]}
            rtf={false}
          />
        </Box>
      ) : null}
    </Flex>
  )
}

interface ColoredProps {
  bgcolor: string
  color: string
  lowseasonPrice: string
  mainseasonPrice: string
}

export const ColoredColumn = ({
  bgcolor,
  color,
  lowseasonPrice,
  mainseasonPrice
}: ColoredProps) => {
  return (
    <Flex bg={bgcolor} fontSize="sm">
      <Box width="60%" border="1px" borderColor="white" fontWeight="bold">
        <Text>Mindestgebühr</Text>
        <Flex>
          <Text>
            für 1 oder 2 Personen{' '}
            {color.charAt(0).toUpperCase() + color.substring(1)}
          </Text>
          {/* Icons */}
        </Flex>
      </Box>
      <Box
        width="20%"
        textAlign="center"
        border="1px"
        borderColor="white"
        verticalAlign="center">
        <fields.TextField
          fieldName={`pricelist-lowseason-${color}`}
          initValue={lowseasonPrice}
          rtf={false}
        />
      </Box>
      <Box width="20%" textAlign="center" border="1px" borderColor="white">
        <fields.TextField
          fieldName={`pricelist-mainseason-${color}`}
          initValue={mainseasonPrice}
          rtf={false}
        />
      </Box>
    </Flex>
  )
}
