import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useMemo, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { motion } from "framer-motion";
import { loginUser } from "../../api/authApi";
import atisunyaLogo from "../../assets/atisunya-logo.png";

const LOGIN_CONTENT = {
  companyName: "Atisunya Pvt. Ltd.",
  heading: "Sign in to your account",
  sideTitle: "Digital Transformation Solutions",
  sideDescription:
    "AtiSunya is a specialized IT consulting and software services company based in Noida, India. We help organizations transform digitally using Microsoft cloud and enterprise solutions.",
  cardTitle: "Web Development Services",
  cardDescription:
    "Professional web development services designed to showcase your brand and drive online growth.",
  learnMoreUrl: "https://atisunya.co/contact/",
  termsUrl: "https://atisunya.co/terms-of-use/",
  privacyUrl: "https://atisunya.co/privacy/",
};

const floatingLogos = [
  {
    className: "absolute left-10 top-20 opacity-40 w-40 pointer-events-none",
    animate: { y: [0, -30, 0] },
    transition: { duration: 6, repeat: Infinity },
  },
  {
    className: "absolute right-20 top-32 opacity-40 w-52 pointer-events-none",
    animate: { y: [0, 40, 0] },
    transition: { duration: 7, repeat: Infinity },
  },
  {
    className: "absolute bottom-20 left-1/4 opacity-40 w-44 pointer-events-none",
    animate: { y: [0, -25, 0] },
    transition: { duration: 5, repeat: Infinity },
  },
  {
    className: "absolute bottom-10 right-1/3 opacity-40 w-36 pointer-events-none",
    animate: { y: [0, 30, 0] },
    transition: { duration: 6, repeat: Infinity },
  },
];

const loginSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  remember: Yup.boolean(),
});

const initialValues = {
  username: "",
  password: "",
  remember: false,
};

const FormField = ({
  label,
  name,
  type = "text",
  placeholder,
  formik,
  rightIcon = null,
}) => {
  const hasError = formik.touched[name] && formik.errors[name];

  return (
    <div>
      <label htmlFor={name} className="text-sm text-gray-600 mb-1 block">
        {label}
      </label>

      <div className="relative">
        <input
          id={name}
          type={type}
          name={name}
          placeholder={placeholder}
          value={formik.values[name]}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={`w-full border rounded-lg px-4 py-2.5 text-sm transition focus:outline-none focus:ring-2 ${
            rightIcon ? "pr-10" : ""
          } ${
            hasError
              ? "border-red-400 focus:ring-red-400"
              : "border-gray-300 focus:ring-blue-500"
          }`}
        />

        {rightIcon && (
          <span className="absolute right-3 top-3 text-gray-500 cursor-pointer">
            {rightIcon}
          </span>
        )}
      </div>

      {hasError && <p className="text-red-500 text-xs mt-1">{formik.errors[name]}</p>}
    </div>
  );
};

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [apiError, setApiError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLoginSubmit = async (values) => {
    setApiError("");
    setLoading(true);

    try {
      const response = await loginUser(values);

      const token =
        response?.data?.token ||
        response?.token ||
        response?.accessToken ||
        null;

      const user =
        response?.data?.user ||
        response?.user ||
        response ||
        null;

      if (token) {
        localStorage.setItem("accessToken", token);
      }

      if (user) {
        localStorage.setItem("user", JSON.stringify(user));
      }

      navigate("/dashboard");
    } catch (error) {
      const message =
        error?.response?.data?.message ||
        error?.message ||
        "Invalid credentials";

      console.error("Login failed:", error);
      alert(message);
      setApiError(message);
    } finally {
      setLoading(false);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema: loginSchema,
    onSubmit: handleLoginSubmit,
  });

  const isActive = useMemo(
    () => formik.isValid && formik.dirty && !loading,
    [formik.isValid, formik.dirty, loading]
  );

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 flex items-center justify-center p-6 overflow-hidden">
      {floatingLogos.map((logo, index) => (
        <motion.img
          key={index}
          src={atisunyaLogo}
          className={logo.className}
          animate={logo.animate}
          transition={logo.transition}
        />
      ))}

      <div className="w-full max-w-6xl grid lg:grid-cols-2 shadow-xl rounded-xl overflow-hidden bg-white relative z-10">
        <div className="p-10 flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-6">
            <img
              src={atisunyaLogo}
              alt="logo"
              className="w-20 h-20 object-contain"
            />
            <h2 className="font-semibold text-[#1c3b52] text-lg">
              {LOGIN_CONTENT.companyName}
            </h2>
          </div>

          <h1 className="text-2xl font-bold text-gray-800">
            {LOGIN_CONTENT.heading}
          </h1>

          <div className="h-[1px] bg-gray-200 my-4" />

          <form onSubmit={formik.handleSubmit} className="space-y-5">
            <FormField
              label="Username"
              name="username"
              placeholder="Enter your username"
              formik={formik}
            />

            <FormField
              label="Password"
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              formik={formik}
              rightIcon={
                <span onClick={() => setShowPassword((prev) => !prev)}>
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              }
            />

            {apiError && <p className="text-red-600 text-sm">{apiError}</p>}

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-gray-600">
                <input
                  type="checkbox"
                  name="remember"
                  checked={formik.values.remember}
                  onChange={formik.handleChange}
                />
                Remember me
              </label>

              <span className="text-blue-600 cursor-pointer hover:underline">
                Forgot password?
              </span>
            </div>

            <button
              type="submit"
              disabled={!isActive}
              className={`w-full py-3 rounded-lg font-medium transition-all duration-200 ${
                isActive
                  ? "bg-blue-600 text-white hover:bg-blue-700 shadow-md"
                  : "bg-gray-300 text-gray-600 cursor-not-allowed"
              }`}
            >
              {loading ? "Logging in..." : "Log In"}
            </button>
          </form>

          <p className="text-xs text-gray-500 mt-6 leading-relaxed">
            By clicking Log In you agree to{" "}
            <a
              href={LOGIN_CONTENT.termsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Terms of Use
            </a>{" "}
            and{" "}
            <a
              href={LOGIN_CONTENT.privacyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Privacy Policy
            </a>
            .
          </p>
        </div>

        <div className="bg-gradient-to-br from-[#4a7c73] to-[#1c3b52] text-white p-10 flex flex-col justify-center gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-3">
              {LOGIN_CONTENT.sideTitle}
            </h2>

            <p className="text-sm opacity-90">
              {LOGIN_CONTENT.sideDescription}
            </p>
          </div>

          <div className="bg-white text-gray-700 p-5 rounded-lg shadow-md">
            <h3 className="font-semibold mb-2">{LOGIN_CONTENT.cardTitle}</h3>

            <p className="text-sm mb-3">{LOGIN_CONTENT.cardDescription}</p>

            <a
              href={LOGIN_CONTENT.learnMoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#4a7c73] text-white px-4 py-2 rounded hover:bg-[#3b675f]"
            >
              Learn More
            </a>
          </div>

          <img
            src={atisunyaLogo}
            alt="logo"
            className="w-40 bg-white p-3 rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;