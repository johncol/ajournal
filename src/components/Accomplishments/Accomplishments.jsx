import React from 'react';
import { List, ListItem, Chip } from '@material-ui/core';

import { getAccomplishmentsPerDay } from '../../services/accomplishments';
import { NoAccomplishmentsFound } from '../NoAccomplishmentsFound';

import './Accomplishments.scss';

export const Accomplishments = ({ list, onDelete }) => {
  const accomplishmentsPerDay = getAccomplishmentsPerDay(list);
  if (accomplishmentsPerDay.length === 0) {
    return <NoAccomplishmentsFound />;
  }

  return (
    <div className="accomplishments">
      {accomplishmentsPerDay.map((day) => {
        return (
          <section key={day.date}>
            <h3>{day.date}</h3>
            <AccomplishmentsList
              accomplishments={day.accomplishments}
              onDelete={onDelete}
            />
          </section>
        );
      })}
    </div>
  );
};

const AccomplishmentsList = ({ accomplishments, onDelete }) => {
  return (
    <List>
      {accomplishments.map((accomplishment) => (
        <ListItem key={accomplishment.timestamp}>
          <Chip
            variant="outlined"
            label={accomplishment.description}
            onDelete={() => onDelete(accomplishment)}
          />
        </ListItem>
      ))}
    </List>
  );
};
