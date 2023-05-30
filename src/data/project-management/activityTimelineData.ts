import { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface ActivityTimelineData {
  id: number;
  oppositeContent: {
    date: string;
    time: string;
  };
  content: {
    title: string;
    user: string;
    details: string;
  };
  separator: {
    icon: IconProp;
  };
}

export const activityTimelineData: ActivityTimelineData[] = [
  {
    id: 1,
    oppositeContent: {
      date: '01 DEC, 2023',
      time: '10:30 AM'
    },
    content: {
      title: 'Assigned as a director for Project The Chewing Gum Attack',
      user: 'Shantinon Mekalan',
      details:
        'Utilizing best practices to better leverage our assets, we must engage in black sky leadership thinking, not the usual band-aid solution.'
    },
    separator: {
      icon: 'chess'
    }
  },
  {
    id: 2,
    oppositeContent: {
      date: '05 DEC, 2023',
      time: '12:30 AM'
    },
    content: {
      title: 'Assigned as a director for Project The Chewing Gum Attack',
      user: 'Shantinon Mekalan',
      details:
        'We must repurpose with SEO optimized functionalities, instead of using those over used frictioned kumbaya.'
    },
    separator: {
      icon: 'dove'
    }
  },
  {
    id: 3,
    oppositeContent: {
      date: '05 DEC, 2023',
      time: '2:30 PM'
    },
    content: {
      title: 'Archieved all the files for the Project Membrane Memories',
      user: 'Sharuka Nijibum',
      details:
        'To get off the runway and paradigm shift, we should take brass tacks with above-the-board actionable analytics, ramp up with viral partnering, not the usual goat rodeo putting socks on an octopus.'
    },
    separator: {
      icon: 'dungeon'
    }
  }
];
