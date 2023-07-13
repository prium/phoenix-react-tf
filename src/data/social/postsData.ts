import team9 from 'assets/img/team/9.webp';
import team14 from 'assets/img/team/14.webp';
import team20 from 'assets/img/team/20.webp';
import team23 from 'assets/img/team/23.webp';
import team27 from 'assets/img/team/27.webp';
import team30 from 'assets/img/team/30.webp';
import team59 from 'assets/img/team/59.webp';
import team61 from 'assets/img/team/61.webp';
import team62 from 'assets/img/team/62.webp';
import gallery17 from 'assets/img/gallery/17.png';
import gallery18 from 'assets/img/gallery/18.png';
import gallery19 from 'assets/img/gallery/19.png';
import gallery20 from 'assets/img/gallery/20.png';
import gallery21 from 'assets/img/gallery/21.png';
import gallery22 from 'assets/img/gallery/22.png';
import gallery23 from 'assets/img/gallery/23.png';
import gallery24 from 'assets/img/gallery/24.png';
import gallery25 from 'assets/img/gallery/25.png';
import gallery26 from 'assets/img/gallery/26.png';

export interface PostsData {
  name: string;
  avatar: string;
  time: string;
  location?: string;
  post: string;
  images?: {
    cols: number;
    src: string;
  }[];
  comments?: {
    name: string;
    avatar: string;
    time: string;
    classes?: string;
    comment: string;
    reply?: {
      name: string;
      avatar: string;
      time: string;
      comment: string;
    }[];
  }[];
  commentInputAvatar: string;
  likes: string;
  comment: string;
  shares: string;
}

export const postData: PostsData[] = [
  {
    name: 'Zingko Kudobum',
    avatar: team59,
    time: '35 mins ago',
    location: 'Consett, UK',
    post: 'Some paintings I love',
    images: [
      {
        cols: 3,
        src: gallery17
      },
      {
        cols: 3,
        src: gallery18
      },
      {
        cols: 6,
        src: gallery19
      }
    ],
    comments: [
      {
        name: 'Mamur Fechetti',
        avatar: team23,
        time: '35 mins ago',
        classes: 'pt-4',
        comment:
          'How long did it take to create this? It appears that you quickly produced the second one.',
        reply: [
          {
            name: 'Zingko Kudobum',
            avatar: team62,
            time: '5 mins ago',
            comment: `I am so clever that sometimes I don't understand a single word of what I am saying.`
          }
        ]
      }
    ],
    commentInputAvatar: team59,
    likes: '345 Likes',
    comment: '45 Comments',
    shares: '56 shares'
  },
  {
    name: 'Zingko Kudobum',
    avatar: team30,
    time: '35 mins ago',
    post: `A guy enters a bakery while carrying a 25-pound haddock.
      He asks the baker if he makes fish cakes. The rather perplexed baker responds in the negative.
      The guy responds "That's unfortunate.Today is his birthday"`,
    commentInputAvatar: team61,
    likes: '23 Likes',
    comment: '9 Comments',
    shares: '3 shares'
  },
  {
    name: 'Zingko Kudobum',
    avatar: team59,
    time: '35 mins ago',
    location: 'Consett, UK',
    post: 'Some paintings I love',
    images: [
      {
        cols: 3,
        src: gallery20
      },
      {
        cols: 3,
        src: gallery21
      }
    ],
    comments: [
      {
        name: 'Mamur Fechetti',
        avatar: team23,
        time: '35 mins ago',
        classes: 'pt-4',
        comment:
          'Time is the best teacher; Unfortunately it kills all its students!',
        reply: [
          {
            name: 'Zingko Kudobum',
            avatar: team62,
            time: '5 mins ago',
            comment: 'If you’re too open-minded, your brains will fall out.!'
          }
        ]
      }
    ],
    commentInputAvatar: team59,
    likes: '345 Likes',
    comment: '45 Comments',
    shares: '56 shares'
  }
];

export const profilePostData: PostsData[] = [
  {
    name: 'Erza Bridgest',
    avatar: team9,
    time: '35 mins ago',
    location: 'Mustafar, British Columbia',
    post: 'Melancholy is sadness that has taken on lightness.',
    images: [
      {
        cols: 3,
        src: gallery22
      },
      {
        cols: 3,
        src: gallery23
      },
      {
        cols: 6,
        src: gallery24
      }
    ],
    comments: [
      {
        name: 'Mamur Fechetti',
        avatar: team30,
        time: '35 mins ago',

        classes: 'pt-4',
        comment:
          'How long did it take to create this? It appears that you quickly produced the second one.',
        reply: [
          {
            name: 'Zingko Kudobum',
            avatar: team62,
            time: '5 mins ago',
            comment: `I am so clever that sometimes I don't understand a single word of what I am saying.`
          }
        ]
      }
    ],
    commentInputAvatar: team9,
    likes: '345 Likes',
    comment: '45 Comments',
    shares: '56 shares'
  },
  {
    name: 'Erza Bridgest',
    avatar: team9,
    time: '3 days ago',
    location: 'Lothal, USA',
    post: `A guy enters a bakery while carrying a 25-pound haddock.
      He asks the baker if he makes fish cakes. The rather perplexed baker responds in the negative.
      The guy responds "That's unfortunate.Today is his birthday"`,
    commentInputAvatar: team20,
    likes: '23 Likes',
    comment: '9 Comments',
    shares: '3 shares'
  },
  {
    name: 'Zingko Kudobum',
    avatar: team9,
    time: '35 mins ago',
    location: 'Consett, UK',
    post: 'Fear can hold you prisoner. Hope can set you free. - King',
    images: [
      {
        cols: 3,
        src: gallery25
      },
      {
        cols: 3,
        src: gallery26
      }
    ],
    comments: [
      {
        name: 'Sutanuka Gomez',
        avatar: team14,
        time: '35 mins ago',
        classes: 'pt-4',
        comment:
          'Time is the best teacher; Unfortunately it kills all its students!',
        reply: [
          {
            name: 'Zingko Kudobum',
            avatar: team27,
            time: '5 mins ago',
            comment: 'If you’re too open-minded, your brains will fall out.!'
          }
        ]
      }
    ],
    commentInputAvatar: team14,
    likes: '345 Likes',
    comment: '45 Comments',
    shares: '56 shares'
  }
];
