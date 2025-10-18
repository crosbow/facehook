import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import ProfileProvider from "../providers/ProfileProvider";

const PrivetRoute = () => {
  const { auth } = useAuth();

  if (auth?.tokens?.accessToken) {
    return (
      <ProfileProvider>
        <Outlet />
      </ProfileProvider>
    );
  }

  return <Navigate to="/login" />;
};
export default PrivetRoute;
