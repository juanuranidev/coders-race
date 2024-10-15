import { H3 } from "components/ui/typography/typography";
import Icons from "lib/utils/shared/icons/icons";
import { Link } from "react-router-dom";
import { Card } from "components/ui/card/card";
import StatCard from "./components/stat-card/stat-card";
import { Separator } from "components/ui/separator/separator";
import { useUserReducers } from "hooks/user/useUserReducers";
import { useUserReadProfile } from "services/user/queries/user.queries";
import { formatMillisecondsToSeconds } from "lib/utils/race/race.utils";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "components/ui/avatar/avatar";

export default function profile() {
  const { user } = useUserReducers();
  const { data: userProfile } = useUserReadProfile(user?.id);

  console.log(userProfile);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row items-start gap-5 mb-5">
        <Avatar className="w-20 h-20">
          <AvatarImage src={user?.image} alt={user?.name} />
          <AvatarFallback>{user?.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="flex-grow">
          <h1 className="text-white-500 text-3xl font-bold mb-2">
            {user?.name}
          </h1>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            to={`https://github.com/${userProfile?.githubUsername}`}
            className="inline-flex items-center gap-2"
          >
            <Icons.github className="w-4 h-4" />
            <span className="text-white-500 font-medium underline">
              {userProfile?.githubUsername}
            </span>
          </Link>
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <StatCard
          title="Carreras Completadas"
          value={userProfile?.racesCompleted}
          icon={<Icons.chartSpline className="w-6 h-6" />}
        />
        <StatCard
          title="CPS más alto"
          value={userProfile?.highestCPS}
          icon={<Icons.star className="w-6 h-6" />}
        />

        <StatCard
          title="Tiempo total"
          value={`${formatMillisecondsToSeconds(userProfile?.totalTimeInRaces)}s`}
          icon={<Icons.clock className="w-6 h-6" />}
        />
      </div>
      <Separator className="my-8" />

      <H3 className="text-xl font-semibold mt-8 mb-4">Carreras Recientes</H3>
      <Card>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2 px-4">Date</th>
                <th className="text-left py-2 px-4">CPM</th>
                <th className="text-left py-2 px-4">Accuracy</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3].map((race) => (
                <tr key={1} className="border-b">
                  <td className="py-2 px-4">race.date"</td>
                  <td className="py-2 px-4">race.cpm"</td>
                  <td className="py-2 px-4">race.accuracy"%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* </TabsContent> */}
    </div>
  );
}
