"use client";
import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "../ui/tracing-beam";
import { AnimatedTooltipPreview } from "./AnimatedTool";

export function TracingBeamDemo() {
  return (
    <TracingBeam className="px-30">
      <div className="max-w-xl mx-auto antialiased pt-4 relative">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">

            <p className={twMerge("text-xl mb-30")}>
              {item.title}
            </p>

            <div className="text-sm  prose prose-sm dark:prose-invert">
              {item?.image && (
                <Image
                  src={item.image}
                  alt="blog thumbnail"
                  height="1000"
                  width="1000"
                  className="rounded-lg mb-10 object-cover"
                />
              )}
              {item.description}
            </div>
          </div>
        ))}
        <div>
          <AnimatedTooltipPreview />
        </div>
      </div>
    </TracingBeam>
  );
}

const dummyContent = [
  {
    title: "About me",
    description: (
      <>
        <p>
          My name is Juan Ignacio Muñoz Ovalles, I am a software engineering student and programmer with knowledge in different programming languages
          such as Python, C++, R, among others.This is a small demonstration of my work using Next.js and Tailwindcss, but my forte and my growth goals
          are based on the development of geographic information systems (GIS) software.
          During 2020 and 2021 I dedicated myself to complement Python with geospatial libraries such as Geopandas, Shapely and complement with PyQgis
          the development of plugins for the desktop software Qgis, 
          This is an open source software that allows the management of geographic information and the creation of maps along with the development of cartography
          which is one of my passions and to be able to run it with satellite images is a challenge that I carry out with great dedication 
          to achieve quality results using satellites such as Landsat, Sentinel 1 | 2 | 3 and others.
        </p>
        <p>
          My learning objectives were growing and reinforcing during the last 4 years where I was able to apply cartography in different works
          in order to develop slope calculations, contour lines, flood plains, photogrammetry using and piloting drones for taking aerial photographs and creating orthophotos.
          In this way and complementing Qgis I was able to create thematic maps, as well as 3D views of terrain and study surfaces.
        </p>
      </>
    ),
    image:
      "/image/foto.jpg",
  },
];
