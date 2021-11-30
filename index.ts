import strava from 'strava-v3';

process.on('unhandledRejection', (reason, promise) => {
  throw reason;
});

const main = async () => {
  try {
    const activities = await strava.athlete.listActivities({
      page: 1,
      per_page: 1,
    });

    const lastActivity = activities[0];
    console.log(lastActivity);

    const streams = await strava.streams.activity({
      id: lastActivity.id,
      types: ['time', 'latlng', 'velocity_smooth', 'heartrate', 'cadence', 'watts', 'temp', 'moving', 'grade_smooth'],
      key_by_type: true,
    });
    console.log(streams);
  } catch (e) {
    throw e;
  }
}

main();
