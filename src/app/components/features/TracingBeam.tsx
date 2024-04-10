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
          My name is Juan Ignacio Muñoz, I am a software engineering student and a programmer
          with knowledge in different programming languages such as Python, C++, Html, Css and React among others.
          This is a small demo of my work using Next.js and Tailwindcss.
          But my forte and my growth goals are based on the development of geographic information systems software.
          geographic information systems (GIS) software. During 2020 and 2021 I've dedicated myself to
          complement Python with geospatial libraries such as Geopandas, Shapely and to complement with PyQgis the
          through PyQgis the development of plugins for the Qgis desktop software.
          Qgis is an open source software that allows the management of geographic information and the creation of maps.
          the creation of maps. The development of cartography and the creation of thematic maps is one of my passions.
          one of my passions and being able to execute it with satellite images is a challenge that I carry out with a lot of dedication to achieve
          with a lot of dedication to achieve quality results using satellites such as Landsat ,
          Sentinel 1 | 2 | 3 and others.

        </p>
        <p>
          My learning objectives were growing and reinforcing during the last 4 years, where through courses, tutorials and personal projects
          where through courses, tutorials and personal projects I was able to acquire knowledge in software development
          software development and geographic information systems (GIS). Applying cartography
          in different works, in order to develop slope calculations, contour lines, flood plains,
          photogrammetry using and piloting drones for taking aerial photographs and creating orthophotos.
          In this way and complementing Qgis I was able to carry out the creation of thematic maps, as well as 3D views of terrains.
          as well as 3D views of terrains and study surfaces.
        </p>
      </>
    ),
    image:
      "/image/foto.jpg",
  },
];
