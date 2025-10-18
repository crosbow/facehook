import PostAction from "./PostAction";
import PostBody from "./PostBody";
import PostComments from "./PostComments";
import PostHeader from "./PostHeader";

const PostCard = ({ post }) => {
  const { content, image, comments, likes, id } = post;

  return (
    <article className="card mt-6 lg:mt-8">
      <PostHeader post={post} />
      <PostBody content={content} image={image} />
      <PostAction totalComments={comments.length} likes={likes} postId={id} />
      <PostComments comments={comments} postId={id} />
    </article>
  );
};
export default PostCard;
