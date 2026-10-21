import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Menu, X, MessageCircle, Mail, Phone, MapPin } from "lucide-react";
import { CONTACT, SERVICES, whatsappLink } from "./data";

const NAV = [
  { to: "/", label: "Início" },
  { to: "/servicos", label: "Serviços" },
  { to: "/sobre", label: "Sobre" },
  { to: "/contato", label: "Contato" },
] as const;

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-2">
      <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-primary font-display text-lg font-extrabold text-primary-foreground">B</span>
      <span className={`font-display text-xl font-bold ${light ? "text-navy-foreground" : "text-foreground"}`}>
        Bueno<span className="text-primary">TI</span>
      </span>
    </Link>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Logo />
        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((n) => (
            <Link key={n.to} to={n.to} className="text-sm font-medium text-muted-foreground hover:text-primary" activeProps={{ className: "text-primary" }} activeOptions={{ exact: true }}>
              {n.label}
            </Link>
          ))}
          <a href={whatsappLink()} target="_blank" rel="noreferrer" className="rounded-lg bg-gradient-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-elegant">
            Fale conosco
          </a>
        </nav>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="flex flex-col gap-1 border-t px-4 py-3 md:hidden">
          {NAV.map((n) => (
            <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="rounded-md px-2 py-2 font-medium hover:bg-muted">
              {n.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-navy text-navy-muted">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-4">
        <div className="md:col-span-1">
          <Logo light />
          <p className="mt-4 text-sm">Suporte especializado, infraestrutura e segurança de TI para empresas que não podem parar.</p>
        </div>
        <div>
          <h4 className="mb-3 font-semibold text-navy-foreground">Serviços</h4>
          <ul className="space-y-2 text-sm">
            {SERVICES.slice(0, 5).map((s) => <li key={s.title}>{s.title}</li>)}
          </ul>
        </div>
        <div>
          <h4 className="mb-3 font-semibold text-navy-foreground">Empresa</h4>
          <ul className="space-y-2 text-sm">
            {NAV.map((n) => <li key={n.to}><Link to={n.to} className="hover:text-navy-foreground">{n.label}</Link></li>)}
          </ul>
        </div>
        <div>
          <h4 className="mb-3 font-semibold text-navy-foreground">Contato</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex gap-2">
              <Phone className="h-4 w-4 shrink-0" />
              <a href={whatsappLink()} target="_blank" rel="noreferrer" className="hover:text-navy-foreground">{CONTACT.phone}</a>
            </li>
            <li className="flex gap-2"><Mail className="h-4 w-4" />{CONTACT.email}</li>
            <li className="flex gap-2"><MapPin className="h-4 w-4" />{CONTACT.city}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-navy-muted/20 py-5 text-center text-xs">© {new Date().getFullYear()} Bueno TI. Todos os direitos reservados.</div>
    </footer>
  );
}

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <a href={whatsappLink()} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-gradient-primary text-primary-foreground shadow-elegant">
        <MessageCircle />
      </a>
    </div>
  );
}

export function PageHero({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <section className="bg-navy">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary-glow">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-bold text-navy-foreground md:text-5xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-lg text-navy-muted">{text}</p>
      </div>
    </section>
  );
}

export function CTA() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20">
      <div className="rounded-2xl bg-gradient-primary p-10 text-center shadow-elegant md:p-14">
        <h2 className="text-3xl font-bold text-primary-foreground md:text-4xl">Sua TI funcionando sem dor de cabeça</h2>
        <p className="mx-auto mt-3 max-w-xl text-primary-foreground/85">Fale com um especialista e receba um diagnóstico gratuito do seu ambiente.</p>
        <a href={whatsappLink()} target="_blank" rel="noreferrer" className="mt-8 inline-block rounded-lg bg-navy px-6 py-3 font-semibold text-navy-foreground">
          Solicitar orçamento
        </a>
      </div>
    </section>
  );
}
