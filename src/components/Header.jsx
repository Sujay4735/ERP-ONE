import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaChevronRight,
  FaClock,
  FaStar,
  FaHome,
  FaSignOutAlt,
} from "react-icons/fa";

const Header = () => {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [taskOpen, setTaskOpen] = useState(false);

  const dropdownRef = useRef(null);

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("user");

    navigate("/"); 
    // if your login route is /login then use navigate("/login");
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
        setTaskOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full bg-white border-b z-[10000]">
      {/* Top White Header */}
      <div className="flex items-center justify-between px-6 h-[60px]">
        <div className="flex items-center gap-6">
          <span className="bg-yellow-500 text-white text-xs px-2 py-1 rounded">
            Sandbox
          </span>

          <span
            className="font-semibold text-orange-600 text-lg cursor-pointer"
            onClick={() => navigate("/dashboard")}
          >
            ERP_ONE
          </span>
        </div>

        <div className="flex items-center gap-6">
          <input
            type="text"
            placeholder="Search"
            className="border rounded px-3 py-1 text-sm w-[220px]"
          />

          <span className="text-sm cursor-pointer">Help</span>
          <span className="text-sm cursor-pointer">Feedback</span>

          <span className="font-medium text-sm">SUJAY AND VIKALP</span>
        </div>
      </div>

      {/* Blue Bar */}
      <div className="flex items-center justify-between px-6 py-1.8 bg-[#385a7a] text-white text-sm">
        {/* Left Side */}
        <div className="flex items-center gap-6">
          <div className="flex gap-4 items-center">
            <FaClock className="cursor-pointer" />
            <FaStar className="cursor-pointer" />
            <FaHome
              className="cursor-pointer"
              onClick={() => navigate("/dashboard")}
            />
          </div>

          <div className="relative" ref={dropdownRef}>
            <button
              className="flex items-center gap-1 cursor-pointer"
              onClick={() => setOpen(!open)}
            >
              Activities ▾
            </button>

            {open && (
              <div className="absolute top-full left-0 mt-2 bg-white text-black rounded shadow-lg w-[200px] z-[20000]">
                <div
                  className="flex justify-between items-center px-4 py-2 hover:bg-gray-100 relative"
                  onMouseEnter={() => setTaskOpen(true)}
                  onMouseLeave={() => setTaskOpen(false)}
                >
                  <span
                    className="cursor-pointer"
                    onClick={() => {
                      setOpen(false);
                      navigate("/tasks");
                    }}
                  >
                    Task
                  </span>

                  <FaChevronRight size={12} />

                  {taskOpen && (
                    <div className="absolute left-full top-0 bg-white rounded shadow-lg w-[160px] z-[21000]">
                      <div
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => {
                          setOpen(false);
                          setTaskOpen(false);
                          navigate("/newtask");
                        }}
                      >
                        New Task
                      </div>
                    </div>
                  )}
                </div>

                <div
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    setOpen(false);
                    navigate("/resourceallocation");
                  }}
                >
                  Resource Allocation
                </div>

                <div
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    setOpen(false);
                    navigate("/phonecalls");
                  }}
                >
                  Phone Calls
                </div>

                <div
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    setOpen(false);
                    navigate("/lead");
                  }}
                >
                  Leads
                </div>

                <div
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    setOpen(false);
                    navigate("/company");
                  }}
                >
                  Company
                </div>

                <div
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    setOpen(false);
                    navigate("/subcompany");
                  }}
                >
                  Sub Company
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center">
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded text-sm font-medium transition"
          >
            <FaSignOutAlt />
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;