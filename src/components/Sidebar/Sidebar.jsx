import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { Link } from "react-router-dom";

const Sidebar = () => {
    const { logOut, setLoading, user } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {
        setLoading(false);
      })
      .catch((error) => console.log(error));
  };
  const navList = (
    <ul>
      <li>
        <Link to="dashboard">Dashboard</Link>
      </li>
      <li>
        <Link to="profile">My profile</Link>
      </li>
      <li>
        <button onClick={handleLogOut}>Log Out</button>
      </li>
    </ul>
  );
    return (
        <div className="bg-[#2C333A] text-[#eaeaea] list-none  h-screen w-[180px] p-0">
            {navList}
        </div>
    );
};

export default Sidebar;