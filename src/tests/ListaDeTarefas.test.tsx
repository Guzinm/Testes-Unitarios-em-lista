import ListaDeTarefas from "@/components/ListaDeTarefas";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

test("Testar função 'adicionarTarefa'", async () => {
  render(<ListaDeTarefas data={[]} />);

  const input = await screen.findByPlaceholderText(/digite sua tarefa/i);
  const button = await screen.findByRole("button", {
    name: /adicionar tarefa/i,
  });

  fireEvent.change(input, { target: { value: "Estudar testes" } });
  fireEvent.click(button);

  expect(screen.getByText("Estudar testes")).toBeInTheDocument();
});

test("Testar função 'deletarTarefa'", async () => {
  const data = [{ id: 1, tarefa: "Estudar testes" }];

  render(<ListaDeTarefas data={data} />);

  const button = await screen.findByRole("button", { name: /excluir tarefa/i });

  fireEvent.click(button);

  expect(screen.queryByText("Estudar testes")).not.toBeInTheDocument();
});
