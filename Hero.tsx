import { Link } from "@tanstack/react-router";
import { ArrowRight, Bolt, ShieldCheck, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 left-1/4 h-72 w-72 rounded-full bg-primary/30 blur-3xl animate-float" />
        <div className="absolute bottom-0 right-10 h-80 w-80 rounded-full bg-accent/25 blur-3xl animate-float" />
      </div>
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center px-4 pt-14 pb-16 text-center sm:px-6 sm:pt-20 sm:pb-24">
        <span className="rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          ⚡ Trusted by 10,000+ gamers
        </span>
        <h1 className="mt-6 text-balance text-4xl font-black leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
          Welcome to{" "}
          <span className="gradient-text text-glow">Syal Empire</span>
        </h1>
        <p className="mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg">
          Gaming Topup · Digital Products · Services. Instant delivery, premium prices,
          and zero hassle.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link to="/products">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 animate-pulse-glow"
            >
              Browse Products <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link to="/category/gaming-topup">
            <Button size="lg" variant="outline" className="border-primary/40">
              Gaming Topup
            </Button>
          </Link>
        </div>
        <div className="mt-12 grid w-full max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
          {[
            { icon: Zap, title: "Instant Delivery", desc: "Most orders in < 5 min" },
            { icon: ShieldCheck, title: "100% Secure", desc: "Trusted payment system" },
            { icon: Bolt, title: "24/7 Support", desc: "Always here to help" },
          ].map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="glass flex items-center gap-3 rounded-xl border border-border/60 p-3 text-left"
            >
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary/15 text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">{title}</p>
                <p className="text-xs text-muted-foreground">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
