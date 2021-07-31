const ghpages = require('gh-pages');

ghpages.publish(
  'public',
  {
    branch: 'gh-pages',
    repo: 'https://github.com/smcgovern-proj/smcgovern-proj.github.io.git',
    user: {
      name: 'Sean McGovern',
      email: 'smcgovern135@gmail.com'
    }
  },
  () => console.log('finished deploying!')
);
