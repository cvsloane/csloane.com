"use client";

import { motion } from "framer-motion";
import { ExternalLink, Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface FeatureSectionProps {
    title: string;
    description: string;
    logoUrl?: string;
    website?: string;
    stats?: { label: string; value: string }[];
    features?: string[];
    color?: string;
    tags?: string[];
    index: number;
}

export function FeatureSection({
    title,
    description,
    logoUrl,
    website,
    stats,
    features,
    color = "oklch(0.6 0.2 270)", // Default purple
    tags,
    index,
}: FeatureSectionProps) {
    const isEven = index % 2 === 0;
    const [imgError, setImgError] = useState(false);

    // Extract domain for fallback text if needed
    const domain = website ? new URL(website).hostname.replace('www.', '') : title;
    const initials = title.split(' ').map(n => n[0]).join('').substring(0, 2);

    return (
        <section className="py-24 first:pt-12 relative overflow-hidden">
            {/* Background Glow */}
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-5 pointer-events-none rounded-full blur-3xl"
                style={{ backgroundColor: color }}
            />

            <div className={`flex flex-col lg:flex-row gap-12 lg:gap-24 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>

                {/* Content Side */}
                <motion.div
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="flex-1 space-y-8"
                >
                    {/* Header */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-4">
                            {/* Logo */}
                            <div className="w-16 h-16 rounded-xl bg-background border shadow-sm flex items-center justify-center overflow-hidden relative group">
                                <div
                                    className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity"
                                    style={{ backgroundColor: color }}
                                />
                                {logoUrl && !imgError ? (
                                    // eslint-disable-next-line @next/next/no-img-element
                                    <img
                                        src={logoUrl}
                                        alt={`${title} logo`}
                                        className="w-10 h-10 object-contain dark:invert dark:brightness-200 transition-transform group-hover:scale-110"
                                        onError={() => setImgError(true)}
                                    />
                                ) : (
                                    <span className="text-xl font-bold" style={{ color }}>{initials}</span>
                                )}
                            </div>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2">
                                {tags?.slice(0, 2).map(tag => (
                                    <span key={tag} className="px-3 py-1 rounded-full text-xs font-medium bg-secondary text-secondary-foreground">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">{title}</h2>
                        <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                            {description}
                        </p>
                    </div>

                    {/* Stats Grid */}
                    {stats && stats.length > 0 && (
                        <div className="grid grid-cols-2 gap-6 py-6 border-y border-border/50">
                            {stats.map((stat) => (
                                <div key={stat.label}>
                                    <div className="text-2xl md:text-3xl font-bold" style={{ color }}>
                                        {stat.value}
                                    </div>
                                    <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Features List */}
                    {features && features.length > 0 && (
                        <ul className="space-y-3">
                            {features.map((feature) => (
                                <li key={feature} className="flex items-start gap-3 text-muted-foreground">
                                    <div className="mt-1 p-0.5 rounded-full bg-secondary text-primary">
                                        <Check className="w-3 h-3" />
                                    </div>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    )}

                    {/* Actions */}
                    {website && (
                        <div className="pt-4">
                            <Button asChild size="lg" className="group">
                                <a href={website} target="_blank" rel="noopener noreferrer">
                                    Visit Website
                                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </a>
                            </Button>
                        </div>
                    )}
                </motion.div>

                {/* Visual Side */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="flex-1 w-full"
                >
                    <div className="relative aspect-video lg:aspect-square rounded-3xl overflow-hidden border bg-secondary/20 backdrop-blur-sm group">
                        {/* Abstract Background based on brand color */}
                        <div
                            className="absolute inset-0 opacity-20 transition-opacity group-hover:opacity-30"
                            style={{
                                background: `radial-gradient(circle at ${isEven ? '100% 0%' : '0% 100%'}, ${color}, transparent 70%)`
                            }}
                        />

                        {/* Glass Card Effect */}
                        <div className="absolute inset-8 md:inset-12 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl flex items-center justify-center">
                            <div className="text-center p-8 space-y-4">
                                <div className="w-20 h-20 mx-auto rounded-2xl bg-background/50 flex items-center justify-center shadow-inner">
                                    {logoUrl && !imgError ? (
                                        // eslint-disable-next-line @next/next/no-img-element
                                        <img
                                            src={logoUrl}
                                            alt=""
                                            className="w-12 h-12 object-contain dark:invert dark:brightness-200"
                                        />
                                    ) : (
                                        <span className="text-3xl font-bold" style={{ color }}>{initials}</span>
                                    )}
                                </div>
                                <div className="space-y-2">
                                    <div className="h-2 w-24 bg-foreground/10 rounded-full mx-auto" />
                                    <div className="h-2 w-32 bg-foreground/10 rounded-full mx-auto" />
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
