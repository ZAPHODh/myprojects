import { BlogPosts } from "app/components/posts";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">Olá</h1>
      <p className="mb-4">
        {`Meu nome é Luis, sou desenvolvedor web há 3 anos e gostaria de compartilhar alguns dos meus trabalhos com você.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
