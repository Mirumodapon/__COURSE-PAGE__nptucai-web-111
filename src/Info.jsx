import React, { useState, useEffect } from 'react';
import Box from '@mui/system/Box';

export default function Info() {
  const [section, setSection] = useState([]);

  useEffect(function () {
    fetch('/info.json')
      .then((x) => x.json())
      .then((x) => {
        setSection(x);
      });
  }, []);

  return <Box></Box>;
}
