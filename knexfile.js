// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres:///doughnuts-one'
    }
  },  
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL + '?ssl=true'
  }

};
