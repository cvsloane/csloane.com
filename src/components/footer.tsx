import Link from "next/link";

const socialLinks = [
  { name: "GitHub", href: "https://github.com/cvsloane" },
  { name: "LinkedIn", href: "https://linkedin.com/in/cvsloane" },
  { name: "Twitter", href: "https://twitter.com/cvsloane" },
];

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="text-center text-sm text-muted-foreground md:text-left">
          &copy; {new Date().getFullYear()} cvsloane. All rights reserved.
        </div>
        <div className="flex items-center gap-4">
          {socialLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
