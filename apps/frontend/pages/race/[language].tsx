import React from "react";
import { Race } from "views";
import { PublicLayout } from "components";
export default function index() {
  return (
    <PublicLayout>
      <Race type="race" />
    </PublicLayout>
  );
}

index.auth = {
  unauthorized: "/",
};
