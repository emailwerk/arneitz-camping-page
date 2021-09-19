import {Box, Flex, Heading, Text} from '@chakra-ui/react'
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
  type: string // standard or bike-show
  values: any[]
  seperators: string[]
  initValues: string[]
  fieldNameAddon: string
}): JSX.Element => {
  let seperatedValues = []

  if (props.seperators.length > 0) {
    for (let i = 0; i < props.values.length; i++) {
      seperatedValues.push(props.values[i])
      if (i !== props.values.length - 1) {
        if (props.seperators.length > i) {
          seperatedValues.push(props.seperators[i])
        } else {
          seperatedValues.push(props.seperators[props.seperators.length - 1])
        }
      }
    }
  } else {
    seperatedValues = props.values
  }

  const fieldNames = []

  if (props.type === 'standard') {
    fieldNames.push(`pricelist-lowseason-${props.fieldNameAddon}`)
    fieldNames.push(`pricelist-mainseason-${props.fieldNameAddon}`)
  } else if (props.type === 'bike-show') {
    fieldNames.push(`pricelist-bikeshow-${props.fieldNameAddon}-adult`)
    fieldNames.push(`pricelist-bikeshow-${props.fieldNameAddon}-child`)
    fieldNames.push(`pricelist-bikeshow-${props.fieldNameAddon}-parking`)
  }

  return (
    <>
      <Flex>
        <Box width={props.type === 'standard' ? '60%' : '40%'}>
          {seperatedValues}
        </Box>
        <Box width="20%" textAlign="center">
          <fields.TextField
            fieldName={fieldNames[0]}
            initValue={props.initValues[0]}
            rtf={false}
          />
        </Box>
        <Box width="20%" textAlign="center">
          <fields.TextField
            fieldName={fieldNames[1]}
            initValue={props.initValues[1]}
            rtf={false}
          />
        </Box>
        {props.type === 'bike-show' ? (
          <Box width="20%" textAlign="center">
            <fields.TextField
              fieldName={fieldNames[2]}
              initValue={props.initValues[2]}
              rtf={false}
            />
          </Box>
        ) : (
          <></>
        )}
      </Flex>
    </>
  )
}

export const ColoredColumn = (props: {
  bgcolor: string
  color: string
  lowseasonPrice: string
  mainseasonPrice: string
}): JSX.Element => {
  return (
    <>
      <Flex bg={props.bgcolor}>
        <Box width="60%">
          <Text>Mindestgebühr</Text>
          <Flex>
            <Text>
              für 1 oder 2 Personen{' '}
              {props.color.charAt(0).toUpperCase() + props.color.substring(1)}
            </Text>
            {/* Icons */}
          </Flex>
        </Box>
        <Box width="20%" textAlign="center">
          <fields.TextField
            fieldName={`pricelist-lowseason-${props.color}`}
            initValie={props.lowseasonPrice}
            rtf={false}
          />
        </Box>
        <Box width="20%" textAlign="center">
          <fields.TextField
            fieldName={`pricelist-mainseason-${props.color}`}
            initValie={props.mainseasonPrice}
            rtf={false}
          />
        </Box>
      </Flex>
    </>
  )
}
