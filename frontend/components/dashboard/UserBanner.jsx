import { Button } from "../ui/button";

import { FaUser, FaPenToSquare } from "react-icons/fa6";

const UserBanner = async () => {
  await new Promise((resolve) => setTimeout(resolve, 5000));

  return (
    <div className="flex flex-col md:flex-row min-h-[250px] p-5 border  rounded-lg justify-between shadow-xs gap-4">
      {/* user details */}
      <div className="flex flex-col sm:flex-row p-0 sm:p-10 gap-4 sm:gap-16 items-center">
        <div className="flex rounded-full border  p-4 w-fit">
          <FaUser className="text-8xl" />
        </div>
        <div className="flex flex-col justify-center gap-2">
          <h1 className="text-2xl">User Name</h1>
          <h3 className="text-lg text-foreground/70">User Role</h3>
        </div>
      </div>

      {/* action buttons */}
      <div className="flex flex-col p-0 sm:px-10 sm:pb-5 md:p-10 justify-end items-center sm:items-start lg:items-end">
        {/* edit button */}
        <Button className="max-w-36" variant="info" size="lg">
          <FaPenToSquare />
          <span> Edit Profile</span>
        </Button>
      </div>
    </div>
  );
};

export default UserBanner;
