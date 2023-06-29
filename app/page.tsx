"use client";
import Head from "next/head";
import BackgroundMotion from "@/components/BackgroundMotion";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Link from "next/link";
import Image from "next/image";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";
import DesignWork from "@/components/DesignWork";
import rick from "@/public/rick.gif";
import { useEffect, useState } from "react";

import {
  Skill as SkillType,
  Project as ProjectType,
  Design as DesignType,
  PageInfo as PageInfoType,
} from "@/typings";
import {
  fetchSkills,
  fetchProjects,
  fetchDesigns,
  fetchInfo,
} from "@/utils/index";
import Loading from "@/components/Loading";

type Props = {
  skills: SkillType[];
  projects: ProjectType[];
  designs: DesignType[];
  pageInfo: PageInfoType[];
};

export default function LandingPage() {
  const [skills, setSkills] = useState<SkillType[]>([]);
  const [projects, setProjects] = useState<ProjectType[]>([]);
  const [designs, setDesigns] = useState<DesignType[]>([]);
  const [pageInfo, setPageInfo] = useState<PageInfoType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const [pageInfoData, skillsData, projectsData, designsData] =
          await Promise.all([
            fetchInfo(),
            fetchSkills(),
            fetchProjects(),
            fetchDesigns(),
          ]);

        setPageInfo(pageInfoData);
        setSkills(skillsData);
        setProjects(projectsData);
        setDesigns(designsData);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  return (
    <div className="h-screen snap-y snap-mandatory overflow-scroll overflow-y-scroll scroll-smooth  z-0">
      <Head>
        <title>Landing Page</title>
      </Head>

      <section
        id="hero"
        className="relative min-h-screen bg-black flex flex-col space-y-8 items-center justify-center text-center"
      >
        <BackgroundMotion />
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center snap-start">
          {/*   @ts-ignore */}
          <Hero pageInfo={pageInfo} />
        </div>
      </section>

      <section id="about" className="snap-end">
        <div className="">
          {/*   @ts-ignore */}
          <About pageInfo={pageInfo} />
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="snap-end">
        <Skills skills={skills} />
      </section>

      {/* projects */}
      <section id="projects" className="snap-start">
        <Projects projects={projects} />
      </section>

      {/* copywriting */}
      <section id="designWork" className="snap-start">
        <DesignWork designs={designs} />
      </section>

      {/* contact */}
      <section id="contact" className="snap-end">
        {/*   @ts-ignore */}
        <Contact pageInfo={pageInfo} />
      </section>

      {/* home btn */}
      <Link
        href="#hero"
        className="sticky bottom-24 md:bottom-8 cursor-pointer"
      >
        <div className="inline-block">
          <Image
            src={rick}
            width={80}
            alt="home icon"
            className="rounded-full shadow-lg ml-4"
          />
        </div>
      </Link>
    </div>
  );
}
