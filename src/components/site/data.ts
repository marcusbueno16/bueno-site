import { Headset, Wrench, Cloud, Network, ShieldCheck, Laptop } from "lucide-react";

export const CONTACT = {
  whatsapp: "5521996588993",
  phone: "(21) 99658-8993",
  email: "contato@buenoti.com.br",
  city: "Rio de Janeiro - RJ",
};

export const whatsappLink = (msg = "Olá! Gostaria de um orçamento com a Bueno TI.") =>
  `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(msg)}`;

export const SERVICES = [
  {
    icon: Headset,
    title: "Suporte Especializado em TI",
    short: "Atendimento remoto e presencial com técnicos certificados.",
    items: ["Help desk remoto e presencial", "Contratos mensais de suporte", "Monitoramento proativo", "Atendimento a usuários e servidores"],
  },
  {
    icon: Wrench,
    title: "Manutenção de Computadores",
    short: "Preventiva e corretiva para desktops, notebooks e servidores.",
    items: ["Formatação e otimização", "Upgrade de hardware (SSD, memória)", "Limpeza e manutenção preventiva", "Backup e recuperação de dados"],
  },
  {
    icon: Cloud,
    title: "Serviços Microsoft",
    short: "Gestão de Endpoint, licenciamento, Azure e Microsoft 365 para sua empresa.",
    items: [
      "Gestão de Endpoint e Intune",
      "Gestão e vendas de Licenciamento (Microsoft 365, Windows e Office)",
      "Azure, Entra ID e administração do Portal Azure",
      "Migração de e-mails e Exchange Online",
    ],
  },
  {
    icon: Network,
    title: "Configuração de Redes",
    short: "Projetos de rede cabeada e Wi-Fi estáveis e seguros.",
    items: ["Cabeamento estruturado", "Wi-Fi corporativo", "VLANs, switches e roteadores", "VPN para acesso remoto"],
  },
  {
    icon: ShieldCheck,
    title: "Firewall e Segurança de Rede",
    short: "Proteção do perímetro da sua rede com firewall de alto desempenho, implantado e gerenciado por especialistas.",
    items: [
      "Estudo de risco e política de segurança",
      "Implantação e gestão de firewalls (Fortinet, Sophos, Palo Alto, MikroTik, pfSense)",
      "Regras de acesso, filtro de conteúdo e proteção web",
      "VPN SSL/IPsec para acesso remoto seguro",
      "SD-WAN, balanceamento de links e alta disponibilidade",
      "Monitoramento, logs e relatórios de ameaças",
    ],
  },
  {
    icon: Laptop,
    title: "Consultoria e Projetos",
    short: "Planejamento de infraestrutura para o crescimento da sua empresa.",
    items: ["Diagnóstico do ambiente de TI", "Inventário de ativos", "Políticas de segurança da informação", "Adequação à LGPD"],
  },
];
