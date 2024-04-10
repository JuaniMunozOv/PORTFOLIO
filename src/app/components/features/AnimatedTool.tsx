"use client";
import React from "react";
import { AnimatedTooltip } from "../ui/animated-tooltip";
import Image from "next/image";

const people = [
  {
    id: 1,
    name: "Qgis",
    designation: "",
    image: "/image/QGIS_logo.svg",
  },
  {
    id: 2,
    name: "Python",
    designation: "",
    image: "/image/Python-logo.svg",
  },
  {
    id: 3,
    name: "PostGre",
    designation: "",
    image: "/image/PostGis-logo.png",
  },
  {
    id: 4,
    name: "GDAL",
    designation: "",
    image: "/image/GDAL-Logo.png",
  },
  {
    id: 5,
    name: "C++",
    designation: "",
    image: "/image/C++_Logo.png",
  },
];

export function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 ">
      <AnimatedTooltip items={people} />
    </div>
  );
}
