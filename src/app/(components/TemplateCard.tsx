import { Button } from "@/components/ui/button";
import Image, { StaticImageData } from "next/image";
import React from "react";

type TemplateCardProps = {
  id: number;
  image: string | StaticImageData;
};

export default function TemplateCard({ id, image }: TemplateCardProps) {
  return (
    <div
      key={id}
      className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-transform duration-300 hover:scale-[1.03] hover:shadow-lg"
    >
      <div className="relative w-full aspect-[3/4]">
        <Image
          src={typeof image === "string" ? image : image.src}
          alt={`Template ${id}`}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center justify-center transition-colors duration-300 group-hover:bg-black/30">
        <Button className="opacity-0 group-hover:opacity-100 text-white px-4 py-2 text-sm font-medium rounded-lg transition duration-300 hover:bg-white hover:text-black">
          Preview
        </Button>
      </div>
    </div>
  );
}
