import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { generateClient } from "../../client";
import { urls } from "@/app/utils/urls";

const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials): Promise<never | null> {
        try {
          const client = generateClient();
          const response = await client.post(urls.auth.login, {
            username: credentials?.username,
            password: credentials?.password,
          });
          const user: ISession = response.data;

          // If login is successful, return the user object
          if (user) return { user } as never;
          // return null;
        } catch (error) {
          console.log("Authorization error:", error);
          return null;
        }
        return null;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      // If user data is available, add it to the token
      return { ...token, ...user };
    },
    async session({ session, token }) {
      // Add user data to session if available

      session.user = token as never;
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
