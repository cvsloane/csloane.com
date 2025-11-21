"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { businesses } from "@/data/businesses";
import { ExternalLink } from "lucide-react";

export default function BusinessPage() {
    return (
        <div className="container py-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-12"
            >
                <div className="text-center space-y-4">
                    <h1 className="text-4xl font-bold tracking-tight">Business Portfolio</h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        A family of marketing brands serving specialized industries with proven strategies and exceptional results.
                    </p>
                </div>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {businesses.map((business, index) => (
                        <motion.div
                            key={business.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <a
                                href={business.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block h-full group"
                            >
                                <Card className="h-full flex flex-col hover:border-primary/50 transition-all hover:shadow-lg">
                                    <CardHeader>
                                        <div className="flex items-start justify-between gap-2">
                                            <CardTitle className="group-hover:text-primary transition-colors">
                                                {business.name}
                                            </CardTitle>
                                            <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                                        </div>
                                        <CardDescription className="text-sm font-medium text-primary/80">
                                            {business.year}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="flex-1 flex flex-col gap-4">
                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                            {business.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2 mt-auto">
                                            {business.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="px-2.5 py-1 bg-secondary text-secondary-foreground text-xs rounded-md font-medium"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </a>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}
