export const getAccomplishmentsPerDay = (accomplishments) => {
  const accomplishmentsPerDay = {};

  accomplishments.forEach((accomplishment) => {
    const date = new Date(accomplishment.timestamp);
    const mapKey = date.toISOString().substring(0, 10);

    const day = accomplishmentsPerDay[mapKey] ?? {
      date: date.toDateString(),
      accomplishments: [],
    };

    day.accomplishments.push(accomplishment);
    accomplishmentsPerDay[mapKey] = day;
  });

  return Object.keys(accomplishmentsPerDay)
    .sort((date1, date2) => (date1 < date2 ? 1 : -1))
    .map((date) => accomplishmentsPerDay[date]);
};
