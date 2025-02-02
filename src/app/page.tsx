import Layout from "@/app/component/Layout";

export default function Home() {
  return (
      <Layout location={"home"}>
          <div className="flex flex-col justify-between gap-4">
              <div id={"about"} className={"h-screen w-96 bg-red-300"}>zone 1</div>
              <div id={"experience"} className={"h-screen w-96 bg-green-300"}>zone 2</div>
              <div id={"projects"} className={"h-screen w-96 bg-blue-300"}>zone 3</div>
          </div>
      </Layout>
  );
}
