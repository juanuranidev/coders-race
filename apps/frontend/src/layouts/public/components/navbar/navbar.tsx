import GitHubButton from "components/ui/github-button/github-button";

export default function Navbar({}) {
  return (
    <div className="container mx-auto py-10 flex flex-row items-center h-[5rem]">
      <div
        className="flex justify-between"
        style={{ minWidth: "100%", width: "100%" }}
      >
        <div className="flex flex-row items-center gap-6">
          <a href="/" color="secondary" className="font-medium text-white-500">
            Inicio
          </a>
          <a
            href="/play"
            color="secondary"
            className="font-medium text-white-500"
          >
            Jugar
          </a>
          <a
            href="/ranking"
            color="secondary"
            className="font-medium text-white-500"
          >
            Ranking
          </a>
        </div>
        <div>
          <GitHubButton onClick={() => {}} text="Sign in" />
        </div>
      </div>
    </div>
  );
}
