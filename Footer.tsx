import { Link } from "@tanstack/react-router";
import { Sparkles, Instagram, MessageCircle, Mail } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-background/60 backdrop-blur-xl">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <div className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-primary to-accent neon-glow">
              <Sparkles className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-lg font-extrabold gradient-text">SYAL EMPIRE</span>
          </div>
          <p className="mt-4 max-w-md text-sm text-muted-foreground">
            Premium gaming topup, digital products & services. Fast delivery, trusted by
            thousands of gamers.
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:text-primary"
            >
              <MessageCircle className="h-4 w-4" />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:text-primary"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href={`mailto:contact@syalempire.com`}
              aria-label="Email"
              className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:text-primary"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">
            Shop
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/products" className="hover:text-foreground">All Products</Link></li>
            <li><Link to="/category/gaming-topup" className="hover:text-foreground">Gaming Topup</Link></li>
            <li><Link to="/category/digital-products" className="hover:text-foreground">Digital Products</Link></li>
            <li><Link to="/category/services" className="hover:text-foreground">Services</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">
            Company
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><a href="#faq" className="hover:text-foreground">FAQ</a></li>
            <li><a href="#reviews" className="hover:text-foreground">Reviews</a></li>
            <li><Link to="/admin" className="hover:text-foreground">Admin</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 text-xs text-muted-foreground sm:flex-row sm:px-6">
          <p>© {new Date().getFullYear()} Syal Empire. All rights reserved.</p>
          <p>Built for gamers, made with neon.</p>
        </div>
      </div>
    </footer>
  );
}
