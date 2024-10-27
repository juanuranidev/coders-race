import Icons from "lib/utils/shared/icons/icons";
import Loader from "components/ui/loader/loader";
import { H3, P } from "components/ui/typography/typography";
import { Link } from "react-router-dom";
import StatCard from "./components/stat-card/stat-card";
import { Separator } from "components/ui/separator/separator";
import LastRacesCard from "./components/last-races-card/last-races-card";
import { useUserReducers } from "hooks/user/useUserReducers";
import { useUserReadProfile } from "services/user/queries/user.queries";
import { formatMillisecondsToSeconds } from "lib/utils/race/race.utils";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "components/ui/avatar/avatar";

export default function Profile() {
  const { user } = useUserReducers();
  const { data: userProfile } = useUserReadProfile(user?.id);

  if (!userProfile) return <Loader />;

  return (
    <div className="">
      <div className="mb-4 bg-black-500 py-2 rounded-xl flex items-center gap-4">
        <Avatar className="w-16 h-16">
          <AvatarImage src={user?.image} alt={user?.name} />
          <AvatarFallback>{user?.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <H3 className="flex items-center gap-2">{user?.name}</H3>
          <P className="text-white-600 font-medium font-medium underline ml-1">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              to={`https://github.com/${userProfile?.githubUsername}`}
              className="inline-flex items-center gap-2"
            >
              <span className="">{userProfile?.githubUsername}</span>
            </Link>
          </P>
        </div>
      </div>
      <div className="grid gap-8 grid-cols-3">
        <StatCard
          title="Carreras Completadas"
          value={userProfile?.racesCompleted ?? 0}
          icon={<Icons.chartSpline className="w-6 h-6" />}
        />
        <StatCard
          title="CPS más alto"
          value={userProfile?.highestCPS ?? 0}
          icon={<Icons.star className="w-6 h-6" />}
        />
        <StatCard
          title="Tiempo total"
          icon={<Icons.clock className="w-6 h-6" />}
          value={`${formatMillisecondsToSeconds(userProfile?.totalTimeInRaces ?? 0)}s`}
        />
      </div>
      <Separator className="my-8" />
      <H3 className="text-xl font-semibold mt-8 mb-4">Carreras Recientes</H3>
      <LastRacesCard />
    </div>
  );
}
