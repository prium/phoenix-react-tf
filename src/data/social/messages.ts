import team30 from 'assets/img/team/30.webp';
import team35 from 'assets/img/team/35.webp';
import team57 from 'assets/img/team/57.webp';
import team59 from 'assets/img/team/59.webp';

export interface MessagesData {
  avatar: {
    size: string;
    img: string;
    status: string;
    imgClass?: string;
  };
  name: string;
  message: string;
}

export const messages: MessagesData[] = [
  {
    avatar: {
      size: 'm',
      img: team35,
      status: 'online'
    },
    name: 'Stanly Drinkwater',
    message: 'When you gonna pay me back, don’t leave me hanging'
  },
  {
    avatar: {
      size: 'm',
      img: team30,
      status: 'online'
    },
    name: 'Milind Mikuja',
    message: 'But the mare fact that she said that makes'
  },
  {
    avatar: {
      size: 'm',
      img: '',
      status: 'online',
      imgClass: 'avatar-placeholder'
    },
    name: 'Josef Stravinsky',
    message: 'Oi Cult.'
  },
  {
    avatar: {
      size: 'm',
      img: team59,
      status: 'online'
    },
    name: 'Martina scorcese',
    message: 'Thanks for that. Sincerely.'
  },
  {
    avatar: {
      size: 'm',
      img: team57,
      status: 'online'
    },
    name: 'Meekona Zikon',
    message: 'I am Outside, Come here, Lets smoke...'
  }
];
