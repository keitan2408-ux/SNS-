import Link from "next/link";
import { companyInfo, footerLinks, siteMeta } from "@/lib/site-config";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-white py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 text-center lg:flex-row lg:items-center lg:justify-between lg:text-left lg:px-8">
        <div>
          <span className="text-base font-bold text-foreground">
            {siteMeta.name}
          </span>
          <p className="mt-2 text-xs text-muted">
            &copy; {new Date().getFullYear()} {companyInfo.companyName}. All
            rights reserved.
          </p>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs font-medium text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
