import { Button } from "@/components/ui/button";

import { Features, pricingPlans, Templates } from "@/data/data";
import { auth } from "@clerk/nextjs/server";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import { redirect } from "next/navigation";
import React from "react";
import FeatureCard from "../(components/FeatureCard";
import PricingCard from "../(components/PricingCard";
import TemplateCard from "../(components/TemplateCard";
import Footer from "../(navigation)/Footer";
import Header from "../(navigation)/Header";
import formPicture from "../../assets/2148174087.jpg";

export default function Page() {
  // const { userId } = await auth();

  // if (userId != null) {
  //   redirect("/dashboard");
  // }

  return (
    <>
      <Header />
      <section className="relative">
        <div className="fixed inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
          <div className="fixed left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div>
        </div>{" "}
      </section>

      <section className="relative py-14">
        <div className="max-w-4xl selection:bg-gray-200 text-balance mx-auto flex flex-col items-center justify-center h-[75vh] container text-center gap-10 px-4">
          <h1 className="text-5xl md:text-6xl lg:text-7xl md:leading-20 text-[#8D54C0] tracking-wide font-bold">
            Build Your Perfect Resume, Effortlessly
          </h1>
          <p className="text-gray-700 text-lg md:text-xl">
            Create professional resumes with modern templates and export them as
            PDFs — all in one easy-to-use platform.
          </p>
          <Button className="w-1/2 flex items-center py-7 text-xl tracking-wider cursor-pointer">
            Get Started <ArrowRightIcon className="size-5" />
          </Button>
        </div>
      </section>
      <section id="features" className="scroll-mt-28 mb-10">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-4xl tracking-wider md:text-5xl font-semibold mb-10">
            Why Choose <span className="text-[#8D54C0]">ResumeBuilder?</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Features.map((feature) => (
              <FeatureCard key={feature.id} {...feature} />
            ))}
          </div>
        </div>
      </section>
      <section id="pricing" className="py-20 px-6 scroll-mt-11 mb-10">
        <div className="max-w-6xl mx-auto container">
          <h1 className="text-4xl md:text-6xl text-center font-semibold mb-14">
            Discover Our <span className="text-[#8D54C0]">Pricing Plans</span>
          </h1>
          <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pricingPlans.map((plan) => (
              <PricingCard key={plan.id} {...plan} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-6">
        <div className="max-w-4xl mx-auto container">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-10">
            Explore Our <span className="text-[#8D54C0]">Resume Templates</span>
          </h2>
          <div className="px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
            {Templates.map((template) => (
              <TemplateCard key={template.id} {...template} />
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white py-16 px-6 md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 max-w-lg w-full">
          <h2 className="text-4xl font-bold text-[#8D54C0] mb-6">
            Get in Touch
          </h2>
          <p className="text-gray-600 mb-8">
            Have questions or want to collaborate? Fill out the form and we’ll
            get back to you shortly.
          </p>

          <form className="space-y-6">
            {/* Name */}
            <div className="relative">
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder=" "
                className="peer block w-full rounded-md border border-gray-300 px-4 pt-6 pb-2 text-gray-900 placeholder-transparent focus:border-[#8D54C0] focus:outline-none focus:ring-1 focus:ring-[#8D54C0]"
              />
              <label
                htmlFor="name"
                className="absolute left-4 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-[#8D54C0] cursor-text"
              >
                Your Name
              </label>
            </div>

            {/* Email */}
            <div className="relative">
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder=" "
                className="peer block w-full rounded-md border border-gray-300 px-4 pt-6 pb-2 text-gray-900 placeholder-transparent focus:border-[#8D54C0] focus:outline-none focus:ring-1 focus:ring-[#8D54C0]"
              />
              <label
                htmlFor="email"
                className="absolute left-4 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-[#8D54C0] cursor-text"
              >
                Your Email
              </label>
            </div>

            {/* Message */}
            <div className="relative">
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                placeholder=" "
                className="peer block w-full rounded-md border border-gray-300 px-4 pt-6 pb-2 text-gray-900 placeholder-transparent focus:border-[#8D54C0] focus:outline-none focus:ring-1 focus:ring-[#8D54C0] resize-none"
              />
              <label
                htmlFor="message"
                className="absolute left-4 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-[#8D54C0] cursor-text"
              >
                Your Message
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-[#8D54C0] hover:bg-[#6b3aab] transition text-white font-semibold rounded-md py-3"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right - Image */}

        <div className="hidden md:block">
          <Image
            src={formPicture}
            width={600}
            height={600}
            alt="Contact us illustration"
            className="rounded-lg object-cover"
          />
        </div>
      </section>
      <Footer />
    </>
  );
}
