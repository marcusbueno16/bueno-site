import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { SiteLayout, PageHero, CTA } from "@/components/site/Layout";
import { SERVICES, whatsappLink } from "@/components/site/data";

export const Route = createFileRoute("/servicos")({
  head: () => ({
    meta: [
      { title: "Serviços | Bueno TI" },
      { name: "description", content: "Suporte de TI, manutenção, Microsoft 365, Intune, Azure, redes e firewall." },
      { property: "og:title", content: "Serviços | Bueno TI" },
      { property: "og:description", content: "Conheça todas as soluções de TI da Bueno TI." },
    ],
  }),
  component: Servicos,
});

function Servicos() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Serviços" title="Soluções de TI de ponta a ponta" text="Do suporte ao usuário à segurança do perímetro, cuidamos de toda a sua infraestrutura." />
      <section className="mx-auto grid max-w-6xl gap-6 px-4 py-20 md:grid-cols-2">
        {SERVICES.map((s) => (
          <article key={s.title} className="rounded-xl border bg-card p-8 transition hover:border-primary hover:shadow-elegant">
            <div className="flex items-center gap-4">
              <div className="grid h-12 w-12 place-items-center rounded-lg bg-gradient-primary text-primary-foreground">
                <s.icon className="h-6 w-6" />
              </div>
              <h2 className="text-xl font-semibold">{s.title}</h2>
            </div>
            <p className="mt-4 text-muted-foreground">{s.short}</p>
            <ul className="mt-5 space-y-2">
              {s.items.map((i) => (
                <li key={i} className="flex gap-2 text-sm"><Check className="h-4 w-4 shrink-0 text-primary" />{i}</li>
              ))}
            </ul>
            <a href={whatsappLink(`Olá! Tenho interesse em: ${s.title}`)} target="_blank" rel="noreferrer" className="mt-6 inline-block text-sm font-semibold text-primary hover:underline">
              Solicitar orçamento →
            </a>
          </article>
        ))}
      </section>
      <CTA />
    </SiteLayout>
  );
}
