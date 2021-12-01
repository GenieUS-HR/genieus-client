import React, { useState } from 'react'
import { Flex, Heading, List, ListItem } from '@chakra-ui/react'

const mainBoxColor: string = '#374151'

// TODO: DUMMY OBJECT - PULL FROM DATABASE
const interactionsObj: any = {
  helpDuration: 23, // TOTAL DURATION OF HELP REQUESTS THIS MONTH
  remainingCredit: 93, // MINUTES OF HELP REQUESTS REMAINING THIS MONTH
  remainingDays: 13, // DAYS REMAINING UNTIL START OF NEXT BILLIGNG CYCLE,
}

const Interactions = () => {
  const [interactions, setInteractions] = useState(interactionsObj)

  return (
    <Flex
      bg={'gray.700'}
      borderRadius={'10px'}
      flexDirection="column"
      height="40vh"
      padding={'1rem'}
      mt={12}
    >
      <Flex justifyContent="center" alignItems="center">
        <Heading as="h1" size="lg" fontWeight="400">
          Interactions
        </Heading>
      </Flex>
      <br />
      <Heading as="h2" size="l" fontWeight="500">
        Amazing! You've problem-solved with one of our tutors for{' '}
        {interactions.helpDuration} minutes this month!
      </Heading>
      <br />
      <List spacing={3}>
        <Heading as="h2" size="l">
          Credit remaining
        </Heading>
        <ListItem>{interactions.remainingCredit} minutes</ListItem>

        <Heading as="h2" size="l">
          Days remaining
        </Heading>
        <ListItem>{interactions.remainingDays} days</ListItem>
      </List>
      {/* TODO: INSERT PIE CHART */}
    </Flex>
  )
}

export default Interactions
