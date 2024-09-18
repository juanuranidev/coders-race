import GitHubButton from "components/ui/github-button/github-button";

export default function Navbar({}) {
  return (
    <div className="container mx-auto py-5 h-[5rem]">
      <div
        className="flex justify-between"
        style={{ minWidth: "100%", width: "100%" }}
      >
        <div className="flex flex-row gap-6">
          <a
            href="/"
            color="secondary"
            className="font-light text-white-500 hover:underline"
          >
            Inicio
          </a>
          <a
            href="/play"
            color="secondary"
            className="font-medium text-white-500 hover:underline"
          >
            Jugar
          </a>
          <a
            href="/ranking"
            color="secondary"
            className="font-semibold text-white-500 hover:underline"
          >
            Ranking
          </a>
        </div>
        <div className="cursor-pointer">
          <GitHubButton onClick={() => {}} text="Sign in" />
        </div>
      </div>
    </div>
  );
}