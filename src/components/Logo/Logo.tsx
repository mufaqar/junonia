import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

const Logo = () => {

  return (
    <Link href="/" className="w-36 md:w-52">
      <svg
        version="1.2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 153 40"
        width="153"
        height="40"
      >
        <defs>
          <image
            width="153"
            height="40"
            id="img1"
            href="data:image/png;base64,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"
          />
        </defs>
        <style></style>
        <filter id="f0">
          <feFlood flood-color="#111" flood-opacity="1" />
          <feBlend mode="normal" in2="SourceGraphic" />
          <feComposite in2="SourceAlpha" operator="in" />
        </filter>
        <g filter="url(#f0)">
          <use href="#img1" x="0" y="0" />
        </g>
      </svg>
    </Link>
  );
};

export default Logo;
