import { createContext, useReducer } from "react";
import profileReducer, { initialState } from "../reducers/profileReducer";

export const ProfileContext = createContext();

const ProfileProvider = ({ children }) => {
  const [state, dispatch] = useReducer(profileReducer, initialState);

  return (
    <ProfileContext value={{ state, dispatch }}>{children}</ProfileContext>
  );
};
export default ProfileProvider;
