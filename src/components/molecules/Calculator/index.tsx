import {
  Box,
  Button,
  Center,
  Heading,
  HStack,
  Text,
  VStack,
  Wrap
} from '@chakra-ui/react'
import {StaticImage} from 'gatsby-plugin-image'
import React from 'react'

import * as style from './style'
import fetchData from './fetch'

const Calculator = () => {
  const data = fetchData()
  const [season, setSeason] = React.useState<string>('')
  const [price, setPrice] = React.useState<number>(0)
  const stepPrice = 4

  const SeasonStep = () => {
    return (
      <style.logo>
        <Box width="100%">
          <Center>
            <StaticImage
              src="../../../images/logo.svg"
              alt="logo"
              className="logo"
              imgClassName="logoimg"
            />
          </Center>
          <Heading fontSize="1.25rem" textAlign="center" my="10">
            Wann wollen Sie uns besuchen?
          </Heading>
          <Center>
            <Wrap spacing="3" width="80%" justify="center">
              <Button
                borderRadius="md"
                variant="fill"
                bg="black"
                color="white"
                _hover={{bg: 'gray.600'}}
                display="box"
                minW="200px">
                <Text>Nebensaison Frühling</Text>
                <Text>
                  {data.springseason.start} - {data.springseason.end}
                </Text>
              </Button>
              <Button
                borderRadius="md"
                variant="fill"
                bg="black"
                color="white"
                _hover={{bg: 'gray.600'}}
                onClick={() => setSeason('mainseason')}
                display="box"
                minW="200px">
                <Text>Hauptsaison</Text>
                <Text>
                  {data.mainseason.start} - {data.mainseason.end}
                </Text>
              </Button>
              <Button
                borderRadius="md"
                variant="fill"
                bg="black"
                color="white"
                display="box"
                _hover={{bg: 'gray.600'}}
                onClick={() => setSeason('autumnseason')}
                minW="200px">
                <Text>Nebensaison Herbst</Text>
                <Text>
                  {data.autumnseason.start} - {data.autumnseason.end}
                </Text>
              </Button>
              <Button
                borderRadius="md"
                variant="fill"
                bg="black"
                color="white"
                display="box"
                _hover={{bg: 'gray.600'}}
                onClick={() => setSeason('autumnseason')}
                minW="200px">
                <Text>Bikeshow</Text>
                <Text>
                  {data.bikeshow.start} - {data.bikeshow.end}
                </Text>
              </Button>
            </Wrap>
          </Center>
        </Box>
      </style.logo>
    )
  }

  const Step = (props: {
    current: number
    prev: number
    next: number
    text: string
    icon: string
  }) => {
    let amount = 0
    return (
      <Box alignContent="center" justifyContent="center" width="100%">
        <Text>{props.text}</Text>
        <HStack spacing="3">
          <Button
            variant="fill"
            bg="black"
            color="white"
            _hover={{bg: 'gray.600'}}
            onClick={() => (amount = 1)}
            borderRadius="md">
            1
          </Button>
          <Button
            variant="fill"
            bg="black"
            color="white"
            _hover={{bg: 'gray.600'}}
            onClick={() => (amount = 2)}
            borderRadius="md">
            2
          </Button>
          <Button
            variant="fill"
            bg="black"
            color="white"
            _hover={{bg: 'gray.600'}}
            onClick={() => {
              amount = 3
              setPrice(stepPrice * amount)
              console.log(amount)
              console.log(price)
            }}
            borderRadius="md">
            3
          </Button>
          <Button
            variant="fill"
            bg="black"
            color="white"
            _hover={{bg: 'gray.600'}}
            onClick={() => null}
            borderRadius="md"
            px="-1">
            4+
          </Button>
        </HStack>
      </Box>
    )
  }

  return (
    <Box width="100%">
      <SeasonStep />
      {/* <Step
        current={0}
        prev={0}
        next={1}
        text="Wie viele Personen über 10?"
        icon=""
      /> */}
    </Box>
  )
}

export default Calculator
