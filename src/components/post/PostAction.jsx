import { useState } from "react";
import CommentIcon from "../../assets/icons/comment.svg";
import ShareIcon from "../../assets/icons/share.svg";
import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";

const PostAction = ({ totalComments, likes, postId }) => {
  const { auth } = useAuth();
  const [isLiked, setIsLiked] = useState(likes.includes(auth.user.id));

  const { api } = useAxios();

  const handleLikePost = async () => {
    const response = await api.patch(`/posts/${postId}/like`);

    if (response.data.message === "Post Liked") {
      setIsLiked(true);
    } else {
      setIsLiked(false);
    }
  };

  return (
    <div className="flex items-center justify-between py-6 lg:px-10 lg:py-8">
      <button
        onClick={handleLikePost}
        className="flex-center gap-2 text-xs font-bold text-[#B8BBBF] hover:text-white lg:text-sm cursor-pointer"
      >
        <span>{isLiked ? "Liked" : "Like"}</span>
      </button>

      <button className="icon-btn space-x-2 px-6 py-3 text-xs lg:px-12 lg:text-sm">
        <img src={CommentIcon} alt="Comment" />
        <span>Comment({totalComments})</span>
      </button>

      <button className="flex-center gap-2 text-xs font-bold text-[#B8BBBF] hover:text-white lg:text-sm">
        <img src={ShareIcon} alt="Share" />
        <span>Share</span>
      </button>
    </div>
  );
};
export default PostAction;
