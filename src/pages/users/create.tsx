import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from "@chakra-ui/react";
import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

export default function CreateUser() {
  return (
    <Box>
      <Header />

      <Flex w='100%' my={6} maxWidth={1480} mx='auto' px={6}>
        <Sidebar />

        <Box flex={1} borderRadius={8} bg='gray.800' p={8}>
          <Heading sz='lg' fontWeight='normal'>Criar usuário</Heading>

          <Divider my={6} borderColor='gray.700' />

          <VStack spacing={8}>
            <SimpleGrid minChildWidth='240px' spacing={8} w='100%'>
              <Input name='name' label='Nome Completo' />
              <Input name='email' label='E-mail' type='email' />
            </SimpleGrid>

            <SimpleGrid minChildWidth='240px' spacing={8} w='100%'>
              <Input name='password' label='Senha' type='password' />
              <Input name='password_confirmation' label='Confirmar Senha' type='password' />
            </SimpleGrid>
          </VStack>

          <Flex mt={8} justify='flex-end'>
            <HStack spacing={4}>
              <Button colorScheme='whiteAlpha'>Cancelar</Button>
              <Button colorScheme='blue'>Salvar</Button>
            </HStack>
          </Flex>

        </Box>
      </Flex>
    </Box>
  )
}