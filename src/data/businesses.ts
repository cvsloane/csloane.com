export interface Business {
    name: string;
    description: string;
    year: string;
    website: string;
    tags: string[];
}

export const businesses: Business[] = [
    {
        name: "Heaviside Group",
        description: "Parent company delivering high-quality web, SEO, and digital marketing services since 2010. With over 600 five-star reviews, we provide trusted marketing solutions.",
        year: "Founded 2010",
        website: "https://heavisidegroup.com",
        tags: ["Digital Marketing", "SEO", "Web Development"],
    },
    {
        name: "Paving Marketers",
        description: "The #1 digital marketing partner for paving companies. Launched in 2020 with rapid growth and dozens of satisfied customers across the paving industry.",
        year: "Launched 2020",
        website: "https://pavingmarketers.com",
        tags: ["Niche Marketing", "Paving Industry"],
    },
    {
        name: "Garage Door Marketers",
        description: "Premier digital marketing partner for garage door companies. Growing rapidly since 2022 to become the go-to marketing solution for the garage door industry.",
        year: "Launched 2022",
        website: "https://garagedoormarketers.com",
        tags: ["Niche Marketing", "Garage Door Industry"],
    },
    {
        name: "Electrician Marketers",
        description: "Bringing excellent service and proven results to the electrician industry. Launched in 2023 with the same commitment to quality that drives our other brands.",
        year: "Launched 2023",
        website: "https://electricianmarketers.com",
        tags: ["Niche Marketing", "Electrician Industry"],
    },
    {
        name: "Digital Agency Growth Academy",
        description: "Agency training platform delivering solutions to help digital marketing agencies scale and grow. Empowering agencies with proven strategies and tools.",
        year: "Training Platform",
        website: "https://digitalagencygrowthacademy.com",
        tags: ["Education", "Agency Training"],
    },
];
