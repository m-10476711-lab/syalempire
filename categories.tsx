import { Link } from "@tanstack/react-router";
import { Gamepad2, Package, Wrench, Sparkles, ArrowRight } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Gamepad2,
  Package,
  Wrench,
  Sparkles,
};

export function Categories() {
  const { data, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("categories")
        .select("id,name,slug,description,icon,sort_order")
        .order("sort_order");
      if (error) throw error;
      return data;
    },
  });

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-extrabold sm:text-3xl">Categories</h2>
          <p className="mt-1 text-sm text-muted-foreground">Pick a category and start ordering.</p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {isLoading
          ? Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="h-44 animate-pulse rounded-2xl border border-border bg-card" />
            ))
          : (data ?? []).map((c) => {
              const Icon = iconMap[c.icon ?? "Sparkles"] ?? Sparkles;
              return (
                <Link
                  key={c.id}
                  to="/category/$slug"
                  params={{ slug: c.slug }}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/60 hover:neon-border"
                >
                  <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/15 blur-3xl transition-opacity group-hover:opacity-100" />
                  <div className="relative">
                    <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-primary to-accent text-primary-foreground neon-glow">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-5 text-lg font-bold text-foreground">{c.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{c.description}</p>
                  </div>
                  <div className="relative mt-6 inline-flex items-center text-sm font-semibold text-primary">
                    Explore <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              );
            })}
      </div>
    </section>
  );
}
