import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import { CONTACT, SERVICES, whatsappLink } from "@/components/site/data";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato | Bueno TI" },
      { name: "description", content: "Fale com a Bueno TI e solicite um orçamento de suporte e infraestrutura de TI." },
      { property: "og:title", content: "Contato | Bueno TI" },
      { property: "og:description", content: "Solicite seu orçamento pelo WhatsApp ou e-mail." },
    ],
  }),
  component: Contato,
});

const field = "w-full rounded-lg border bg-background px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-ring/30";

function Contato() {
  const [form, setForm] = useState({ nome: "", empresa: "", servico: SERVICES[0]?.title ?? "", mensagem: "" });
  const submit = (e: FormEvent) => {
    e.preventDefault();
    const url = whatsappLink(msg());
    // Tenta abrir em nova aba; se o navegador bloquear o popup, navega na aba atual.
    const win = window.open(url, "_blank");
    if (!win) window.location.href = url;
  };
  const msg = () =>
    `Olá! Sou ${form.nome}${form.empresa ? ` da ${form.empresa}` : ""}.\nServiço: ${form.servico}\n${form.mensagem}`;
  return (
    <SiteLayout>
      <PageHero eyebrow="Contato" title="Vamos conversar sobre a sua TI" text="Preencha o formulário e enviaremos sua solicitação direto para nosso WhatsApp." />
      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-20 md:grid-cols-5">
        <div className="space-y-4 md:col-span-2">
          {[
            { icon: Phone, label: "Telefone / WhatsApp", value: CONTACT.phone, href: whatsappLink() },
            { icon: Mail, label: "E-mail", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
            { icon: MapPin, label: "Localização", value: CONTACT.city, href: "" },
          ].map((c) => (
            <div key={c.label} className="flex items-center gap-4 rounded-xl border bg-card p-5">
              <c.icon className="h-6 w-6 text-primary" />
              <div>
                <div className="text-sm text-muted-foreground">{c.label}</div>
                {c.href ? (
                  <a href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="font-semibold hover:text-primary">{c.value}</a>
                ) : (
                  <div className="font-semibold">{c.value}</div>
                )}
              </div>
            </div>
          ))}
          <a href={whatsappLink()} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 rounded-xl bg-gradient-primary p-4 font-semibold text-primary-foreground shadow-elegant">
            <MessageCircle className="h-5 w-5" /> Chamar no WhatsApp
          </a>
        </div>
        <form onSubmit={submit} className="space-y-4 rounded-xl border bg-card p-8 md:col-span-3">
          <input required placeholder="Seu nome" className={field} value={form.nome} onChange={(e) => setForm({ ...form, nome: e.target.value })} />
          <input placeholder="Empresa" className={field} value={form.empresa} onChange={(e) => setForm({ ...form, empresa: e.target.value })} />
          <select className={field} value={form.servico} onChange={(e) => setForm({ ...form, servico: e.target.value })}>
            {SERVICES.map((s) => <option key={s.title}>{s.title}</option>)}
          </select>
          <textarea required rows={5} placeholder="Como podemos ajudar?" className={field} value={form.mensagem} onChange={(e) => setForm({ ...form, mensagem: e.target.value })} />
          <button type="submit" className="w-full rounded-lg bg-gradient-primary py-3 font-semibold text-primary-foreground shadow-elegant">Enviar solicitação</button>
        </form>
      </section>
    </SiteLayout>
  );
}
