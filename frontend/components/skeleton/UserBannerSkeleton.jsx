import { Skeleton } from "../ui/skeleton";

const UserBannerSkeleton = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-[250px] p-5 border  rounded-lg justify-between shadow-xs gap-4">
      {/* user details */}
      <div className="flex flex-col sm:flex-row p-0 sm:p-10 gap-4 sm:gap-16 items-center">
        <Skeleton className="h-[130px] w-[130px] rounded-full border" />
        <div className="flex flex-col justify-center gap-2">
          <Skeleton className="h-8  w-full md:w-48 xl:w-64" />
          <Skeleton className="h-7 w-48 md:w-32 xl:w-48" />
        </div>
      </div>

      {/* action buttons */}
      <div className="flex flex-col p-0 md:p-10 justify-end items-center sm:items-start lg:items-end">
        {/* edit button */}
        <Skeleton className="h-10 w-36 bg-info-background" />
      </div>
    </div>
  );
};

export default UserBannerSkeleton;
