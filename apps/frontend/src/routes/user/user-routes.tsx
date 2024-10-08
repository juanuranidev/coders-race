import PublicLayout from "layouts/public/public-layout";
import PublicRoutes from "routes/public/PublicRoutes";
import { lazy, Suspense, ComponentType } from "react";

const Loadable =
  (Component: ComponentType<any>) => (props: { [key: string]: any }) => (
    <Suspense fallback={<p>awd</p>}>
      <Component {...props} />
    </Suspense>
  );

const ProfileView = Loadable(lazy(() => import("pages/user/profile/profile")));

const UserRoutes = {
  element: <PublicLayout />,
  children: [
    ...PublicRoutes.children,
    {
      path: "/profile",
      element: <ProfileView />,
    },
  ],
};

export default UserRoutes;
