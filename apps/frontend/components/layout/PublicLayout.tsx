import { Header } from "../";

export default function PublicLayout({ children }: any) {
  return (
    <div className="bg-backgroundPrimary">
      <Header />
      <div style={{ minHeight: "calc(100vh - 5rem)" }}>{children}</div>
    </div>
  );
}
