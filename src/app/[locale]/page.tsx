import Layout from "@/components/Layout";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";

export default function Home() {
  return (
      <Layout location={"home"}>
              <AboutSection/>
              <ExperienceSection/>
              <ProjectsSection/>
      </Layout>
  );
}
