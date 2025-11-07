import ListaDeTarefas from "@/components/ListaDeTarefas";
import { MOCK_DATA } from "@/lib/data/tarefas";

export default async function Home() {
  const data = await Promise.resolve(MOCK_DATA);

  return <ListaDeTarefas data={data} />;
}
