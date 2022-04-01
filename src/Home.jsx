import React, { useState, useEffect } from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

export default function Home() {
  const [name, setName] = useState(0);
  const [alert, setAlert] = useState([]);

  useEffect(function () {
    fetch('/home.json')
      .then((x) => x.json())
      .then(({ name, alert }) => {
        setName(name);
        setAlert(alert);
      });
  }, []);

  return (
    <>
      <Stack sx={{ width: '100%' }} spacing={2}>
        {alert.map(({ type, content }, index) => (
          <Alert
            key={index}
            severity={type}
            onClose={() => setAlert(alert.filter((_, i) => i !== index))}
          >
            {content}
          </Alert>
        ))}
      </Stack>
      <Box sx={{ textAlign: 'center' }}>
        <h1 className="center">Welcome to {name}</h1>
      </Box>
    </>
  );
}
