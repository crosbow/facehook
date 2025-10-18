import { useState } from "react";
import ThreeDots from "../../assets/icons/3dots.svg";
import useAvatar from "../../hooks/useAvatar";
import { dateFormatter } from "../../utils/dateFormatter";

const PostHeader = ({ post }) => {
  const avatarUrl = useAvatar(post);

  const [showActions, setShowActions] = useState(false);

  return (
    <header className="flex items-center justify-between gap-4">
      {/* author info */}
      <div className="flex items-center gap-3">
        <img
          className="max-w-10 max-h-10 rounded-full lg:max-h-[58px] lg:max-w-[58px]"
          src={avatarUrl}
          alt="avatar"
        />
        <div>
          <h6 className="text-lg lg:text-xl">{post.author.name}</h6>
          <div className="flex items-center gap-1.5">
            <span className="text-sm text-gray-400 lg:text-base">
              {dateFormatter(post.createAt)} ago
            </span>
          </div>
        </div>
      </div>
      {/* author info ends */}
      {/* action dot */}
      <div className="relative">
        <button
          onClick={() => setShowActions((prev) => !prev)}
          className="cursor-pointer"
        >
          <img src={ThreeDots} alt="3dots of Action" />
        </button>
        {/* Action Menus Popup */}
        {showActions && (
          <div className="action-modal-container">
            <button className="action-menu-item hover:text-lwsGreen">
              Edit
            </button>
            <button className="action-menu-item hover:text-red-500">
              Delete
            </button>
          </div>
        )}
      </div>
      {/* action dot ends */}
    </header>
  );
};
export default PostHeader;
