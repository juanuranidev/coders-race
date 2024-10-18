import { H2 } from "components/ui/typography/typography";
import { ButtonPrimary } from "components/ui/button/button";
import { useNavigate, type NavigateFunction } from "react-router-dom";

export default function NotFound() {
  const navigate: NavigateFunction = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center pt-52 gap-4">
      <H2>¡Ups! Página no encontrada</H2>
      <ButtonPrimary onClick={() => navigate("/")}>
        Volver a la página principal
      </ButtonPrimary>
    </div>
  );
}
