import { useContext } from "react"
import AuthContext from "../context/AuthContext";
const stats = [
    { val: 12, label: "Projects" },
    { val: 4, label: "In Progress" },
    { val: 8, label: "Completed" },
    { val: 3, label: "Upcoming" },
];

const Dashboard = () => {
  const auth=useContext(AuthContext);
  if(!auth)return null;
  const {user}=auth;
  
  return (
    <div className="bg-bg-base flex flex-col m-5">
      <span className="text-text-primary font-bold text-2xl">Hey, {user?.name} 👋</span>
      <span className="text-text-secondary">You're logged in successfully</span>
      <div className="grid grid-cols-2 gap-3 mb-4 mt-4">
        {stats.map((stat)=>(
          <div key={stat.label} className="border border-border-default bg-bg-surface flex flex-col">
            <span className="text-text-accent text-2xl font-bold m-2 p-2 mb-none">{stat.val}</span>
            <span className="text-text-muted ml-2">{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Dashboard