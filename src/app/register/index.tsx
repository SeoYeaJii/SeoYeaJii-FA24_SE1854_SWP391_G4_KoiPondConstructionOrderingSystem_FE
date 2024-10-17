import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import "../../index.css";
import background from "../../assets/videos/video-background.mp4";

const RegisterPage = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      name: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    };
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email format";
      isValid = false;
    }

    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
      isValid = false;
    } else if (!/^\d{10,15}$/.test(formData.phone)) {
      // Example regex for 10-15 digit phone numbers
      newErrors.phone = "Invalid phone number format";
      isValid = false;
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = "Password is required";
      isValid = false;
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
      isValid = false;
    }

    // Confirm Password validation
    if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = "Passwords do not match";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      setLoading(true);

      try {
        const response = await fetch("http://localhost:8080/api/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            password: formData.password,
            phoneNumber: formData.phone,
          }),
        });

        if (response.ok) {
          navigate("/login");
        } else {
          setTimeout(() => {
            setLoading(false);
            alert("Register failed!");
          }, 2000);
        }
      } catch (error) {
        alert("Something went wrong. Please try again.");
      } finally {
        setLoading(false);
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
          <p>Create your account</p>
        </div>
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div>
            <label
              htmlFor="name"
              className="text-black font-semibold block mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 transition-colors ${
                errors.name
                  ? "border-red focus:ring-red"
                  : "border-gray focus:ring-blue"
              }`}
              aria-invalid={errors.name ? "true" : "false"}
              aria-describedby="name-error"
            />
            {errors.name && (
              <p id="name-error" className="mt-1 text-red text-sm">
                {errors.name}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="email"
              className="text-black font-semibold block mb-2"
            >
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 transition-colors ${
                errors.email
                  ? "border-red focus:ring-red"
                  : "border-gray focus:ring-blue"
              }`}
              aria-invalid={errors.email ? "true" : "false"}
              aria-describedby="email-error"
            />
            {errors.email && (
              <p id="email-error" className="mt-1 text-red text-sm">
                {errors.email}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="phone"
              className="text-black font-semibold block mb-2"
            >
              Phone
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 transition-colors ${
                errors.phone
                  ? "border-red focus:ring-red"
                  : "border-gray focus:ring-blue"
              }`}
              aria-invalid={errors.phone ? "true" : "false"}
              aria-describedby="phone-error"
            />
            {errors.phone && (
              <p id="phone-error" className="mt-1 text-red text-sm">
                {errors.phone}
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
            <label
              htmlFor="confirmPassword"
              className="text-black font-semibold block mb-2"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 transition-colors ${
                errors.confirmPassword
                  ? "border-red focus:ring-red"
                  : "border-gray focus:ring-blue"
              }`}
              aria-invalid={errors.confirmPassword ? "true" : "false"}
              aria-describedby="confirmPassword-error"
            />
            {errors.confirmPassword && (
              <p id="confirmPassword-error" className="mt-1 text-red text-sm">
                {errors.confirmPassword}
              </p>
            )}
          </div>
          <div>
            <button
              type="submit"
              disabled={loading}
              className={`w-full bg-[#076839] text-black font-semibold py-2 px-4 rounded-md hover:bg-[#5C813F] focus:outline-none focus:ring-2 focus:ring-blue focus:ring-opacity-50 transition-colors ${
                loading ? "opacity-75 cursor-not-allowed" : ""
              }`}
            >
              {loading ? (
                <>
                  <AiOutlineLoading3Quarters className="animate-spin inline-block mr-2" />
                  Creating Account...
                </>
              ) : (
                "Sign Up"
              )}
            </button>
          </div>
        </form>
        <div className="bg-brown bg-opacity-70 py-4 px-6 text-center">
          <p className="text-black">
            Already have an account?{" "}
            <a
              href="/login"
              className="text-black font-semibold hover:underline"
            >
              Log in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
