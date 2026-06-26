import { useContext } from "react";
import AuthContext from "../context/AuthContext";
const details = [
  {
    val: "University",
    label: "DTU",
  },
  { val: "Branch", label: "IT" },
  {
    val: "Year",
    label: "2nd Year",
  },
  { val: "Role", label: "Developer" },
];

const Profile = () => {
  const auth = useContext(AuthContext);
  if (!auth) return null;
  const { user } = auth;
  return (
    <div className="flex flex-col m-4">
      <div className="bg-purple-soft text-text-accent rounded-full w-[8rem] h-[8rem] text-5xl font-bold flex justify-center items-center m-2">
        {user?.name?.charAt(0).toUpperCase()}
      </div>
      <span className="text-text-primary text-2xl m-3 font-bold">{user?.name}</span>
      <span className="text-text-secondary text-1xl m-3 mt-0 font-bold">{user?.email}</span>
      <div className="m-3">
        {details.map((detail)=>(
          <div key={detail.val} className="flex place-content-between border-b border-border-default text-2xl p-2">
            <span className="text-text-muted">{detail.val}</span>
            <span className="text-text-secondary">{detail.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
