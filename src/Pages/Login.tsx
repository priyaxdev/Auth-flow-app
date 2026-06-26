import { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router";
import { ScanEye } from "lucide-react";

const Login = () => {
  const [email, setemail] = useState<string>("");
  const [password, setpassword] = useState<string>("");
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  if (!auth) return null;
  const { login } = auth;
  const handleLogin = () => {
    if (email === "" || password === "") {
      alert("Invalid email or password");
      return; // ← yeh important hai — aage execute nahi hoga
    }
    login(email, password);
    navigate("/dashboard");
  };
  return (
    <div className="min-h-screen flex justify-center items-center bg-bg-base">
      <div className="flex border-2 bg-bg-surface border border-border-default flex-col w-[45%] p-3 rounded-lg">
        <span className="text-text-accent font-bold text-3xl tracking-wide mb-2 flex flex-row justify-center items-center"><ScanEye className="text-text-accent w-8 h-8 m-1"/>AuthApp</span>
        <span className="text-text-primary text-3xl font-bold">
          Welcome Back
        </span>
        <span className="text-text-secondary">Sign in to continue</span>
        <input
          type="text"
          className="w-[50%] h-[2rem] rounded-lg border-border-default focus:border-border-subtle text-text-primary bg-bg-muted border-2 border p-2 m-2"
          placeholder="Enter Email"
          aria-label="Enter Email"
          aria-describedby="button-addon2"
          value={email}
          onChange={(e) => setemail(e.target.value)}
        />
        <input
          type="text"
          className="w-[50%] h-[2rem] rounded-lg border-border-default focus:border-border-subtle text-text-primary bg-bg-muted border-2 border p-2 m-2"
          placeholder="Enter Password"
          aria-label="Enter Password"
          aria-describedby="button-addon2"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />
        <button
          className="bg-purple-primary hover:bg-purple-hover text-text-primary m-3 p-2 text-[18px] flex flex-row hover:cursor-pointer rounded-lg border-2 w-[20%]"
          onClick={handleLogin}
        >
          Sign in
        </button>
      </div>
    </div>
  );
};

export default Login;
