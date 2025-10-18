import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";
import { applyBackendImage } from "../../utils/applyBackendImage";
import CommentList from "./CommentList";

const PostComments = ({ comments, postId }) => {
  const {
    auth: { user },
  } = useAuth();
  const [commentText, setCommentText] = useState("");
  const [postComments, setPostComments] = useState(comments);
  const { api } = useAxios();

  const handleKeyPress = async (e) => {
    const keyCode = e.keyCode;

    if (keyCode === 13) {
      // perform comment operation
      const response = await api.patch(`/posts/${postId}/comment`, {
        comment: commentText,
      });

      setPostComments(response.data.comments);
    }
  };
  return (
    <div>
      {/* comment input box */}
      <div className="flex-center mb-3 gap-2 lg:gap-4">
        <img
          className="max-w-7 max-h-7 rounded-full lg:max-h-[34px] lg:max-w-[34px]"
          src={applyBackendImage(user.avatar)}
          alt="avatar"
        />
        <div className="flex-1">
          <input
            type="text"
            className="h-8 w-full rounded-full bg-lighterDark px-4 text-xs focus:outline-none sm:h-[38px]"
            name="post"
            id="post"
            placeholder="What's on your mind?"
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            onKeyDown={handleKeyPress}
          />
        </div>
      </div>
      {/* comment filter button */}
      <div className="mt-4">
        <button className="text-gray-300 max-md:text-sm">All Comment ▾</button>
      </div>
      <CommentList postComments={postComments} />
    </div>
  );
};
export default PostComments;
