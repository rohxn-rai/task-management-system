"use client";

import { sidebar } from "@/data/SidebarData";

const TeamCard = () => {
  const teamsSection = sidebar.find((s) => s.name === "Teams");

  return (
    <div className="col-span-12 sm:col-span-6 xl:col-span-4 flex flex-col bg-card border  rounded-lg gap-2">
      <div className="flex flex-col p-6 pb-2 gap-2 justify-between items-start xl:items-center">
        <h2 className="text-xl">Team Members</h2>
        <Select defaultValue="today">
          <SelectTrigger className="w-40">
            <SelectValue />
          </SelectTrigger>
          <SelectContent align="start">
            <SelectGroup>
              <SelectLabel>Filter by Time</SelectLabel>
              <SelectSeparator />
              <SelectItem value="today">Today</SelectItem>
              <SelectItem value="thisWeek">This Week</SelectItem>
              <SelectItem value="thisMonth">This Month</SelectItem>
              <SelectItem value="thisYear">This Year</SelectItem>
              <SelectItem value="lifetime">Lifetime</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-6 pt-0"></div>
    </div>
  );
};

export default TeamCard;
