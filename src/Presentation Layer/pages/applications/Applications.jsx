import { useState } from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import { styled } from '@mui/system';
import Navbar from '../../components/navbar';
import { Sidebar } from '../../components/sidebar';
import ApplicationEventsTable from '../../components/applications/application-events-table';

const DashboardLayoutRoot = styled('div')(({ theme }) => ({
  display: 'flex',
  flex: '1 1 auto',
  maxWidth: '100%',
  paddingTop: 64,
  [theme.breakpoints.up('lg')]: {
    paddingLeft: 280
  }
}));

const Applications= (props) => {
  // const { children } = props;
  const [isSidebarOpen, setSidebarOpen] = useState(false);



  
  return (
    <>
      
      <DashboardLayoutRoot>
      
        <Box
          sx={{
            display: 'flex',
            flex: '1 1 auto',
            flexDirection: 'column',
            width: '100%'
          }}
        >
        
        <>

            <Box
            component="main"
            sx={{
                flexGrow: 1,
                py: 6
            }}
            >
            <Container maxWidth="lg">
                <Typography
                sx={{ mb: 3 }}
                variant="h4"
                >
                Application Events
                </Typography>
                <Grid
                container
                spacing={3}
                >
                
                <Grid
                    item
                    lg={12}
                    md={12}
                    xs={12}
                >
                    <ApplicationEventsTable />
                </Grid>
                </Grid>
            </Container>
            </Box>
        </>
                
            </Box>
            </DashboardLayoutRoot>
            <Navbar onSidebarOpen={() => setSidebarOpen(true)} />
            <Sidebar
                onClose={() => setSidebarOpen(false)}
                open={isSidebarOpen}
            />
    </>
  );
};


export default Applications;