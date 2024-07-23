type SkillProps = {
  title: string;
  img: string;
  class_name?: string;
};

const _Skills: SkillProps[] = [
  {
    title: "C++",
    img: "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg",
    class_name: "bg-blue-100",
  },
  {
    title: "Rust",
    img: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Rust_programming_language_black_logo.svg",
    class_name: "bg-black/10",
  },
  {
    title: "Python",
    img: "https://upload.wikimedia.org/wikipedia/commons/archive/c/c3/20220821155028%21Python-logo-notext.svg",
    class_name: "bg-yellow-100",
  },
  {
    title: "Javascript",
    img: "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg",
    class_name: "bg-yellow-50",
  },
];
export default _Skills;
