/*const sentences =
  [
    'Myths are public dreams, dreams are private myths.',
    'The most important thing in life will always be the people right there, right now.',
    'You need to believe that something extraordinary is possible.',
    'You\'re going to the top of this mountain, broken legs and all',
  ];*/
const texts =
  [
    { route: '/blog/online', content: 'whyyy his blog上线啦～～' },
    { route: '/blog/maintain', content: '维护公告' },
    { route: '/blog/sentences', content: '每日一句: Myths are public dreams, dreams are private myths.' },
  ];

const animate = false;

const scroll = {
  texts,
  animate,
};

export default scroll;
