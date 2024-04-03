
import { useState } from 'react';
import usePostList from './hooks/usePostList'

const PostList = () => {
  const [userId, setUserId] = useState<number>()
const {data, error, isLoading} = usePostList(userId);
  
  if(isLoading) return <p>Loading...</p>
  if (error) return <p>{error.message}</p>;

  return (
    <>
    <select 
    onChange={(event) => setUserId(parseInt(event.target.value))}
    value={userId}
    className="form-select mb-3">
      <option value=""></option>
      <option value="1">user 1</option>
      <option value="2">user 2</option>
      <option value="3">user 3</option>
    </select>
    <ul className="list-group">
      {data?.map((post) => (
        <li key={post.id} className="list-group-item">
          {post.title}
        </li>
      ))}
    </ul>
    </>
  );
};

export default PostList;
