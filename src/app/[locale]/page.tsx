import Layout from "@/components/Layout";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";

export default function Home() {
  return (
      <Layout location={"home"}>
          <div className="flex flex-col justify-between gap-4 lg:w-[52%]">
              <AboutSection/>
              <ExperienceSection/>
              <div id={"projects"} className={"h-screen w-full bg-blue-300"}>zone 3</div>
          </div>
      </Layout>
  );
}
