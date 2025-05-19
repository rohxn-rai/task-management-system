import { Skeleton } from "@/components/ui/skeleton";

const DashboardLoading = () => {
  return (
    <>
      <div className="p-6 py-8 lg:py-10 xl:py-12 border-dashed border-b">
        {/* breadcumb */}
        <Skeleton className="h-8 w-full" />
      </div>

      <div className="border-dashed border-b py-4 px-6">
        <Skeleton className="h-5 w-full" />
      </div>

      <div className="flex flex-col gap-8">
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-64 w-full" />
      </div>
    </>
  );
};

export default DashboardLoading;
