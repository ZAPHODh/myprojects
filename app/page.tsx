import { BlogPosts } from "app/components/posts";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">Olá</h1>
      <p className="mb-4">
        {`Me chamo Luis, sou desenvolvedor web à 3 anos e quero te mostrar alguns dos meus trabalhos.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
