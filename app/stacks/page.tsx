import { Stacks } from "app/components/stacks";

export const metadata = {
  title: "tecnologias",
  description: "Conheça as tecnologias que domino.",
};

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
        Técnologias que domino
      </h1>
      <Stacks />
    </section>
  );
}
