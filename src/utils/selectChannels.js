const selectChannels = (channels, styles) => {
  const channelIds = Object.keys(channels);
  return Object.keys(styles).reduce(acc => {
    const randomNo = Math.floor(Math.random() * channelIds.length);
    const channel = channelIds.splice(randomNo, 1);
    return acc.concat(channel);
  }, []);
};

export default selectChannels;
