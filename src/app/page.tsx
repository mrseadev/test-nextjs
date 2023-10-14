import prisma from "../../libs/prisma";

export const revalidate = 0;

export default async function Home() {
  const res = await prisma.todo.findFirst();
  console.log(res);
  const { title } = res || {};

  return (
    <main>
      <h1>Hello nextjs, abc</h1>
      this is title: <strong>{title}</strong>
    </main>
  );
}
