import {
  Box,
  Button,
  Center,
  Collapse,
  Heading,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Text,
  useDisclosure,
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
  const [step, setStep] = React.useState<number>(0)

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
                _hover={{bg: 'blackAlpha.800'}}
                display="box"
                minW="200px"
                onClick={() => {
                  setSeason('springseason')
                  setStep(1)
                }}>
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
                _hover={{bg: 'blackAlpha.800'}}
                onClick={() => {
                  setSeason('mainseason')
                  setStep(1)
                }}
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
                _hover={{bg: 'blackAlpha.800'}}
                onClick={() => {
                  setSeason('autumnseason')
                  setStep(1)
                }}
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
                _hover={{bg: 'blackAlpha.800'}}
                onClick={() => {
                  setSeason('bikeshow')
                  setStep(1)
                }}
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

  const Step = (props: {text: string; icon: string}) => {
    const stepPrice = 1
    const [amount, setAmount] = React.useState<number>(3)
    const {isOpen, onToggle} = useDisclosure()

    return (
      <Box width="100%">
        <Center mb="5">
          <StaticImage
            src="../../../images/logo.svg"
            alt="logo"
            className="logo"
            imgClassName="logoimg"
          />
        </Center>
        <Center>
          <Text fontWeight="bold" fontSize="1.25rem" mb="5">
            {props.text}
          </Text>
        </Center>
        <Center>
          <Wrap spacing="3">
            <Button
              variant="fill"
              bg="black"
              color="white"
              _hover={{bg: 'blackAlpha.800'}}
              onClick={() => {
                setPrice(price + stepPrice)
                setStep(step + 1)
              }}
              borderRadius="md">
              1
            </Button>
            <Button
              variant="fill"
              bg="black"
              color="white"
              _hover={{bg: 'blackAlpha.800'}}
              onClick={() => {
                setPrice(price + stepPrice * 2)
                setStep(step + 1)
              }}
              borderRadius="md">
              2
            </Button>
            <Button
              variant="fill"
              bg="black"
              color="white"
              _hover={{bg: 'blackAlpha.800'}}
              onClick={() => {
                setPrice(price + stepPrice * 3)
                setStep(step + 1)
              }}
              borderRadius="md">
              3
            </Button>
            <Button
              variant="fill"
              bg="black"
              color="white"
              _hover={{bg: 'blackAlpha.800'}}
              onClick={() => onToggle()}
              borderRadius="md"
              px="-1">
              4+
            </Button>
          </Wrap>
        </Center>
        <Collapse in={isOpen} unmountOnExit animateOpacity>
          <Center mt="5">
            <NumberInput
              value={amount}
              onChange={value => setAmount(parseInt(value))}>
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </Center>
          <Center>
            <Button
              mt="5"
              variant="fill"
              bg="black"
              color="white"
              _hover={{bg: 'gray.600'}}
              onClick={() => {
                setPrice(price + stepPrice * amount)
                setStep(step + 1)
              }}
              borderRadius="md">
              Eingabe Bestätigen
            </Button>
          </Center>
        </Collapse>
      </Box>
    )
  }

  return (
    <Box width="100%">
      {step === 0 ? (
        <SeasonStep />
      ) : (
        <Step text="Wie viele Personen über 10?" icon="" />
      )}
    </Box>
  )
}

export default Calculator
