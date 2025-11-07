import { NovaTarefa } from "@/components/NovaTarefa";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

test("Testar input aceita texto", () => {
  render(<NovaTarefa onAdd={jest.fn()} />);

  const input = screen.getByPlaceholderText("Digite sua Tarefa");

  fireEvent.change(input, { target: { value: "Lavar a louça" } });

  expect(input).toHaveValue("Lavar a louça");
});

test("Testar se função é chamada ao enviar", () => {
  const onAdd = jest.fn();
  render(<NovaTarefa onAdd={onAdd} />);

  const input = screen.getByPlaceholderText("Digite sua Tarefa");
  const button = screen.getByText("Adicionar Tarefa");

  fireEvent.change(input, { target: { value: "Lavar a louça" } });
  fireEvent.click(button);

  expect(onAdd).toHaveBeenCalledWith("Lavar a louça");
});

test("Testar se função é chamada ao enviar", () => {
  const onAdd = jest.fn();
  render(<NovaTarefa onAdd={onAdd} />);

  const button = screen.getByText("Adicionar Tarefa");

  fireEvent.click(button);

  expect(onAdd).not.toHaveBeenCalled();
});

test("Testar se função é chamada ao enviar", () => {
  render(<NovaTarefa onAdd={jest.fn()} />);

  const input = screen.getByPlaceholderText("Digite sua Tarefa");
  const button = screen.getByText("Adicionar Tarefa");

  fireEvent.change(input, { target: { value: "Lavar a louça" } });
  fireEvent.click(button);

  expect(input).toHaveValue("");
});
