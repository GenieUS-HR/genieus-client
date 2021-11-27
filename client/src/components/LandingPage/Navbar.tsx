import { ReactNode } from 'react'
import {
    Box,
    Flex,
    Button,
    Divider,
    useColorModeValue,
    Stack,
    useColorMode,
    useDisclosure,
    Image,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalCloseButton,
    ModalHeader,
    ModalFooter,
    ModalBody,
} from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { ColorModeSwitcher } from '../../ColorModeSwitcher'
import ModalLogIn from './ModalLoginIn'
import Logo from '../../assets/icons/logo.svg'

const dark = '#121212'
const light = 'gray.100'

export default function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Box bg={useColorModeValue(dark, light)} px={6} py={2} h="10vh">
                <Flex
                    h={16}
                    alignItems={'center'}
                    justifyContent={'space-between'}
                >
                    <Image
                        src={Logo}
                        boxSize="9rem"
                        pt={5}
                        pl={7}
                        borderRadius="50px"

                    />
                    <Flex alignItems={'center'}>
                        <Stack direction={'row'} spacing={7}>
                            <Button onClick={onOpen} variant="primary">
                                Log In
                            </Button>
                            {/* <Button variant='primary'> Sign Up </Button> */}
                            <ColorModeSwitcher />
                        </Stack>
                    </Flex>
                </Flex>
                <ModalLogIn isOpen={isOpen} onClose={onClose} />
            </Box>
        </>
    )
}