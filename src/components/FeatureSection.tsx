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
        <section className="py-12 first:pt-6 relative overflow-hidden">
            {/* Background Glow */}
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-5 pointer-events-none rounded-full blur-3xl"
                style={{ backgroundColor: color }}
            />

            <div className={`flex flex-col lg:flex-row gap-8 lg:gap-16 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>

                {/* Content Side */}
                <motion.div
                    initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5 }}
                    className="flex-1 space-y-6"
                >
                    {/* Header */}
                    <div className="space-y-3">
                        <div className="flex items-center gap-3">
                            {/* Logo */}
                            <div className="w-12 h-12 rounded-lg bg-background border shadow-sm flex items-center justify-center overflow-hidden relative group">
                                <div
                                    className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity"
                                    style={{ backgroundColor: color }}
                                />
                                {logoUrl && !imgError ? (
                                    // eslint-disable-next-line @next/next/no-img-element
                                    <img
                                        src={logoUrl}
                                        alt={`${title} logo`}
                                        className="w-8 h-8 object-contain dark:invert dark:brightness-200 transition-transform group-hover:scale-110"
                                        onError={() => setImgError(true)}
                                    />
                                ) : (
                                    <span className="text-lg font-bold" style={{ color }}>{initials}</span>
                                )}
                            </div>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2">
                                {tags?.slice(0, 2).map(tag => (
                                    <span key={tag} className="px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-secondary text-secondary-foreground uppercase tracking-wide">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h2>
                        <p className="text-base text-muted-foreground leading-relaxed max-w-lg">
                            {description}
                        </p>
                    </div>

                    {/* Stats Grid */}
                    {stats && stats.length > 0 && (
                        <div className="grid grid-cols-2 gap-4 py-4 border-y border-border/50">
                            {stats.map((stat) => (
                                <div key={stat.label}>
                                    <div className="text-xl md:text-2xl font-bold" style={{ color }}>
                                        {stat.value}
                                    </div>
                                    <div className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Features List */}
                    {features && features.length > 0 && (
                        <ul className="space-y-2">
                            {features.map((feature) => (
                                <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                                    <div className="mt-0.5 p-0.5 rounded-full bg-secondary text-primary">
                                        <Check className="w-2.5 h-2.5" />
                                    </div>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    )}

                    {/* Actions */}
                    {website && (
                        <div className="pt-2">
                            <Button asChild size="default" className="group h-9 px-4 text-sm">
                                <a href={website} target="_blank" rel="noopener noreferrer">
                                    Visit Website
                                    <ArrowRight className="ml-2 w-3 h-3 group-hover:translate-x-1 transition-transform" />
                                </a>
                            </Button>
                        </div>
                    )}
                </motion.div>

                {/* Visual Side */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6 }}
                    className="flex-1 w-full"
                >
                    <div className="relative aspect-video rounded-2xl overflow-hidden border bg-secondary/20 backdrop-blur-sm group">
                        {/* Abstract Background based on brand color */}
                        <div
                            className="absolute inset-0 opacity-20 transition-opacity group-hover:opacity-30"
                            style={{
                                background: `radial-gradient(circle at ${isEven ? '100% 0%' : '0% 100%'}, ${color}, transparent 70%)`
                            }}
                        />

                        {/* Glass Card Effect */}
                        <div className="absolute inset-8 md:inset-12 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl flex items-center justify-center">
                            <div className="text-center p-6 space-y-3">
                                <div className="w-16 h-16 mx-auto rounded-xl bg-background/50 flex items-center justify-center shadow-inner">
                                    {logoUrl && !imgError ? (
                                        // eslint-disable-next-line @next/next/no-img-element
                                        <img
                                            src={logoUrl}
                                            alt=""
                                            className="w-10 h-10 object-contain dark:invert dark:brightness-200"
                                        />
                                    ) : (
                                        <span className="text-2xl font-bold" style={{ color }}>{initials}</span>
                                    )}
                                </div>
                                <div className="space-y-1.5 opacity-50">
                                    <div className="h-1.5 w-20 bg-foreground/20 rounded-full mx-auto" />
                                    <div className="h-1.5 w-28 bg-foreground/20 rounded-full mx-auto" />
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
