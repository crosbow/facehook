import useProfile from "../../hooks/useProfile";
import Post from "./Post";

const Posts = () => {
  const {
    state: { posts },
  } = useProfile();

  return (
    <div>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};
export default Posts;
