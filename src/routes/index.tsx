import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Clock, Award, Users } from "lucide-react";
import hero from "@/assets/hero.jpg";
import { SiteLayout, CTA } from "@/components/site/Layout";
import { SERVICES, whatsappLink } from "@/components/site/data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bueno TI | Suporte especializado e infraestrutura de TI" },
      { name: "description", content: "Suporte em TI, manutenção de computadores, Microsoft 365, Intune, Azure, redes e firewall para empresas." },
      { property: "og:title", content: "Bueno TI | Suporte especializado em TI" },
      { property: "og:description", content: "Suporte, Microsoft, redes e firewall para sua empresa." },
    ],
  }),
  component: Index,
});

const STATS = [
  { icon: Clock, value: "24/7", label: "Monitoramento" },
  { icon: Users, value: "+100", label: "Clientes atendidos" },
  { icon: Award, value: "+10", label: "Anos de experiência" },
];

function Index() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden bg-navy">
        <img src={hero} alt="Técnico configurando rack de rede" width={1600} height={1008} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="relative mx-auto max-w-6xl px-4 py-28 md:py-36">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary-glow">Soluções em Tecnologia</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-tight text-navy-foreground md:text-6xl">
            A TI da sua empresa nas mãos de <span className="text-gradient">especialistas</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-navy-muted">
            Suporte técnico, Microsoft 365, Intune, Azure, redes e firewall — tudo em um só parceiro.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href={whatsappLink()} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-gradient-primary px-6 py-3 font-semibold text-primary-foreground shadow-elegant">
              Solicitar orçamento <ArrowRight className="h-4 w-4" />
            </a>
            <Link to="/servicos" className="rounded-lg border border-navy-muted/40 px-6 py-3 font-semibold text-navy-foreground hover:bg-navy-foreground/10">
              Conheça os serviços
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto -mt-10 grid max-w-6xl gap-4 px-4 sm:grid-cols-3 relative">
        {STATS.map((s) => (
          <div key={s.label} className="flex items-center gap-4 rounded-xl border bg-card p-6 shadow-elegant">
            <s.icon className="h-8 w-8 text-primary" />
            <div>
              <div className="font-display text-2xl font-bold">{s.value}</div>
              <div className="text-sm text-muted-foreground">{s.label}</div>
            </div>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-6xl px-4 py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">O que fazemos</p>
          <h2 className="mt-2 text-3xl font-bold md:text-4xl">Serviços completos de TI para o seu negócio</h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <div key={s.title} className="group rounded-xl border bg-card p-7 transition hover:-translate-y-1 hover:border-primary hover:shadow-elegant">
              <div className="grid h-12 w-12 place-items-center rounded-lg bg-accent text-primary group-hover:bg-gradient-primary group-hover:text-primary-foreground">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.short}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-24 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">Por que a Bueno TI</p>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl">Tecnologia estável para você focar no que importa</h2>
            <p className="mt-4 text-muted-foreground">Atuamos como o departamento de TI da sua empresa, com atendimento ágil, processos claros e foco em segurança.</p>
          </div>
          <ul className="space-y-4">
            {["Atendimento rápido remoto e presencial", "Especialistas em Microsoft e segurança de rede", "Contratos flexíveis e sem surpresas", "Relatórios mensais do seu ambiente"].map((t) => (
              <li key={t} className="flex items-center gap-3 rounded-lg bg-card p-4 font-medium">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" /> {t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTA />
    </SiteLayout>
  );
}
