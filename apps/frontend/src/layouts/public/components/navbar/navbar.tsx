import { P } from "components/ui/typography/typography";
import Icons from "lib/utils/shared/icons/icons";
import GitHubButton from "components/ui/github-button/github-button";
import { logoutUser } from "services/user/auth/user.auth";
import { useUserReducers } from "hooks/user/useUserReducers";
import { useLoginMutation } from "services/user/mutations/user.mutations";
import { Link, NavigateFunction, useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuSeparator,
} from "components/ui/dropdown-menu/dropdown-menu";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "components/ui/avatar/avatar";

export default function Navbar() {
  const navigate: NavigateFunction = useNavigate();
  const { user, setUser } = useUserReducers();
  const loginMutation = useLoginMutation();

  const handleSignInWithPopup = async (): Promise<void> => {
    try {
      const user = await loginMutation.mutateAsync();

      setUser(user);
    } catch (error) {
      console.error(
        "Login failed:",
        error instanceof Error ? error.message : "Unknown error"
      );
    }
  };

  const handleSignOut = async (): Promise<void> => {
    await logoutUser();
    setUser(null);
  };

  return (
    <div className="container px-0 py-10 flex flex-row items-center h-[5rem]">
      <div
        className="flex justify-between"
        style={{ minWidth: "100%", width: "100%" }}
      >
        <div className="flex flex-row items-center gap-6">
          <Link
            to="/"
            className="mr-4 rounded-lg text-white-500 font-medium inline-block transition-transform duration-300 ease-in-out hover:translate-y-0.5"
          >
            Inicio
          </Link>
          <Link
            to="/play"
            className="mr-4 rounded-lg text-white-500 font-medium inline-block transition-transform duration-300 ease-in-out hover:translate-y-0.5"
          >
            Jugar
          </Link>
          <Link
            to="/leaderboard"
            className="rounded-lg text-white-500 font-medium inline-block transition-transform duration-300 ease-in-out hover:translate-y-0.5"
          >
            Leaderboard
          </Link>
        </div>
        {user ? (
          <DropdownMenu>
            <DropdownMenuTrigger
              asChild
              className="py-2 px-5 rounded-lg cursor-pointer border-2 border-black-500 hover:border-white-500 transition-all duration-300 ease-in-out"
            >
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src={user?.image} alt={user?.name} />
                  <AvatarFallback>{user?.name}</AvatarFallback>
                </Avatar>
                <P className="font-medium">{user?.name}</P>
                <Icons.chevronDown className="h-5 w-5" />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-52">
              <DropdownMenuItem onClick={() => navigate("/profile")}>
                <Icons.user className="mr-2 h-5 w-5" />
                <span className="font-medium">Perfil</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleSignOut}>
                <Icons.logOut className="mr-2 h-5 w-5" />
                <span className="text-red-400 font-medium">Cerrar sesión</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <GitHubButton
            text={"Sign in"}
            onClick={handleSignInWithPopup}
            disabled={loginMutation.isPending}
            isLoading={loginMutation.isPending}
          />
        )}
      </div>
    </div>
  );
}
