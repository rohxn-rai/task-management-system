import { FaCircle, FaCircleCheck, FaClock } from "react-icons/fa6";

import { Skeleton } from "../ui/skeleton";

const TaskStatusSkeleton = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <div className="flex flex-col w-full p-4 border border-success-background rounded-lg justify-center items-center bg-success-background shadow-xs">
        <div className="flex flex-col p-8 rounded-full justify-center gap-4">
          <FaCircleCheck className="text-success size-16" />
          <Skeleton className="h-6 w-16 bg-success-background" />
        </div>
        <h4 className="text-success">Completed Tasks</h4>
      </div>
      <div className="flex flex-col w-full p-4 border border-warning-background rounded-lg justify-center items-center bg-warning-background shadow-xs">
        <div className="flex flex-col p-8 rounded-full justify-center gap-4">
          <FaClock className="text-warning size-16" />
          <Skeleton className="h-6 w-16 bg-warning-background" />
        </div>
        <h4 className="text-warning">Pending Tasks</h4>
      </div>
      <div className="flex flex-col w-full p-8 border border-info-background rounded-lg justify-center items-center bg-info-background shadow-xs">
        <div className="flex flex-col p-8 rounded-full justify-center gap-4">
          <FaCircle className="text-info size-16" />
          <Skeleton className="h-6 w-16 bg-info-background justify-center" />
        </div>
        <h4 className="text-info">Open Tasks</h4>
      </div>
    </div>
  );
};

export default TaskStatusSkeleton;
