import statusGreen from '../public/images/status-green.svg';
import statusAmber from '../public/images/status-amber.svg';
import statusRed from '../public/images/status-red.svg';

import type { StatusColorChoice } from '../components/StreamField/blocks/TopicsBlock/types';

const TopicStatusImages = {
    green: statusGreen,
    red: statusRed,
    amber: statusAmber,
};

const getTopicStatusImage = (statusColor: StatusColorChoice) =>
    TopicStatusImages[statusColor];

export default getTopicStatusImage;
