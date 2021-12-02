import React from 'react'
import {
  Box,
  Grid,
  GridItem,
} from '@chakra-ui/react'
import Topbar from '../components/TutorDashboard/Topbar'
import { IncomingRequests } from '../components/TutorDashboard/IncomingRequests'
import { TutorInformation } from '../components/TutorDashboard/TutorInformation'
import { TutorDetails } from '../components/TutorDashboard/TutorDetails'

const TutorDashboard = () => {

  return (
    <Box>
      <Topbar />
      <Grid
        h="90vh"
        py={2}
        px={4}
        templateRows="repeat(5, 1fr)"
        templateColumns="repeat(4, 1fr)"
        gap={4}
      >
        <GridItem rowSpan={3} colSpan={3}>
          <IncomingRequests />
        </GridItem>

        <GridItem rowSpan={5} colSpan={1}>
          <TutorInformation />
        </GridItem>

        <GridItem rowSpan={2} colSpan={3}>
          {/* <TutorDetails /> */}
        </GridItem>
      </Grid>
    </Box>
  )
}

export default TutorDashboard
