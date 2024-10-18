import { P } from "components/ui/typography/typography";
import { Race } from "lib/interfaces/race/race.interfaces";
import { Card } from "components/ui/card/card";
import { formatDate } from "lib/utils/shared/formatters/formatters";
import { useRacesReadByUserId } from "services/race/queries/race.queries";
import { getLanguageIconByName } from "lib/utils/language/language.utils";
import { formatMillisecondsToSeconds } from "lib/utils/race/race.utils";
import {
  Table,
  TableRow,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
} from "components/ui/table/table";

export default function LastRacesCard() {
  const { data: races } = useRacesReadByUserId();

  return (
    <Card className="w-full">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Fecha</TableHead>
            <TableHead>Tiempo</TableHead>
            <TableHead>CPS</TableHead>
            <TableHead>Lenguaje</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {races?.map((race: Race) => (
            <TableRow key={race.id}>
              <TableCell>{formatDate(race.createdAt)}</TableCell>
              <TableCell>
                {formatMillisecondsToSeconds(race.timeInMS)}s
              </TableCell>
              <TableCell>{race.cps}</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <img
                    className="h-5 w-5"
                    alt={race.language.name}
                    src={getLanguageIconByName(race.language.name)}
                  />
                  <P>{race.language.name}</P>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}

//           <tr className="border-b">
//             <th className="text-left py-2 px-4">Fecha</th>
//             <th className="text-left py-2 px-4">Tiempo</th>
//             <th className="text-left py-2 px-4">CPS</th>
//             <th className="text-left py-2 px-4">Lenguaje</th>
//           </tr>
//         </thead>
//         <tbody>
//           {races?.map((race: Race) => (
//             <tr key={race.id} className="border-b">
//               <td className="py-2 px-4">
//                 <P>{formatDate(race.createdAt)}</P>
//               </td>
//               <td className="py-2 px-4">
//                 <P>{formatMillisecondsToSeconds(race.timeInMS)}s</P>
//               </td>
//               <td className="py-2 px-4">
//                 <P>{race.cps}</P>
//               </td>
//               <td className="py-2 px-4">
//                 <P>{race.language.name}</P>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </Card>
//   );
// }
