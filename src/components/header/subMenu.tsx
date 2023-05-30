import Link from "next/link";
import React from "react";

const SubMenu = ({children}:any) => {
  return (
    <div className="absolute pt-4">
      <ul className="bg-light-gray py-4 px-6 hidden group-hover:block w-[200px]">
      {children}
      </ul>
    </div>
  );
};

export default SubMenu;