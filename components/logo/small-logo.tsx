import * as React from "react";
import Image from "next/image";

interface Props {
  width: number;
}

export default function SmallLogo({width}: Props) {
  return (
    <>
      <Image
        width={width}
        height={width/2}
        src="/assets/yuw-logo-small.svg"
        alt="YUW Logo"
      />
    </>
  )
}