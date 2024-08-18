import Link from "next/link";

export default function Home() {
  return (
    <main className="flex  flex-col items-center  p-24">
      <span className="text-5xl">hello my firend</span>
      <Link href={'/about'}>about page</Link>
    </main>
  )
}
