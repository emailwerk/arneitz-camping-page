import {Box, Flex, Text, Heading} from '@chakra-ui/react'
import {fields} from '@snek-at/jaen-pages'
import React from 'react'

import {StandardColumn, ColoredColumn, MultiIconColumn} from './colums'

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
        <Text>
          <fields.TextField
            fieldName="pricelist-opendates"
            initValue="<p>Geöffnet von 15. April bis 30. September 2021</p>"
            rtf={false}
          />
        </Text>
        <Flex>
          <Box width="60%" mt="auto">
            <Text fontSize="xs">Preis pro Nacht in Euro</Text>
          </Box>
          <Box
            width="20%"
            textAlign="center"
            bg="gray.300"
            border="1px"
            borderColor="white">
            <Heading fontSize="sm">Nebensaison</Heading>
            <Flex>
              <fields.TextField
                fieldName="pricelist-springseason-start"
                initValue="<p>startDate</p>"
                rtf={false}
              />
              <Text>-</Text>
              <fields.TextField
                fieldName="pricelist-springseason-end"
                initValue="<p>endDate</p>"
                rtf={false}
              />
            </Flex>
            <Flex>
              <fields.TextField
                fieldName="pricelist-autumnseason-start"
                initValue="<p>startDate</p>"
                rtf={false}
              />
              <Text>-</Text>
              <fields.TextField
                fieldName="pricelist-autumnseason-end"
                initValue="<p>endDate</p>"
                rtf={false}
              />
            </Flex>
          </Box>
          <Box
            width="20%"
            textAlign="center"
            bg="gray.400"
            border="1px"
            borderColor="white">
            <Heading fontSize="sm">Hauptsaison</Heading>
            <Flex>
              <fields.TextField
                fieldName="pricelist-mainseason-start"
                initValue="<p>startDate</p>"
                rtf={false}
              />
              <Text>-</Text>
              <fields.TextField
                fieldName="pricelist-mainseason-end"
                initValue="<p>endDate</p>"
                rtf={false}
              />
            </Flex>
          </Box>
        </Flex>
        <StandardColumn
          icon={'Text'}
          text="(ab 10 Jahre)"
          lowseasonPrice="priceAdult"
          mainseasonPrice="priceAdult"
          fieldNameAddon="adult"
        />
        <StandardColumn
          icon={'Text'}
          text="(3-9 Jahre)"
          lowseasonPrice="priceOver3"
          mainseasonPrice="priceOver3"
          fieldNameAddon="over3"
        />
        <StandardColumn
          icon={'Text'}
          text="Kinder(0-2 Jahre)"
          lowseasonPrice="priceUnder3"
          mainseasonPrice="priceUnder3"
          fieldNameAddon="under3"
        />
        <Flex>
          <Box width="60%" bg="gray.300" border="1px" borderColor="white">
            <Text>Stellplatz</Text>
            <Flex>{/*icons*/}</Flex>
            <Flex>
              <Text mr="1">inkl.</Text>
              {/*icons*/}
            </Flex>
          </Box>
          <Box width="20%">
            <Box>
              <Box
                bg="teal.300"
                textAlign="center"
                border="1px"
                borderColor="white">
                <fields.TextField
                  fieldName="pricelist-lowseason-blue-parking"
                  initValue="<p>priceParking</p>"
                  rtf={false}
                />
              </Box>
              <Box
                bg="orange"
                textAlign="center"
                border="1px"
                borderColor="white">
                <fields.TextField
                  fieldName="pricelist-lowseason-orange-parking"
                  initValue="<p>priceParking</p>"
                  rtf={false}
                />
              </Box>
            </Box>
          </Box>
          <Box
            width="20%"
            textAlign="center"
            bg="gray.400"
            border="1px"
            borderColor="white">
            <fields.TextField
              fieldName="pricelist-mainseason-parking"
              initValue="<p>priceParking</p>"
            />
          </Box>
        </Flex>
        <MultiIconColumn
          values={['Text', 'Text', 'Text']}
          seperators={['/']}
          fieldNameAddon="idfc"
          type="standard"
          initValues={['11,-', '-']}
        />
        <StandardColumn
          icon={'Text'}
          text="Hund"
          lowseasonPrice="priceDog"
          mainseasonPrice="priceDog"
          fieldNameAddon="dog"
        />
        <StandardColumn
          icon={'Text'}
          text="extra Auto"
          lowseasonPrice="priceCar"
          mainseasonPrice="priceCar"
          fieldNameAddon="car"
        />
        <ColoredColumn
          bgcolor="teal.300"
          color="türkis"
          lowseasonPrice="minPrice"
          mainseasonPrice="minPrice"
        />
        <ColoredColumn
          bgcolor="orange"
          color="orange"
          lowseasonPrice="minPrice"
          mainseasonPrice="minPrice"
        />
      </Box>
      <Box className="bikeshow">
        <Flex>
          <Box width="40%">
            <Flex border="1px" borderColor="white" bg="gray.300">
              <Heading fontSize="sm">Arneitz Bike Show</Heading>
              <Box width="20%" textAlign="center">
                <fields.TextField
                  fieldName="pricelist-bikeshow-start"
                  initValue="<p>startDate</p>"
                  rtf={false}
                />
              </Box>
              <Text mx="1">-</Text>
              <Box width="20%" textAlign="center">
                <fields.TextField
                  fieldName="pricelist-bikeshow-end"
                  initValue="<p>endDate</p>"
                  rtf={false}
                />
              </Box>
            </Flex>
          </Box>
          <Box
            width="20%"
            textAlign="center"
            border="1px"
            borderColor="white"
            bg="gray.400">
            <Heading fontSize="sm">Erwachsener</Heading>
          </Box>
          <Box
            width="20%"
            textAlign="center"
            border="1px"
            borderColor="white"
            bg="gray.400">
            <Flex>
              <Heading fontSize="sm" ml="auto">
                Kinder
              </Heading>
              <Text ml="1" mr="auto">
                (3-9 J.)
              </Text>
            </Flex>
          </Box>
          <Box
            width="20%"
            border="1px"
            borderColor="white"
            bg="gray.400"
            textAlign="center">
            <Heading fontSize="sm">Stellplatz</Heading>
          </Box>
        </Flex>
        <MultiIconColumn
          values={[
            /*icons*/
            'Text',
            'Text',
            'Text'
          ]}
          seperators={['inkl.', '/']}
          initValues={['priceAdult', 'priceChild', 'priceParking']}
          fieldNameAddon="person"
          type="bike-show"
        />
        <MultiIconColumn
          values={[
            /*icons*/
            'Text',
            'Text',
            'Text'
          ]}
          seperators={['oder']}
          initValues={['priceAdult', 'priceChild', 'priceParking']}
          fieldNameAddon="car"
          type="bike-show"
        />
        <MultiIconColumn
          values={[
            /*icons*/
            'Text',
            'Text',
            'Text'
          ]}
          seperators={['/']}
          initValues={['priceAdult', 'priceChild', 'priceParking']}
          fieldNameAddon="camper"
          type="bike-show"
        />
        <MultiIconColumn
          values={['XXL Camper', 'Caravan']}
          seperators={['/']}
          initValues={['priceAdult', 'priceChild', 'priceParking']}
          fieldNameAddon="xxl"
          type="bike-show"
        />
      </Box>
      <Box className="gti">
        <Box width="100%">
          <Flex bg="gray.300" border="1px" borderColor="white">
            <Heading fontSize="sm" mt="0.5">
              GTI Treffen
            </Heading>
            <Text ml="1">vor & nach dem Treffen</Text>
          </Flex>
        </Box>
        <Flex>
          <Box width="40%" bg="gray.300" border="1px" borderColor="white">
            <Flex>
              {/* person icon */}
              {/* car icon */}
            </Flex>
          </Box>
          <Box
            width="60%"
            textAlign="center"
            bg="gray.400"
            border="1px"
            borderColor="white">
            <fields.TextField
              fieldName="pricelist-gti-price"
              initValue="<p>gtiPrice</p>"
              rtf={false}
            />
          </Box>
        </Flex>
      </Box>
      <Text width="100%" textAlign="center" fontSize="xs">
        Unsere Preise verstehen sich ohne Ortstaxe. Änderungen vorbehalten.
      </Text>
    </Box>
  )
}

export default PriceList
