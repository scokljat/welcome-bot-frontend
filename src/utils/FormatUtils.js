export const formatActive = (isActive) => {
  return isActive ? 'Active' : 'Inactive';
};

export const formatEvent = (event) => {
  switch (event) {
    case 'APP_MENTION_EVENT':
      return 'On app mention';

    case 'CHANNEL_JOINED':
      return 'On channel join';

    case 'CHANNEL_LEFT':
      return 'On channel left';

    case 'On app mention':
      return 'APP_MENTION_EVENT';

    case 'On channel join':
      return 'CHANNEL_JOINED';

    case 'On channel left':
      return 'CHANNEL_LEFT';
  }
};
