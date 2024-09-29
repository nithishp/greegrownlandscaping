"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Link from "next/link";

const VerticalSlideFeatures = ({ features = [] }) => {
  // Default features to an empty array
  const [selected, setSelected] = useState(0);

  return (
    <section className=" flex max-w-5xl flex-col-reverse items-center gap-6 bg-white  py-12 md:flex-row md:gap-12 ">
      <AnimatePresence mode="wait">
        {features.length > 0 ? (
          features.map((tab, index) => {
            return selected === index ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                key={index}
                className="w-full"
              >
                {/* Render the ExampleFeature component directly here, passing the data */}
                <ExampleFeature
                  title={tab.title}
                  url={tab.url}
                  text={tab.text}
                />
              </motion.div>
            ) : null;
          })
        ) : (
          <p></p> // Fallback UI when no features are passed
        )}
      </AnimatePresence>
      <Tabs features={features} selected={selected} setSelected={setSelected} />
    </section>
  );
};

const Tabs = ({ features = [], selected, setSelected }) => {
  return (
    <div className="w-full shrink-0 overflow-scroll hide-scrollbar md:w-fit">
      {features.length > 0 ? (
        features.map((tab, index) => {
          return (
            <Tab
              key={index}
              setSelected={setSelected}
              selected={selected === index}
              title={tab.title}
              tabNum={index}
            />
          );
        })
      ) : (
        <p></p> // Fallback UI for no tabs
      )}
    </div>
  );
};

const Tab = ({ selected, title, setSelected, tabNum }) => {
  return (
    <div className="group relative w-full md:w-fit">
      <button
        onClick={() => setSelected(tabNum)}
        className="relative z-0 flex w-full border-l-[6px] border-slate-200 p-4 transition-colors group-hover:border-slate-300 md:flex-col md:border-l-8 md:p-6"
      >
        <span
          className={`min-w-[150px] max-w-[200px] text-start text-xl font-bold transition-colors md:text-2xl ${
            selected
              ? "text-[#30af5b]"
              : "text-slate-400 group-hover:text-slate-500"
          }`}
        >
          {title}
        </span>
      </button>
      {selected && (
        <motion.span
          layoutId="vertical-slide-feature-slider"
          className="absolute bottom-0 left-0 top-0 z-10 w-[6px] bg-[#30af5b] md:w-2"
        />
      )}
    </div>
  );
};

const ExampleFeature = ({ text, url, title }) => (
  <div>
    <Card className="max-w-2xl pb-4 ">
      <CardHeader>
        <div className="flex justify-between border-bottom">
          <div className="flex items-center"></div>
        </div>
      </CardHeader>

      <div className="space-y-4">
        <CardContent className="space-y-2">
          <div className="space-y-2">
            <img
              src={url}
              alt={title}
              className="block object-cover object-center w-full rounded-md h-72"
            />
          </div>
          <div className="block">
            <h3 className="text-xl font-semibold bold-32">{title}</h3>
          </div>
          <p className="leading-relaxed regular-16">{text}</p>
        </CardContent>
      </div>
    </Card>
  </div>
);

export default VerticalSlideFeatures;
