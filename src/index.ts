// console.log('start');
// import { graphql, GraphQLSchema, GraphQLObjectType, GraphQLString } from 'graphql';




// import { ApolloServer, gql } from 'apollo-server-express';
// import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
// import express from 'express';
// import http from 'http';
// var schema = new GraphQLSchema({
//   query: new GraphQLObjectType({
//     name: 'RootQueryType',
//     fields: {
//       hello: {
//         type: GraphQLString,
//         resolve() {
//           return 'world';
//         },
//       },
//     },
//   }),
// });
// // The GraphQL schema
// const typeDefs = gql`
//   type Query {
//     "A simple type for getting started!"
//     hello: String
//   }
// `;

// // A map of functions which return data for the schema.
// // const resolvers = {
// //   Query: {
// //     hello: () => 'world',
// //   },
// // };
// import resolvers from './resolvers.js'
// console.log(resolvers)
// // async function startApolloServer(typeDefs, resolvers) {
// //   const app = express();
// //   const httpServer = http.createServer(app);
// //   const server = new ApolloServer({
// //     typeDefs,
// //     resolvers,
// //     csrfPrevention: true,
// //     cache: 'bounded'
// //     // plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
// //   });

// //   await server.start();
// //   server.applyMiddleware({ app });
// //   await new Promise(resolve => httpServer.listen({ port: 4000 }, resolve));
// //   console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
// // }
// // startApolloServer(typeDefs, resolvers);
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
