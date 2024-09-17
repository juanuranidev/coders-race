import { lazy, Suspense, ComponentType } from "react";

const Loadable =
  (Component: ComponentType<any>) => (props: { [key: string]: any }) => (
    <Suspense fallback={<p>awd</p>}>
      <Component {...props} />
    </Suspense>
  );

const HomeView = Loadable(lazy(() => import("pages/public/home/home")));

const PublicRoutes = {
  element: <HomeView />,
  children: [],
};

export default PublicRoutes;
