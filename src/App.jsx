import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import Home from './Home';
import Resources from './Resources';
import Info from './Info';

import './index.css';

export default function App() {
  const [value, setValue] = React.useState('Resources');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <TabContext value={value}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <TabList onChange={handleChange} centered>
          <Tab label="Home" value="Home" />
          <Tab label="Resources" value="Resources" />
          <Tab label="Info" value="Info" />
        </TabList>
      </Box>
      <TabPanel value="Home">
        <Home />
      </TabPanel>
      <TabPanel value="Resources">
        <Resources />
      </TabPanel>
      <TabPanel value="Info">
        <Info />
      </TabPanel>
    </TabContext>
  );
}
