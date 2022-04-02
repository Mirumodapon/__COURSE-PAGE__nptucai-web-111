import React, { useState, useEffect } from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

import Popup from './Popup';

export default function Home() {
  const [name, setName] = useState(0);
  const [alert, setAlert] = useState([]);
  const [announce, setAnnounce] = useState([]);
  const [popup, setPopup] = useState(false);
  const [popupContent, setPopupContent] = useState(null);

  const column = [
    { field: 'iat', headerName: 'iat', width: '100' },
    { field: 'title', headerName: 'Title', flex: '1' }
  ];

  const rowOnClick = ({ row }) => {
    setPopupContent(row);
    setPopup(true);
  };

  useEffect(function () {
    fetch('/home.json')
      .then((x) => x.json())
      .then(({ name, alert, announce }) => {
        setName(name);
        setAlert(alert);
        setAnnounce(announce.map((x, i) => ({ id: i, ...x })));
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
      <Box sx={{ height: 400, width: '80%', margin: 'auto' }}>
        <Box sx={{ height: 400 }}>
          <DataGrid
            onRowClick={rowOnClick}
            rows={announce}
            columns={column}
            rowsPerPageOptions={[10, 15, 20]}
          />
        </Box>
      </Box>
      <Popup open={popup} {...popupContent} handleClose={(_) => setPopup(false)}></Popup>
    </>
  );
}
