import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { CheckIcon } from "lucide-react";
import React, { ReactNode } from "react";

type PricingCardProps = {
  id: string;
  price: number;
  name: string;
  features: string[];
  cta: string;
};

export default function PricingCard({
  id,
  price,
  name,
  features,
  cta,
}: PricingCardProps) {
  const isPopular = name.toLowerCase() === "pro";

  return (
    <Card
      key={id}
      className={cn(
        "border border-gray-200 shadow-sm flex flex-col",
        isPopular && "border-blue-500 bg-blue-50"
      )}
    >
      <CardHeader>
        <CardTitle
          className={cn(
            "text-2xl text-center",
            isPopular && "text-[#8D54C0] font-semibold"
          )}
        >
          {name}
        </CardTitle>
        <CardDescription className="text-3xl font-bold mt-2">
          Price : ${price}
        </CardDescription>
      </CardHeader>

      <CardContent className="flex flex-col justify-between flex-grow">
        <ul className="mb-6 space-y-2">
          {features.map((feature, i) => (
            <li key={i}>
              <Feature>{feature}</Feature>
            </li>
          ))}
        </ul>

        <Button
          variant={isPopular ? "popular" : "default"}
          className="w-full py-5 text-lg font-medium mt-auto"
        >
          {cta}
        </Button>
      </CardContent>
    </Card>
  );
}

function Feature({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <CheckIcon className="w-4 h-4 stroke-accent bg-[#8D54C0] rounded-full p-0.5" />
      <span>{children}</span>
    </div>
  );
}
