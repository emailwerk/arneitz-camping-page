import {Box, Container} from '@chakra-ui/react'
import {fields} from '@snek-at/jaen-pages'

const GroundsSection = () => {
  return (
    <Box mt="6%">
      <fields.ImageField
        fieldName="grounds-blurred"
        initValue={{src: '', alt: 'blurred'}}
        style={{width: '100%', height: '200px', filter: 'blur(8px'}}
      />
      <Box mt="6%" textAlign="center" mb="6%" fontSize="1.1rem">
        <Container centerContent maxW="60%">
          <fields.TextField
            fieldName="grounds-richtext"
            initValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vehicula elit velit, non rhoncus nisi consequat in. Aenean eu bibendum risus, et venenatis diam. In bibendum lacus vel sapien aliquet laoreet. Curabitur elementum hendrerit vulputate. In ac ligula ut nisi volutpat consequat. Sed viverra sodales orci eu vestibulum. Morbi fringilla commodo lorem quis pellentesque. Phasellus pulvinar velit varius nisl mollis cursus. Donec a ipsum tempus, malesuada lorem vel, elementum nisi. Phasellus vestibulum nunc mi, vel tempus leo fringilla at. Quisque consequat nibh non dolor ullamcorper, sit amet ultrices nibh hendrerit. Aliquam suscipit porttitor odio sit amet mattis. Proin ac turpis. "
          />
        </Container>
      </Box>
    </Box>
  )
}

export default GroundsSection
