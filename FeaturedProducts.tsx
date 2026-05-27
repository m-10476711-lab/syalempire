import { Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { ProductCard } from "./ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function FeaturedProducts() {
  const { data, isLoading } = useQuery({
    queryKey: ["featured-products"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("products")
        .select("id,name,slug,price,image_url,description,stock_label,category:categories(name,icon)")
        .eq("active", true)
        .eq("featured", true)
        .order("created_at", { ascending: false })
        .limit(8);
      if (error) throw error;
      return data;
    },
  });

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-extrabold sm:text-3xl">Featured Products</h2>
          <p className="mt-1 text-sm text-muted-foreground">Hand-picked best sellers.</p>
        </div>
        <Link to="/products">
          <Button variant="ghost" className="text-primary">
            View all <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </Link>
      </div>

      {isLoading ? (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="h-72 animate-pulse rounded-xl border border-border bg-card" />
          ))}
        </div>
      ) : !data || data.length === 0 ? (
        <div className="rounded-xl border border-dashed border-border p-12 text-center">
          <p className="text-sm text-muted-foreground">No featured products yet.</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {data.map((p) => (
            <ProductCard key={p.id} product={p as never} />
          ))}
        </div>
      )}
    </section>
  );
}
