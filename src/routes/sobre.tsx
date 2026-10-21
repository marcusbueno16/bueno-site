import { createFileRoute } from "@tanstack/react-router";
import { Target, Eye, Heart } from "lucide-react";
import { SiteLayout, PageHero, CTA } from "@/components/site/Layout";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre | Bueno TI" },
      { name: "description", content: "Conheça a Bueno TI, parceira em tecnologia para pequenas e médias empresas." },
      { property: "og:title", content: "Sobre a Bueno TI" },
      { property: "og:description", content: "Nossa missão, visão e valores." },
    ],
  }),
  component: Sobre,
});

const VALUES = [
  { icon: Target, title: "Missão", text: "Manter a tecnologia dos nossos clientes segura, estável e sempre disponível." },
  { icon: Eye, title: "Visão", text: "Ser referência em suporte e infraestrutura de TI para empresas de todos os portes." },
  { icon: Heart, title: "Valores", text: "Transparência, agilidade, ética e compromisso real com o resultado do cliente." },
];

function Sobre() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Sobre nós" title="Tecnologia com proximidade e confiança" text="A Bueno TI nasceu para oferecer às empresas um suporte de TI especializado, humano e sem burocracia." />
      <section className="mx-auto max-w-3xl px-4 py-20 text-lg leading-relaxed text-muted-foreground">
        <p>Somos especialistas em ambientes Microsoft, redes corporativas e segurança com firewall. Atendemos escritórios, comércios e indústrias que precisam de uma TI confiável, sem precisar manter uma equipe interna.</p>
        <p className="mt-6">Nosso trabalho vai da manutenção de um notebook à gestão completa de dispositivos com Intune e identidades no Azure.</p>
      </section>
      <section className="mx-auto grid max-w-6xl gap-6 px-4 md:grid-cols-3">
        {VALUES.map((v) => (
          <div key={v.title} className="rounded-xl border bg-card p-8">
            <v.icon className="h-8 w-8 text-primary" />
            <h3 className="mt-4 text-xl font-semibold">{v.title}</h3>
            <p className="mt-2 text-muted-foreground">{v.text}</p>
          </div>
        ))}
      </section>
      <CTA />
    </SiteLayout>
  );
}
