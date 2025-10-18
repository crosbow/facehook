import { Suspense, useEffect } from "react";
import { actions } from "../actions";
import ProfileInfo from "../components/profile/profileInfo";
import useAuth from "../hooks/useAuth";
import useAxios from "../hooks/useAxios";
import useProfile from "../hooks/useProfile";

const ProfilePage = () => {
  const { auth } = useAuth();

  const { api } = useAxios();
  const {
    state: { posts },
    dispatch,
  } = useProfile();

  useEffect(() => {
    const fetchProfileInfo = async () => {
      try {
        dispatch({
          type: actions.profile.DATA_FETCHING,
        });
        const response = await api(`/profile/${auth.user.id}`);

        dispatch({
          type: actions.profile.DATA_FETCHED,
          data: response.data,
        });
      } catch (error) {
        dispatch({
          type: actions.profile.DATA_FETCH_ERROR,
          error:
            error?.message ||
            "Failed to fetch profile info, please reload the page or try again",
        });
      }
    };

    fetchProfileInfo();
  }, [api, auth.user.id, dispatch]);

  return (
    <main className="mx-auto max-w-[1020px] py-8">
      <div className="container">
        <Suspense
          fallback={
            <h2 className="text-2xl text-white">User data fetching...</h2>
          }
        >
          <ProfileInfo />
        </Suspense>
        <div>
          {posts.length > 0 ? (
            <>
              <h4 className="mt-6 text-xl lg:mt-8 lg:text-2xl">
                You have {posts.length} posts
              </h4>

              <Suspense
                fallback={
                  <h2 className="text-2xl text-white">Post fetching...</h2>
                }
              >
                <Posts posts={posts} />
              </Suspense>
            </>
          ) : (
            <h2 className="text-2xl text-white/50">No post found!</h2>
          )}
        </div>
      </div>
    </main>
  );
};

export default ProfilePage;
