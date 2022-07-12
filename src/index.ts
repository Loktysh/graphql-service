import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import typeDefs from './types';
import resolvers from './resolvers';

async function serverApp() {
  const app: express.Application = express();

  app.use(express.json());

  app.use('/', (req, res, next) => {
    if (req.originalUrl === '/') {
      res.send('Service is running!');
      return;
    }
    next();
  });

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true,
    cache: 'bounded',
    // validationRules: [depthLimit],
    context: ({ req }) => {
      const token = req.headers.authorization || '';
      return { token };
    },
  });

  await server.start();
  server.applyMiddleware({ app });
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);

  app.listen(4000, (): void => {
    console.log(`App is running on http://localhost:4000`);
  });
}

serverApp();