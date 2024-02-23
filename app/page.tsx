import Posts from "./components/Posts";

export default function Home() {
  return (
    <main>
      <p className="mt-12 mb-12 text-3xl text-center dark:text-white">
        Pilotcraft Aerospace
        <br/>
        <span className="whitespace-nowrap">
          <span className="font-bold">In thrust we trust</span>.
        </span>
      </p>
      <Posts />
    </main>
  );
}
