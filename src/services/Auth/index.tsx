import { api } from '../api';

type SignInRequestProps = {
  email: string;
  password: string;
};

const signInRequest = async (userData: SignInRequestProps) => {
  try {
    const response = await api.post('/auth', userData);
    return {
      token: response.data.acessToken,
    };
  } catch (error) {
    throw error;
  }
};

export default signInRequest;
