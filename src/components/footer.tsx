import Link from "next/link";
import type { SVGProps } from "react";
import { Github } from "lucide-react";

const SubstackIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    aria-hidden
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4 6h16"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <rect
      x="4"
      y="9"
      width="16"
      height="9"
      rx="1.5"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M4 9.5l8 4.5 8-4.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const XIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    aria-hidden
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M18 6 6 18M6 6l12 12"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const socialLinks = [
  { name: "GitHub", href: "https://github.com/cvsloane", icon: Github },
  { name: "Substack", href: "https://cvsloane.substack.com", icon: SubstackIcon },
  { name: "X", href: "https://x.com/csloane", icon: XIcon },
];

export function Footer() {
  return (
    <footer className="border-t border-border/40">
      <div className="container flex flex-col items-center justify-between gap-6 py-12 md:h-28 md:flex-row md:py-0">
        <div className="text-center text-sm text-muted-foreground md:text-left">
          &copy; {new Date().getFullYear()} cvsloane. All rights reserved.
        </div>
        <div className="flex items-center gap-6">
          {socialLinks.map((link) => {
            const Icon = link.icon;

            return (
              <Link
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                className="p-2 text-muted-foreground transition-transform hover:text-foreground hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40 rounded-full"
              >
                <Icon className="h-5 w-5" />
                <span className="sr-only">{link.name}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
