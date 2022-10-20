import axios from 'axios';

export const upperCase = (word: string) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

export const addToMailingList = async (email: string) => {
  return axios.post('/api/sendgrid', {
    data: {
      email,
    },
  });
};

