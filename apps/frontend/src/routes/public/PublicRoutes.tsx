import PublicLayout from "layouts/public/public-layout";
import { lazy, Suspense, ComponentType } from "react";

const Loadable =
  (Component: ComponentType<any>) => (props: { [key: string]: any }) => (
    <Suspense fallback={<p>awd</p>}>
      <Component {...props} />
    </Suspense>
  );

const HomeView = Loadable(lazy(() => import("pages/public/home/home")));

const PublicRoutes = {
  element: <PublicLayout />,
  children: [
    {
      path: "/",
      element: <HomeView />,
    },
  ],
};

export default PublicRoutes;
