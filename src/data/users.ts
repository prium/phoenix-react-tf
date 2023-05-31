import team33 from 'assets/img/team/33.webp';
import team30 from 'assets/img/team/30.webp';
import team31 from 'assets/img/team/31.webp';
import team60 from 'assets/img/team/60.webp';
import team65 from 'assets/img/team/65.webp';

export interface Member {
  name: string;
  avatar: string;
  username: string;
  connections: number;
  mutual: number;
}

export const members: Member[] = [
  {
    name: 'Tyrion Lannister',
    avatar: team33,
    username: 'tyrion222',
    connections: 224,
    mutual: 24
  },
  {
    name: 'Milind Mikuja',
    avatar: team30,
    username: 'milind12',
    connections: 178,
    mutual: 56
  },
  {
    name: 'Stanly Drinkwater',
    avatar: team31,
    username: 'drinkwater8',
    connections: 204,
    mutual: 4
  },
  {
    name: 'Josef Stravinsky',
    avatar: team60,
    username: 'josef60',
    connections: 556,
    mutual: 15
  },
  {
    name: 'Igor Borvibson',
    avatar: team65,
    username: 'Igor65',
    connections: 122,
    mutual: 9
  }
];
