"use client";

import CountUp from "react-countup";

import { FaCircle, FaCircleCheck, FaClock } from "react-icons/fa6";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const TaskStatus = () => {
  return (
    <>
      <div className="col-span-12 sm:col-span-6 xl:col-span-4 flex flex-col bg-card border  rounded-lg gap-2">
        <div className="flex flex-col md:flex-row p-6 pb-2 gap-2 justify-between items-start xl:items-center">
          <h2 className="text-xl">Tasks Staus</h2>
          <Select defaultValue="today">
            <SelectTrigger className="w-40">
              <SelectValue />
            </SelectTrigger>
            <SelectContent align="end">
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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-6 pt-0">
          <div className="flex flex-col w-full p-4 border rounded-lg justify-center items-center shadow-xs">
            <div className="flex flex-col p-2 rounded-full justify-center gap-4">
              <FaCircleCheck className="text-success size-16" />
              <h6 className="text-center text-success">
                <CountUp end={9} duration={3} />
              </h6>
            </div>
            <h4 className="text-success text-center">Completed Tasks</h4>
          </div>
          <div className="flex flex-col w-full p-4 border rounded-lg justify-center items-center shadow-xs">
            <div className="flex flex-col p-2 rounded-full justify-center gap-4">
              <FaClock className="text-warning size-16" />
              <h6 className="text-center text-warning">
                <CountUp end={3} duration={3} />
              </h6>
            </div>
            <h4 className="text-warning text-center">Pending Tasks</h4>
          </div>
          <div className="flex flex-col w-full p-4 border rounded-lg justify-center items-center shadow-xs">
            <div className="flex flex-col p-2 rounded-full justify-center gap-4">
              <FaCircle className="text-info size-16" />
              <h6 className="text-center text-info">
                <CountUp end={6} duration={3} />
              </h6>
            </div>
            <h4 className="text-info text-center">Tasks Created</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskStatus;
