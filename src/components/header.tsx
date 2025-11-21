"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ThemeToggle } from "./theme-toggle";

const navItems = [
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60"
    >
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="font-bold text-xl">
          cvsloane
        </Link>
        <nav className="flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.name}
            </Link>
          ))}
          <ThemeToggle />
        </nav>
      </div>
    </motion.header>
  );
}
