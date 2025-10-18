import { useRef } from "react";
import { actions } from "../../actions";
import useAxios from "../../hooks/useAxios";
import useProfile from "../../hooks/useProfile";

const ProfileImage = () => {
  const {
    state: { user },
    dispatch,
  } = useProfile();
  const imgFileRef = useRef();

  const { api } = useAxios();

  const handleUploadAvatar = async (e) => {
    const imageBuffer = e.target.files[0];

    try {
      const formData = new FormData();
      formData.append("avatar", imageBuffer);

      const response = await api.patch(`/profile/${user.id}`, formData);

      dispatch({
        type: actions.profile.IMAGE_UPDATED,
        data: response.data.avatar,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangeAvatar = async () => {
    imgFileRef.current.click();

    imgFileRef.current.addEventListener("change", handleUploadAvatar);
  };
  return (
    <div className="relative mb-8 max-h-[180px] max-w-[180px] rounded-full lg:mb-11 lg:max-h-[218px] lg:max-w-[218px]">
      <img
        className="max-w-full"
        src={`${import.meta.env.VITE_BASE_URL}/${user?.avatar}`}
        alt={user.firstName}
      />
      <input ref={imgFileRef} type="file" accept="image/*" hidden />
      <button
        onClick={handleChangeAvatar}
        className="flex-center absolute bottom-4 right-4 h-7 w-7 rounded-full bg-black/50 hover:bg-black/80"
      >
        Edit
      </button>
    </div>
  );
};
export default ProfileImage;
