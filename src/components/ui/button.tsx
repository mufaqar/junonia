import clsx from 'clsx';
import React from 'react'

interface IButton {
     size? : "large" | "medium" | "small";
     variants? : "primary" | "secondary" | "outlined" | "text";
     fullwidth? : boolean;
     children: React.ReactNode
}

const Button = ({children, size, variants, fullwidth }:IButton) => {
  return (
    <button className={clsx(
          "px-6 py-2 uppercase active:scale-105",
          { 
               "w-full" : fullwidth === true,
               "bg-yellow text-black hover:bg-light-blue hover:text-white" : variants === "primary",
               "bg-white text-black hover:bg-yellow" : variants === "secondary",
               "border-[1px] border-border" : variants === "outlined",
               "" : variants === "text",
               "text-sm px-4 py-1" : size === "small",
               "text-base px-12 py-2.5" : size === "medium",
               "px-20 py-3" : size === "large",

          }
    )}
    >
     {children}
     </button>
  )
}

export default Button