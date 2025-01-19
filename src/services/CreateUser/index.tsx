import { redirect } from 'next/navigation';
import { api } from '../api';

const createUser = async (userData: {
  name: string;
  email: string;
  password: string;
  lastname: string;
}) => {
  try {
    const response = await api.post('/users', userData);

    if (response.status === 201 || response.data.success) {
      redirect('/login');
    }
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default createUser;
