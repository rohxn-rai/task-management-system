import TaskStatusCard from "@/components/dashboard/TaskStatusCard";

const DashboardPage = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-2 p-6">
        <TaskStatusCard />
      </div>
    </>
  );
};

export default DashboardPage;
