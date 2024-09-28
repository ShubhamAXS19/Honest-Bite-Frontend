import AnalyticsChart, {
  AnalyticsLineChart,
} from "../Components/AnalyticsCharts";
import { FaThumbsUp } from "react-icons/fa";
import { IoIosMegaphone } from "react-icons/io";
import { FaCommentDots } from "react-icons/fa";
import { PiEyesFill } from "react-icons/pi";
const likesData = {
  week: [
    { name: "Mon", value: 1500 },
    { name: "Tue", value: 1800 },
    { name: "Wed", value: 2200 },
    { name: "Thu", value: 3200 },
    { name: "Fri", value: 1200 },
    { name: "Sat", value: 2100 },
    { name: "Sun", value: 2400 },
  ],
  month: [
    { name: "Week 1", value: 5400 },
    { name: "Week 2", value: 6398 },
    { name: "Week 3", value: 7800 },
    { name: "Week 4", value: 4908 },
  ],
  sixMonths: [
    { name: "Month 1", value: 8400 },
    { name: "Month 2", value: 10398 },
    { name: "Month 3", value: 13800 },
    { name: "Month 4", value: 10908 },
    { name: "Month 5", value: 12800 },
    { name: "Month 6", value: 7300 },
  ],
  year: [
    { name: "Jan", value: 12400 },
    { name: "Feb", value: 9398 },
    { name: "Mar", value: 15800 },
    { name: "Apr", value: 11908 },
    { name: "May", value: 14800 },
    { name: "Jun", value: 9300 },
    { name: "Jul", value: 14000 },
    { name: "Aug", value: 12000 },
    { name: "Sep", value: 16000 },
    { name: "Oct", value: 17000 },
    { name: "Nov", value: 18000 },
    { name: "Dec", value: 19000 },
  ],
};

const reachData = {
  week: [
    { name: "Mon", value: 2000 },
    { name: "Tue", value: 2500 },
    { name: "Wed", value: 3000 },
    { name: "Thu", value: 4000 },
    { name: "Fri", value: 3500 },
    { name: "Sat", value: 4200 },
    { name: "Sun", value: 5000 },
  ],
  month: [
    { name: "Week 1", value: 5400 },
    { name: "Week 2", value: 6398 },
    { name: "Week 3", value: 7800 },
    { name: "Week 4", value: 4908 },
  ],
  sixMonths: [
    { name: "Month 1", value: 8400 },
    { name: "Month 2", value: 10398 },
    { name: "Month 3", value: 13800 },
    { name: "Month 4", value: 10908 },
    { name: "Month 5", value: 12800 },
    { name: "Month 6", value: 7300 },
  ],
  year: [
    { name: "Jan", value: 12400 },
    { name: "Feb", value: 9398 },
    { name: "Mar", value: 15800 },
    { name: "Apr", value: 11908 },
    { name: "May", value: 14800 },
    { name: "Jun", value: 9300 },
    { name: "Jul", value: 14000 },
    { name: "Aug", value: 12000 },
    { name: "Sep", value: 16000 },
    { name: "Oct", value: 17000 },
    { name: "Nov", value: 18000 },
    { name: "Dec", value: 19000 },
  ],
  // You can add similar data for month, sixMonths, and year
};

const Dashboard = () => {
  return (
    <div className="py-6 px-8">
      <div className="flex w-full space-x-4">
        {/* Add space between the charts and allow them to grow evenly */}
        <div className="flex-1">
          <AnalyticsChart data={likesData} title="Total Likes" />
        </div>
        <div className="flex-1">
          <AnalyticsChart data={likesData} title="Total Followers" />
        </div>
      </div>
      <div className="flex w-full space-x-4">
        {/* Add space between the charts and allow them to grow evenly */}
        <div className="flex-1">
          <AnalyticsLineChart data={likesData} title="Total Reach" />
        </div>
        <div className="flex-1">
          <AnalyticsLineChart data={reachData} title="Created Spot Reach" />
        </div>
      </div>

      {/* Count */}
      <div className="flex items-center justify-evenly mt-16">
        <div className="bg-white rounded-lg pt-8 pl-4 pr-16 pb-4 w-[12vw] h-[17vh]">
          <FaThumbsUp size={30} />
          <p className="pt-4 pb-2 text-xl">Total Likes</p>
          <p className="text-3xl">350,809</p>
        </div>
        <div className="bg-white rounded-lg pt-8 pl-4 pr-16 pb-4 w-[12vw] h-[17vh]">
          <FaCommentDots size={30} />
          <p className="pt-4 pb-2 text-xl">Total Comments</p>
          <p className="text-3xl">198,072</p>
        </div>
        <div className="bg-white rounded-lg pt-8 pl-4 pr-16 pb-4 w-[12vw] h-[17vh]">
          <IoIosMegaphone size={30} />
          <p className="pt-4 pb-2 text-xl">Total Shares</p>
          <p className="text-3xl">120,043</p>
        </div>
        <div className="bg-white rounded-lg pt-8 pl-4 pr-16 pb-4 w-[12vw] h-[17vh]">
          <PiEyesFill size={30} />
          <p className="pt-4 pb-2 text-xl">Engagement</p>
          <p className="text-3xl">74.51%</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
