import { use } from "react";
import { AuthContext } from "../providers/AuthProvider";

const useAuth = () => {
  return use(AuthContext);
};
export default useAuth;
