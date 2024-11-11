interface ILoginForm {
  username: string;
  password: string;
}

interface IInputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string;
  error?: string;
}

interface IUser {
  id: number;
  username: string;
  tasks: string[];
  sessions: string[];
}

interface ILoginDTO {
  data: {
    user: IUser;
    token: string;
  };
}

interface ISession {
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
    jwt?: "string";
  };
  expires: string;
}
