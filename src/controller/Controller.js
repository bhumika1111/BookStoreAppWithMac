import axios from "axios";

export const myAxiosGetRequest = async () => {
  const res = await axios({
    method: 'get',
    url: 'http://localhost:4003/book',
  });
  return res;
};

export const myAxiosPostRequest = async () => {
    const res = await axios({
      method: 'post',
      url: 'http://localhost:4003/book',
    });
    return res;
  };
  