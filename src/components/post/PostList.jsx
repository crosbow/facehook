import useProfile from "../../hooks/useProfile";
import PostCard from "./PostCard";

const PostList = () => {
  const {
    state: { posts },
  } = useProfile();

  return (
    <div>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};
export default PostList;
