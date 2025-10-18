import { useState } from "react";
import { actions } from "../../actions";
import useAxios from "../../hooks/useAxios";
import useProfile from "../../hooks/useProfile";

const Bio = () => {
  const {
    state: { user },
    dispatch,
  } = useProfile();

  const { api } = useAxios();
  const [bio, setBio] = useState(user?.bio);
  const [editMode, setEditMode] = useState(false);

  const handleUpdateBio = async () => {
    // back to normal mode, update bio in server side, dispatch "USER_DATA_EDITED" action
    setEditMode(false);

    const response = await api.patch(`/profile/${user.id}`, { bio });

    dispatch({
      type: actions.profile.USER_DATA_EDITED,
      data: response.data.bio,
    });
  };
  return (
    <div className="mt-4 flex items-start gap-2 lg:mt-6">
      <div className="flex-1">
        {!editMode ? (
          <p className="leading-[188%] text-gray-400 lg:text-lg">{bio}</p>
        ) : (
          <textarea
            value={bio}
            rows={5}
            cols={55}
            onChange={(e) => setBio(e.target.value)}
          />
        )}
      </div>

      {!editMode ? (
        <button
          onClick={() => setEditMode(true)}
          className="flex-center h-7 w-7 rounded-full"
        >
          Edit
        </button>
      ) : (
        <button
          onClick={handleUpdateBio}
          className="flex-center h-7 w-7 rounded-full z-50"
        >
          Save
        </button>
      )}
    </div>
  );
};
export default Bio;
