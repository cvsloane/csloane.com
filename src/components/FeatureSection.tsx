"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
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
    color = "oklch(0.6 0.2 250)", // Default blue
    tags,
    index,
}: FeatureSectionProps) {
    const isEven = index % 2 === 0;
    const [imgError, setImgError] = useState(false);

    // Extract domain for fallback text if needed
    const initials = title.split(' ').map(n => n[0]).join('').substring(0, 2);
    
    // Check if logoUrl is a video file
    const isVideo = logoUrl?.toLowerCase().endsWith('.mp4') || logoUrl?.toLowerCase().endsWith('.webm');
    
    // Map animated logos to static versions for header
    const getStaticLogoUrl = (url: string | undefined) => {
        if (!url) return url;
        
        const logoMap: Record<string, string> = {
            '/images/animated logos/Heaviside.mp4': '/images/logos/HeavisidelogonewPngfile_small.jpg',
            '/images/animated logos/Paving Marketers.mp4': '/images/logos/paving-marketers.png',
            '/images/animated logos/Garage Marketers.mp4': '/images/logos/garage-door-marketers.png',
            '/images/animated logos/Electrician Marketers 2.mp4': '/images/logos/Electrician-Marketers.png',
        };
        
        return logoMap[url] || url;
    };
    
    const headerLogoUrl = getStaticLogoUrl(logoUrl);

    return (
        <section className="py-16 first:pt-6 relative overflow-hidden">
            {/* Background Glow */}
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-[0.03] pointer-events-none rounded-full blur-3xl"
                style={{ backgroundColor: color }}
            />

            <div className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>

                {/* Content Side */}
                <motion.div
                    initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5 }}
                    className="flex-1 space-y-8"
                >
                    {/* Header */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-4">
                            {/* Logo */}
                            <div className="w-24 h-24 rounded-2xl bg-background border shadow-sm flex items-center justify-center overflow-hidden relative group shrink-0">
                                <div
                                    className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity"
                                    style={{ backgroundColor: color }}
                                />
                                {logoUrl && !imgError ? (
                                    // eslint-disable-next-line @next/next/no-img-element
                                    <img
                                        src={headerLogoUrl}
                                        alt={`${title} logo`}
                                        className="w-16 h-16 object-contain transition-transform group-hover:scale-110"
                                        onError={() => setImgError(true)}
                                    />
                                ) : (
                                    <span className="text-xl font-bold" style={{ color }}>{initials}</span>
                                )}
                            </div>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2">
                                {tags?.slice(0, 3).map(tag => (
                                    <span key={tag} className="px-3 py-1 rounded-full text-[11px] font-medium bg-secondary text-secondary-foreground uppercase tracking-wide">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">{title}</h2>
                        <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
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
                                    <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider mt-1">
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
                                <li key={feature} className="flex items-start gap-3 text-base text-muted-foreground">
                                    <div className="mt-1 p-0.5 rounded-full bg-secondary text-primary shrink-0">
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
                            <Button asChild size="lg" className="group h-11 px-6 text-base">
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
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6 }}
                    className="flex-1 w-full"
                >
                    {isVideo ? (
                        /* Animated Logo Video - Full width, no card */
                        <div className="relative aspect-4/3 md:aspect-video rounded-3xl overflow-hidden">
                            <video
                                src={logoUrl}
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-full object-contain"
                            />
                        </div>
                    ) : (
                        /* Static Logo - With card background */
                        <div className="relative aspect-4/3 md:aspect-video rounded-3xl overflow-hidden border bg-secondary/20 backdrop-blur-sm group shadow-2xl">
                            {/* Abstract Background based on brand color */}
                            <div
                                className="absolute inset-0 opacity-20 transition-opacity group-hover:opacity-30"
                                style={{
                                    background: `radial-gradient(circle at ${isEven ? '100% 0%' : '0% 100%'}, ${color}, transparent 70%)`
                                }}
                            />

                            {/* Glass Card Effect */}
                            <div className="absolute inset-8 md:inset-16 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl flex items-center justify-center">
                                <div className="text-center p-8 space-y-6 w-full max-w-xs">
                                    <div className="w-32 h-32 mx-auto rounded-2xl bg-background/80 flex items-center justify-center shadow-lg ring-1 ring-white/10">
                                        {logoUrl && !imgError ? (
                                            // eslint-disable-next-line @next/next/no-img-element
                                            <img
                                                src={logoUrl}
                                                alt=""
                                                className="w-20 h-20 object-contain"
                                            />
                                        ) : (
                                            <span className="text-3xl font-bold" style={{ color }}>{initials}</span>
                                        )}
                                    </div>
                                    <div className="space-y-3 opacity-40">
                                        <div className="h-2 w-3/4 bg-foreground/20 rounded-full mx-auto" />
                                        <div className="h-2 w-1/2 bg-foreground/20 rounded-full mx-auto" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </motion.div>

            </div>
        </section>
    );
}
