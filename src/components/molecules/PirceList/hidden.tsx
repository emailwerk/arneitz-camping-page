import {Box, Flex, Text} from '@chakra-ui/react'
import {fields, useOptions, withRedux} from '@snek-at/jaen-pages'

const GTIMeetingHidden = () => {
  const {isEditing} = useOptions()

  return (
    <Box width="100%" display={isEditing ? 'static' : 'none'}>
      <Flex>
        <Text mx="1">Von:</Text>
        <Box width="20%">
          <fields.TextField
            fieldName="startdate-GTI"
            initVlaue="<p>21.09.21</p>"
            rtf={false}
          />
        </Box>
        <Text mx="1">Bis:</Text>
        <Box width="20%">
          <fields.TextField
            fieldName="enddate-GTI"
            initValue="<p>22.09.21</p>"
            rtf={false}
          />
        </Box>
      </Flex>
    </Box>
  )
}

export default withRedux(GTIMeetingHidden)
