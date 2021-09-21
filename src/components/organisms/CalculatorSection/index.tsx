import {Box, Center, Flex, Text} from '@chakra-ui/react'
import {StaticImage} from 'gatsby-plugin-image'
import React from 'react'

import Calculator from '../../molecules/Calculator'
import PriceList from '../../molecules/PirceList'
import CampingMap from '../../molecules/CampingMap'

const CalculatorSection = () => {
  const [active, setActive] = React.useState<string>('calculator')

  const NavbarButton = (props: {type: string; text: string}) => {
    return (
      <Box
        w="33.33%"
        height="55px"
        mt="5px"
        bg="black"
        color="white"
        disabled={active === props.type}
        _disabled={{bg: 'white', color: 'black'}}
        onClick={() => setActive(props.type)}
        borderTopRadius="25px">
        <Flex justifyContent="center" alignContent="center">
          {props.type === 'campingmap' ? (
            'campingmap' === active ? (
              <StaticImage
                src="../../../images/pin.svg"
                alt={`${props.type}-icon`}
                style={{height: '40px', width: '40px', marginTop: '7.5px'}}
              />
            ) : (
              <StaticImage
                src="../../../images/pin_white.svg"
                alt={`${props.type}-icon`}
                style={{height: '40px', width: '40px', marginTop: '7.5px'}}
              />
            )
          ) : props.type === 'calculator' ? (
            active === 'calculator' ? (
              <StaticImage
                src="../../../images/calculator.svg"
                alt={`${props.type}-icon`}
                style={{height: '40px', width: '40px', marginTop: '7.5px'}}
              />
            ) : (
              <StaticImage
                src="../../../images/calculator_white.svg"
                alt={`${props.type}-icon`}
                style={{height: '40px', width: '40px', marginTop: '7.5px'}}
              />
            )
          ) : active === 'pricelist' ? (
            <StaticImage
              src="../../../images/menu.svg"
              alt={`${props.type}-icon`}
              style={{height: '40px', width: '40px', marginTop: '7.5px'}}
            />
          ) : (
            <StaticImage
              src="../../../images/menu_white.svg"
              alt={`${props.type}-icon`}
              style={{height: '40px', width: '40px', marginTop: '7.5px'}}
            />
          )}
          <Text mt="3" ml="3">
            {props.text}
          </Text>
        </Flex>
      </Box>
    )
  }

  const CalculatorNavbar = () => {
    return (
      <Box bg="black" width="100%" height="60px" borderTopRadius="24px">
        <Flex fontSize="1.25rem">
          <NavbarButton type="campingmap" text="Lageplan" />
          <NavbarButton type="calculator" text="Preisrechner" />
          <NavbarButton type="pricelist" text="Preisliste" />
        </Flex>
      </Box>
    )
  }

  return (
    <Box>
      <Center>
        <Box width="40%" border="1px" borderRadius="25px">
          <CalculatorNavbar />
          <Box m="10">
            {active === 'pricelist' ? (
              <PriceList />
            ) : active === 'calculator' ? (
              <Calculator />
            ) : (
              <CampingMap />
            )}
          </Box>
        </Box>
      </Center>
    </Box>
  )
}

export default CalculatorSection
