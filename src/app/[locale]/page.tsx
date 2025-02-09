import Layout from "@/components/Layout";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";

export default function Home() {
  return (
      <Layout location={"home"}>
          <main className="pt-24 lg:w-[52%] lg:py-24">
              <AboutSection/>
              <ExperienceSection/>
              <ProjectsSection/>
          </main>
      </Layout>
  );
}
