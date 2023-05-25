import React, { useEffect, useState } from "react";

const UserIcon = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("https://localhost:7053/api/Profile/profile", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
      })
      .catch((error) => {
        console.log("Error retrieving user information:", error);
      });
  }, []);

  return (
    <div>
      {user && (
        <span>
          Logged in as <strong>{user.username}</strong>
        </span>
      )}
    </div>
  );
};

export default UserIcon;
