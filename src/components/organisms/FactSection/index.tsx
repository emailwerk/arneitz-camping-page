import {Box, Center, Container, Heading} from '@chakra-ui/react'
import {fields} from '@snek-at/jaen-pages'

const FactSection = () => {
  const FactBoxIconLeft = (props: {
    icon: string
    fieldNameAddon: string
    initValue: string[]
  }) => {
    return (
      <Box
        py="2"
        w="100%"
        borderRadius="20px"
        textAlign="center"
        border="1px"
        mt="5"
        fontSize={{base: '1rem', md: '1.25rem'}}>
        <fields.TextField
          fieldName={`fact-number-${props.fieldNameAddon}`}
          initValue={props.initValue[0]}
          rtf={false}
        />
        <fields.TextField
          fieldName={`fact-text-${props.fieldNameAddon}`}
          initValue={props.initValue[1]}
          rtf={false}
        />
      </Box>
    )
  }
  const FactBoxIconRight = (props: {
    icon: string
    fieldNameAddon: string
    initValue: string[]
  }) => {
    return (
      <Box
        py="2"
        w="100%"
        borderRadius="20px"
        textAlign="center"
        border="1px"
        mt="5"
        fontSize={{base: '1rem', md: '1.25rem'}}>
        <fields.TextField
          fieldName={`fact-number-${props.fieldNameAddon}`}
          initValue={props.initValue[0]}
          rtf={false}
        />
        <fields.TextField
          fieldName={`fact-text-${props.fieldNameAddon}`}
          initValue={props.initValue[1]}
          rtf={false}
        />
      </Box>
    )
  }

  return (
    <Box w="100%" mt="106vh" mb="6%">
      <Container mb="5" textAlign="center">
        <Heading>Erleben Sie eine Welt so vielfältig wie Ihre Wünsche</Heading>
      </Container>
      <Container centerContent maxW={{base: '100%', md: '40%'}}>
        <FactBoxIconLeft
          fieldNameAddon="beach"
          icon=""
          initValue={['200+', 'Meter weißer Faaker See Strand']}
        />
        <FactBoxIconRight
          fieldNameAddon="parking"
          icon=""
          initValue={['400', 'Camping-Stellplätze']}
        />
        <FactBoxIconLeft
          fieldNameAddon="sports"
          icon=""
          initValue={['40+', 'Sportarten rund um den See']}
        />
        <FactBoxIconRight
          fieldNameAddon="events"
          icon=""
          initValue={['100+', 'Events Pro Jahr']}
        />
        <FactBoxIconLeft
          fieldNameAddon="trees"
          icon=""
          initValue={['300+', 'Bäume und Büsche']}
        />
      </Container>
    </Box>
  )
}

export default FactSection
