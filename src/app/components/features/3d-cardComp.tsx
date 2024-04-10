import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";


export function ThreeDCardDemo() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="relative dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
        <CardItem
          translateZ="50"
          className="text-xl font-bold dark:text-white" // Texto blanco en modo oscuro
        >
          Sentinel 2 multispectral image processing
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-sm max-w-sm mt-2 dark:text-white" // Asegurándose de que el texto sea blanco en modo oscuro
        >
          NDVI and NDWI index calculation for the study of vegetation and water bodies in Cordoba-Argentina.
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src="/image/Sentinel2.png" // Corrección en la ruta de la imagen
            alt="Imagen Sentinel 2"
            width={500}
            height={300}
            layout="responsive"
          />
        </CardItem>
      </CardBody>

      <CardBody className="relative dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
        <CardItem
          translateZ="50"
          className="text-xl font-bold dark:text-white"
        >
          Drone Flight and Photogrammetry
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-sm dark:text-neutral-300">
          Photogrammetry processed in PIX4D for the generation of orthomosaics and digital elevation models,
          and development of flood simulation with HEC-RAS.
        </CardItem>
        <CardItem
          translateZ="100"
          className="w-full">
          <Image
            src="/image/HEC-RAS.png"
            alt="Tiff Hec-Ras"
            width={500}
            height={300}
            layout="responsive"
          />
        </CardItem>
      </CardBody>
      <CardBody className="relative dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
        <CardItem
          translateZ="50"
          className="text-xl font-bold dark:text-white"
        >
          Objetc 3D in Qgis
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-sm dark:text-neutral-300">
          Development of 3D surface by means of DEM acquired from satellites and processed in Qgis.
          From it, a web page was generated for its visualization and 2D mapping with data obtained from OSM.
        </CardItem>
        <CardItem
          translateZ="100"
          className="w-full">
          <Image
            src="/image/3D1.png"
            alt="Tiff Hec-Ras"
            width={500}
            height={300}
            layout="responsive"
          />
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
