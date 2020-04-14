const sentences =
  [
    'Myths are public dreams, dreams are private myths.',
    'The most important thing in life will always be the people right there, right now.',
    'You need to believe that something extraordinary is possible.',
    'You\'re going to the top of this mountain, broken legs and all.',
    'Some of the best lessons are learned from past mistakes.',
    'The minute you settle for less than you deserve, you get even less than you settled for. ',
  ];
const texts =
  [
    { route: '/blog/online', content: 'whyyy his blog上线啦～～' },
    { route: '/blog/maintain', content: '维护公告' },
    {
      route: '/blog/sentences',
      content: '每日一句: The minute you settle for less than you deserve, you get even less than you settled for.',
    },
  ];

const animate = false;

const scroll = {
  texts,
  animate,
  sentences,
};

export default scroll;
