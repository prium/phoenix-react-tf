export interface hotelInterFace {
  name: string;
  location: string;
  price: string;
  rating: string;
  img: string;
}
import hotel1 from 'assets/img/hotels/1.png';
import hotel2 from 'assets/img/hotels/2.png';
import hotel3 from 'assets/img/hotels/3.png';
import hotel4 from 'assets/img/hotels/4.png';
import hotel5 from 'assets/img/hotels/5.png';
import hotel6 from 'assets/img/hotels/6.png';
import hotel7 from 'assets/img/hotels/7.png';
import hotel8 from 'assets/img/hotels/8.png';
import hotel9 from 'assets/img/hotels/9.png';
import hotel10 from 'assets/img/hotels/10.png';
import hotel11 from 'assets/img/hotels/11.png';
import hotel12 from 'assets/img/hotels/12.png';
import hotel13 from 'assets/img/hotels/13.png';
import hotel14 from 'assets/img/hotels/14.png';
import hotel15 from 'assets/img/hotels/15.png';
import hotel16 from 'assets/img/hotels/16.png';

export const hotels: hotelInterFace[] = [
  {
    name: 'Hotel Palace',
    location: 'Bangkok, Thailand',
    price: '33.48',
    rating: '3.8',
    img: hotel1
  },
  {
    name: 'Silom Furama',
    location: 'Bangkok, Thailand',
    price: '32.27',
    rating: '4.0',
    img: hotel2
  },
  {
    name: 'Hotel Prince Palace',
    location: 'Bangkok, Thailand',
    price: '38.96',
    rating: '3.9',
    img: hotel3
  },
  {
    name: 'Hotel Grandmas Plus',
    location: 'Bali, Indonesia',
    price: '13.99',
    rating: '4.5',
    img: hotel4
  },
  {
    name: 'Hotel Asia Solo',
    location: 'Jawa Tengah, Indonesia',
    price: '14.66',
    rating: '3.9',
    img: hotel5
  },
  {
    name: 'Golden Inn Kuta',
    location: 'Bali, Indonesia',
    price: '52.91',
    rating: '4.4',
    img: hotel6
  },
  {
    name: 'The Shanty House',
    location: 'Bali, Indonesia',
    price: '87.71',
    rating: '4.7',
    img: hotel7
  },
  {
    name: 'Hotel Kiwi International',
    location: 'New Zealand',
    price: '41.19',
    rating: '3.7',
    img: hotel8
  },
  {
    name: 'Residences of the Angel',
    location: 'Locarno, Switzerland',
    price: '83.41',
    rating: '4.9',
    img: hotel9
  },
  {
    name: "Brenig Kulm's Gasthaus",
    location: 'Meiringen, Switzerland',
    price: '109.29',
    rating: '4.2',
    img: hotel10
  },
  {
    name: 'The Andermatt Chedi',
    location: 'Andermatt, Switzerland',
    price: '107.25',
    rating: '4.6',
    img: hotel11
  },
  {
    name: 'Interlaken Alplodge',
    location: 'Interlaken, Switzerland',
    price: '120.32',
    rating: '4.5',
    img: hotel12
  },
  {
    name: 'Inn at Agus Beach',
    location: 'Bali, Indonesia',
    price: '25.98',
    rating: '4.2',
    img: hotel13
  },
  {
    name: 'Hotel Cahya Nirwana',
    location: 'Jawa Tengah, Indonesia',
    price: '22.45',
    rating: '4.1',
    img: hotel14
  },
  {
    name: 'Villas at Atoll Haven',
    location: 'Bali, Indonesia',
    price: '145.10',
    rating: '3.3',
    img: hotel15
  },
  {
    name: 'The Sanchaya Hotel',
    location: 'Bali, Indonesia',
    price: '45.22',
    rating: '4.5',
    img: hotel16
  }
];
