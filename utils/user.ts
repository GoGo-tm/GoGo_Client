import axios from 'axios';
import misc from './misc';

interface SignInProps {}

interface SignUpProps {
  nickname: string;
  email: string;
  password: string;
}

const userService = {
  signIn: async () => {},
  signUp: async ({ nickname, email, password }: SignUpProps) => {
    const res = await axios
      .post(`/server/api/auth/signup`, {
        nickname,
        email,
        password,
        type: 'NATIVE',
      })
      .then((res) => res.data);
    return res;
  },
  signOut: () => {},
};

export default userService;
