import {AspectRatio, Box} from '@chakra-ui/react'

const VideoSection = () => {
  return (
    <Box mt="-20vh">
      <AspectRatio ratio={16 / 10} maxW={{base: '100%', md: '50%'}} mx="auto">
        <iframe
          src="https://www.youtube.com/embed/3owx2vJHkv4"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen></iframe>
      </AspectRatio>
    </Box>
  )
}

export default VideoSection
