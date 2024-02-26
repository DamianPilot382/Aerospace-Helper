import Posts from "./components/Posts";
import Image from "next/image"


export default function Home() {
  return (
    <main>

      <p className="mt-12 mb-12 text-3xl text-center dark:text-white">
        Pilotcraft Aerospace
        <br/>
        <span className="whitespace-nowrap">
          <span className="font-bold">In thrust we trust</span>
        </span>
      </p>

      <Image
      className="border-2 border-black dark:border-slate-500
      drop-shadow-sm shadow-black mx-auto mt-10"
      src="/images/Bandit_Bird.jpg"
      alt="Damian Ugalde"
      width={350}
      height={80}
      priority={true}
      />
      <p className="whitespace-nowrap text-center dark:text-white text-xl">Bandit, true enjoyer of things that fly. <br/>Either birds or toys that I throw at him.</p>
      <Posts />
    </main>
  );
}
