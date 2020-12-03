
import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import Adapters from "next-auth/adapters";
import Navbar_compo from '../../../components/navbar_compo'
import { NextApiHandler } from "next";
import { PrismaClient } from "@prisma/client";



// export default  function SigninHeader() {
//   return (
//   <div>
//     <Navbar_compo/>
//     <authHandler/>
//   </div>
    
//   )
// }





const prisma = new PrismaClient();
//const authHandler= (req, res) => NextAuth(req, res, options);

const authHandler: NextApiHandler = (req, res) => NextAuth(req, res, options);
export default authHandler;

const options = {
  site: process.env.SITE || 'http://localhost:3000',
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    Providers.Google({
        clientId: process.env.GOOGLE_ID,
        clientSecret: process.env.GOOGLE_SECRET,
      }),
    Providers.Facebook({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET,
    }),
    Providers.Twitter({
      clientId: process.env.TWITTER_ID,
      clientSecret: process.env.TWITTER_SECRET,
    }),
    Providers.Email({
      server: {
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT),
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASSWORD,
        },
      },
      from: process.env.SMTP_FROM,
    }),
  ],
  // @ts-ignore
  adapter: Adapters.Prisma.Adapter({
    prisma,
  }),

  secret: process.env.SECRET,
};































// import NextAuth from "next-auth";
// import Providers from "next-auth/providers";
// import Adapters from "next-auth/adapters";

// import { NextApiHandler } from "next";
// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

// const authHandler: NextApiHandler = (req, res) => NextAuth(req, res, options);
// export default authHandler;

// const options = {
//   providers: [
//     Providers.GitHub({
//       clientId: process.env.GITHUB_ID,
//       clientSecret: process.env.GITHUB_SECRET,
//     }),
//     Providers.Email({
//       server: {
//         host: process.env.SMTP_HOST,
//         port: Number(process.env.SMTP_PORT),
//         auth: {
//           user: process.env.SMTP_USER,
//           pass: process.env.SMTP_PASSWORD,
//         },
//       },
//       from: process.env.SMTP_FROM,
//     }),
//   ],
//   // @ts-ignore
//   adapter: Adapters.Prisma.Adapter({
//     prisma,
//   }),

//   secret: process.env.SECRET,
// };
