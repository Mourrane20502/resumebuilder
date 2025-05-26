import { Features } from "@/data/data";
import React from "react";

export default function FeatureCard({
  id,
  title,
  description,
  icon: Icon,
}: Features) {
  return (
    <div className="p-5 flex flex-col items-center text-center">
      <Icon className="w-12 h-12 mb-4 text-[#8D54C0]" />

      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
