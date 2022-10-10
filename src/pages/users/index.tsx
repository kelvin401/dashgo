import { Box, Button, Checkbox, Flex, Heading, Icon, Text, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import Pagination from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";

export default function UserList() {
  return (
    <Box>
      <Header />

      <Flex w='100%' my={6} maxWidth={1480} mx='auto' px={6}>
        <Sidebar />

        <Box flex={1} borderRadius={8} bg='gray.800' p={8}>
          <Flex mb={8} justify='space-between' align='center'>
            <Heading size='lg' fontWeight='normal'>
              Usuários
            </Heading>

            <Button
              as='a'
              size='sm'
              fontSize='sm'
              colorScheme='blue'
              leftIcon={<Icon as={RiAddLine} fontSize={20} />}
              cursor='pointer'
              textTransform={'capitalize'}
            >
              Criar novo
            </Button>
          </Flex>

          <Table colorScheme='whiteAlpha'>
            <Thead>
              <Tr>
                <Th px={6} color='gray.300' width={8}>
                  <Checkbox colorScheme='blue' />
                </Th>
                <Th>Usuário</Th>
                <Th>Data de Cadastro</Th>
                <Th w={8}></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px={6}>
                  <Checkbox colorScheme='blue' />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight='bold'>Kelvin Carvalho</Text>
                    <Text fontSize='sm' color='gray.500'>kelvin.nirvana@gmail.com</Text>
                  </Box>
                </Td>
                <Td>
                  09 de Outubro de 2022
                </Td>
                <Td>
                  <Button
                    as='a'
                    size='sm'
                    fontSize='sm'
                    colorScheme='blackAlpha'
                    leftIcon={<Icon as={RiPencilLine} fontSize={16} />}
                    cursor='pointer'
                    textTransform={'capitalize'}
                  >
                    Editar
                  </Button>
                </Td>
              </Tr>
              <Tr>
                <Td px={6}>
                  <Checkbox colorScheme='blue' />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight='bold'>Kelvin Carvalho</Text>
                    <Text fontSize='sm' color='gray.500'>kelvin.nirvana@gmail.com</Text>
                  </Box>
                </Td>
                <Td>
                  09 de Outubro de 2022
                </Td>
                <Td>
                  <Button
                    as='a'
                    size='sm'
                    fontSize='sm'
                    colorScheme='blackAlpha'
                    leftIcon={<Icon as={RiPencilLine} fontSize={16} />}
                    cursor='pointer'
                    textTransform={'capitalize'}
                  >
                    Editar
                  </Button>
                </Td>
              </Tr>
              <Tr>
                <Td px={6}>
                  <Checkbox colorScheme='blue' />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight='bold'>Kelvin Carvalho</Text>
                    <Text fontSize='sm' color='gray.500'>kelvin.nirvana@gmail.com</Text>
                  </Box>
                </Td>
                <Td>
                  09 de Outubro de 2022
                </Td>
                <Td>
                  <Button
                    as='a'
                    size='sm'
                    fontSize='sm'
                    colorScheme='blackAlpha'
                    leftIcon={<Icon as={RiPencilLine} fontSize={16} />}
                    cursor='pointer'
                    textTransform={'capitalize'}
                  >
                    Editar
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>
          <Pagination />
        </Box>
      </Flex>
    </Box>
  )
}