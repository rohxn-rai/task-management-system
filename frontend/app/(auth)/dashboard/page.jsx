import DashboardPage from "./(dashboard)";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "@/components/ui/breadcrumb";

const DashboardLayout = async () => {
  await new Promise((resolve) => setTimeout(resolve, 5000));

  return (
    <>
      <div className="px-5 py-8 lg:py-10 xl:py-12 border-dashed border-b">
        {/* breadcumb */}
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/dashboard" className="text-2xl">
                Dashboard
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <DashboardPage />
    </>
  );
};

export default DashboardLayout;
