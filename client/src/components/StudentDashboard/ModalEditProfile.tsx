import React, { useState } from 'react'

import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
  Avatar,
  AvatarBadge,
  IconButton,
  Center,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
} from '@chakra-ui/react'
import { SmallCloseIcon } from '@chakra-ui/icons'
import { useUpdateStudentByIdMutation } from '../../redux/services/studentService'

//@ts-ignore
const ModalEditProfile = ({ isOpen, onClose, userId, student }) => {
  const [updateName, setupdateName] = useState('')
  const [updateBio, setupdateBio] = useState('')
  const [updateStudent, updateStudentResult] = useUpdateStudentByIdMutation()
  const [photoFile, setphotoFile] = useState(null)

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay>
        <ModalContent fontFamily="sans-serif">
          <ModalHeader m={0} fontWeight="400" align="center" fontSize="30px">
            <Flex minH={'50vh'} align={'center'} justify={'center'}>
              {/* // bg={useColorModeValue('gray.50', 'gray.800')} */}
              <Stack
                spacing={4}
                w={'full'}
                maxW={'md'}
                // bg={useColorModeValue('white', 'gray.700')}
                rounded={'xl'}
                boxShadow={'lg'}
                p={6}
                my={12}
              >
                <Heading lineHeight={1.1} fontSize={{ base: '2xl', sm: '3xl' }}>
                  User Profile Edit
                </Heading>
                <FormControl id="userName">
                  <FormLabel>Photo</FormLabel>
                  <Stack direction={['column', 'row']} spacing={6}>
                    <Center>
                      <Avatar
                        size="xl"
                        name={student?.name}
                        src={
                          photoFile !== null ? photoFile : student?.photo_url
                        }
                      >
                        <AvatarBadge
                          as={IconButton}
                          size="sm"
                          rounded="full"
                          top="-10px"
                          colorScheme="red"
                          aria-label="remove Image"
                          icon={<SmallCloseIcon />}
                        />
                      </Avatar>
                    </Center>
                    <Center w="full">
                      <FormControl>
                        <Input
                          w="full"
                          type="file"
                          style={{}}
                          //@ts-ignore
                          onChange={(e) =>
                            setphotoFile(URL.createObjectURL(e.target.files[0]))
                          }
                        />
                      </FormControl>
                    </Center>
                  </Stack>
                </FormControl>
                <FormControl id="userName">
                  <FormLabel>Name</FormLabel>
                  <Input
                    placeholder={student?.name}
                    _placeholder={{ color: 'gray.500' }}
                    onChange={(e) => setupdateName(e.target.value)}
                    value={updateName}
                    type="text"
                  />
                </FormControl>

                <FormControl id="bio">
                  <FormLabel>Bio</FormLabel>
                  <Input
                    placeholder={student?.bio}
                    _placeholder={{ color: 'gray.500' }}
                    onChange={(e) => setupdateBio(e.target.value)}
                    value={updateBio}
                    type="bio"
                  />
                </FormControl>
                <Stack spacing={6} direction={['column', 'row']}>
                  <Button
                    bg={'red.400'}
                    color={'white'}
                    w="full"
                    onClick={onClose}
                    _hover={{
                      bg: 'red.500',
                    }}
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={() => {
                      //@ts-ignore
                      updateStudent({
                        id: userId,
                        name: updateName,
                        bio: updateBio,
                        //@ts-ignore
                        photo_url: photoFile,
                      })
                      onClose()
                    }}
                    bg={'blue.400'}
                    color={'white'}
                    w="full"
                    _hover={{
                      bg: 'blue.500',
                    }}
                  >
                    Submit
                  </Button>
                </Stack>
              </Stack>
            </Flex>
          </ModalHeader>
        </ModalContent>
      </ModalOverlay>
    </Modal>
  )
}

export default ModalEditProfile
