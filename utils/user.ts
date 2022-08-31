import axios from 'axios';
import { signIn } from 'next-auth/react';
import misc from './misc';

interface SignUpProps {
  nickname: string;
  email: string;
  password: string;
  passwordConfirm: string;
  LOCATION: boolean;
  PRIVACY_POLICY: boolean;
  SERVICE: boolean;
}

const getTerms = (
  check: Pick<SignUpProps, 'LOCATION' | 'SERVICE' | 'PRIVACY_POLICY'>
) => {
  const term: string[] = [];
  if (check.SERVICE) term.push('SERVICE');
  if (check.PRIVACY_POLICY) term.push('PRIVACY_POLICY');
  if (check.LOCATION) term.push('LOCATION');
  return term;
};

const userService = {
  signIn: async ({
    email,
    password,
  }: Pick<SignUpProps, 'email' | 'password'>) => {
    try {
      const res = await axios
        .post('/server/api/auth/signin', {
          email,
          password,
        })
        .then((res) => res.data);
      return res;
    } catch (e) {
      throw Error(misc.getErrorMessage(e));
    }
  },
  signUp: async ({
    nickname,
    email,
    password,
    passwordConfirm,
    ...check
  }: SignUpProps) => {
    const term = getTerms(check);
    try {
      const create = await axios.post(`/server/api/auth/signup`, {
        nickname,
        email,
        password,
        type: 'NATIVE',
        term,
      });

      return create;
    } catch (e) {
      throw Error(misc.getErrorMessage(e));
    }
  },
  signOut: () => {},
};

export default userService;
