import Home from "@/app/page";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

test("renderiza a página com a lista de tarefas", async () => {
  const ui = await Home();

  render(ui);

  expect(screen.getByText("Lavar a louça")).toBeInTheDocument();
  expect(screen.getByText("Comprar pão")).toBeInTheDocument();
  expect(
    screen.getByText("Buscar a bicicleta do conserto"),
  ).toBeInTheDocument();
  expect(screen.getByText("Fazer o trabalho sobre testes")).toBeInTheDocument();
  expect(screen.getByText("Enviar link do github a EBAC")).toBeInTheDocument();
});
