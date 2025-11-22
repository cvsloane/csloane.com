"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { GitHubGraph } from "@/components/GitHubGraph";
import { FeatureSection } from "@/components/FeatureSection";

export default function ProjectsPage() {
  return (
    <div className="container py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-24 pb-24"
      >
        <GitHubGraph />

        <div className="text-center space-y-4 py-12">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">
            Technical Work
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A selection of recent engineering challenges, SaaS platforms, and systems I&apos;ve architected.
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <FeatureSection
              key={project.title}
              index={index}
              title={project.title}
              description={project.description}
              logoUrl={project.logoUrl}
              website={project.website}
              stats={project.stats}
              features={project.features}
              color={project.color}
              tags={project.specs}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
