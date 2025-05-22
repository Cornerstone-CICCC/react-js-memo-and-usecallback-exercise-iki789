import React from "react";

type Props = {
  firstName: string;
  lastName: string;
};

const Profile = React.memo(({ firstName, lastName }: Props) => {
  console.log("Rendered Profile Component");
  return (
    <div>
      <div>Profile</div>
      <h3>
        {firstName} {lastName}
      </h3>
    </div>
  );
});

export default Profile;
