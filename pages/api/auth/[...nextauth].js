import NextAuth from 'next-auth';
import Auth0Provider from 'next-auth/providers/auth0';
import { MongoDBAdapter } from '@auth/mongodb-adapter';
import clientPromise from '../../../lib/mongodb';

export const authOptions = {
  providers: [
    Auth0Provider({
      clientId: process.env.AUTH0_CLIENT_ID,
      clientSecret: process.env.AUTH0_CLIENT_SECRET,
      issuer: process.env.AUTH0_ISSUER,
    }),
  ],
  adapter: MongoDBAdapter(clientPromise),
  callbacks: {
    session: async ({ session, token, user }) => {
      session.role = user.role || 'not_authorised';
      return Promise.resolve(session);
    },
  },
};
export default NextAuth(authOptions);
