import React from 'react'
import {
    Box,
    Flex,
    Heading,
    Image,
    Text,
} from '@chakra-ui/react'
import { MdCheckCircle, MdRemoveCircleOutline } from 'react-icons/md'

const favArr: any = [
  { tutor: "vic1", exp1: "JS", dur: 1, online: 0, key: 0 },
  { tutor: "vic2", exp1: "JS", dur: 2, online: 0, key: 1 },
  { tutor: "vic3", exp1: "JS", dur: 3, online: 1, key: 2 },
  { tutor: "vic4", exp1: "JS", dur: 4, online: 0, key: 3 },
  { tutor: "vic5", exp1: "JS", dur: 5, online: 0, key: 4 },

] 


const Favourites = () => {
  return (
    // TODO: USE FLATLIST/MP TO POPULATE FAVOURITES FROM SERVER/STATE
    // TODO: USE https://chakra-ui.com/docs/overlay/drawer FOR REVIEW

    <Flex
      color={"white"}    
      flexDirection="column"
      h="100%"
    >

    <Heading
      as="h1"
      size="xl"
      fontWeight="600"
      pt={'1rem'}
      pb={'1rem'}
    >
      Favourites
    </Heading>
      <Box
        overflowY={"auto"}
        // scrollBar={"hidden"}
        bg={"cyan"}

        sx={{
          '&::-webkit-scrollbar': {
            width: '16px',
            borderRadius: '8px',
            backgroundColor: `rgba(0, 0, 0, 0.15)`,
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: `rgba(0, 0, 0, 0.45)`,
            borderRadius: '8px',
          },
        }}

      >
        {favArr.map((el:any) => {
          return (
            <Box key={el.dur}>

              <Flex
                flexDirection="row"
                justify="flex-start"
                bg="blue"
                w="100%"
                p="15px"
                mb="1rem"
                borderRadius={'1rem'}
                border="solid"
              >
                <Flex flexDirection="column" justify="space-between">
                  <Image
                    src="https://bit.ly/dan-abramov"
                    boxSize="5rem"
                    borderRadius="1rem"
                    />
                  <Box position="relative">
                    {el.online === 0 ?
                      <Text color="green.500" as={MdCheckCircle} /> :
                      <Text color="green.500" as={MdRemoveCircleOutline} />}
                  </Box>
                </Flex>
                <Flex flexDirection="column" bg="red" justify="flex-start" align="flex-start" ml="20px">
                  <Heading>{el.tutor}</Heading>
                  <Text>Experience</Text>
                  <Text>{el.exp1} - {el.dur} years</Text>
                  <Text>Language 2 - 1 year</Text>
                </Flex>
              </Flex>
            </Box>
          )
        })}
      </Box>
    </Flex>
  )
}

export default Favourites
