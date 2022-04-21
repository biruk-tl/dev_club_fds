import { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField
} from '@mui/material';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

import DateTimePicker from '@mui/lab/DateTimePicker';
// import DatePicker from '@mui/lab/DatePicker';
import Stack from '@mui/material/Stack';

const states = [
  {
    value: 'aa',
    label: 'Addis Ababa'
  },
  {
    value: 'dd',
    label: 'Dire Dawa'
  },
  {
    value: 'bd',
    label: 'Bahir Dar'
  }
];

export const AccountProfileDetails = (props) => {
  const [values, setValues] = useState({
    clubName: 'St. Gorge F.C.',
    lastName: 'Mola',
    email: 'stgeorgefc@gmail.com',
    phone: '+251-116-604-030',
    // phone: '0924913413',
    region: 'Addis Ababa',
    country: 'Ethiopia',
    // startDate: new Date(),
    // endDate: new Date(),
    // demoDate: new Date(),
    
  });


  

  const handleChange = (event) => {
    event.preventDefault();


    setValues({
      ...values,
      [event.target.name]: event.target.value, 
    });
    console.log(values);
  };




  // const handleDateChange = (newEndDate, newStartDate) => {
  //   setValues({
  //     ...values,
  //     startDate: newStartDate,
  //     endDate: newEndDate
  //   });
  //   console.log(values.startDate);
  // };


  return (
    <form
      autoComplete="off"
      noValidate
      {...props}
    >
      <Card>
        <CardHeader
          subheader="Some of this information cannot  be edited. Please contact admin if you need to change it."
          title="Club Profile"
        />
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={12}
              xs={12}
            >
              <TextField
                fullWidth
                // helperText="Please specify the first name"
                label="Club Name"
                name="clubName"
                onChange={handleChange}
                // required
                disabled
                value={values.clubName}
                variant="outlined"
              />
            </Grid>
            {/* <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Last name"
                name="lastName"
                onChange={handleChange}
                required
                value={values.lastName}
                variant="outlined"
              />
            </Grid> */}
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Email Address"
                name="email"
                onChange={handleChange}
                required
                value={values.email}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Phone Number"
                name="phone"
                onChange={handleChange}
                // type="number"
                value={values.phone}
                variant="outlined"
                error={values.phone.length > 10}
                helperText={values.phone.length > 10 ? 'Invalid!' : ' '}
              />
            </Grid>

            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Country"
                name="country"
                onChange={handleChange}
                required
                value={values.country}
                variant="outlined"
              />
            </Grid>

            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Select Region"
                name="region"
                onChange={handleChange}
                required
                select
                SelectProps={{ native: true }}
                value={values.state}
                variant="outlined"
              >
                {states.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid>

           
           

          </Grid>
        </CardContent>
        <Divider />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            p: 2
          }}
        >
          <Button
            color="primary"
            variant="contained"
          >
            Save details
          </Button>
        </Box>
      </Card>
    </form>
  );
};
