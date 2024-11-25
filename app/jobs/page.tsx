import { BlogPosts } from "app/components/posts";

export const metadata = {
  title: "trabalhos",
  description: "Leia sobre meus trabalhos.",
};

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
        Meus Trabalhos
      </h1>
      <BlogPosts />
    </section>
  );
}
