import React, { useState } from 'react';
import { CssBaseline, Container } from '@material-ui/core';

import { NewEntry } from './NewEntry';
import { Accomplishments } from './Accomplishments/Accomplishments';
import { startingAccomplishments } from './../utils/initial-state';

export const App = () => {
  const [accomplishments, setAccomplishments] = useState([
    ...startingAccomplishments,
  ]);

  const addToAccomplishments = (entry) => {
    const newAccomplishment = {
      description: entry,
      timestamp: Date.now(),
    };
    setAccomplishments((accomplishments) => [
      newAccomplishment,
      ...accomplishments,
    ]);
  };

  const removeFromAccomplishments = (accomplishment) => {
    const index = accomplishments.indexOf(accomplishment);
    if (index === -1) {
      throw new Error('Accomplishment to delete not found: ' + accomplishment);
    }
    setAccomplishments((accomplishments) => {
      accomplishments.splice(index, 1);
      return [...accomplishments];
    });
  };

  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm">
        <NewEntry onNewEntry={addToAccomplishments} />
        <Accomplishments
          list={accomplishments}
          onDelete={removeFromAccomplishments}
        />
      </Container>
    </>
  );
};
