import { Text, Image } from '@chakra-ui/react'


export default function Logo() {
  return (
    <Text
      fontSize={['2xl', '3xl']}
      fontWeight='bold'
      letterSpacing='tight'
      w={64}
    >
      Dash
      <Text
        as='span'
        fontSize='2xs'
        lineHeight={0}
        w={200}
        color={'blue.400'}>go.
      </Text>
    </Text>
  )
}