import React from "react";
import Heading from "./Heading";
import SkillCard from "./SkillCard";
import { FaPython, FaJava, FaPhp, FaGithub } from "react-icons/fa";
import {
  SiTensorflow,
  SiPytorch,
  SiOpencv,
  SiFastapi,
  SiScikitlearn,
  SiMysql,
  SiDocker,
  SiLatex,
  SiStreamlit,
  SiJavascript,
} from "react-icons/si";

const skills = [
  { logo: <FaPython />, title: "Python & Deep Learning", disc: "Core Programming, CNNs & PyTorch/TensorFlow", color: "#3776AB" },
  { logo: <SiOpencv />, title: "Computer Vision & XAI", disc: "Image Processing & Grad-CAM Heatmaps", color: "#5C3EE8" },
  { logo: <SiFastapi />, title: "FastAPI & REST APIs", disc: "Decoupled High-Performance Backends", color: "#009688" },
  { logo: <SiMysql />, title: "MySQL & Relational DBs", disc: "SQLAlchemy ORM & Normalized Database Design", color: "#00758F" },
  { logo: <SiScikitlearn />, title: "Data Science & ML", disc: "NumPy, Pandas, Matplotlib & Scikit-learn", color: "#F7931E" },
  { logo: <SiStreamlit />, title: "Full-Stack Dev & OOP", disc: "Streamlit, PHP, AJAX & JavaScript Interfaces", color: "#FF4B4B" },
  { logo: <SiDocker />, title: "Git, Docker & Linux", disc: "Containerization, Shell & Version Control", color: "#2496ED" },
  { logo: <SiLatex />, title: "Scientific LaTeX & Agile", disc: "IEEE Research Writing & Scrum Workflows", color: "#008080" },
];

export const SkillsMatrix: React.FC = () => {
  return (
    <section id="skills" data-name="Skills" className="scroll-mt-28 flex flex-col gap-8">
      <div>
        <Heading FWord="TECHNICAL" LWord="SKILLS" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {skills.map((skill, i) => (
          <SkillCard key={i} {...skill} />
        ))}
      </div>
    </section>
  );
};

export default SkillsMatrix;
