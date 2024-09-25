import PublicLayout from "layouts/public/public-layout";
import { lazy, Suspense, ComponentType } from "react";

const Loadable =
  (Component: ComponentType<any>) => (props: { [key: string]: any }) => (
    <Suspense fallback={<p>awd</p>}>
      <Component {...props} />
    </Suspense>
  );

const HomeView = Loadable(lazy(() => import("pages/public/home/home")));
const PlayView = Loadable(lazy(() => import("pages/public/play/play")));
const RaceView = Loadable(lazy(() => import("pages/public/race/race")));

const PublicRoutes = {
  element: <PublicLayout />,
  children: [
    {
      path: "/",
      element: <HomeView />,
    },
    {
      path: "/play",
      element: <PlayView />,
    },
    {
      path: "/race/:gamemode/:language",
      element: <RaceView />,
    },
  ],
};

export default PublicRoutes;
