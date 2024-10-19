import PublicLayout from "layouts/public/public-layout";
import PublicRoutes from "routes/public/PublicRoutes";
import { lazy, Suspense, ComponentType } from "react";

const Loadable =
  (Component: ComponentType<any>) => (props: { [key: string]: any }) => (
    <Suspense fallback={<p>awd</p>}>
      <Component {...props} />
    </Suspense>
  );

const RaceView = Loadable(lazy(() => import("pages/public/race/race")));
const ProfileView = Loadable(lazy(() => import("pages/user/profile/profile")));
const NotFoundView = Loadable(
  lazy(() => import("pages/public/not-found/not-found"))
);
const UserRoutes = {
  element: <PublicLayout />,
  children: [
    ...PublicRoutes.children,
    {
      path: "/race/compete/:language",
      element: <RaceView type="compete" />,
    },
    {
      path: "/profile",
      element: <ProfileView />,
    },
    {
      path: "*",
      element: <NotFoundView />,
    },
  ],
};

export default UserRoutes;
