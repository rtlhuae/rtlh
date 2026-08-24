import React, { useState, useRef, useEffect } from "react";
import {
  Menu, X, ChevronRight, Gem, Sparkles, Luggage, Smartphone,
  CircleDot, Wallet, MapPin, Instagram, MessageCircle,
  ArrowRight, Music2, Globe, ShieldCheck, Truck, Sparkle,
} from "lucide-react";
import { IMG } from "./rtlh-assets";

/* ---------------------------------------------------------------------- */
/* BRAND TOKENS                                                            */
/* ---------------------------------------------------------------------- */

const C = {
  ivory: "#F8F3E9",
  ivoryDeep: "#EFE5D2",
  card: "#FCF9F2",
  sand: "#EFE3C9",
  sandDeep: "#E4D3AC",
  taupe: "#D3C3A0",
  charcoal: "#241D14",
  charcoalDeep: "#15110D",
  ink: "#40352A",
  champagne: "#A6824F",
  champagneLight: "#D9C39F",
  champagneDark: "#7C5E39",
  glow: "#EBCFA2",
  accentGlow: "#E8A860",
  line: "rgba(36,29,20,0.12)",
  lineOnDark: "rgba(255,247,232,0.3)",
};

const serif = "'Cormorant Garamond', 'Times New Roman', serif";
const sans = "'Manrope', -apple-system, BlinkMacSystemFont, sans-serif";

const WHATSAPP_NUMBER = "971588822520";
const WHATSAPP_DISPLAY = "+971 58 882 2520";
const SOCIAL_HANDLE = "@rtlh.ae";
const WEBSITE = "rtlh.art";
const SLOGAN = "made yours.";

/* ---------------------------------------------------------------------- */
/* PRODUCT DATA                                                            */
/* ---------------------------------------------------------------------- */

const COLOR_HEX = {
  black: "#1C1A18", blue: "#3C5A73", brown: "#6B4A34", green: "#3F5A4C",
  navy: "#232C3E", pink: "#E3AAB8", red: "#8E2F2F", white: "#EFEAE0",
  gray: "#8A867E", gold: "#B99456", silver: "#B9BAB6", natural: "#D8CBB4",
  mint: "#AFC7BC", cream: "#E9DFC9", burgundy: "#5E1F2E", teal: "#6E97A0",
  rose: "#B76E79",
};

function colorLabel(id) {
  const overrides = { mint: "Mint", cream: "Cream", burgundy: "Burgundy", teal: "Teal", natural: "Natural" };
  return overrides[id] || id.charAt(0).toUpperCase() + id.slice(1);
}

const PRODUCTS = [
  {
    id: "heart-charm", slug: "heart-charm", name: "The Heartpiece",
    category: "Charms", collection: "Accessories", startingPrice: 35, icon: Gem,
    description: "A heart-shaped bag charm on a long leather strap — engraved, embossed, or foiled to hold a name, a date, or a quiet inside joke.",
    mainImage: IMG.TheHeartpieceMain,
    colors: [
      { id: "black", image: IMG.TheHeartpieceBlack },
      { id: "blue", image: IMG.TheHeartpieceBlue },
      { id: "brown", image: IMG.TheHeartpieceBrown },
      { id: "green", image: IMG.TheHeartpieceGreen },
      { id: "navy", image: IMG.TheHeartpieceNavy },
      { id: "pink", image: IMG.TheHeartpiecePink },
      { id: "red", image: IMG.TheHeartpieceRed },
    ],
    customization: { engraving: true, embossing: true, foiling: true, pictureEngraving: true, maxEngravingChars: 24, maxEmbossingChars: 2, maxFoilingChars: 2, foilColors: ["gold", "silver"] },
  },
  {
    id: "foldable-mirror", slug: "foldable-mirror", name: "The Foldable Mirror",
    category: "Vanity", collection: "Accessories", startingPrice: 30, icon: CircleDot,
    description: "A stand-up travel mirror in soft leather, engraved on the cover — a small ceremony for an everyday object.",
    mainImage: IMG.FoldableMirrorMain,
    colors: [
      { id: "brown", image: IMG.FoldableMirrorBrown },
      { id: "mint", image: IMG.FoldableMirrorGreen },
      { id: "pink", image: IMG.FoldableMirrorPink },
    ],
    customization: { engraving: true, embossing: false, foiling: false, pictureEngraving: true, maxEngravingChars: 20, maxEmbossingChars: 0, maxFoilingChars: 0, foilColors: [] },
  },
  {
    id: "heart-mirror", slug: "heart-mirror", name: "The Heart Mirror",
    category: "Vanity", collection: "Accessories", startingPrice: 35, icon: Gem,
    description: "The heart silhouette, reimagined as a compact mirror. Soft edges, a warm leather base, and room for an engraved or embossed line.",
    mainImage: IMG.HeartMirrorMain,
    colors: [
      { id: "mint", image: IMG.HeartMirrorBlue },
      { id: "pink", image: IMG.HeartMirrorPink },
      { id: "red", image: IMG.HeartMirrorRed },
      { id: "cream", image: IMG.HeartMirrorWhite },
    ],
    customization: { engraving: true, embossing: true, foiling: false, pictureEngraving: true, maxEngravingChars: 18, maxEmbossingChars: 2, maxFoilingChars: 0, foilColors: [] },
  },
  {
    id: "voyage-tag", slug: "voyage-tag", name: "The Voyage Tag",
    category: "Travel", collection: "Travel", startingPrice: 35, icon: Luggage,
    description: "Full-grain leather, engraved or embossed with initials — a quiet marker of where a journey belongs.",
    mainImage: IMG.TheVoyageTagMain,
    colors: [
      { id: "blue", image: IMG.TheVoyageTagBlue },
      { id: "brown", image: IMG.TheVoyageTagBrown },
      { id: "pink", image: IMG.TheVoyageTagPink },
      { id: "red", image: IMG.TheVoyageTagRed },
    ],
    customization: { engraving: true, embossing: true, foiling: false, pictureEngraving: true, maxEngravingChars: 22, maxEmbossingChars: 2, maxFoilingChars: 0, foilColors: [] },
  },
  {
    id: "magsafe-holder", slug: "magsafe-holder", name: "The Porte",
    category: "Tech", collection: "Everyday Carry", startingPrice: 70, icon: Smartphone,
    description: "A leather MagSafe card holder for the essentials — cards, cash, and a name pressed quietly into the back.",
    mainImage: IMG.ThePorteMain,
    colors: [
      { id: "navy", image: IMG.ThePorteBlue },
      { id: "brown", image: IMG.ThePorteBrown },
      { id: "green", image: IMG.ThePorteGreen },
      { id: "pink", image: IMG.ThePortePink },
    ],
    customization: { engraving: true, embossing: true, foiling: true, pictureEngraving: true, maxEngravingChars: 16, maxEmbossingChars: 2, maxFoilingChars: 2, foilColors: ["gold", "silver"] },
  },
  {
    id: "heart-necklace", slug: "heart-necklace", name: "The Heart Necklace",
    category: "Jewelry", collection: "Jewelry", startingPrice: 110, icon: Sparkles,
    description: "A delicate gold heart pendant on a fine chain — the smallest gesture, made to be worn every day.",
    mainImage: IMG.Necklacemain,
    colors: [{ id: "gold", image: IMG.Necklacemain }],
    gallery: [IMG.Necklace1, IMG.Necklace2],
    customization: { engraving: true, embossing: true, foiling: true, pictureEngraving: true, maxEngravingChars: 1, maxEmbossingChars: 2, maxFoilingChars: 2, foilColors: ["gold", "silver"] },
  },
  {
    id: "card-holder", slug: "card-holder", name: "The Card Holder",
    category: "Leather Goods", collection: "Everyday Carry", startingPrice: 180, icon: Wallet,
    description: "A slim, four-slot card holder in saffiano leather, personalized with initials where the hand naturally rests.",
    mainImage: IMG.RTLHCardHolderMain,
    colors: [
      { id: "black", image: IMG.RTLHCardHolderBlack },
      { id: "burgundy", image: IMG.RTLHCardHolderBurgendy },
      { id: "gray", image: IMG.RTLHCardHolderGray },
      { id: "navy", image: IMG.RTLHCardHolderNavy },
    ],
    gallery: [IMG.RTLHWallet],
    customization: { engraving: true, embossing: true, foiling: true, pictureEngraving: true, maxEngravingChars: 20, maxEmbossingChars: 2, maxFoilingChars: 2, foilColors: ["gold", "silver"] },
  },
];

/* ---------------------------------------------------------------------- */
/* WHATSAPP HELPERS                                                        */
/* ---------------------------------------------------------------------- */

function customizationLabel(type, foilColor) {
  if (type === "engraving") return "Engraving";
  if (type === "embossing") return "Blind embossing";
  if (type === "foiling") {
    const c = foilColor ? colorLabel(foilColor) : "";
    return `${c} foiling`.trim();
  }
  if (type === "picture") return "Picture engraving";
  return "No customization";
}

function buildWhatsAppLink({ product, colorId, type, text, foilColor }) {
  let msg = `Hello RTLH, I would like to order the ${product.name}.\n`;
  msg += `Color: ${colorLabel(colorId)}\n`;
  msg += `Customization: ${customizationLabel(type, foilColor)}\n`;
  if (type !== "none" && text) msg += `Text: ${text}\n`;
  if (type === "picture") msg += "Please contact me to discuss the artwork and final engraving details.\n";
  msg += "Please share availability and pricing.";
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}

function eventWhatsAppLink(eventType) {
  const msg = `Hello RTLH, I would like to book a live engraving experience${eventType ? ` for ${eventType}` : ""}. Please share availability and details.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}

/* ---------------------------------------------------------------------- */
/* SHARED UI                                                               */
/* ---------------------------------------------------------------------- */

function Eyebrow({ children, dark }) {
  return (
    <div
      style={{
        fontFamily: sans, fontSize: 12, letterSpacing: "0.22em", fontWeight: 700,
        textTransform: "uppercase", color: dark ? C.glow : C.champagneDark,
        marginBottom: 14,
      }}
    >
      {children}
    </div>
  );
}

function Heading({ children, size = 44, dark, style }) {
  return (
    <h2
      style={{
        fontFamily: serif, fontWeight: 500, fontSize: size, lineHeight: 1.12,
        color: dark ? C.ivory : C.charcoal, margin: 0, ...style,
      }}
    >
      {children}
    </h2>
  );
}

function PrimaryButton({ children, onClick, style, as: As = "button", ...rest }) {
  return (
    <As
      onClick={onClick}
      style={{
        fontFamily: sans, fontSize: 13, fontWeight: 700, letterSpacing: "0.05em",
        color: C.ivory, background: C.charcoal, border: `1px solid ${C.charcoal}`,
        padding: "16px 32px", borderRadius: 2, cursor: "pointer",
        display: "inline-flex", alignItems: "center", gap: 10, justifyContent: "center",
        transition: "all 0.35s ease", textDecoration: "none",
        boxShadow: "0 6px 18px rgba(21,17,13,0.18)", ...style,
      }}
      onMouseEnter={(e) => { e.currentTarget.style.background = C.champagneDark; e.currentTarget.style.borderColor = C.champagneDark; }}
      onMouseLeave={(e) => { e.currentTarget.style.background = style?.background || C.charcoal; e.currentTarget.style.borderColor = style?.background || C.charcoal; }}
      {...rest}
    >
      {children}
    </As>
  );
}

function SecondaryButton({ children, onClick, dark, style, as: As = "button", ...rest }) {
  return (
    <As
      onClick={onClick}
      style={{
        fontFamily: sans, fontSize: 13, fontWeight: 700, letterSpacing: "0.05em",
        color: dark ? C.ivory : C.charcoal, background: dark ? "rgba(255,247,232,0.08)" : C.card,
        border: `1.5px solid ${dark ? C.lineOnDark : C.champagneDark}`,
        padding: "16px 32px", borderRadius: 2, cursor: "pointer",
        display: "inline-flex", alignItems: "center", gap: 10, justifyContent: "center",
        transition: "all 0.35s ease", textDecoration: "none", ...style,
      }}
      onMouseEnter={(e) => { e.currentTarget.style.background = dark ? "rgba(255,247,232,0.16)" : C.champagneLight; e.currentTarget.style.color = C.charcoal; }}
      onMouseLeave={(e) => { e.currentTarget.style.background = dark ? "rgba(255,247,232,0.08)" : C.card; e.currentTarget.style.color = dark ? C.ivory : C.charcoal; }}
      {...rest}
    >
      {children}
    </As>
  );
}

function WhatsAppButton({ href, children, style }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        fontFamily: sans, fontSize: 13, fontWeight: 700, letterSpacing: "0.03em",
        color: "#F3FBF6", background: "#3C7A5C", border: "1px solid #3C7A5C",
        padding: "16px 28px", borderRadius: 2, cursor: "pointer",
        display: "inline-flex", alignItems: "center", gap: 10, justifyContent: "center",
        textDecoration: "none", transition: "background 0.3s ease",
        boxShadow: "0 6px 18px rgba(60,122,92,0.28)", ...style,
      }}
      onMouseEnter={(e) => (e.currentTarget.style.background = "#336B50")}
      onMouseLeave={(e) => (e.currentTarget.style.background = "#3C7A5C")}
    >
      <MessageCircle size={16} strokeWidth={1.8} />
      {children}
    </a>
  );
}

function Reveal({ children, style }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setShown(true); obs.disconnect(); } },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? "translateY(0)" : "translateY(24px)",
        transition: "opacity 0.9s cubic-bezier(0.16,1,0.3,1), transform 0.9s cubic-bezier(0.16,1,0.3,1)",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

/* ---------------------------------------------------------------------- */
/* PRODUCT VISUAL (real photography)                                       */
/* ---------------------------------------------------------------------- */

function ProductVisual({ product, colorId, size = "100%" }) {
  const color = colorId ? product.colors.find((c) => c.id === colorId) : null;
  const src = color ? color.image : product.mainImage;
  return (
    <div
      style={{
        position: "relative", width: size, aspectRatio: "1 / 1",
        borderRadius: 4, overflow: "hidden", background: C.card,
        border: `1px solid ${C.line}`,
        display: "flex", alignItems: "center", justifyContent: "center",
      }}
    >
      <img
        src={src}
        alt={`${product.name}${color ? ` — ${colorLabel(color.id)}` : ""}`}
        loading="lazy"
        decoding="async"
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    </div>
  );
}

/* ---------------------------------------------------------------------- */
/* NAV + FOOTER                                                            */
/* ---------------------------------------------------------------------- */

function NavBar({ navigate, page }) {
  const [open, setOpen] = useState(false);
  const links = [
    { key: "events", label: "Live Events" },
    { key: "shop", label: "Shop" },
    { key: "about", label: "Atelier" },
    { key: "contact", label: "Contact" },
  ];
  return (
    <>
      <header
        style={{
          position: "sticky", top: 0, zIndex: 50, background: "rgba(246,241,232,0.92)",
          backdropFilter: "blur(10px)", borderBottom: `1px solid ${C.line}`,
        }}
      >
        <div style={{ maxWidth: 1240, margin: "0 auto", padding: "16px 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div onClick={() => navigate("home")} style={{ cursor: "pointer", lineHeight: 1 }}>
            <div style={{ fontFamily: serif, fontSize: 24, letterSpacing: "0.14em", fontWeight: 600, color: C.charcoal }}>
              RTLH
            </div>
            <div style={{ fontFamily: serif, fontSize: 11, fontStyle: "italic", letterSpacing: "0.02em", color: C.champagneDark, marginTop: 2 }}>
              {SLOGAN}
            </div>
          </div>
          <nav style={{ display: "none", gap: 40 }} className="rtlh-desktop-nav">
            {links.map((l) => (
              <button
                key={l.key}
                onClick={() => navigate(l.key)}
                style={{
                  fontFamily: sans, fontSize: 13, letterSpacing: "0.04em", fontWeight: 600,
                  color: page === l.key ? C.champagneDark : C.charcoal, background: "none", border: "none", cursor: "pointer",
                  paddingBottom: 4, borderBottom: page === l.key ? `1px solid ${C.champagne}` : "1px solid transparent",
                }}
              >
                {l.label}
              </button>
            ))}
          </nav>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <a
              href={eventWhatsAppLink()}
              target="_blank" rel="noopener noreferrer"
              className="rtlh-desktop-nav"
              style={{ display: "none", fontFamily: sans, fontSize: 12, fontWeight: 700, letterSpacing: "0.04em", color: C.charcoal, textDecoration: "none", alignItems: "center", gap: 6 }}
            >
              <MessageCircle size={15} strokeWidth={1.8} /> WhatsApp
            </a>
            <button
              onClick={() => setOpen(true)}
              className="rtlh-mobile-toggle"
              aria-label="Open menu"
              style={{ background: "none", border: "none", cursor: "pointer", color: C.charcoal }}
            >
              <Menu size={24} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </header>

      <div
        style={{
          position: "fixed", inset: 0, zIndex: 100, background: C.ivory,
          transform: open ? "translateY(0)" : "translateY(-100%)",
          transition: "transform 0.6s cubic-bezier(0.16,1,0.3,1)",
          display: "flex", flexDirection: "column",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 24px", borderBottom: `1px solid ${C.line}` }}>
          <div style={{ fontFamily: serif, fontSize: 24, letterSpacing: "0.14em", color: C.charcoal }}>RTLH</div>
          <button onClick={() => setOpen(false)} aria-label="Close menu" style={{ background: "none", border: "none", cursor: "pointer", color: C.charcoal }}>
            <X size={26} strokeWidth={1.5} />
          </button>
        </div>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 32px", gap: 28 }}>
          {links.map((l, i) => (
            <button
              key={l.key}
              onClick={() => { navigate(l.key); setOpen(false); }}
              style={{
                fontFamily: serif, fontSize: 38, fontWeight: 500, color: C.charcoal, background: "none",
                border: "none", textAlign: "left", cursor: "pointer", opacity: open ? 1 : 0,
                transform: open ? "translateX(0)" : "translateX(-16px)",
                transition: `all 0.5s ease ${0.1 + i * 0.06}s`,
              }}
            >
              {l.label}
            </button>
          ))}
        </div>
        <div style={{ padding: "28px 32px", borderTop: `1px solid ${C.line}` }}>
          <WhatsAppButton href={eventWhatsAppLink()} style={{ width: "100%" }}>Message RTLH on WhatsApp</WhatsAppButton>
        </div>
      </div>
    </>
  );
}

function Footer({ navigate }) {
  return (
    <footer style={{ background: C.charcoal, color: C.ivory, padding: "64px 24px 32px", borderTop: `1px solid ${C.line}` }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 48, justifyContent: "space-between", marginBottom: 48 }}>
          <div style={{ maxWidth: 320 }}>
            <div style={{ fontFamily: serif, fontSize: 28, letterSpacing: "0.1em", marginBottom: 4, color: C.ivory }}>RTLH</div>
            <div style={{ fontFamily: serif, fontSize: 14, fontStyle: "italic", color: C.glow, marginBottom: 16 }}>{SLOGAN}</div>
            <p style={{ fontFamily: sans, fontSize: 14, color: C.champagneLight, lineHeight: 1.7 }}>
              A UAE atelier for live engraving experiences — weddings, activations, and pieces personalized by hand, in the moment.
            </p>
          </div>
          <div style={{ display: "flex", gap: 56, flexWrap: "wrap" }}>
            <div>
              <div style={{ fontFamily: sans, fontSize: 12, letterSpacing: "0.16em", color: C.glow, marginBottom: 16, textTransform: "uppercase" }}>Explore</div>
              {["home", "events", "shop", "about", "contact"].map((k) => (
                <div key={k} onClick={() => navigate(k)} style={{ cursor: "pointer", fontFamily: sans, fontSize: 14, marginBottom: 10, color: C.champagneLight }}>
                  {k === "home" ? "Home" : k === "events" ? "Live Events" : k === "shop" ? "Shop" : k === "about" ? "Atelier" : "Contact"}
                </div>
              ))}
            </div>
            <div>
              <div style={{ fontFamily: sans, fontSize: 12, letterSpacing: "0.16em", color: C.glow, marginBottom: 16, textTransform: "uppercase" }}>Connect</div>
              <a href={eventWhatsAppLink()} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: 8, fontFamily: sans, fontSize: 14, marginBottom: 10, color: C.champagneLight, textDecoration: "none" }}>
                <MessageCircle size={15} strokeWidth={1.7} /> {WHATSAPP_DISPLAY}
              </a>
              <a href="https://instagram.com/rtlh.ae" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: 8, fontFamily: sans, fontSize: 14, marginBottom: 10, color: C.champagneLight, textDecoration: "none" }}>
                <Instagram size={15} strokeWidth={1.7} /> {SOCIAL_HANDLE}
              </a>
              <a href="https://tiktok.com/@rtlh.ae" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: 8, fontFamily: sans, fontSize: 14, marginBottom: 10, color: C.champagneLight, textDecoration: "none" }}>
                <Music2 size={15} strokeWidth={1.7} /> {SOCIAL_HANDLE}
              </a>
              <a href={`https://${WEBSITE}`} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: 8, fontFamily: sans, fontSize: 14, marginBottom: 10, color: C.champagneLight, textDecoration: "none" }}>
                <Globe size={15} strokeWidth={1.7} /> {WEBSITE}
              </a>
              <div style={{ display: "flex", alignItems: "center", gap: 8, fontFamily: sans, fontSize: 14, color: C.champagneLight }}>
                <MapPin size={15} strokeWidth={1.7} /> Dubai, UAE
              </div>
            </div>
          </div>
        </div>
        <div style={{ borderTop: `1px solid ${C.lineOnDark}`, paddingTop: 24, fontFamily: sans, fontSize: 12, color: C.champagneLight, lineHeight: 1.8 }}>
          © {new Date().getFullYear()} RTLH Atelier. DED licensed. Crafted in the moment, across the UAE.
        </div>
      </div>
    </footer>
  );
}

/* ---------------------------------------------------------------------- */
/* HOME PAGE                                                               */
/* ---------------------------------------------------------------------- */

function HomePage({ navigate }) {
  return (
    <>
      {/* HERO */}
      <section
        style={{
          position: "relative", padding: "150px 24px 130px", overflow: "hidden",
          backgroundImage: `linear-gradient(180deg, rgba(21,17,13,0.72) 0%, rgba(21,17,13,0.55) 45%, ${C.ivory} 96%), url(${IMG.RTLHAmbientPic})`,
          backgroundSize: "cover", backgroundPosition: "center 30%",
        }}
      >
        <div style={{ maxWidth: 1240, margin: "0 auto", position: "relative" }}>
          <Reveal>
            <Eyebrow dark>RTLH · Live Engraving Atelier</Eyebrow>
          </Reveal>
          <Reveal style={{ transitionDelay: "0.08s" }}>
            <h1 style={{ fontFamily: serif, fontWeight: 500, fontSize: "clamp(46px,8vw,96px)", lineHeight: 1.02, color: C.ivory, margin: "0 0 22px", maxWidth: 820, textShadow: "0 6px 30px rgba(0,0,0,0.35)" }}>
              Crafted in<br />the moment.
            </h1>
          </Reveal>
          <Reveal style={{ transitionDelay: "0.14s" }}>
            <div style={{ fontFamily: serif, fontSize: 24, fontStyle: "italic", color: C.glow, marginBottom: 28 }}>
              {SLOGAN}
            </div>
          </Reveal>
          <Reveal style={{ transitionDelay: "0.2s" }}>
            <p style={{ fontFamily: sans, fontSize: 18, lineHeight: 1.7, color: C.champagneLight, maxWidth: 480, marginBottom: 40 }}>
              Live engraving experiences for weddings, private gatherings, corporate activations, and bespoke gifting across the UAE.
            </p>
          </Reveal>
          <Reveal style={{ transitionDelay: "0.28s" }}>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <PrimaryButton onClick={() => navigate("events")} style={{ background: C.champagneDark, borderColor: C.champagneDark }}>Book a Live Experience <ArrowRight size={15} /></PrimaryButton>
              <SecondaryButton dark onClick={() => navigate("shop")}>Explore Personalized Pieces</SecondaryButton>
            </div>
          </Reveal>
        </div>
      </section>

      <section style={{ padding: "100px 24px", background: C.card, borderTop: `1px solid ${C.line}`, borderBottom: `1px solid ${C.line}` }}>
        <div style={{ maxWidth: 860, margin: "0 auto", textAlign: "center" }}>
          <Reveal><Eyebrow>The Atelier</Eyebrow></Reveal>
          <Reveal>
            <Heading size={38} style={{ marginBottom: 24 }}>
              We are not a store. We are a room where a piece becomes yours, while you watch.
            </Heading>
          </Reveal>
          <Reveal>
            <p style={{ fontFamily: sans, fontSize: 17, lineHeight: 1.85, color: C.ink }}>
              RTLH began as a craft, not a catalogue. Every piece we make can be finished by hand — engraved, embossed, or foiled — in the seconds before it is given away. We believe gifting deserves ceremony, that materials deserve precision, and that a name pressed into leather carries more than a name pressed into a screen ever could.
            </p>
          </Reveal>
        </div>
      </section>

      <section style={{ padding: "110px 24px", background: C.sand, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", bottom: "-15%", left: "-6%", width: 420, height: 420, borderRadius: "50%", background: `radial-gradient(circle, ${C.accentGlow}40 0%, transparent 70%)`, filter: "blur(6px)" }} />
        <div style={{ maxWidth: 1240, margin: "0 auto", position: "relative" }}>
          <Reveal><Eyebrow>Live Events</Eyebrow></Reveal>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 60, alignItems: "flex-end", justifyContent: "space-between", marginBottom: 60 }}>
            <Reveal style={{ maxWidth: 620 }}>
              <Heading size={40}>
                Watch your piece come to life, in the room, in real time.
              </Heading>
            </Reveal>
            <Reveal>
              <SecondaryButton onClick={() => navigate("events")}>See how it works <ChevronRight size={15} /></SecondaryButton>
            </Reveal>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 28 }}>
            {[
              { t: "Weddings & Engagements", d: "A live engraving station at your celebration — favors and keepsakes marked in front of your guests." },
              { t: "Corporate Activations", d: "A refined brand moment for launches and events, with pieces personalized for every attendee." },
              { t: "Luxury & Private Gatherings", d: "An intimate, tactile experience for gatherings that call for something made, not merely served." },
            ].map((e, i) => (
              <Reveal key={e.t} style={{ transitionDelay: `${i * 0.08}s` }}>
                <div style={{ border: `1px solid ${C.line}`, background: C.card, padding: "36px 30px", height: "100%" }}>
                  <div style={{ fontFamily: sans, fontSize: 12, color: C.champagneDark, letterSpacing: "0.1em", marginBottom: 18 }}>0{i + 1}</div>
                  <h3 style={{ fontFamily: serif, fontSize: 24, fontWeight: 500, marginBottom: 12, color: C.charcoal }}>{e.t}</h3>
                  <p style={{ fontFamily: sans, fontSize: 14.5, lineHeight: 1.7, color: C.ink }}>{e.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "110px 24px" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: 24, marginBottom: 52 }}>
            <Reveal>
              <div>
                <Eyebrow>Signature Pieces</Eyebrow>
                <Heading size={38}>A small collection, made to be personalized.</Heading>
              </div>
            </Reveal>
            <Reveal><SecondaryButton onClick={() => navigate("shop")}>View the collection <ChevronRight size={15} /></SecondaryButton></Reveal>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 32 }}>
            {PRODUCTS.slice(0, 4).map((p, i) => (
              <Reveal key={p.id} style={{ transitionDelay: `${i * 0.06}s` }}>
                <ProductCard product={p} onClick={() => navigate("product", p.slug)} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "110px 24px", background: C.card, borderTop: `1px solid ${C.line}` }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }} className="rtlh-craft-grid">
          <Reveal>
            <div style={{ aspectRatio: "4/5", borderRadius: 4, overflow: "hidden", border: `1px solid ${C.line}` }}>
              <img src={IMG.RTLHAmbientPic2} alt="RTLH brand detail" loading="lazy" decoding="async" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          </Reveal>
          <Reveal>
            <Eyebrow>Craftsmanship</Eyebrow>
            <Heading size={36} style={{ marginBottom: 20 }}>Precision, materials, and a little ceremony.</Heading>
            <p style={{ fontFamily: sans, fontSize: 16, lineHeight: 1.8, color: C.ink, marginBottom: 28 }}>
              Every engraving is set by hand against the exact contour of the piece. Leathers and metals are chosen for how they age, not just how they photograph. The result is tactile: a weight, a texture, a mark that means it was made for one person, not printed for many.
            </p>
            <SecondaryButton onClick={() => navigate("about")}>The Atelier Story <ChevronRight size={15} /></SecondaryButton>
          </Reveal>
        </div>
      </section>

      <section style={{ padding: "100px 24px", textAlign: "center" }}>
        <Reveal>
          <Heading size={36} style={{ marginBottom: 24 }}>Ready to bring RTLH to your event?</Heading>
        </Reveal>
        <Reveal>
          <WhatsAppButton href={eventWhatsAppLink()}>Book a Live Experience</WhatsAppButton>
        </Reveal>
      </section>
    </>
  );
}

/* ---------------------------------------------------------------------- */
/* PRODUCT CARD (Shop grid + Home)                                         */
/* ---------------------------------------------------------------------- */

function ProductCard({ product, onClick }) {
  const [hover, setHover] = useState(false);
  return (
    <div onClick={onClick} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} style={{ cursor: "pointer" }}>
      <div style={{ overflow: "hidden", borderRadius: 4, marginBottom: 18 }}>
        <div style={{ transform: hover ? "scale(1.035)" : "scale(1)", transition: "transform 0.7s cubic-bezier(0.16,1,0.3,1)" }}>
          <ProductVisual product={product} colorId={null} />
        </div>
      </div>
      <div style={{ fontFamily: sans, fontSize: 11.5, letterSpacing: "0.12em", textTransform: "uppercase", color: C.champagneDark, marginBottom: 8 }}>{product.category}</div>
      <h3 style={{ fontFamily: serif, fontSize: 22, fontWeight: 500, color: C.charcoal, margin: "0 0 8px" }}>{product.name}</h3>
      <p style={{ fontFamily: sans, fontSize: 13.5, color: C.ink, lineHeight: 1.6, margin: "0 0 10px", opacity: 0.85 }}>{product.description.slice(0, 66)}…</p>
      <div style={{ fontFamily: sans, fontSize: 13, color: C.charcoal, fontWeight: 700 }}>From AED {product.startingPrice}</div>
    </div>
  );
}

/* ---------------------------------------------------------------------- */
/* LIVE EVENTS PAGE                                                        */
/* ---------------------------------------------------------------------- */

function EventsPage() {
  const steps = [
    { t: "Inquiry", d: "Tell us about your event on WhatsApp — date, guest count, and the pieces you have in mind." },
    { t: "Curation", d: "We recommend pieces, colors, and customization options suited to your occasion and guests." },
    { t: "Setup", d: "Our engraving station arrives, styled to sit naturally within your event design." },
    { t: "Live Engraving", d: "Guests watch each piece personalized in real time — a moment, not just a favor." },
  ];
  const events = [
    { t: "Weddings & Engagements", d: "Favors, place settings, and keepsakes engraved live as your guests arrive." },
    { t: "Corporate Activations", d: "A branded, tactile moment for launches, conferences, and client gifting." },
    { t: "Luxury & Private Gatherings", d: "An intimate personalization experience for gatherings that ask for more than catering." },
  ];
  return (
    <>
      <section style={{ padding: "110px 24px 90px", background: C.ivory, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "-12%", right: "-6%", width: 460, height: 460, borderRadius: "50%", background: `radial-gradient(circle, ${C.accentGlow}45 0%, transparent 70%)`, filter: "blur(8px)" }} />
        <div style={{ maxWidth: 900, margin: "0 auto", position: "relative" }}>
          <Reveal><Eyebrow>Live Events</Eyebrow></Reveal>
          <Reveal>
            <Heading size={54} style={{ marginBottom: 22 }}>A live engraving experience, staged for your occasion.</Heading>
          </Reveal>
          <Reveal>
            <p style={{ fontFamily: sans, fontSize: 17, lineHeight: 1.8, color: C.ink, maxWidth: 560, marginBottom: 36 }}>
              RTLH brings a working atelier into the room — a place where guests can watch a name become permanent, in the minutes before it's placed in their hands.
            </p>
          </Reveal>
          <Reveal><WhatsAppButton href={eventWhatsAppLink()}>Book a Live Experience</WhatsAppButton></Reveal>
        </div>
      </section>

      <section style={{ padding: "0 24px 100px" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <Reveal>
            <div style={{ borderRadius: 4, overflow: "hidden", border: `1px solid ${C.line}`, aspectRatio: "21/9" }}>
              <img src={IMG.RTLHAmbientPic4} alt="RTLH live engraving station and gifting" loading="lazy" decoding="async" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          </Reveal>
        </div>
      </section>

      <section style={{ padding: "0px 24px 100px" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <Reveal><Eyebrow>Occasions</Eyebrow></Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 28, marginTop: 24 }}>
            {events.map((e, i) => (
              <Reveal key={e.t} style={{ transitionDelay: `${i * 0.08}s` }}>
                <div style={{ background: C.card, border: `1px solid ${C.line}`, padding: "40px 32px", height: "100%" }}>
                  <h3 style={{ fontFamily: serif, fontSize: 25, fontWeight: 500, color: C.charcoal, marginBottom: 14 }}>{e.t}</h3>
                  <p style={{ fontFamily: sans, fontSize: 14.5, lineHeight: 1.75, color: C.ink }}>{e.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "100px 24px", background: C.card, borderTop: `1px solid ${C.line}`, borderBottom: `1px solid ${C.line}` }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <Reveal><Eyebrow>How It Works</Eyebrow></Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 0, marginTop: 24 }}>
            {steps.map((s, i) => (
              <Reveal key={s.t} style={{ transitionDelay: `${i * 0.08}s` }}>
                <div style={{ padding: "0 24px 0 0", borderLeft: i === 0 ? "none" : `1px solid ${C.line}`, paddingLeft: i === 0 ? 0 : 24 }}>
                  <div style={{ fontFamily: serif, fontSize: 40, color: C.champagne, marginBottom: 16 }}>{`0${i + 1}`}</div>
                  <h4 style={{ fontFamily: sans, fontSize: 15, fontWeight: 700, color: C.charcoal, marginBottom: 10 }}>{s.t}</h4>
                  <p style={{ fontFamily: sans, fontSize: 13.5, lineHeight: 1.7, color: C.ink }}>{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "100px 24px", textAlign: "center" }}>
        <Reveal><Eyebrow>Inquiries</Eyebrow></Reveal>
        <Reveal>
          <Heading size={36} style={{ marginBottom: 18 }}>Tell us about your event.</Heading>
        </Reveal>
        <Reveal>
          <p style={{ fontFamily: sans, fontSize: 15.5, color: C.ink, maxWidth: 480, margin: "0 auto 32px", lineHeight: 1.7 }}>
            Share your date, guest count, and vision on WhatsApp, and our team will curate a live engraving experience for your occasion.
          </p>
        </Reveal>
        <Reveal><WhatsAppButton href={eventWhatsAppLink()}>Book a Live Experience</WhatsAppButton></Reveal>
      </section>
    </>
  );
}

/* ---------------------------------------------------------------------- */
/* SHOP PAGE                                                               */
/* ---------------------------------------------------------------------- */

function ShopPage({ navigate }) {
  const [filter, setFilter] = useState("All");
  const categories = ["All", ...Array.from(new Set(PRODUCTS.map((p) => p.category)))];
  const shown = filter === "All" ? PRODUCTS : PRODUCTS.filter((p) => p.category === filter);
  return (
    <section style={{ padding: "100px 24px 120px" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <Reveal><Eyebrow>The Collection</Eyebrow></Reveal>
        <Reveal>
          <Heading size={44} style={{ marginBottom: 16 }}>Pieces made to be personalized.</Heading>
        </Reveal>
        <Reveal>
          <p style={{ fontFamily: sans, fontSize: 16, color: C.ink, maxWidth: 560, marginBottom: 44, lineHeight: 1.75 }}>
            Browse the collection, choose a color, then reach us on WhatsApp to place your order — {SLOGAN}
          </p>
        </Reveal>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 48 }}>
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              style={{
                fontFamily: sans, fontSize: 12.5, fontWeight: 700, letterSpacing: "0.03em",
                padding: "10px 18px", borderRadius: 20, cursor: "pointer",
                border: `1px solid ${filter === c ? C.charcoal : C.line}`,
                background: filter === c ? C.charcoal : "transparent",
                color: filter === c ? C.ivory : C.ink,
                transition: "all 0.3s ease",
              }}
            >
              {c}
            </button>
          ))}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 40 }}>
          {shown.map((p, i) => (
            <Reveal key={p.id} style={{ transitionDelay: `${(i % 4) * 0.06}s` }}>
              <ProductCard product={p} onClick={() => navigate("product", p.slug)} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------------- */
/* PRODUCT DETAIL PAGE                                                     */
/* ---------------------------------------------------------------------- */

function ProductPage({ slug, navigate }) {
  const product = PRODUCTS.find((p) => p.slug === slug) || PRODUCTS[0];
  const [colorId, setColorId] = useState(null);
  const [type, setType] = useState("none");
  const [text, setText] = useState("");
  const [foilColor, setFoilColor] = useState(product.customization.foilColors[0] || "gold");

  useEffect(() => {
    setColorId(null);
    setType("none"); setText("");
    setFoilColor(product.customization.foilColors[0] || "gold");
  }, [slug]); // eslint-disable-line

  const activeColorId = colorId || product.colors[0].id;
  const maxChars =
    type === "foiling" ? product.customization.maxFoilingChars :
    type === "embossing" ? product.customization.maxEmbossingChars :
    null;

  const waLink = buildWhatsAppLink({
    product, colorId: activeColorId, type, text, foilColor: type === "foiling" ? foilColor : null,
  });

  const custOptions = [
    { id: "none", label: "No customization" },
    ...(product.customization.engraving ? [{ id: "engraving", label: "Engraving" }] : []),
    ...(product.customization.embossing ? [{ id: "embossing", label: "Embossing" }] : []),
    ...(product.customization.foiling ? [{ id: "foiling", label: "Foiling" }] : []),
    ...(product.customization.pictureEngraving ? [{ id: "picture", label: "Picture engraving" }] : []),
  ];

  return (
    <section style={{ padding: "56px 24px 120px" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <button onClick={() => navigate("shop")} style={{ fontFamily: sans, fontSize: 13, color: C.champagneDark, background: "none", border: "none", cursor: "pointer", marginBottom: 32, display: "flex", alignItems: "center", gap: 6 }}>
          ← Back to collection
        </button>

        <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 64 }} className="rtlh-product-grid">
          <div>
            <div style={{ position: "sticky", top: 100 }}>
              <ProductVisual product={product} colorId={colorId} />
              {product.gallery && (
                <div style={{ display: "flex", gap: 10, marginTop: 12 }}>
                  {product.gallery.map((g, i) => (
                    <div key={i} style={{ flex: 1, aspectRatio: "1/1", borderRadius: 4, overflow: "hidden", border: `1px solid ${C.line}` }}>
                      <img src={g} alt={`${product.name} detail ${i + 1}`} loading="lazy" decoding="async" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    </div>
                  ))}
                </div>
              )}
              {type !== "none" && (text || type === "picture") && (
                <div style={{ marginTop: 14, padding: "14px 18px", background: C.card, border: `1px solid ${C.line}`, borderRadius: 2 }}>
                  <div style={{ fontFamily: sans, fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: C.champagneDark, marginBottom: 6 }}>
                    Your {customizationLabel(type, foilColor)}
                  </div>
                  <div style={{ fontFamily: serif, fontSize: 22, color: C.charcoal, letterSpacing: "0.06em" }}>
                    {type === "picture" ? "Please contact us on WhatsApp for the artwork details." : text}
                  </div>
                </div>
              )}
              <div style={{ fontFamily: sans, fontSize: 12.5, color: C.ink, opacity: 0.6, marginTop: 14, textAlign: "center" }}>
                Color and finish shown are for reference — final engraving is set by hand in the atelier.
              </div>
            </div>
          </div>

          <div>
            <div style={{ fontFamily: sans, fontSize: 11.5, letterSpacing: "0.14em", textTransform: "uppercase", color: C.champagneDark, marginBottom: 10 }}>
              {product.category}
            </div>
            <h1 style={{ fontFamily: serif, fontSize: 42, fontWeight: 500, color: C.charcoal, margin: "0 0 16px" }}>{product.name}</h1>
            <p style={{ fontFamily: sans, fontSize: 15.5, lineHeight: 1.8, color: C.ink, marginBottom: 10 }}>{product.description}</p>
            <div style={{ fontFamily: sans, fontSize: 15, fontWeight: 700, color: C.charcoal, marginBottom: 36 }}>From AED {product.startingPrice}</div>

            {/* Color selector */}
            {product.colors.length > 1 && (
              <div style={{ marginBottom: 32 }}>
                <div style={{ fontFamily: sans, fontSize: 12.5, fontWeight: 700, letterSpacing: "0.06em", color: C.charcoal, marginBottom: 14 }}>
                  COLOR — {colorLabel(activeColorId)}
                </div>
                <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                  {product.colors.map((c) => (
                    <button
                      key={c.id}
                      onClick={() => setColorId(c.id)}
                      aria-label={colorLabel(c.id)}
                      style={{
                        width: 38, height: 38, borderRadius: "50%", background: COLOR_HEX[c.id] || "#ccc", cursor: "pointer",
                        border: activeColorId === c.id ? `2px solid ${C.charcoal}` : `1px solid ${C.line}`,
                        outline: activeColorId === c.id ? `2px solid ${C.ivoryDeep}` : "none", outlineOffset: 2,
                        transition: "all 0.25s ease",
                      }}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Customization type */}
            <div style={{ marginBottom: 24 }}>
              <div style={{ fontFamily: sans, fontSize: 12.5, fontWeight: 700, letterSpacing: "0.06em", color: C.charcoal, marginBottom: 14 }}>
                CUSTOMIZATION
              </div>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                {custOptions.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => { setType(opt.id); }}
                    style={{
                      fontFamily: sans, fontSize: 13, fontWeight: 700, padding: "11px 18px", borderRadius: 20, cursor: "pointer",
                      border: `1px solid ${type === opt.id ? C.charcoal : C.line}`,
                      background: type === opt.id ? C.charcoal : "transparent",
                      color: type === opt.id ? C.ivory : C.ink,
                      transition: "all 0.25s ease",
                    }}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
              {custOptions.length === 1 && (
                <div style={{ fontFamily: sans, fontSize: 12.5, color: C.ink, opacity: 0.6, marginTop: 10 }}>
                  This piece is available with engraving only.
                </div>
              )}
            </div>

            {/* Text input */}
            {type !== "none" && type !== "picture" && (
              <div style={{ marginBottom: 24 }}>
                <div style={{ fontFamily: sans, fontSize: 12.5, fontWeight: 700, letterSpacing: "0.06em", color: C.charcoal, marginBottom: 14 }}>
                  {type === "foiling" ? `INITIALS${maxChars ? ` (MAX ${maxChars} LETTERS)` : ""}` : `TEXT${maxChars ? ` (MAX ${maxChars} CHARACTERS)` : ""}`}
                </div>
                <input
                  value={text}
                  onChange={(e) => { setText(maxChars ? e.target.value.slice(0, maxChars) : e.target.value); }}
                  placeholder={type === "foiling" ? "e.g. MA" : type === "embossing" ? "e.g. AB" : "e.g. Ali / محمد"}
                  style={{
                    width: "100%", fontFamily: sans, fontSize: 15, padding: "14px 16px",
                    border: `1px solid ${C.line}`, borderRadius: 2, background: C.card, color: C.charcoal,
                    outline: "none", boxSizing: "border-box",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = C.champagne)}
                  onBlur={(e) => (e.target.style.borderColor = C.line)}
                />
                {maxChars && (
                  <div style={{ fontFamily: sans, fontSize: 11.5, color: C.ink, opacity: 0.55, marginTop: 6, textAlign: "right" }}>
                    {text.length}/{maxChars}
                  </div>
                )}
              </div>
            )}

            {type === "picture" && (
              <div style={{ marginBottom: 24, padding: "16px 18px", background: C.card, border: `1px solid ${C.line}`, borderRadius: 2, fontFamily: sans, fontSize: 13.5, lineHeight: 1.7, color: C.ink }}>
                For picture engraving, please contact us on WhatsApp so we can confirm the artwork and final details before production.
              </div>
            )}

            {/* Foil color */}
            {type === "foiling" && (
              <div style={{ marginBottom: 36 }}>
                <div style={{ fontFamily: sans, fontSize: 12.5, fontWeight: 700, letterSpacing: "0.06em", color: C.charcoal, marginBottom: 14 }}>
                  FOIL FINISH
                </div>
                <div style={{ display: "flex", gap: 10 }}>
                  {product.customization.foilColors.map((sc) => (
                    <button
                      key={sc}
                      onClick={() => { setFoilColor(sc); }}
                      style={{
                        fontFamily: sans, fontSize: 13, fontWeight: 700, padding: "10px 16px", borderRadius: 20, cursor: "pointer",
                        border: `1px solid ${foilColor === sc ? C.charcoal : C.line}`,
                        background: foilColor === sc ? C.charcoal : "transparent",
                        color: foilColor === sc ? C.ivory : C.ink,
                        textTransform: "capitalize", transition: "all 0.25s ease",
                      }}
                    >
                      {colorLabel(sc)}
                    </button>
                  ))}
                </div>
              </div>
            )}
            {type === "none" || type === "embossing" ? <div style={{ marginBottom: 12 }} /> : null}

            {/* Actions */}
            <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 8 }}>
              <WhatsAppButton href={waLink} style={{ width: "100%" }}>
                Inquire via WhatsApp
              </WhatsAppButton>
            </div>

            <p style={{ fontFamily: sans, fontSize: 12.5, color: C.ink, opacity: 0.6, marginTop: 24, lineHeight: 1.7 }}>
              There is no cart or checkout on this site — every order is confirmed directly with our team on WhatsApp, including availability, pricing, and delivery.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------------- */
/* ABOUT PAGE                                                              */
/* ---------------------------------------------------------------------- */

function AboutPage({ navigate }) {
  return (
    <>
      <section style={{ padding: "110px 24px 80px" }}>
        <div style={{ maxWidth: 780, margin: "0 auto" }}>
          <Reveal><Eyebrow>The Atelier</Eyebrow></Reveal>
          <Reveal>
            <Heading size={50} style={{ marginBottom: 12 }}>Made by hand, for the moment it's given.</Heading>
          </Reveal>
          <Reveal>
            <div style={{ fontFamily: serif, fontSize: 20, fontStyle: "italic", color: C.champagneDark, marginBottom: 26 }}>{SLOGAN}</div>
          </Reveal>
          <Reveal>
            <p style={{ fontFamily: sans, fontSize: 17, lineHeight: 1.85, color: C.ink, marginBottom: 22 }}>
              RTLH — pronounced Retlah — began with a simple belief: that a gift means more when someone can watch it become theirs. Not a name printed at a factory, but a name pressed, embossed, or foiled in front of them, by hand, in minutes.
            </p>
            <p style={{ fontFamily: sans, fontSize: 17, lineHeight: 1.85, color: C.ink }}>
              We work across the UAE with couples, brands, and hosts who want their gifting to feel considered — from an intimate engagement dinner to a stage activation for hundreds of guests. Every piece in our collection is designed to be personalized simply, so the ceremony of engraving stays the centerpiece, not the packaging around it.
            </p>
          </Reveal>
        </div>
      </section>

      <section style={{ padding: "0 24px 100px" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }} className="rtlh-about-photos">
          <Reveal>
            <div style={{ borderRadius: 4, overflow: "hidden", border: `1px solid ${C.line}`, aspectRatio: "4/5" }}>
              <img src={IMG.RTLHAmbientPic3} alt="RTLH orders packaged with care" loading="lazy" decoding="async" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          </Reveal>
          <Reveal style={{ transitionDelay: "0.06s" }}>
            <div style={{ borderRadius: 4, overflow: "hidden", border: `1px solid ${C.line}`, aspectRatio: "4/5" }}>
              <img src={IMG.RTLHAmbientLogo} alt="RTLH monogram" loading="lazy" decoding="async" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          </Reveal>
        </div>
      </section>

      <section style={{ padding: "90px 24px", background: C.card, borderTop: `1px solid ${C.line}`, borderBottom: `1px solid ${C.line}` }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 40 }} className="rtlh-about-grid">
          {[
            { t: "Materials", d: "Leathers and metals chosen for how they wear, weather, and hold a mark over years, not seasons." },
            { t: "Precision", d: "Every mark is set against the true contour of the piece — no templates, no shortcuts." },
            { t: "Ceremony", d: "Personalization happens in view of the guest — a small, deliberate moment inside a larger occasion." },
          ].map((v, i) => (
            <Reveal key={v.t} style={{ transitionDelay: `${i * 0.08}s` }}>
              <div>
                <h3 style={{ fontFamily: serif, fontSize: 24, fontWeight: 500, color: C.charcoal, marginBottom: 12 }}>{v.t}</h3>
                <p style={{ fontFamily: sans, fontSize: 14, lineHeight: 1.75, color: C.ink }}>{v.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* AT YOUR EVENT / BOOTH */}
      <section style={{ padding: "100px 24px" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }} className="rtlh-craft-grid">
          <Reveal>
            <div style={{ borderRadius: 4, overflow: "hidden", border: `1px solid ${C.line}`, aspectRatio: "4/5" }}>
              <img src={IMG.RTLHAmbientPic4} alt="RTLH at a live event booth" loading="lazy" decoding="async" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          </Reveal>
          <Reveal>
            <Eyebrow>Find Us at Your Event</Eyebrow>
            <Heading size={34} style={{ marginBottom: 20 }}>The RTLH booth, brought to your celebration.</Heading>
            <p style={{ fontFamily: sans, fontSize: 16, lineHeight: 1.8, color: C.ink, marginBottom: 28 }}>
              Our engraving station travels — styled to sit naturally within your event, ready to personalize favors and gifts for every guest as they arrive. Tell us your date and headcount, and we'll take it from there.
            </p>
            <SecondaryButton onClick={() => navigate("events")}>See Live Events <ChevronRight size={15} /></SecondaryButton>
          </Reveal>
        </div>
      </section>

      {/* POLICIES / CARE */}
      <section style={{ padding: "100px 24px", background: C.card, borderTop: `1px solid ${C.line}` }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <Reveal><Eyebrow>Good to Know</Eyebrow></Reveal>
          <Reveal><Heading size={34} style={{ marginBottom: 40 }}>Orders, care, and policies.</Heading></Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 32 }}>
            {[
              { icon: MessageCircle, t: "Ordering", d: "Every order is placed and confirmed directly on WhatsApp — no cart, no checkout. We'll confirm color, customization, pricing, and timeline with you personally." },
              { icon: Truck, t: "Delivery", d: "We deliver across the UAE, and coordinate collection or shipping once your order and payment are confirmed on WhatsApp." },
              { icon: ShieldCheck, t: "Customization", d: "Engraving, embossing, and foiling are set by hand, so placement may vary slightly from the live preview shown on each product." },
              { icon: Sparkle, t: "Care", d: "Keep leather pieces dry and away from direct sun; wipe metal and mirrored surfaces with a soft, dry cloth." },
            ].map((v, i) => (
              <Reveal key={v.t} style={{ transitionDelay: `${i * 0.06}s` }}>
                <div style={{ border: `1px solid ${C.line}`, background: C.ivory, padding: "28px 26px", height: "100%" }}>
                  <v.icon size={22} strokeWidth={1.6} color={C.champagneDark} style={{ marginBottom: 14 }} />
                  <h4 style={{ fontFamily: serif, fontSize: 20, fontWeight: 500, color: C.charcoal, marginBottom: 10 }}>{v.t}</h4>
                  <p style={{ fontFamily: sans, fontSize: 13.5, lineHeight: 1.7, color: C.ink }}>{v.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "100px 24px", textAlign: "center" }}>
        <Reveal><Heading size={34} style={{ marginBottom: 22 }}>Visit the collection, or bring us to your event.</Heading></Reveal>
        <Reveal>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <PrimaryButton onClick={() => navigate("shop")}>Explore the Collection</PrimaryButton>
            <SecondaryButton onClick={() => navigate("events")}>See Live Events <ChevronRight size={15} /></SecondaryButton>
          </div>
        </Reveal>
      </section>
    </>
  );
}

/* ---------------------------------------------------------------------- */
/* CONTACT PAGE                                                            */
/* ---------------------------------------------------------------------- */

function ContactPage() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  function link() {
    let msg = "Hello RTLH,";
    if (name) msg += ` my name is ${name}.`;
    if (message) msg += ` ${message}`;
    if (!name && !message) msg = "Hello RTLH, I'd like to get in touch.";
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
  }

  return (
    <section style={{ padding: "110px 24px 130px" }}>
      <div style={{ maxWidth: 1080, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72 }} className="rtlh-contact-grid">
        <div>
          <Reveal><Eyebrow>Contact</Eyebrow></Reveal>
          <Reveal><Heading size={44} style={{ marginBottom: 20 }}>Let's talk about your piece, or your event.</Heading></Reveal>
          <Reveal>
            <p style={{ fontFamily: sans, fontSize: 16, lineHeight: 1.8, color: C.ink, marginBottom: 36 }}>
              For orders, custom pieces, and live engraving bookings, RTLH is reachable directly on WhatsApp — the fastest way to reach our team. There's no cart on this site — every order is confirmed with us personally.
            </p>
          </Reveal>
          <Reveal>
            <div style={{ display: "flex", flexDirection: "column", gap: 18, marginBottom: 36 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, fontFamily: sans, fontSize: 14.5, color: C.charcoal }}>
                <MessageCircle size={17} strokeWidth={1.7} color={C.champagneDark} /> {WHATSAPP_DISPLAY}
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 12, fontFamily: sans, fontSize: 14.5, color: C.charcoal }}>
                <Instagram size={17} strokeWidth={1.7} color={C.champagneDark} /> {SOCIAL_HANDLE}
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 12, fontFamily: sans, fontSize: 14.5, color: C.charcoal }}>
                <Music2 size={17} strokeWidth={1.7} color={C.champagneDark} /> {SOCIAL_HANDLE} on TikTok
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 12, fontFamily: sans, fontSize: 14.5, color: C.charcoal }}>
                <Globe size={17} strokeWidth={1.7} color={C.champagneDark} /> {WEBSITE}
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 12, fontFamily: sans, fontSize: 14.5, color: C.charcoal }}>
                <MapPin size={17} strokeWidth={1.7} color={C.champagneDark} /> Dubai, United Arab Emirates
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div style={{ background: C.card, border: `1px solid ${C.line}`, padding: 40 }}>
            <div style={{ fontFamily: sans, fontSize: 12.5, fontWeight: 700, letterSpacing: "0.06em", color: C.charcoal, marginBottom: 10 }}>YOUR NAME</div>
            <input
              value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name"
              style={{ width: "100%", fontFamily: sans, fontSize: 14.5, padding: "13px 15px", border: `1px solid ${C.line}`, borderRadius: 2, background: "#fff", marginBottom: 26, outline: "none", boxSizing: "border-box" }}
            />
            <div style={{ fontFamily: sans, fontSize: 12.5, fontWeight: 700, letterSpacing: "0.06em", color: C.charcoal, marginBottom: 10 }}>MESSAGE</div>
            <textarea
              value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Tell us what you have in mind…" rows={5}
              style={{ width: "100%", fontFamily: sans, fontSize: 14.5, padding: "13px 15px", border: `1px solid ${C.line}`, borderRadius: 2, background: "#fff", marginBottom: 28, outline: "none", resize: "vertical", boxSizing: "border-box" }}
            />
            <WhatsAppButton href={link()} style={{ width: "100%" }}>Send via WhatsApp</WhatsAppButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------------- */
/* APP ROOT                                                                */
/* ---------------------------------------------------------------------- */

export default function RTLHSite() {
  const [route, setRoute] = useState({ page: "home", slug: null });
  const navigate = (page, slug = null) => {
    setRoute({ page, slug });
    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
  };

  return (
    <div style={{ background: C.ivory, minHeight: "100vh", fontFamily: sans }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Manrope:wght@400;500;600;700;800&display=swap');
        * { box-sizing: border-box; }
        body { margin: 0; }
        input::placeholder, textarea::placeholder { color: rgba(58,50,42,0.4); }
        @media (min-width: 860px) {
          .rtlh-desktop-nav { display: flex !important; }
          .rtlh-mobile-toggle { display: none !important; }
        }
        @media (max-width: 859px) {
          .rtlh-product-grid, .rtlh-craft-grid, .rtlh-about-grid, .rtlh-contact-grid, .rtlh-about-photos { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <NavBar navigate={navigate} page={route.page} />

      {route.page === "home" && <HomePage navigate={navigate} />}
      {route.page === "events" && <EventsPage />}
      {route.page === "shop" && <ShopPage navigate={navigate} />}
      {route.page === "product" && <ProductPage slug={route.slug} navigate={navigate} />}
      {route.page === "about" && <AboutPage navigate={navigate} />}
      {route.page === "contact" && <ContactPage />}

      <Footer navigate={navigate} />
    </div>
  );
}
