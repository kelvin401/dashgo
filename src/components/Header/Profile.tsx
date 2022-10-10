import { Flex, Box, Avatar, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export default function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align='center'>
      {showProfileData && (<Box mr={4} textAlign='right'>
        <Text>Kelvin Carvalho</Text>
        <Text
          color='gray.500'
          fontSize='small'>
          kelvin_carvalhos@hotmail.com
        </Text>
      </Box>)}

      <Avatar
        size='md'
        name='Kelvin Carvalho'
        src='https://github.com/kelvin401.png'
      />
    </Flex>
  )
}