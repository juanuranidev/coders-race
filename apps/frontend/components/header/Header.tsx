import React from "react";
import {
  Link,
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
} from "@nextui-org/react";
import { signIn, signOut } from "next-auth/react";
import { useUserData } from "lib/hooks";
import { useRouter } from "next/router";
import GitHubButton from "../GitHubButton/GitHubButton";
import ArrowDown from "assets/icons/ArrowDown.svg";
import Image from "next/image";

export default function Header({}) {
  const router = useRouter();
  const userData = useUserData();

  return (
    <div className="container mx-auto p-5 h-[5rem]">
      <div
        className=" bg-backgroundPrimary flex flex-row justify-between"
        style={{ minWidth: "100%", width: "100%" }}
      >
        <div className="flex flex-row gap-6">
          <Link
            className="font-semibold hover:underline"
            color="secondary"
            href="/"
          >
            Inicio
          </Link>
          <Link
            className="font-semibold hover:underline"
            color="secondary"
            href="/play"
          >
            Jugar
          </Link>
          <Link
            className="font-semibold hover:underline"
            color="secondary"
            href="/ranking"
          >
            Ranking
          </Link>
        </div>
        <div className="cursor-pointer">
          {userData && userData ? (
            <Dropdown className="cursor-pointer">
              <DropdownTrigger>
                <div className="flex gap-2">
                  <Avatar radius="lg" src={userData?.image} />
                  <Image
                    width={20}
                    height={20}
                    alt="arrow icon"
                    src={ArrowDown.src}
                  />
                </div>
              </DropdownTrigger>
              <DropdownMenu closeOnSelect={false} disabledKeys={["github"]}>
                <DropdownSection aria-label="Profile & Actions" showDivider>
                  <DropdownItem
                    className="opacity-100 cursor-default"
                    isReadOnly
                    key="github"
                    color="secondary"
                    style={{ cursor: "default" }}
                  >
                    <p>{userData?.githubUsername}</p>
                  </DropdownItem>
                </DropdownSection>
                <DropdownItem
                  onClick={() => router.replace(`/profile/${userData?.id}`)}
                  className="text-secondary"
                >
                  Perfil
                </DropdownItem>
                <DropdownItem
                  onClick={() => signOut()}
                  className="text-danger"
                  color="danger"
                >
                  Cerrar sesión
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          ) : (
            <GitHubButton onClick={() => signIn("github")}>
              Sign in
            </GitHubButton>
          )}
        </div>
      </div>
    </div>
  );
}
