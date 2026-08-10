import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import brasao from "@/assets/brasao.jpg.asset.json";
import { useReveal } from "@/components/site/useReveal";
import {
  ArrowUpIcon,
  CrownIcon,
  HallIcon,
  PinIcon,
  SoundIcon,
  TeamIcon,
  WallIcon,
  WhatsAppIcon,
} from "@/components/site/icons";

export const Route = createFileRoute("/")({
  component: Index,
});

const WA = "https://wa.me/5521985977277";

const NAV = [
  { href: "#qualidades", label: "Qualidades" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#localizacao", label: "Localização" },
];

const QUALIDADES = [
  {
    Icon: HallIcon,
    title: "Espaço amplo",
    text: "Conforto para até 200 convidados, com boa circulação entre a pista e as mesas.",
  },
  {
    Icon: WallIcon,
    title: "Paredes em branco",
    text: "Base neutra que aceita qualquer tema, qualquer paleta, qualquer estilo de decoração.",
  },
  {
    Icon: SoundIcon,
    title: "Som e iluminação inclusos",
    text: "Estrutura de áudio e luz já pronta, sem custo extra de equipamento.",
  },
  {
    Icon: TeamIcon,
    title: "Equipe própria",
    text: "Apoio na montagem, durante a festa e na desmontagem — você não fica sozinho.",
  },
];

const PASSOS = [
  { n: "01", t: "Fale no WhatsApp", p: "Conta a data e o tipo de festa que você quer fazer." },
  { n: "02", t: "Agende uma visita", p: "Venha conhecer o salão pessoalmente, sem compromisso." },
  { n: "03", t: "Reserve a data", p: "Garanta o dia e feche os detalhes com a equipe." },
  { n: "04", t: "Comemore", p: "Chegue com a decoração e deixe o resto com a gente." },
];

const PALETAS = [
  { name: "Ouro clássico", c: "linear-gradient(160deg,#e8c78a,#8a6a2f)" },
  { name: "Prata & ônix", c: "linear-gradient(160deg,#e6e2d8,#3a3a3c)" },
  { name: "Vinho profundo", c: "linear-gradient(160deg,#8c2f52,#3d1226)" },
  { name: "Verde esmeralda", c: "linear-gradient(160deg,#4f8a6b,#12301f)" },
  { name: "Azul meia-noite", c: "linear-gradient(160deg,#3f5f86,#101d33)" },
  { name: "Cobre & fumaça", c: "linear-gradient(160deg,#c07a4a,#2a201a)" },
];

const DEPOIMENTOS = [
  {
    n: "Renata M.",
    t: "Aniversário de 15 anos",
    q: "A equipe ajudou com tudo, o salão ficou lindo com a nossa decoração e os convidados elogiaram muito o espaço.",
  },
  {
    n: "Carlos A.",
    t: "Casamento",
    q: "Contratamos o som e a iluminação do próprio salão e economizamos bastante. Ficou exatamente como a gente queria.",
  },
  {
    n: "Juliana P.",
    t: "Chá revelação",
    q: "O branco das paredes deixou nossa decoração azul e rosa destacar muito mais. Recomendo demais.",
  },
  {
    n: "Marcos S.",
    t: "Formatura",
    q: "Espaço amplo, estacionamento perto e equipe super atenciosa do início ao fim da festa.",
  },
  {
    n: "Débora L.",
    t: "Aniversário infantil",
    q: "Levamos os brinquedos e a decoração tema e o salão comportou tudo super bem, sem apertar.",
  },
];

const CONFETTI = ["#c9a961", "#e6e2d8", "#8c2f52", "#8a6a2f"];

function Confetti() {
  const [bits, setBits] = useState<Array<Record<string, string>>>([]);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setBits(
      Array.from({ length: 24 }, (_, i) => ({
        left: `${Math.random() * 100}%`,
        background: CONFETTI[i % CONFETTI.length]!,
        animationDuration: `${6 + Math.random() * 7}s`,
        animationDelay: `${Math.random() * -10}s`,
        borderRadius: Math.random() > 0.5 ? "50%" : "2px",
      })),
    );
  }, []);
  return (
    <div className="pointer-events-none absolute inset-0 z-10" aria-hidden="true">
      {bits.map((s, i) => (
        <span
          key={i}
          className="absolute block h-3 w-[7px] opacity-60"
          style={{ ...s, animationName: "drift", animationTimingFunction: "linear", animationIterationCount: "infinite" }}
        />
      ))}
    </div>
  );
}

function Btn({
  href,
  variant = "primary",
  children,
}: {
  href: string;
  variant?: "primary" | "ghost";
  children: React.ReactNode;
}) {
  const base =
    "inline-flex items-center gap-2.5 rounded-full px-7 py-4 text-sm font-bold transition-all duration-300 border";
  const styles =
    variant === "primary"
      ? "bg-gold-gradient text-primary-foreground border-transparent shadow-gold hover:-translate-y-0.5 hover:brightness-110"
      : "border-border text-foreground hover:border-primary hover:text-primary hover:-translate-y-0.5";
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noopener"
      className={`${base} ${styles}`}
    >
      {children}
    </a>
  );
}

function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <span className="mb-3.5 block text-[0.78rem] font-bold uppercase tracking-[0.14em] text-primary">
      {children}
    </span>
  );
}

function Index() {
  useReveal();
  const [scrolled, setScrolled] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      setShowTop(window.scrollY > 700);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* NAV */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-border bg-background/75 py-3.5 backdrop-blur-xl"
            : "py-6"
        }`}
      >
        <div className="mx-auto flex max-w-[1160px] items-center justify-between px-6 md:px-8">
          <a href="#top" className="flex items-center gap-2.5 font-display text-lg font-semibold">
            <img
              src={brasao.url}
              alt="Brasão do Espaço Cascadura"
              className="size-9 rounded-full object-cover ring-1 ring-primary/60"
            />
            Espaço Cascadura
          </a>
          <nav className="hidden items-center gap-8 md:flex">
            {NAV.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[0.86rem] font-semibold tracking-wide text-muted-foreground transition-colors hover:text-primary"
              >
                {l.label}
              </a>
            ))}
            <a
              href={WA}
              target="_blank"
              rel="noopener"
              className="rounded-full bg-gold-gradient px-5 py-2.5 text-[0.82rem] font-bold text-primary-foreground shadow-gold transition-transform hover:-translate-y-0.5"
            >
              Fale no WhatsApp
            </a>
          </nav>
          <button
            aria-label="Abrir menu"
            onClick={() => setMenuOpen((v) => !v)}
            className="flex flex-col gap-1.5 p-1.5 md:hidden"
          >
            <span className="block h-0.5 w-6 bg-foreground" />
            <span className="block h-0.5 w-6 bg-foreground" />
            <span className="block h-0.5 w-6 bg-foreground" />
          </button>
        </div>
        {menuOpen && (
          <nav className="mx-6 mt-3 flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 shadow-elegant md:hidden">
            {NAV.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-semibold text-muted-foreground"
              >
                {l.label}
              </a>
            ))}
            <a href={WA} target="_blank" rel="noopener" className="text-sm font-bold text-primary">
              Fale no WhatsApp
            </a>
          </nav>
        )}
      </header>

      <main id="top">
        {/* HERO */}
        <section className="relative flex min-h-screen items-center overflow-hidden pt-32">
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 60% 45% at 18% 12%, oklch(0.30 0.05 78 / 55%) 0%, transparent 62%), radial-gradient(ellipse 55% 45% at 88% 18%, oklch(0.28 0.03 300 / 45%) 0%, transparent 62%), linear-gradient(180deg, oklch(0.18 0.006 60) 0%, var(--onyx) 60%)",
            }}
          />
          <Confetti />
          <div className="relative z-20 mx-auto w-full max-w-[1160px] px-6 md:px-8">
            <span className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-primary/35 bg-card/60 px-4 py-2 text-[0.78rem] font-bold uppercase tracking-[0.14em] text-primary backdrop-blur">
              <span
                className="size-1.5 rounded-full bg-primary"
                style={{ animation: "pulse-dot 2s ease-in-out infinite" }}
              />
              Salão de festas · Cascadura, Rio de Janeiro
            </span>
            <h1 className="mb-6 max-w-[15ch] text-[clamp(2.6rem,6vw,5.1rem)] leading-[1.03]">
              Um espaço em branco{" "}
              <span className="text-shimmer">pronto pra sua festa colorir.</span>
            </h1>
            <p className="mb-10 max-w-[44ch] text-lg leading-relaxed text-muted-foreground">
              Paredes brancas, estrutura completa e liberdade total pra decorar do seu jeito.
              Aniversário, casamento, formatura, chá revelação — o Espaço Cascadura vira a sua festa
              em qualquer paleta que você imaginar.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Btn href={WA}>
                <WhatsAppIcon className="size-[18px]" />
                Chamar no WhatsApp
              </Btn>
              <Btn href="#qualidades" variant="ghost">
                Ver o espaço ↓
              </Btn>
            </div>
          </div>
          <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2 text-[0.72rem] uppercase tracking-[0.12em] text-muted-foreground">
            <span>role</span>
            <span
              className="h-8 w-px bg-gradient-to-b from-primary to-transparent"
              style={{ animation: "scroll-line 2s ease-in-out infinite" }}
            />
          </div>
        </section>

        {/* BRASÃO */}
        <section className="bg-card py-28">
          <div className="mx-auto grid max-w-[1160px] items-center gap-16 px-6 md:px-8 lg:grid-cols-[0.85fr_1fr]">
            <div
              data-reveal
              className="reveal group relative mx-auto max-w-[420px] rounded-[18px] p-6 shadow-elegant ring-1 ring-primary/25"
              style={{ background: "linear-gradient(155deg, oklch(0.22 0.01 70), oklch(0.16 0.006 60))" }}
            >
              {["-top-2.5 -left-2.5", "-top-2.5 -right-2.5", "-bottom-2.5 -left-2.5", "-bottom-2.5 -right-2.5"].map(
                (pos) => (
                  <span
                    key={pos}
                    className={`absolute ${pos} size-5 rotate-45 bg-gold-gradient`}
                    aria-hidden="true"
                  />
                ),
              )}
              <span className="absolute -top-5 left-1/2 z-10 flex size-10 -translate-x-1/2 items-center justify-center rounded-full bg-background ring-1 ring-primary/40">
                <CrownIcon className="size-[18px] text-primary" />
              </span>
              <div className="overflow-hidden rounded-lg border-[3px] border-double border-primary/60 bg-background p-2">
                <img
                  src={brasao.url}
                  alt="Brasão do Espaço Cascadura — monograma E com coroa"
                  className="w-full rounded transition-transform duration-700 group-hover:scale-[1.04]"
                />
              </div>
              <p className="mt-4 text-center font-display text-[0.92rem] italic text-primary">
                Espaço Cascadura
              </p>
            </div>
            <div data-reveal className="reveal">
              <Kicker>Nossa marca</Kicker>
              <h2 className="mb-5 text-[clamp(1.9rem,3.4vw,2.6rem)] leading-tight">
                Um brasão, uma promessa de festa bem feita.
              </h2>
              <p className="mb-4 leading-relaxed text-muted-foreground">
                A coroa e o monograma marcam cada detalhe do Espaço Cascadura — da fachada na Rua
                Miguel Rangel, 160 até a lembrança que fica depois da festa.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                Por trás dele, um espaço branco, amplo e pronto pra receber a decoração que você
                escolher.
              </p>
            </div>
          </div>
        </section>

        {/* QUALIDADES */}
        <section id="qualidades" className="py-28">
          <div className="mx-auto max-w-[1160px] px-6 md:px-8">
            <div data-reveal className="reveal mb-16 max-w-[640px]">
              <Kicker>Por que escolher</Kicker>
              <h2 className="mb-4 text-[clamp(1.9rem,3.4vw,2.7rem)] leading-tight">
                As qualidades do salão, direto ao ponto.
              </h2>
              <p className="text-muted-foreground">
                Cuidamos da estrutura pra você cuidar só do que importa: a festa.
              </p>
            </div>
            <div className="mx-auto grid max-w-[900px] gap-6 sm:grid-cols-2">
              {QUALIDADES.map(({ Icon, title, text }) => (
                <div
                  key={title}
                  data-reveal
                  className="reveal group rounded-[22px] border border-border bg-card p-9 transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 hover:shadow-elegant"
                >
                  <div className="mb-5 flex size-13 items-center justify-center rounded-2xl bg-gold-gradient p-3.5 text-primary-foreground shadow-gold transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-105">
                    <Icon className="size-6" />
                  </div>
                  <h3 className="mb-2.5 text-lg">{title}</h3>
                  <p className="text-[0.94rem] leading-relaxed text-muted-foreground">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* COMO FUNCIONA */}
        <section id="como-funciona" className="bg-card py-28">
          <div className="mx-auto max-w-[1160px] px-6 md:px-8">
            <div data-reveal className="reveal mb-16 max-w-[640px]">
              <Kicker>Como funciona</Kicker>
              <h2 className="text-[clamp(1.9rem,3.4vw,2.7rem)] leading-tight">
                Da conversa até a festa, em quatro passos.
              </h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {PASSOS.map((s) => (
                <div key={s.n} data-reveal className="reveal">
                  <span className="mb-4 block font-display text-[2.6rem] italic leading-none text-primary/55">
                    {s.n}
                  </span>
                  <h3 className="mb-2 text-[1.08rem]">{s.t}</h3>
                  <p className="text-[0.92rem] leading-relaxed text-muted-foreground">{s.p}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PALETAS */}
        <section className="overflow-hidden py-28">
          <div className="mx-auto max-w-[1160px] px-6 md:px-8">
            <div data-reveal className="reveal mb-12 max-w-[640px]">
              <Kicker>Qualquer tema, qualquer cor</Kicker>
              <h2 className="mb-4 text-[clamp(1.9rem,3.4vw,2.7rem)] leading-tight">
                O branco é a base. A paleta é toda sua.
              </h2>
              <p className="text-muted-foreground">
                Um pequeno gostinho das combinações que já vimos ganhar vida aqui dentro.
              </p>
            </div>
          </div>
          <div className="marquee-mask group overflow-hidden">
            <div
              className="marquee-track gap-4 group-hover:[animation-play-state:paused]"
              style={{ ["--marquee-duration" as string]: "26s" }}
            >
              {[...PALETAS, ...PALETAS].map((p, i) => (
                <div
                  key={i}
                  className="flex h-[190px] w-[150px] shrink-0 items-end rounded-[18px] p-4 text-[0.78rem] font-bold text-foreground shadow-elegant ring-1 ring-border"
                  style={{ background: p.c }}
                >
                  {p.name}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DEPOIMENTOS */}
        <section id="depoimentos" className="bg-card py-28">
          <div className="mx-auto max-w-[1160px] px-6 md:px-8">
            <div data-reveal className="reveal mb-12 max-w-[640px]">
              <Kicker>Quem já comemorou aqui</Kicker>
              <h2 className="text-[clamp(1.9rem,3.4vw,2.7rem)] leading-tight">
                Depoimentos de quem fez a festa no Espaço Cascadura.
              </h2>
            </div>
          </div>
          <div className="marquee-mask group overflow-hidden">
            <div
              className="marquee-track gap-6 group-hover:[animation-play-state:paused]"
              style={{ ["--marquee-duration" as string]: "38s" }}
            >
              {[...DEPOIMENTOS, ...DEPOIMENTOS].map((d, i) => (
                <div
                  key={i}
                  className="w-[340px] shrink-0 rounded-[20px] border border-border bg-background p-8"
                >
                  <div className="mb-3.5 tracking-[2px] text-primary">★★★★★</div>
                  <p className="mb-4 text-[0.95rem] leading-relaxed text-muted-foreground">
                    “{d.q}”
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-full bg-gold-gradient text-[0.85rem] font-bold text-primary-foreground">
                      {d.n.charAt(0)}
                    </div>
                    <div>
                      <strong className="block text-[0.88rem]">{d.n}</strong>
                      <span className="text-[0.78rem] text-muted-foreground">{d.t}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* LOCALIZAÇÃO */}
        <section id="localizacao" className="py-28">
          <div className="mx-auto grid max-w-[1160px] items-center gap-12 px-6 md:px-8 lg:grid-cols-2">
            <div data-reveal className="reveal">
              <Kicker>Localização</Kicker>
              <h2 className="mb-5 text-[clamp(1.9rem,3.2vw,2.5rem)] leading-tight">
                Bem no coração de Cascadura.
              </h2>
              <p className="leading-relaxed text-muted-foreground">
                Fácil acesso, perto de estação e vias principais — sem complicação pra você e seus
                convidados chegarem.
              </p>
              <div className="my-7 flex items-start gap-4 rounded-[18px] border border-border bg-card px-7 py-6">
                <PinIcon className="mt-0.5 size-6 shrink-0 text-primary" />
                <div>
                  <strong className="mb-1 block">Rua Miguel Rangel, 160</strong>
                  <span className="text-[0.92rem] text-muted-foreground">
                    Cascadura — Rio de Janeiro, RJ
                  </span>
                </div>
              </div>
              <Btn href={WA}>
                <WhatsAppIcon className="size-[18px]" />
                Chamar no WhatsApp
              </Btn>
            </div>
            <div
              data-reveal
              className="reveal aspect-[4/3.4] overflow-hidden rounded-[22px] border border-border shadow-elegant"
            >
              <iframe
                src="https://www.google.com/maps?q=Rua+Miguel+Rangel+160+Cascadura+Rio+de+Janeiro&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa — Rua Miguel Rangel, 160, Cascadura"
                className="size-full border-0 [filter:grayscale(0.4)_invert(0.92)_hue-rotate(180deg)_contrast(0.9)]"
              />
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section
          className="py-28 text-center"
          style={{
            background:
              "radial-gradient(ellipse 80% 100% at 50% 0%, oklch(0.28 0.05 80 / 55%) 0%, oklch(0.18 0.006 60) 55%, var(--onyx) 100%)",
          }}
        >
          <div data-reveal className="reveal mx-auto max-w-[1160px] px-6 md:px-8">
            <h2 className="mx-auto mb-5 max-w-[16ch] text-[clamp(2rem,4.2vw,3.2rem)] leading-tight">
              Sua festa começa com uma mensagem.
            </h2>
            <p className="mx-auto mb-9 max-w-[46ch] text-muted-foreground">
              Conta pra gente a data e o tipo de comemoração — respondemos rapidinho no WhatsApp.
            </p>
            <div className="flex justify-center">
              <Btn href={WA}>
                <WhatsAppIcon className="size-[18px]" />
                Chamar no WhatsApp agora
              </Btn>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-border bg-card pb-8 pt-14">
        <div className="mx-auto max-w-[1160px] px-6 md:px-8">
          <div className="flex flex-wrap justify-between gap-10 border-b border-border pb-10">
            <div>
              <div className="mb-2.5 font-display text-xl">Espaço Cascadura</div>
              <p className="max-w-[26ch] text-[0.9rem] text-muted-foreground">
                Salão de festas em Cascadura, pronto pra qualquer comemoração.
              </p>
            </div>
            <div>
              <h4 className="mb-4 text-[0.82rem] uppercase tracking-[0.08em]">Contato</h4>
              <a
                href={WA}
                target="_blank"
                rel="noopener"
                className="mb-2.5 block text-[0.9rem] text-muted-foreground transition-colors hover:text-primary"
              >
                WhatsApp
              </a>
              <p className="text-[0.9rem] text-muted-foreground">
                Rua Miguel Rangel, 160 — Cascadura, RJ
              </p>
            </div>
            <div>
              <h4 className="mb-4 text-[0.82rem] uppercase tracking-[0.08em]">Navegue</h4>
              {NAV.slice(0, 2)
                .concat(NAV[3]!)
                .map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    className="mb-2.5 block text-[0.9rem] text-muted-foreground transition-colors hover:text-primary"
                  >
                    {l.label}
                  </a>
                ))}
            </div>
          </div>
          <div className="flex flex-wrap justify-between gap-2.5 pt-6 text-[0.8rem] text-muted-foreground/70">
            <span>© 2026 Espaço Cascadura</span>
            <span>Feito com carinho pra sua festa</span>
          </div>
        </div>
      </footer>

      {/* FLOAT WHATSAPP */}
      <a
        href={WA}
        target="_blank"
        rel="noopener"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex size-14 items-center justify-center rounded-full bg-gold-gradient text-primary-foreground shadow-gold transition-transform hover:scale-105"
      >
        <WhatsAppIcon className="size-7" />
      </a>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Voltar ao topo"
        className={`fixed bottom-24 right-6 z-50 flex size-11 items-center justify-center rounded-full border border-border bg-card text-foreground transition-all ${
          showTop ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <ArrowUpIcon className="size-5" />
      </button>
    </div>
  );
}
