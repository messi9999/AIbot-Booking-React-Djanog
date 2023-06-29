import React, { useEffect } from "react";

const UserActivityTracker = () => {
  useEffect(() => {
    const handleUserActivity = () => {
      // Perform actions when user activity is detected
      console.log("User activity detected");
      localStorage.setItem("sessionStartTime", new Date().getTime().toString());
    };

    // Attach event listeners for user activity
    window.addEventListener("mousemove", handleUserActivity);
    window.addEventListener("keydown", handleUserActivity);

    // Clean up event listeners on component unmount
    return () => {
      window.removeEventListener("mousemove", handleUserActivity);
      window.removeEventListener("keydown", handleUserActivity);
    };
  }, []);

  return null;
};

export default UserActivityTracker;
