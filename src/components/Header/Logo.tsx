import { Text, Image } from '@chakra-ui/react'


export default function Logo() {
  return (
    <Text
      fontSize={['2xl', '3xl']}
      fontWeight='bold'
      letterSpacing='tight'
      w={64}
    >
      <Image
        src='https://hadarcloud.com.br/wp-content/uploads/2021/02/logotipo-hadar-ti.jpg'
        width={100}
        alt="HadasrCloud" />
      <Text
        fontSize='2xs'
        letterSpacing='widest'
        lineHeight={0}
        w={200}
        color={'blue.400'}>
      </Text>
    </Text>
  )
}