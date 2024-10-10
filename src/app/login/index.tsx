import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import "../../index.css";
import background from "../../assets/videos/video-background.mp4";
import { useNavigate } from "react-router-dom";


const LoginPage = () => {

  const navigate = useNavigate();
  
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");


  // Explicitly typing 'e' as React.ChangeEvent<HTMLInputElement>
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { username: "", password: "" };

    if (!formData.username.trim()) {
      newErrors.username = "Username or Email is required";
      isValid = false;
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
      isValid = false;
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // Explicitly typing 'e' as React.FormEvent<HTMLFormElement>
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      setLoading(true);
      // Simulating API call
       

      const response = await fetch("http://localhost:8080/api/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email:   formData.username,
            password: formData.password,
        }),
    });
   
    if (response.ok) {
        setTimeout(async () => {
            const data = await response.json();
            console.info(data)
            localStorage.setItem(
                "token",
                data.token
            );    
            console.log(data.token)  
            navigate("/"); 
            localStorage.setItem("name", data.name);
            console.log(data.name)
        }, 2000);

        setTimeout(() => {
          setLoading(false);
          alert("Login successful!");
        }, 2000);
      }
     
    else {
    setTimeout(() => {
      setLoading(false);
      alert("Login fail!");
    }, 2000);
  }
}
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center p-4">
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src={background} type="video/mp4" />
      </video>

      <div className="relative z-10 max-w-md w-full bg-white bg-opacity-90 rounded-lg shadow-xl overflow-hidden">
        <div className="bg-brown text-black py-4 px-6 text-center bg-opacity-70">
          <h2 className="text-2xl font-bold">
            GRASS <span className="text-green">ROOST</span>
          </h2>
          <p>Login to your account</p>
        </div>
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div>
            <label
              htmlFor="username"
              className="text-black font-semibold block mb-2"
            >
              Username or Email
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 transition-colors ${
                errors.username
                  ? "border-red focus:ring-red"
                  : "border-gray focus:ring-blue"
              }`}
              aria-invalid={errors.username ? "true" : "false"}
              aria-describedby="username-error"
            />
            {errors.username && (
              <p id="username-error" className="mt-1 text-red text-sm">
                {errors.username}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="password"
              className="text-black font-semibold block mb-2"
            >
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 transition-colors ${
                  errors.password
                    ? "border-red focus:ring-red"
                    : "border-gray focus:ring-blue"
                }`}
                aria-invalid={errors.password ? "true" : "false"}
                aria-describedby="password-error"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray focus:outline-none"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            {errors.password && (
              <p id="password-error" className="mt-1 text-red text-sm">
                {errors.password}
              </p>
            )}
          </div>
          <div>
            <button
              type="submit"
              disabled={loading}
              className={`w-full bg-green text-black bg-[#076839] font-semibold py-2 px-4 rounded-md hover:bg-[#5C813F] focus:outline-none focus:ring-2 focus:ring-blue focus:ring-opacity-50 transition-colors ${
                loading ? "opacity-75 cursor-not-allowed" : ""
              }`}
            >
              {loading ? (
                <>
                  <AiOutlineLoading3Quarters className="animate-spin inline-block mr-2" />
                  Logging in...
                </>
              ) : (
                "Login"
              )}
            </button>
          </div>
          <div className="text-center">
            <a
              href="#"
              className="text-black hover:underline focus:outline-none focus:ring-2 focus:ring-blue focus:ring-opacity-50 rounded-sm"
            >
              Forgot password?
            </a>
          </div>
        </form>
        <div className="bg-brown bg-opacity-70 py-4 px-6 text-center">
          <p className="text-black">
            Don't have an account?{" "}
            <a
              href="#"
              className="text-black font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-blue focus:ring-opacity-50 rounded-sm"
            >
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
