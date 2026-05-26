import { Axios } from "../Services/ApiService";

export const fetchPosts = async () => {
  const response = await Axios.get(
    "https://jsonplaceholder.typicode.com/posts",
  );

  return response.data;
};
