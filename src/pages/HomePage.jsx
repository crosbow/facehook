import { Suspense, useEffect, useReducer } from "react";
import { actions } from "../actions";
import PostList from "../components/post/PostList";
import useAuth from "../hooks/useAuth";
import useAxios from "../hooks/useAxios";
import postReducer, { initialState } from "../reducers/postReducer";
import { applyBackendImage } from "../utils/applyBackendImage";

const HomePage = () => {
  const {
    auth: { user },
  } = useAuth();
  const [postState, dispatch] = useReducer(postReducer, initialState);

  const { api } = useAxios();

  useEffect(() => {
    const fetchPosts = async () => {
      dispatch({
        type: actions.post.DATA_FETCHING,
      });
      try {
        const response = await api("/posts");

        dispatch({
          type: actions.post.DATA_FETCHED,
          data: response.data,
        });
      } catch (error) {
        dispatch({
          type: actions.post.DATA_FETCHING,
          error: error?.response || "Failed to fetch post",
        });
      }
    };

    fetchPosts();
  }, [api]);

  return (
    <main className="mx-auto max-w-[1020px] py-8">
      <div className="container">
        {/* what's on mind */}
        {/* On clicking the TextArea, Create New Post Modal will apear */}
        <div className="card">
          <div className="flex-center mb-3 gap-2 lg:gap-4">
            <img
              className="max-w-10 max-h-10 rounded-full lg:max-h-[58px] lg:max-w-[58px]"
              src={applyBackendImage(user.avatar)}
              alt="avatar"
            />
            <div className="flex-1">
              <textarea
                className="h-16 w-full rounded-md bg-lighterDark p-3 focus:outline-none sm:h-20 sm:p-6"
                name="post"
                id="post"
                placeholder="What's on your mind?"
                defaultValue={""}
              />
            </div>
          </div>
        </div>

        <Suspense fallback={<h2>Fetching posts...</h2>}>
          <PostList posts={postState.posts} />
        </Suspense>
      </div>
    </main>
  );
};
export default HomePage;
