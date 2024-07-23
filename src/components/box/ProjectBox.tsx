import React from "react";

type Props = {
  title: string;
  href?: string;
};

const ProjectBox = ({ title, href }: Props) => {
  return (
    <div className="border rounded-md p-2 shadow-md">
      <p>{title}</p>
      {href && <a href={href}>Visit</a>}
    </div>
  );
};

export default ProjectBox;
