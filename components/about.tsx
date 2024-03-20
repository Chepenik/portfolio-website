"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I am a <span className="font-medium">Bitcoin maximalist</span> who loves
        technology, especially Bitcoin, Nostr, and open-source software. I
        believe they empower regular people, which is awesome. Much of my time
        is devoted to making websites and attending Bitcoin meetups like
        MassAdoption and Boston BitDevs.
      </p>
      <p className="mb-3">
        Throughout my life, I hold the aspiration to witness the rise of a
        financial system that emancipates humanity from the shackles of money as
        a tool of control. The prevailing fiat money system, backed by debt and
        coercion, perpetuates a harmful cycle that undermines true financial
        sovereignty. That's why I advocate for a monetary system founded on the
        unyielding principles of mathematics and open-source technology. Bitcoin
        serves as a beacon of hope, as its decentralized nature ensures the
        value of money is no longer dictated by centralized entities who face no
        opportunity cost for printing money, unlike the rest of humanity.
      </p>
      <p>
        In addition to coding and attending meetups, I find joy in a variety of
        activities, including: sharing memes on the internet, cherishing quality
        time with my daughter, embracing the challenge of running, writing, and
        podcasting, both as a creator and listener. I am always looking for new
        ways to challenge myself and grow, and I believe that these activities
        help me to do just that. Cypherpunks write code. If you want to learn
        more about my journey and perspectives, visit conorchepenik.com.
      </p>
    </motion.section>
  );
}
