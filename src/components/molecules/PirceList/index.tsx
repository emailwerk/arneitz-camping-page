import {Box, Flex, Text, Heading} from '@chakra-ui/react'
import {fields} from '@snek-at/jaen-pages'
import BsPersonFill from '@react-icons/all-files/bs/BsPersonFill'
import React from 'react'

import {
  StandardColumn,
  BikeshowColumn,
  ColoredColumn,
  MultiIconColumn
} from './colums'

const PriceList = () => {
  return (
    <Box fontSize="sm">
      <Box className="normal-prices">
        <Heading fontSize="md">
          <fields.TextField
            fieldName="pricelist-header"
            initValue="<p>Preisliste 2021</p>"
            rtf={false}
          />
        </Heading>
        <fields.TextField
          fieldName="pricelist-opendates"
          initValie="<p>Geöffnet von 15. April bis 30. September 2021</p>"
          rtf={false}
        />
        <Flex>
          <Box width="60%">
            <Text fontSize="xs">Preis pro Nacht in Euro</Text>
          </Box>
          <Box width="20%" textAlign="center">
            <Heading>Nebensaison</Heading>
            <Flex>
              <fields.TextField
                fieldName="pricelist-springseason-start"
                initValue="<p>15.04.</p>"
                rtf={false}
              />
              <Text mx="1">-</Text>
              <fields.TextField
                fieldName="pricelist-springseason-end"
                initValue="<p>01.07.</p>"
                rtf={false}
              />
            </Flex>
            <Flex>
              <fields.TextField
                fieldName="pricelist-autumnseason-start"
                initValue="<p>12.09.</p>"
                rtf={false}
              />
              <Text mx="1">-</Text>
              <fields.TextField
                fieldName="pricelist-autumnseason-end"
                initValue="<p>30.09.</p>"
                rtf={false}
              />
            </Flex>
          </Box>
          <Box width="20%" textAlign="center">
            <Heading>Hauptsaison</Heading>
            <fields.TextField
              fieldname="pricelist-mainseason-start"
              initValue="<p>01.07.</p>"
              rtf={false}
            />
            <Text mx="1">-</Text>
            <fields.TextField
              fieldName="pricelist-mainseason-end"
              initValue="<p>04.09.</p>"
              rtf={false}
            />
          </Box>
        </Flex>
        <StandardColumn
          icon={<BsPersonFill />}
          text="(ab 10 Jahre)"
          lowseasonPrice="9,-"
          mainseasonPrice="10,-"
          fieldNameAddon="over10years"
        />
        <StandardColumn
          icon={<BsPersonFill />}
          text="(3-9 Jahre)"
          lowseasonPrice="8,-"
          mainseasonPrice="9,-"
          fieldNameAddon="over2years"
        />
        <StandardColumn
          icon={<BsPersonFill />}
          text="Kinder(0-2 Jahre)"
          lowseasonPrice="frei"
          mainseasonPrice="frei"
          fieldNameAddon="under2years"
        />
        <Flex>
          <Box width="60%">
            <Text>Stellplatz</Text>
            <Flex>{/*icons*/}</Flex>
            <Flex>
              <Text mr="1">inkl.</Text>
              {/*icons*/}
            </Flex>
          </Box>
          <Box width="20%">
            <Box>
              <Box bg="blue" textAlign="center">
                <fields.TextField
                  fieldName="pricelist-lowseason-blue-parking"
                  initValue="<p>11,-</p>"
                  rtf={false}
                />
              </Box>
              <Box bg="orange" textAlign="center">
                <fields.TextField
                  fieldName="pricelist-lowseason-orange-parking"
                  initValue="<p>15,-</p>"
                  rtf={false}
                />
              </Box>
            </Box>
          </Box>
          <Box width="20%" textAlign="center">
            <fields.TextField
              fieldName="pricelist-mainseason-parking"
              initValue="<p>16,-</p>"
            />
          </Box>
        </Flex>
        <MultiIconColumn
          icons={
            [
              /*icons*/
            ]
          }
          seperators={['/']}
          fieldNameAddon=""
          lowseasonPrice="11,-"
          mainseasonPrice=""
        />
        <StandardColumn
          icon={}
          text="Hund"
          lowseasonPrice="5,-"
          mainseasonPrice="5,-"
          fieldNameAddon="dog"
        />
        <StandardColumn
          icon={}
          text="extra Auto"
          lowseasonPrice="5,-"
          mainseasonPrice="5,-"
          fieldNameAddon="car"
        />
        <ColoredColumn
          bgcolor=""
          color=""
          lowseasonPrice=""
          mainseasonPrice="38,-"
        />
        <ColoredColumn
          bgcolor=""
          color=""
          lowseasonPrice=""
          mainseasonPrice="43,-"
        />
      </Box>
      <Box className="bikeshow">
        <Flex>
          <Box width="40%" textAlign="center">
            <Flex>
              <Heading>Arneitz Bike Show</Heading>
              <fields.TextField
                fieldName="pricelist-bikeshow-startdate"
                initValue="<p>04.09.</p>"
                rtf={false}
              />
              <Text mx="1">-</Text>
              <fields.TextField
                fieldName="pricelist-bikeshow-enddate"
                initValue="<p>12.09.</p>"
                rtf={false}
              />
            </Flex>
          </Box>
          <Box width="20%" textAlign="center">
            <Heading>Erwachsener</Heading>
          </Box>
          <Box width="20%" textAlign="center">
            <Flex>
              <Heading>Kinder</Heading>
              <Text ml="1">(3-9 J.)</Text>
            </Flex>
          </Box>
          <Box width="20%">
            <Heading>Stellplatz</Heading>
          </Box>
        </Flex>
        <BikeshowColumn
          values={
            [
              /*icons*/
            ]
          }
          seperators={['inkl.', '/']}
          priceAdult="17,-"
          priceChild="9,-"
          priceParking="-"
          fieldNameAddon="person"
        />
        <BikeshowColumn
          values={
            [
              /*icons*/
            ]
          }
          seperators={['oder']}
          priceAdult="-"
          priceChild="-"
          priceParking="10,-"
          fieldNameAddon="car"
        />
        <BikeshowColumn
          values={
            [
              /*icons*/
            ]
          }
          seperators={['/']}
          priceAdult="-"
          priceChild="-"
          priceParking="20,-"
          fieldNameAddon="camper"
        />
        <BikeShowColumn
          values={['XXL Camper', 'Caravan']}
          seperators={['/']}
          priceAdult="-"
          priceChild="-"
          priceParking="30,-"
          fieldNameAddon="xxl"
        />
      </Box>
      <Box className="gti">
        <Box width="100%">
          <Flex>
            <Heading>GTI Treffen</Heading>
            <Text ml="1">vor & nach dem Treffen</Text>
          </Flex>
        </Box>
        <GTIMeetingHidden />
        <Flex>
          <Box width="40%">
            <Flex>
              <BsPersonFill />
              {/* car icon */}
            </Flex>
          </Box>
        </Flex>
        <Box width="60%" textAlign="center">
          <fields.TextField
            fieldName="pricelist-gti-price"
            initValue="<p>17,-</p>"
            rtf={false}
          />
        </Box>
      </Box>
      <Text width="100%" textAlign="center" fontSize="xs">
        Unsere Preise verstehen sich ohne Ortstaxe. Änderungen vorbehalten.
      </Text>
    </Box>
  )
}

export default PriceList
