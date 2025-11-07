import Item from "@/components/Item";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

test("Testa se a tarefa enviada é exibida corretamente", async () => {
  const tarefa = { id: 1, tarefa: "Comprar pão" };
  const onDelete = jest.fn();

  render(<Item tarefa={tarefa} onDelete={onDelete} />);

  const elemento = await screen.findByText(tarefa.tarefa);

  expect(elemento).toBeInTheDocument();
});

test("Testa se a função é chamada ao clicar no botão", async () => {
  const tarefa = { id: 1, tarefa: "Comprar pão" };
  const onDelete = jest.fn();

  const { getByText } = render(<Item tarefa={tarefa} onDelete={onDelete} />);

  fireEvent.click(getByText("Excluir Tarefa"));

  expect(onDelete).toHaveBeenCalled();
});

test("Testa se a função é chamada ao clicar no botão", async () => {
  const tarefa = { id: 1, tarefa: "Comprar pão" };
  const onDelete = jest.fn();

  const { getByText } = render(<Item tarefa={tarefa} onDelete={onDelete} />);

  fireEvent.click(getByText("Excluir Tarefa"));

  expect(onDelete).toHaveBeenCalledWith(tarefa.id);
});
