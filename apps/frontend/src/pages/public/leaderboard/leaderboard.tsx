import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "components/ui/avatar/avatar";
import { Card } from "components/ui/card/card";
import { LinkPreview } from "components/ui/link-preview";
import Loader from "components/ui/loader/loader";
import {
  Table,
  TableRow,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
} from "components/ui/table/table";
import { User } from "lib/interfaces/user/user.interfaces";
import { H3, P } from "components/ui/typography/typography";
import { getLanguageIconByName } from "lib/utils/language/language.utils";
import { useUserReadLeaderboard } from "services/user/queries/user.queries";
import { formatMillisecondsToSeconds } from "lib/utils/race/race.utils";
import Icons from "lib/utils/shared/icons/icons";

export default function Leaderboard() {
  const { data: leaderboard, isLoading } = useUserReadLeaderboard();

  if (isLoading) return <Loader />;

  const handleRenderTrophy = (index: number | undefined) => {
    if (!index) return null;

    switch (index) {
      case 1:
        return <Icons.trophy color="#FFD700" />;
      case 2:
        return <Icons.trophy color="#C0C0C0" />;
      case 3:
        return <Icons.trophy color="#CD7F32" />;
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="mb-4 bg-black-500 py-2 rounded-xl">
        <H3>Ranking</H3>
        <P className="text-white-600 font-medium">
          Conoce a los programadores más rápidos del mundo
        </P>
      </div>
      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-center">Posición</TableHead>
              <TableHead>Usuario</TableHead>
              <TableHead className="text-center">CPS Promedio</TableHead>
              <TableHead className="text-center">
                Carreras Completadas
              </TableHead>
              <TableHead className="text-center">
                Tiempo Total en Carreras
              </TableHead>
              <TableHead className="text-center">Lenguaje Favorito</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {leaderboard?.map((user: User) => (
              <TableRow key={user.rankingPosition}>
                <TableCell className="text-center">
                  <div className="flex items-center justify-center gap-2">
                    {handleRenderTrophy(user.rankingPosition)}
                    <P>{user.rankingPosition}</P>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <LinkPreview
                      url={`https://github.com/${user.githubUsername}`}
                      className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
                    >
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                        href={`https://github.com/${user.githubUsername}`}
                      >
                        <Avatar className="w-8 h-8">
                          <AvatarFallback>{user.name}</AvatarFallback>
                          <AvatarImage src={user.image} />
                        </Avatar>
                        <P>{user.name}</P>
                      </a>
                    </LinkPreview>
                  </div>
                </TableCell>
                <TableCell className="text-center">
                  <P>{user.averageCPS}</P>
                </TableCell>
                <TableCell className="text-center">
                  <P>{user.racesCompleted}</P>
                </TableCell>
                <TableCell className="text-center">
                  <P>
                    {formatMillisecondsToSeconds(user.totalTimeInRaces ?? 0)}s
                  </P>
                </TableCell>
                <TableCell className="text-center">
                  <div className="flex items-center justify-center gap-2">
                    <img
                      className="h-5 w-5"
                      alt={user.topLanguage}
                      src={getLanguageIconByName(user.topLanguage)}
                    />
                    <P>{user.topLanguage}</P>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}
