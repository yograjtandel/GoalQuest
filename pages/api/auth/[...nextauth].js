import NextAuth from 'next-auth';
import Auth0Provider from 'next-auth/providers/auth0';
import action from '@/src/utility/action';
// import { MongoDBAdapter } from '@auth/mongodb-adapter';
// import clientPromise from '../../../lib/mongodb';

export const authOptions = {
  providers: [
    Auth0Provider({
      clientId: process.env.AUTH0_CLIENT_ID,
      clientSecret: process.env.AUTH0_CLIENT_SECRET,
      issuer: process.env.AUTH0_ISSUER,
    }),
  ],
  //   adapter: MongoDBAdapter(clientPromise),
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      debugger;
      const res = await action({
        method: 'get',
        url: `/v1/user?limit=0&&email=${user.email}`,
      });
      debugger;
      return res.data;
    },
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      debugger;
      return token;
    },
    session: async ({ session, token, user }) => {
      debugger;
      //   session.role = user.role || 'not_authorised';
      //   session.id = user.id;
      return Promise.resolve(session);
    },
  },
};
// debugger;
export default NextAuth(authOptions);
