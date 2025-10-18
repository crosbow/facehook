import { use } from "react";
import { ProfileContext } from "../providers/ProfileProvider";

const useProfile = () => {
  return use(ProfileContext);
};
export default useProfile;
