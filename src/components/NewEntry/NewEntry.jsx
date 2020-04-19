import React, { useState } from 'react';
import { FormControl, Input, InputLabel } from '@material-ui/core';

import './NewEntry.scss';

export const NewEntry = ({ onNewEntry }) => {
  const [entry, setEntry] = useState('');

  const emitNewAccomplishment = (event) => {
    event.preventDefault();
    if (entry.trim().length > 0) {
      onNewEntry(entry.trim());
      setEntry('');
    }
  };

  return (
    <form
      noValidate
      autoComplete="off"
      className="new-entry"
      onSubmit={emitNewAccomplishment}
    >
      <FormControl fullWidth>
        <InputLabel htmlFor="new-entry">Add an accomplishment</InputLabel>
        <Input
          id="new-entry"
          value={entry}
          onChange={(e) => setEntry(e.target.value)}
        />
      </FormControl>
    </form>
  );
};
