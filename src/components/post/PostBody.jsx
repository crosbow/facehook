import { applyBackendImage } from "../../utils/applyBackendImage";

const PostBody = ({ content, image }) => {
  return (
    <div className="border-b border-[#3F3F3F] py-4 lg:py-5 lg:text-xl">
      {/* If Post has Image, Render this block */}
      <div className="flex items-center justify-center overflow-hidden">
        <img
          className="max-w-full"
          src={applyBackendImage(image)}
          alt="poster"
        />
      </div>
      <p>{content}</p>
    </div>
  );
};
export default PostBody;
