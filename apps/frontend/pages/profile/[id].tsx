import React from "react";
import { Profile } from "views";
import { PublicLayout } from "components";

export default function index() {
  return (
    <PublicLayout>
      <Profile />
    </PublicLayout>
  );
}
