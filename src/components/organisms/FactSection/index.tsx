import {
  Box,
  Center,
  Circle,
  Container,
  Flex,
  Heading,
  Text
} from '@chakra-ui/react'
import {fields} from '@snek-at/jaen-pages'
import {StaticImage} from 'gatsby-plugin-image'
import * as style from './style'

const FactSection = () => {
  const icons = {
    sport: (
      <StaticImage
        src="../../../images/sport_green.svg"
        alt="sporticon"
        className="icon"
      />
    ),
    camping: (
      <StaticImage
        src="../../../images/camping_green.svg"
        alt="campingicon"
        className="icon"
      />
    ),
    trees: (
      <StaticImage
        src="../../../images/forest_green.svg"
        alt="treeicon"
        className="icon"
      />
    ),
    sunset: (
      <StaticImage
        src="../../../images/sunset_green.svg"
        alt="sunseticon"
        className="icon"
      />
    ),
    ticket: (
      <StaticImage
        src="../../../images/ticket_green.svg"
        alt="ticketicon"
        className="icon"
      />
    )
  }

  const FactBoxIconLeft = (props: {
    type: string
    fieldNameAddon: string
    initValue: string[]
  }) => {
    return (
      <style.IconStyle w="100%">
        <Flex mr={{base: '0', md: '13rem'}} w="100%">
          <Box
            h="100px"
            pt="5"
            w="70%"
            borderRadius="50px"
            textAlign="center"
            mt="5"
            bg="#68981b"
            color="white"
            fontSize={{base: '1rem', md: '1.25rem'}}>
            <Heading fontSize={{base: '1.25rem', md: '1.5rem'}}>
              <fields.TextField
                fieldName={`fact-number-${props.fieldNameAddon}`}
                initValue={props.initValue[0]}
                rtf={false}
              />
            </Heading>
            <Text width={{base: '80%', md: '100%'}}>
              <fields.TextField
                fieldName={`fact-text-${props.fieldNameAddon}`}
                initValue={props.initValue[1]}
                rtf={false}
              />
            </Text>
          </Box>
          <Circle size="140px" ml="-12" bg="#68981b" position="relative">
            <Circle bg="white" size="130px">
              {icons[props.type]}
            </Circle>
          </Circle>
        </Flex>
      </style.IconStyle>
    )
  }
  const FactBoxIconRight = (props: {
    type: string
    fieldNameAddon: string
    initValue: string[]
  }) => {
    return (
      <style.IconStyle w="100%">
        <Flex w="100%" ml={{base: '0', md: '13rem'}}>
          <Circle size="140px" mr="-12" bg="#68981b" position="relative">
            <Circle bg="white" size="130px">
              {icons[props.type]}
            </Circle>
          </Circle>
          <Box
            color="white"
            h="100px"
            pt="5"
            mr="0"
            w="70%"
            borderRadius="50px"
            textAlign="center"
            mt="5"
            bg="#68981b"
            fontSize={{base: '1rem', md: '1.25rem'}}>
            <Heading fontSize={{base: '1.25rem', md: '1.5rem'}}>
              <fields.TextField
                fieldName={`fact-number-${props.fieldNameAddon}`}
                initValue={props.initValue[0]}
                rtf={false}
              />
            </Heading>
            <fields.TextField
              fieldName={`fact-text-${props.fieldNameAddon}`}
              initValue={props.initValue[1]}
              rtf={false}
            />
          </Box>
        </Flex>
      </style.IconStyle>
    )
  }

  return (
    <Box w="100%" pt="106vh" mb="10" bg="gray.100" pb="40vh" id="factsection">
      <Container mb="5" textAlign="center">
        <Heading>Erleben Sie eine Welt so vielfältig wie Ihre Wünsche</Heading>
      </Container>
      <Container centerContent maxW={{base: '100%', md: '40%'}}>
        <FactBoxIconLeft
          fieldNameAddon="beach"
          type="sunset"
          initValue={['200+', 'Meter weißer Faaker See Strand']}
        />
        <FactBoxIconRight
          fieldNameAddon="parking"
          type="camping"
          initValue={['400', 'Camping-Stellplätze']}
        />
        <FactBoxIconLeft
          fieldNameAddon="sports"
          type="sport"
          initValue={['40+', 'Sportarten rund um den See']}
        />
        <FactBoxIconRight
          fieldNameAddon="events"
          type="ticket"
          initValue={['100+', 'Events Pro Jahr']}
        />
        <FactBoxIconLeft
          fieldNameAddon="trees"
          type="trees"
          initValue={['300+', 'Bäume und Büsche']}
        />
      </Container>
    </Box>
  )
}

export default FactSection
