import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { GITHUB, JWT } from "lib/env";
import { loginService } from "services";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: GITHUB.CLIENT_ID!,
      clientSecret: GITHUB.CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async jwt({ token, account }: any) {
      if (account?.user) {
        token.user = account?.user;
      }
      return token;
    },
    async signIn({ user, account, profile }: any) {
      try {
        const userData = {
          name: user.name,
          image: user.image,
          githubId: account.providerAccountId,
          githubUsername: profile.login,
        };
        const userInfo = await loginService(userData);
        account.user = { ...userInfo.user, token: userInfo.token };
      } catch (error) {
        return "/";
      }
      return true;
    },
    async session({ session, token }: any) {
      if (token?.user) {
        session.user = token?.user;
      }
      return session;
    },
  },
  secret: JWT.SECRET,
};

export default NextAuth(authOptions);
