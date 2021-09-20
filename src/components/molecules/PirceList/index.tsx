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
            <Heading fontSize="sm">Nebensaison</Heading>
            <Flex>
              <fields.TextField
                fieldName="pricelist-springseason-start"
                initValue="<p>15.04.</p>"
                rtf={false}
              />
              <Text>-</Text>
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
              <Text>-</Text>
              <fields.TextField
                fieldName="pricelist-autumnseason-end"
                initValue="<p>30.09.</p>"
                rtf={false}
              />
            </Flex>
          </Box>
          <Box width="20%" textAlign="center">
            <Heading fontSize="sm">Hauptsaison</Heading>
            <Flex>
              <fields.TextField
                fieldName="pricelist-mainseason-start"
                initValue="<p>01.07.</p>"
                rtf={false}
              />
              <Text>-</Text>
              <fields.TextField
                fieldName="pricelist-mainseason-end"
                initValue="<p>04.09.</p>"
                rtf={false}
              />
            </Flex>
          </Box>
        </Flex>
        <StandardColumn
          icon={'Text'}
          text="(ab 10 Jahre)"
          lowseasonPrice="9,-"
          mainseasonPrice="10,-"
          fieldNameAddon="adult"
        />
        <StandardColumn
          icon={'Text'}
          text="(3-9 Jahre)"
          lowseasonPrice="8,-"
          mainseasonPrice="9,-"
          fieldNameAddon="over3"
        />
        <StandardColumn
          icon={'Text'}
          text="Kinder(0-2 Jahre)"
          lowseasonPrice="frei"
          mainseasonPrice="frei"
          fieldNameAddon="under3"
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
              <Box bg="teal.300" textAlign="center">
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
          values={['Text', 'Text', 'Text']}
          seperators={['/']}
          fieldNameAddon="idfc"
          type="standard"
          initValues={['11,-', '-']}
        />
        <StandardColumn
          icon={'Text'}
          text="Hund"
          lowseasonPrice="5,-"
          mainseasonPrice="5,-"
          fieldNameAddon="dog"
        />
        <StandardColumn
          icon={'Text'}
          text="extra Auto"
          lowseasonPrice="5,-"
          mainseasonPrice="5,-"
          fieldNameAddon="car"
        />
        <ColoredColumn
          bgcolor="teal.300"
          color="türkis"
          lowseasonPrice="-"
          mainseasonPrice="38,-"
        />
        <ColoredColumn
          bgcolor="orange"
          color="orange"
          lowseasonPrice="-"
          mainseasonPrice="43,-"
        />
      </Box>
      <Box className="bikeshow">
        <Flex>
          <Box width="40%">
            <Flex>
              <Heading fontSize="sm">Arneitz Bike Show</Heading>
              <Box width="20%" textAlign="center">
                <fields.TextField
                  fieldName="pricelist-bikeshow-start"
                  initValue="<p>04.09.</p>"
                  rtf={false}
                />
              </Box>
              <Text mx="1">-</Text>
              <Box width="20%" textAlign="center">
                <fields.TextField
                  fieldName="pricelist-bikeshow-end"
                  initValue="<p>12.09.</p>"
                  rtf={false}
                />
              </Box>
            </Flex>
          </Box>
          <Box width="20%" textAlign="center">
            <Heading fontSize="sm">Erwachsener</Heading>
          </Box>
          <Box width="20%" textAlign="center">
            <Flex>
              <Heading fontSize="sm">Kinder</Heading>
              <Text ml="1">(3-9 J.)</Text>
            </Flex>
          </Box>
          <Box width="20%">
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
          initValues={['17,-', '9,-', '-']}
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
          initValues={['-', '-', '10,-']}
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
          initValues={['-', '-', '20,-']}
          fieldNameAddon="camper"
          type="bike-show"
        />
        <MultiIconColumn
          values={['XXL Camper', 'Caravan']}
          seperators={['/']}
          initValues={['-', '-', '30,-']}
          fieldNameAddon="xxl"
          type="bike-show"
        />
      </Box>
      <Box className="gti">
        <Box width="100%">
          <Flex>
            <Heading fontSize="sm">GTI Treffen</Heading>
            <Text ml="1">vor & nach dem Treffen</Text>
          </Flex>
        </Box>
        <Flex>
          <Box width="40%">
            <Flex>
              Text
              {/* car icon */}
              Text
            </Flex>
          </Box>
          <Box width="60%" textAlign="center">
            <fields.TextField
              fieldName="pricelist-gti-price"
              initValue="<p>17,-</p>"
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
