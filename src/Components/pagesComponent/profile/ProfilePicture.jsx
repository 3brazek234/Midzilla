import { FaCamera } from "react-icons/fa";

const ProfilePicture = ({ avatar, name, onUpdate }) => {
  return (
    <div className="flex items-center gap-5">
      <div className="relative">
        <img
          src={avatar}
          alt={name}
          className="w-24 h-24 rounded-full object-cover border-4 border-white dark:border-gray-700 shadow-md"
        />
        <label
          htmlFor="avatar-upload"
          className="absolute bottom-0 right-0 bg-blue-600 p-2 rounded-full cursor-pointer hover:bg-blue-700 transition-colors duration-200"
        >
          <FaCamera className="text-white" size={16} />
          <input
            id="avatar-upload"
            type="file"
            className="hidden"
            accept="image/*"
            onChange={onUpdate}
          />
        </label>
      </div>
      <div>
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
          {name}
        </h2>
        <p className="text-gray-500 dark:text-gray-400">المدير العام</p>
      </div>
    </div>
  );
};

export default ProfilePicture; 