import React, { useState, useEffect } from 'react';
import Box from '@mui/system/Box';
import Markdown from './Markdown';

export default function Info() {
  const [section, setSection] = useState([]);

  useEffect(function () {
    fetch('/__COURSE-PAGE__nptucai-web-111/API/info.json')
      .then((x) => x.json())
      .then((x) => {
        setSection(x);
      });
  }, []);

  return (
    <>
      {section.map((x) => (
        <Box sx={{ width: '70%', margin: 'auto', ...x.style }}>
          <h1>{x.title}</h1>
          <Markdown>{x.content}</Markdown>
        </Box>
      ))}
    </>
  );
}
