import {
  Flex,
  Box,
  Button,
  Center,
  Collapse,
  Container,
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
  const [parkingAddon, setParkingAddon] = React.useState<string>('')

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

  const Step = (props: {
    text: string
    icon: string
    minValue: number
    type: string
    bikeshow: boolean
  }) => {
    const cleanPrice = (price: string) => {
      return parseInt(price.replace(',-', ''))
    }
    console.log(data)
    let stepPrice: any = ''
    if (props.bikeshow) {
      props.type === 'parking.camper'
        ? (stepPrice = data.bikeshow.prices.parking.camper)
        : props.type === 'parking.xxl'
        ? (stepPrice = data.bikeshow.prices.parking.xxl)
        : (stepPrice = data.bikeshow.prices[props.type])
    } else {
      props.type === 'parking.orange'
        ? (stepPrice = data[season].prices.parking.orange)
        : props.type === 'parking.turquoise'
        ? (stepPrice = data[season].prices.parking.turquoise)
        : props.type === 'minPrice.orange'
        ? (stepPrice = data[season].prices.minPrice.orange)
        : props.type === 'minPrice.turquoise'
        ? (stepPrice = data[season].prices.minPrice.turquoise)
        : (stepPrice = data[season].prices[props.type])
    }
    stepPrice === 'frei' || stepPrice === '-' || stepPrice === 'priceUnder3'
      ? (stepPrice = '0')
      : null
    console.log(stepPrice)
    stepPrice = cleanPrice(stepPrice)
    const [amount, setAmount] = React.useState<number>(props.minValue + 3)
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
                setPrice(price + stepPrice * props.minValue)
                setStep(step + 1)
              }}
              borderRadius="md">
              {props.minValue}
            </Button>
            <Button
              variant="fill"
              bg="black"
              color="white"
              _hover={{bg: 'blackAlpha.800'}}
              onClick={() => {
                setPrice(price + stepPrice * (props.minValue + 1))
                setStep(step + 1)
              }}
              borderRadius="md">
              {props.minValue + 1}
            </Button>
            <Button
              variant="fill"
              bg="black"
              color="white"
              _hover={{bg: 'blackAlpha.800'}}
              onClick={() => {
                setPrice(price + stepPrice * (props.minValue + 2))
                setStep(step + 1)
              }}
              borderRadius="md">
              {props.minValue + 2}
            </Button>
            <Button
              variant="fill"
              bg="black"
              color="white"
              _hover={{bg: 'blackAlpha.800'}}
              onClick={() => onToggle()}
              borderRadius="md"
              px="-1">
              {props.minValue + 3}+
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
        {console.log(
          'price:',
          price,
          'stepPrice:',
          stepPrice,
          'amount:',
          amount
        )}
      </Box>
    )
  }

  const ParkingStep = (props: {bikeshow: boolean}) => {
    let content: any = ''
    if (season === 'mainseason') {
      setStep(step + 1)
    } else if (props.bikeshow) {
      content = (
        <>
          <Text>Ist Ihr Fahrzeug länger als 7m?</Text>
          <Flex>
            <Button
              onClick={() => {
                setParkingAddon('xxl')
                setStep(step + 1)
              }}>
              Ja
            </Button>
            <Button
              onClick={() => {
                setParkingAddon('camper')
                setStep(step + 1)
              }}>
              Nein
            </Button>
          </Flex>
        </>
      )
    } else {
      content = (
        <>
          <Text>
            Wollen Sie in einer orangen oder in einer türkisen Zone campen?
          </Text>
          <Flex>
            <Button
              onClick={() => {
                setParkingAddon('orange')
                setStep(step + 1)
              }}>
              Orange
            </Button>
            <Button
              onClick={() => {
                setParkingAddon('turquoise')
                setStep(step + 1)
              }}>
              Türkis
            </Button>
          </Flex>
        </>
      )
      setParkingAddon('orange')
    }
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
        <Container centerContent>{content}</Container>
      </Box>
    )
  }

  const ResultStep = () => {
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
        <Container centerContent mt="5">
          <Text fontSize="1.5rem">Preis pro Nacht</Text>
          <Heading>{price}€</Heading>
          <Button
            mt="3"
            variant="outline"
            colorScheme="gray"
            onClick={() => {
              setStep(0)
              setPrice(0)
            }}>
            Hier erneut berechnen
          </Button>
        </Container>
      </Box>
    )
  }

  const steps = [
    <SeasonStep />,
    <Step
      text="Wie viele Personen über 10?"
      bikeshow={season === 'bikeshow'}
      type="adult"
      icon=""
      minValue={1}
    />,
    <Step
      text="Wie viele Kinder über 3?"
      bikeshow={season === 'bikeshow'}
      type="over3"
      icon=""
      minValue={0}
    />,
    <Step
      text="Wie viele Kinder unter 3?"
      bikeshow={season === 'bikeshow'}
      type="under3"
      icon=""
      minValue={0}
    />,
    <ParkingStep bikeshow={season === 'bikeshow'} />,
    <Step
      text="Benötigen Sie einen extra Stellplatz?"
      bikeshow={season === 'bikeshow'}
      type={season === 'mainseason' ? 'parking' : `parking.${parkingAddon}`}
      icon=""
      minValue={0}
    />,
    <Step
      text="Benötigen Sie einen extra Parkplatz für ein Auto?"
      bikeshow={season === 'bikeshow'}
      type="car"
      icon=""
      minValue={0}
    />,
    <ResultStep />
  ]

  return <Box width="100%">{steps[step]}</Box>
}

export default Calculator
