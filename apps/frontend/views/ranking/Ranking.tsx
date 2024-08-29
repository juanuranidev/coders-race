import React, { useEffect, useState } from "react";
import {
  Card,
  Table,
  Avatar,
  TableRow,
  TableCell,
  TableBody,
  TableHeader,
  TableColumn,
} from "@nextui-org/react";
import { getLeaderboardService } from "services";
import { useRouter } from "next/router";
import { UserType } from "lib/types";
import { Loader } from "components";

export default function Ranking({}) {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [leaderboard, setLeaderboard] = useState<UserType[]>([]);

  const loadingState = isLoading ? "loading" : "idle";

  const handleGetLeaderboard = async () => {
    setIsLoading(true);
    try {
      const response = await getLeaderboardService();
      setLeaderboard(response.data);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    handleGetLeaderboard();
  }, []);

  return (
    <div className="container mx-auto px-5">
      <p className="font-semibold text-secondary py-8 text-lg">
        Mejores Correrores
      </p>
      <Card className="bg-backgroundSecondary" radius="md">
        <Table aria-label="Ranking de usuarios" removeWrapper isCompact>
          <TableHeader>
            <TableColumn className="text-secondary p-6">Posición</TableColumn>
            <TableColumn className="text-secondary p-6">Usuario</TableColumn>
            <TableColumn className="text-secondary p-6 text-center">
              CPM Promedio
            </TableColumn>
            <TableColumn className="text-secondary p-6 text-center">
              Carreras
            </TableColumn>
          </TableHeader>
          <TableBody
            items={leaderboard ?? []}
            loadingContent={<Loader />}
            loadingState={loadingState}
            emptyContent={"No hay usuarios para mostrar."}
          >
            {(user: UserType) => (
              <TableRow
                key={user?.id}
                className="cursor-pointer"
                onClick={() => router.replace(`/profile/${user?.id}`)}
              >
                <TableCell className="pl-10">
                  <p className="font-semibold text-secondary py-4 text-md">
                    {user?.id ?? "---"}
                  </p>
                </TableCell>
                <TableCell className="pb-2">
                  <div className="flex flex-row gap-4 items-center">
                    <Avatar size="md" alt="user image" src={user.image} />
                    <p className="font-semibold text-secondary py-4 text-md">
                      {user?.name}
                    </p>
                  </div>
                </TableCell>
                <TableCell style={{ textAlign: "center" }}>
                  <p className="font-semibold text-secondary py-4 text-md">
                    {user?.averageCpm ?? "---"}
                  </p>
                </TableCell>
                <TableCell style={{ textAlign: "center" }}>
                  <p className="font-semibold text-secondary py-4 text-md">
                    {user?.races ?? "---"}
                  </p>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}
