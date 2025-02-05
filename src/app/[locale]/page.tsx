import Layout from "@/components/Layout";
import AboutSection from "@/components/AboutSection";

export default function Home() {
  return (
      <Layout location={"home"}>
          <div className="flex flex-col justify-between gap-4 pt-24 lg:w-[52%] lg:py-24">
              <AboutSection/>
              <div id={"experience"} className={"h-screen w-full bg-green-300"}>zone 2</div>
              <div id={"projects"} className={"h-screen w-full bg-blue-300"}>zone 3</div>
          </div>
      </Layout>
  );
}
