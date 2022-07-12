// // import { trackResolvers } from './track/resolvers';
// // import { userResolvers } from "./resolvers";
// // import { genreResolvers } from "./genre/resolvers";
// // import { artistResolvers } from "./artist/resolvers";
// // import { albumResolvers } from "./album/resolvers";
// // import { bandResolvers } from "./band/resolvers";
// // import { favouritesResolvers } from "./favourites/resolvers";
// import userResolvers from "./user/userResolver";
// // const resolvers =
// export default [
//   userResolvers
// ];
// // trackResolvers,
//   // albumResolvers,
//   // favouritesResolvers,
//   // bandResolvers,
//   // artistResolvers,
//   // genreResolvers,
import { trackResolvers } from './track/resolvers';
import { userResolvers } from "./user/resolvers";
import { genreResolvers } from "./genre/resolvers";
import { artistResolvers } from "./artist/resolvers";
import { albumResolvers } from "./album/resolvers";
import { bandResolvers } from "./band/resolvers";
import { favouritesResolvers } from "./favourites/resolvers";

export default [
  trackResolvers,
  albumResolvers,
  favouritesResolvers,
  bandResolvers,
  artistResolvers,
  genreResolvers,
  userResolvers
];