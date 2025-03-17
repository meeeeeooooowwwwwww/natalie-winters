const environments = {
  development: {
    main: {
      url: 'http://localhost:3000',
      api: 'http://localhost:3000/api'
    },
    business: {
      url: 'http://localhost:3001',
      api: 'http://localhost:3001/api'
    },
    news: {
      url: 'http://localhost:3002',
      api: 'http://localhost:3002/api'
    }
  },
  production: {
    main: {
      url: 'https://www.nataliegwinters.com',
      api: 'https://www.nataliegwinters.com/api'
    },
    business: {
      url: 'https://business.nataliegwinters.com',
      api: 'https://business.nataliegwinters.com/api'
    },
    news: {
      url: 'https://news.nataliegwinters.com',
      api: 'https://news.nataliegwinters.com/api'
    }
  }
};

module.exports = environments; 