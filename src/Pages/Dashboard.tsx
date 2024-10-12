import AnalyticsChart, {
  AnalyticsLineChart,
} from "../Components/AnalyticsCharts";
import { FaThumbsUp } from "react-icons/fa";
import { IoIosMegaphone } from "react-icons/io";
import { FaCommentDots } from "react-icons/fa";
import { PiEyesFill } from "react-icons/pi";
import { useRecoilValue } from "recoil";
import { userAtom } from "../Store/Atoms/userAtom";

const Dashboard = () => {
  const userData = useRecoilValue(userAtom);

  // Ensure user data is available before attempting to access it
  if (!userData || !userData.analyticData) {
    return <div>Loading...</div>;
  }

  const { analyticData } = userData;

  // Creating likes data based on user's analytics for the year
  const likesData = {
    year: analyticData.year.map((data) => ({
      name: data.name,
      value: data.value,
    })),
  };

  return (
    <div className="py-6 px-8">
      <div className="flex w-full space-x-4">
        <div className="flex-1">
          <AnalyticsChart data={likesData} title="Total Likes" />
        </div>
        <div className="flex-1">
          <AnalyticsChart data={likesData} title="Total Followers" />
        </div>
      </div>
      <div className="flex w-full space-x-4">
        <div className="flex-1">
          <AnalyticsLineChart data={likesData} title="Total Reach" />
        </div>
        <div className="flex-1">
          <AnalyticsLineChart data={likesData} title="Created Spot Reach" />
        </div>
      </div>

      {/* Count Cards */}
      <div className="flex flex-col md:flex-row items-center justify-evenly mt-16 flex-wrap">
        <div className="bg-white rounded-lg pt-8 pl-4 pr-6 pb-4 w-full md:w-[12vw] h-[17vh] mx-2 mb-4 md:mb-0">
          <FaThumbsUp size={30} />
          <p className="pt-4 pb-2 text-xl">Total Likes</p>
          <p className="text-3xl">350,809</p>
        </div>

        <div className="bg-white rounded-lg pt-8 pl-4 pr-6 pb-4 w-full md:w-[12vw] h-[17vh] mx-2 mb-4 md:mb-0">
          <FaCommentDots size={30} />
          <p className="pt-4 pb-2 text-xl">Total Comments</p>
          <p className="text-3xl">198,072</p>
        </div>

        <div className="bg-white rounded-lg pt-8 pl-4 pr-6 pb-4 w-full md:w-[12vw] h-[17vh] mx-2 mb-4 md:mb-0">
          <IoIosMegaphone size={30} />
          <p className="pt-4 pb-2 text-xl">Total Shares</p>
          <p className="text-3xl">120,043</p>
        </div>

        <div className="bg-white rounded-lg pt-8 pl-4 pr-6 pb-4 w-full md:w-[12vw] h-[17vh] mx-2 mb-4 md:mb-0">
          <PiEyesFill size={30} />
          <p className="pt-4 pb-2 text-xl">Engagement</p>
          <p className="text-3xl">74.51%</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
