// eslint-disable-next-line @typescript-eslint/no-unused-vars
import NextAuth from "next-auth";
declare module "next-auth" {
  interface Session {
    user: {
      user: {
        user: {
          id: number;
          username: string;
          tasks: array;
          sessions: [
            {
              id: number;
              token: string;
              expiration: number;
            }
          ];
        };
        token: string;
      };
      iat: number;
      exp: number;
      jti: string;
    };
    expires: string;
  }
}
