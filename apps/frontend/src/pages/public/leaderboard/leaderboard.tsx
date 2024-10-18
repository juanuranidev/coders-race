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
import { H4, P } from "components/ui/typography/typography";
import { User } from "lib/interfaces/user/user.interfaces";
import { getLanguageIconByName } from "lib/utils/language/language.utils";
import { useUserReadLeaderboard } from "services/user/queries/user.queries";

export default function Leaderboard() {
  const { data: leaderboard, isLoading } = useUserReadLeaderboard();

  if (isLoading) return <Loader />;

  return (
    <div>
      <H4 className="mb-8">Ranking</H4>
      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-center">Posición</TableHead>
              <TableHead>Usuario</TableHead>
              <TableHead>CPS Promedio</TableHead>
              <TableHead>Carreras Completadas</TableHead>
              <TableHead>Lenguaje Favorito</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {leaderboard?.map((user: User, index: number) => (
              <TableRow key={user.id}>
                <TableCell className="text-center">
                  <P>{index + 1}</P>
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
                        <Avatar>
                          <AvatarFallback>{user.name}</AvatarFallback>
                          <AvatarImage src={user.image} />
                        </Avatar>
                        <P>{user.name}</P>
                      </a>
                    </LinkPreview>
                  </div>
                </TableCell>
                <TableCell>
                  <P>{user.averageCPS}</P>
                </TableCell>
                <TableCell>
                  <P>{user.racesCompleted}</P>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
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
