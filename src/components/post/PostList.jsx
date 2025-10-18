import PostCard from "./PostCard";

const PostList = ({ posts }) => {
  return (
    <div>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};
export default PostList;
