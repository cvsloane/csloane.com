"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="container py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto space-y-8"
      >
        <h1 className="text-4xl font-bold tracking-tight">About Me</h1>
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg text-muted-foreground">
            Hello! I&apos;m cvsloane, a developer passionate about building
            great software and exploring new technologies.
          </p>
          <h2 className="text-2xl font-semibold mt-8 mb-4">Background</h2>
          <p className="text-muted-foreground">
            Add your background story here. Share your journey, education, and
            what drives you as a developer.
          </p>
          <h2 className="text-2xl font-semibold mt-8 mb-4">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
            {["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Python"].map(
              (skill) => (
                <div
                  key={skill}
                  className="px-4 py-2 bg-muted rounded-md text-center"
                >
                  {skill}
                </div>
              )
            )}
          </div>
          <h2 className="text-2xl font-semibold mt-8 mb-4">Interests</h2>
          <p className="text-muted-foreground">
            Share your interests, hobbies, and what you enjoy doing outside of
            coding.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
