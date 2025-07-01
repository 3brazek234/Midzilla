import { useState } from "react";
import ProfilePicture from "../../Components/pagesComponent/profile/ProfilePicture";
import ProfileForm from "../../Components/pagesComponent/profile/ProfileForm";
import PasswordSettings from "../../Components/pagesComponent/profile/PasswordSettings";
import { profileData as initialProfileData } from "../../Constants/profileData";

const ProfileSetting = () => {
  const [profileData, setProfileData] = useState(initialProfileData);

  const handlePersonalInfoChange = (newInfo) => {
    setProfileData((prev) => ({ ...prev, personalInfo: newInfo }));
  };

  const handleNotificationSettingsChange = (newSettings) => {
    setProfileData((prev) => ({ ...prev, notificationSettings: newSettings }));
  };

  const handleAvatarUpdate = (e) => {
    if (e.target.files && e.target.files[0]) {
      const newAvatarUrl = URL.createObjectURL(e.target.files[0]);
      setProfileData((prev) => ({
        ...prev,
        personalInfo: { ...prev.personalInfo, avatar: newAvatarUrl },
      }));
    }
  };

  return (
    <div
      className="p-6 bg-gray-50 dark:bg-gray-900 min-h-screen text-right"
      dir="rtl"
    >
      <div className="max-w-4xl mx-auto">
        <header className="mb-8">
          <ProfilePicture
            avatar={profileData.personalInfo.avatar}
            name={profileData.personalInfo.fullName}
            onUpdate={handleAvatarUpdate}
          />
        </header>

        <main className="space-y-8">
          <ProfileForm
            info={profileData.personalInfo}
            onInfoChange={handlePersonalInfoChange}
          />
          <PasswordSettings />
    
        </main>
      </div>
    </div>
  );
};

export default ProfileSetting; 