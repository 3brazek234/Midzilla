import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ThemeToggle from "../../ui/ThemeToggle";
import { FaBars, FaChevronDown, FaSignOutAlt } from "react-icons/fa";
import { navItems } from "../../../Constants/items.jsx";

export const adminUser = {
  name: "المدير",
  email: "admin@midzilla.com",
  imageUrl: "https://randomuser.me/api/portraits/men/75.jpg",
};

function SideBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isExpanded, setIsExpanded] = useState(true);
  const [openDropdown, setOpenDropdown] = useState(null);
  const AdminData = JSON.parse(localStorage.getItem("admin"));
  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
    if (isExpanded) {
      setOpenDropdown(null);
    }
  };

  const handleItemClick = (item) => {
    if (item.children) {
      if (!isExpanded) {
        setIsExpanded(true);
      }
      setOpenDropdown(openDropdown === item.title ? null : item.title);
    } else if (item.path) {
      navigate(item.path);
    }
  };

  const isActiveRoute = (path) => {
    if (path === "/dashboard") {
      return location.pathname === "/dashboard";
    }
    return location.pathname === path;
  };

  const handleLogout = () => {
    console.log("Logout clicked");
    // Implement logout logic here
  };

  return (
    <div
      className={`bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-r border-gray-200 dark:border-gray-700 h-screen flex flex-col transition-all duration-300 ease-in-out ${
        isExpanded ? "w-64" : "w-20"
      }`}
    >
      <div className="flex items-center p-4 border-b border-gray-200 dark:border-gray-700 shrink-0">
        <div className="flex items-center gap-3 min-w-0 flex-1">
          <h2
            className={`text-xl font-bold transition-all duration-300 overflow-hidden text-right ${
              isExpanded ? "w-auto" : "w-0"
            }`}
            dir="rtl"
          >
            Midzilla
          </h2>

          {/* Theme Toggle and Menu Button */}
          <div
            className={`flex items-center gap-2 ${
              isExpanded ? "mr-auto" : "mx-auto"
            }`}
          >
            {isExpanded && <ThemeToggle />}
            <button
              onClick={toggleSidebar}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200"
            >
              <FaBars size={20} />
            </button>
          </div>
        </div>
      </div>

      <nav className="mt-2 px-2 flex-1 overflow-y-auto scrollbar-thin scrollbar-track-gray-100 dark:scrollbar-track-gray-800 scrollbar-thumb-gray-400 dark:scrollbar-thumb-gray-600 hover:scrollbar-thumb-gray-500 dark:hover:scrollbar-thumb-gray-500 scrollbar-thumb-rounded-full scrollbar-track-rounded-full scroll-smooth">
        <ul className="space-y-1 pb-4">
          {navItems.map((item) => (
            <li key={item.title}>
              <div
                className={`flex items-center p-3 rounded-lg cursor-pointer transition-all duration-200 ${
                  isActiveRoute(item.path)
                    ? "bg-blue-600 text-white shadow-lg"
                    : "hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
                onClick={() => handleItemClick(item)}
              >
                <div className={`shrink-0 ${!isExpanded ? "mx-auto" : ""}`}>
                  {item.icon}
                </div>
                <span
                  className={`mr-3 text-sm font-medium transition-all duration-300 overflow-hidden  ${
                    isExpanded ? "w-auto" : "w-0"
                  }`}
                >
                  {item.title}
                </span>
                {item.children && isExpanded && (
                  <FaChevronDown
                    className={`mr-auto shrink-0 transition-transform duration-200 ${
                      openDropdown === item.title ? "rotate-180" : ""
                    }`}
                  />
                )}
              </div>
              {isExpanded && openDropdown === item.title && item.children && (
                <ul className="pr-8 pt-2 space-y-1" dir="rtl">
                  {item.children.map((child) => (
                    <li
                      key={child.title}
                      className={`p-2 pr-5 text-sm rounded-lg cursor-pointer transition-colors duration-200 flex items-center ${
                        isActiveRoute(child.path)
                          ? "bg-blue-500 text-white"
                          : "hover:bg-gray-200 dark:hover:bg-gray-600"
                      }`}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleItemClick(child);
                      }}
                    >
                      {child.icon}
                      <span className="truncate mr-3">{child.title}</span>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* Admin Profile Section */}
      <div className="p-4 border-t border-gray-200 dark:border-gray-700 shrink-0">
        <div
          className={`flex items-center gap-3 ${
            isExpanded ? "justify-between" : "justify-center"
          }`}
        >
          <button
            onClick={handleLogout}
            className={`p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200 shrink-0`}
          >
            <FaSignOutAlt size={20} />
          </button>
          <div className="flex items-center gap-3 min-w-0">
            <div
              className={`transition-all duration-300 overflow-hidden text-right ${
                isExpanded ? "w-auto" : "w-0"
              }`}
              dir="rtl"
            >
              <p className="font-semibold text-sm truncate">{AdminData.name}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                {AdminData.email}
              </p>
            </div>
          
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
