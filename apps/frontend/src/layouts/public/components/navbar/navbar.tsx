import { P } from "components/ui/typography/typography";
import Icons from "lib/utils/shared/icons/icons";
import { Link } from "react-router-dom";
import GitHubButton from "components/ui/github-button/github-button";
import { useLoginMutation } from "services/user/mutations/user.mutations";
import { useUserReducers } from "hooks/user/useUserReducers";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuSeparator,
} from "components/ui/dropdown-menu/dropdown-menu";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "components/ui/navigation-menu/navigation-menu";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "components/ui/avatar/avatar";
import { logoutUser } from "services/user/auth/user.auth";

export default function Navbar() {
  const { user, setUser } = useUserReducers();
  const loginMutation = useLoginMutation();

  const handleSignInWithPopup = async () => {
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

  const handleSignOut = async () => {
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
          <NavigationMenu>
            <NavigationMenuList className="gap-2">
              <NavigationMenuItem>
                <Link to="/">
                  <NavigationMenuLink className="py-2 px-5 rounded-xl text-white-500 font-medium hover:bg-black-400">
                    Inicio
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/play">
                  <NavigationMenuLink className="py-2 px-5 rounded-xl text-white-500 font-medium hover:bg-black-400">
                    Jugar
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        {user ? (
          <DropdownMenu>
            <DropdownMenuTrigger
              asChild
              className="py-2 px-5 rounded-xl cursor-pointer hover:bg-black-400"
            >
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src={user?.image} alt={user?.name} />
                  <AvatarFallback>{user?.name}</AvatarFallback>
                </Avatar>
                <P>{user?.name}</P>
                <Icons.chevronDown />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-52">
              <DropdownMenuItem>
                <Icons.user className="mr-2 h-5 w-5" />
                <span className="font-medium">Perfil</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleSignOut}>
                <Icons.logOut className="mr-2 h-5 w-5" />
                <span className="text-red-500 font-medium">Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <GitHubButton
            onClick={handleSignInWithPopup}
            disabled={loginMutation.isPending}
            text={loginMutation.isPending ? "Signing in..." : "Sign in"}
          />
        )}
      </div>
    </div>
  );
}
