import React from "react";
import Image from "next/image";
import SkillBox from "@/components/box/SkillBox";
import ProjectBox from "@/components/box/ProjectBox";
import SocialBox from "@/components/box/SocialBox";
import _Skills from "@/db/skills";
import _Projects from "@/db/projects";
import _Socials from "@/db/socials";

const page = () => {
  return (
    <main className="flex flex-col gap-2 w-[320px] mx-auto my-9">
      <div className="w-full flex flex-col justify-center items-center">
        <div className="w-[50%] border p-2 rounded-lg rotate-3 shadow-xl">
          <Image
            src={"/profile.jpg"}
            width={1000}
            className="w-full rounded-sm border"
            height={0}
            alt="Cover"
          />
        </div>
        <div className="w-[70%] mt-4">
          <h1 className="text-center text-[20px]">Abhishek Kr. Verma</h1>
          <h2 className="text-right text-[14px]">
            ~ B.Sc, CS & AI Enthusiast, Defence Aspirant
          </h2>
        </div>
      </div>
      <div className="flex flex-col">
        <h1 className="text-[30px] text-center">Skills</h1>
        <div className="grid grid-cols-3 gap-2">
          {_Skills.map((p) => (
            <SkillBox
              key={p.title}
              className={p.class_name}
              title={p.title}
              imageUrl={p.img}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col">
        <h1 className="text-[40px] text-center">Projects</h1>
        <div className="grid gap-2">
          {_Projects.map((p) => (
            <ProjectBox title={p.title} href={p.url} key={p.url} />
          ))}
        </div>
      </div>
      <div className="flex flex-col">
        <h1 className="text-[40px] text-center">Socials</h1>
        <div className="flex flex-wrap justify-between items-center">
          {_Socials.map((s) => (
            <SocialBox title={s.title} href={s.url} key={s.title} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default page;
