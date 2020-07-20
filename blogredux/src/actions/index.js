import jsonplaceholder from '../apis/jsonplaceholder';

export const FetchPosts = () => {
  const promise = jsonplaceholder.get('/posts');
  return {
    type: 'FETCH_POST',
    payload : promise
  };
};
