import axios from 'axios';

import * as misc from './misc';

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

export const signIn = async ({
  email,
  password,
}: Pick<SignUpProps, 'email' | 'password'>) => {
  try {
    const login = await axios
      .post(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/auth/signin`, {
        email,
        password,
      })
      .then((res) => res.data);

    return login;
  } catch (e) {
    throw new Error(misc.getErrorMessage(e));
  }
};

export const signUp = async ({
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
    throw new Error(misc.getErrorMessage(e));
  }
};
