import { useNavigate } from "react-router-dom";
import { SVGIcons } from "../../assets/icons";
import useAuth from "../../hooks/useAuth";

const Logout = () => {
  const navigate = useNavigate();
  const { setAuth } = useAuth();

  const handleLogout = () => {
    console.log("Logout user");

    setAuth({});
    navigate("/login");
  };

  return (
    <button onClick={handleLogout} className="icon-btn">
      <img src={SVGIcons.LogoutIcon} alt="Logout" />
    </button>
  );
};
export default Logout;
