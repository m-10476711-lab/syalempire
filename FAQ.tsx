import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How fast is delivery?",
    a: "Most gaming topups and digital products are delivered within 1-5 minutes after we confirm your payment.",
  },
  {
    q: "How do I pay?",
    a: "After you place an order, you'll be redirected to WhatsApp with your order details. Our team will share payment options (DuitNow, Bank Transfer, e-wallet).",
  },
  {
    q: "Is it safe to share my Game ID?",
    a: "Yes. We only need your in-game User ID and Server ID — never your password or account credentials.",
  },
  {
    q: "What if my order fails?",
    a: "Reach out on WhatsApp with your order number and we'll either retry or refund — guaranteed.",
  },
  {
    q: "Do you offer bulk pricing?",
    a: "Yes! Message us on WhatsApp for resellers and bulk topup discounts.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="mx-auto w-full max-w-3xl px-4 py-16 sm:px-6">
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-extrabold sm:text-3xl">Frequently asked questions</h2>
        <p className="mt-2 text-sm text-muted-foreground">Everything you need to know.</p>
      </div>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((f, i) => (
          <AccordionItem key={i} value={`item-${i}`} className="border-border">
            <AccordionTrigger className="text-left text-base font-semibold hover:text-primary">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground">{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
