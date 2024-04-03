
import usePostList from './hooks/usePostList'

const PostList = () => {
const {data: posts, error, isLoading} = usePostList();
  
  if(isLoading) return <p>Loading...</p>
  if (error) return <p>{error.message}</p>;

  return (
    <ul className="list-group">
      {posts?.map((post) => (
        <li key={post.id} className="list-group-item">
          {post.title}
        </li>
      ))}
    </ul>
  );
};

export default PostList;
