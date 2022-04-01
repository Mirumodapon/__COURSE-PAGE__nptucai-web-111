import { Box } from '@mui/system';
import React, { useState, useEffect } from 'react';
import Card from './Card';

export default function Resources() {
  const [resources, setResources] = useState([]);

  useEffect(function () {
    fetch('/resources.json')
      .then((x) => x.json())
      .then((x) => {
        setResources(x);
      });
  }, []);

  return (
    <Box>
      {resources.map(({ tag, cards }, n) => (
        <React.Fragment key={n}>
          <h1>{tag}</h1>
          <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
            {cards.map((x, nn) => (
              <Card {...x} key={nn} />
            ))}
          </Box>
        </React.Fragment>
      ))}
    </Box>
  );
}
