module.exports = ({ env }) => {
    const client = 'postgres';
  
    const connections = {
      postgres: {
        connection: {
          connectionString: env('DATABASE_URL'),
          schema: 'public',
        },
      }
    };
  
    return {
      connection: {
        client,
        ...connections[client],
      },
    };
  };