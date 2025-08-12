// src/App.js
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

/* --------- Config --------- */
const STRIPE = {
  starter: "https://buy.stripe.com/8x27sLdVAeaV5xf5sYeEo00",
  standard: "https://buy.stripe.com/cNi28rg3I1o92l36x2eEo01",
  pro: "https://buy.stripe.com/7sY6oH6t82sd0cVg7CeEo02",
};
const FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfPmESzdIYlhoHkjkCJBamJidndR9TGkY0oRa7777UAhS-Ivw/viewform?usp=dialog";

/* --------- Layout --------- */
function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          Breakdown <span className="text-yellow-500">Tennis</span>
        </Link>
        <nav className="space-x-6 text-sm">
          <Link to="/pricing" className="hover:underline">Services</Link>
          <Link to="/resources" className="hover:underline">Resources</Link>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
        <Link to="/pricing" className="px-4 py-2 rounded-xl bg-black text-white font-semibold">
          Get Your Breakdown
        </Link>
      </div>
    </header>
  );
}
function Footer() {
  return (
    <footer className="bg-white py-10 mt-10" id="contact">
      <div className="max-w-6xl mx-auto px-4 text-center text-sm text-gray-600">
        <p>Contact : <a className="underline" href="mailto:hello@yourdomain.com">hello@yourdomain.com</a></p>
        <p className="mt-2">© {new Date().getFullYear()} Breakdown Tennis</p>
      </div>
    </footer>
  );
}

/* --------- Pages principales --------- */
function Home() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-20 text-center">
      <h1 className="text-4xl font-extrabold mb-4">3 fixes actionnables en 24h</h1>
      <p className="text-lg text-gray-700 mb-8">
        Envoie tes séquences, reçois une vidéo annotée + un plan clair pour progresser.
      </p>
      <Link to="/pricing" className="px-6 py-3 bg-black text-white rounded-xl font-semibold">
        Voir les offres
      </Link>
    </section>
  );
}

function Pricing() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16" id="pricing">
      <h2 className="text-3xl font-bold mb-10 text-center">Choisis ton offre</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Starter */}
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h3 className="text-xl font-bold mb-2">Starter</h3>
          <p className="text-gray-600 mb-6">Analyse vidéo ≤ 15 min. Points clés et conseils rapides.</p>
          <p className="text-4xl font-extrabold mb-6">15€</p>
          <a href={STRIPE.starter} target="_blank" rel="noopener noreferrer"
             className="block w-full text-center px-4 py-2 rounded-2xl bg-black text-white font-semibold">
            Commander
          </a>
        </div>
        {/* Standard */}
        <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-yellow-400">
          <div className="text-xs inline-block mb-2 px-2 py-1 rounded-full bg-yellow-100 text-yellow-800">Populaire</div>
          <h3 className="text-xl font-bold mb-2">Standard</h3>
          <p className="text-gray-600 mb-6">Analyse ≤ 30 min. Conseils techniques et stratégiques.</p>
          <p className="text-4xl font-extrabold mb-6">30€</p>
          <a href={STRIPE.standard} target="_blank" rel="noopener noreferrer"
             className="block w-full text-center px-4 py-2 rounded-2xl bg-black text-white font-semibold">
            Commander
          </a>
        </div>
        {/* Pro */}
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h3 className="text-xl font-bold mb-2">Pro</h3>
          <p className="text-gray-600 mb-6">Analyse ≤ 1 h + coaching visio 30 min.</p>
          <p className="text-4xl font-extrabold mb-6">60€</p>
          <a href={STRIPE.pro} target="_blank" rel="noopener noreferrer"
             className="block w-full text-center px-4 py-2 rounded-2xl bg-black text-white font-semibold">
            Commander
          </a>
        </div>
      </div>

      <div className="mt-12 text-center text-sm text-gray-600">
        Après paiement, vous serez redirigé vers la page « Merci » pour envoyer vos vidéos.
      </div>
    </section>
  );
}

function ThankYou() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center">Merci pour votre achat 🎾</h2>
      <p className="text-center text-gray-700 mt-3">
        Dernière étape : remplissez le formulaire ci-dessous pour m’envoyer vos clips.
      </p>
      <div className="max-w-3xl mx-auto mt-8">
        <iframe
          src={FORM_URL}
          width="100%"
          height="680"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          title="Analyse vidéo – Formulaire"
        >
          Loading…
        </iframe>
      </div>
      <div className="text-center mt-6">
        <a href={FORM_URL} target="_blank" rel="noopener noreferrer" className="underline text-sm">
          Ouvrir le formulaire dans un nouvel onglet
        </a>
      </div>
    </section>
  );
}

/* --------- Resources + Articles --------- */
function Resources() {
  const items = [
    {
      title: "3 erreurs en coup droit (et fixes rapides)",
      desc: "Préparation, transfert, finition : corrige ces détails et stabilise ton coup.",
      to: "/resources/coup-droit",
    },
    {
      title: "Gagner en régularité grâce à la vidéo",
      desc: "Stabilité, zone de contact, synchronisation jambes/bras : ce qui fait la diff.",
      to: "/resources/regularite",
    },
    {
      title: "Revers à une main : élégance et efficacité",
      desc: "Ancrage, rotation, suivi : rends ton revers plus lourd et précis.",
      to: "/resources/revers",
    },
  ];
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-extrabold text-center">Ressources gratuites</h1>
      <p className="text-gray-700 text-center mt-3">Conseils courts, applicables tout de suite. 2 minutes de lecture.</p>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {items.map((it) => (
          <Link key={it.to} to={it.to} className="rounded-2xl border p-5 hover:shadow bg-white">
            <h2 className="font-bold">{it.title}</h2>
            <p className="mt-2 text-sm text-gray-600">{it.desc}</p>
            <span className="mt-3 inline-block text-sm font-semibold text-yellow-600">Lire →</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

function ArticleShell({ title, intro, children }) {
  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-extrabold">{title}</h1>
      <p className="mt-3 text-gray-700">{intro}</p>
      {children}
      <div className="mt-10 p-4 border rounded-2xl bg-yellow-50">
        <p className="text-gray-800">
          📹 Besoin d’un retour personnalisé ? Analyse vidéo + plan d’action en 24h.
        </p>
        <Link to="/pricing" className="inline-block mt-3 px-4 py-2 rounded-2xl bg-black text-white font-semibold">
          Voir les offres
        </Link>
      </div>
    </article>
  );
}

function CoupDroit() {
  return (
    <ArticleShell
      title="3 erreurs courantes en coup droit (et comment les corriger)"
      intro="Le coup droit est souvent le plus utilisé… et le plus mal exécuté. Voici 3 corrections simples."
    >
      <section className="mt-8">
        <h2 className="text-xl font-bold">1) Préparation trop tardive</h2>
        <p className="mt-2 text-gray-700">Prépare dès le départ de raquette adverse. Épaule tournée avant le rebond.</p>
      </section>
      <section className="mt-6">
        <h2 className="text-xl font-bold">2) Pas de transfert de poids</h2>
        <p className="mt-2 text-gray-700">Pousse sur la jambe arrière et transfère vers l’avant pour de la puissance sans forcer le bras.</p>
      </section>
      <section className="mt-6">
        <h2 className="text-xl font-bold">3) Finition écourtée</h2>
        <p className="mt-2 text-gray-700">Laisse la raquette “enrouler” jusqu’au-dessus de l’épaule pour une rotation complète.</p>
      </section>
    </ArticleShell>
  );
}

function Regularite() {
  return (
    <ArticleShell
      title="Comment gagner en régularité grâce à l’analyse vidéo"
      intro="La régularité vient d’une mécanique stable et répétable. La vidéo révèle les micro-détails invisibles en match."
    >
      <section className="mt-8">
        <h2 className="text-xl font-bold">1) Stabilité de la tête</h2>
        <p className="mt-2 text-gray-700">Une tête qui bouge = contact instable. Vérifie l’immobilité à l’impact.</p>
      </section>
      <section className="mt-6">
        <h2 className="text-xl font-bold">2) Zone de frappe constante</h2>
        <p className="mt-2 text-gray-700">Note la hauteur moyenne de contact. Si ça varie trop, révise placement et appuis.</p>
      </section>
      <section className="mt-6">
        <h2 className="text-xl font-bold">3) Synchronisation jambes/bras</h2>
        <p className="mt-2 text-gray-700">Les jambes se posent avant le swing. Si le bras part avant, tu joues en retard.</p>
      </section>
    </ArticleShell>
  );
}

function Revers() {
  return (
    <ArticleShell
      title="Revers à une main : élégance et efficacité"
      intro="Le revers à une main demande ancrage, rotation et suivi. 3 points pour gagner en puissance et contrôle."
    >
      <section className="mt-8">
        <h2 className="text-xl font-bold">1) Ancrage au sol</h2>
        <p className="mt-2 text-gray-700">Pied avant solide, buste stable. L’énergie remonte du sol.</p>
      </section>
      <section className="mt-6">
        <h2 className="text-xl font-bold">2) Ouverture d’épaule complète</h2>
        <p className="mt-2 text-gray-700">Charge l’épaule et tourne-la franchement à la frappe pour générer du lift.</p>
      </section>
      <section className="mt-6">
        <h2 className="text-xl font-bold">3) Suivi fluide</h2>
        <p className="mt-2 text-gray-700">Laisse la raquette monter et “terminer” haut, pas de freinage brutal.</p>
      </section>
    </ArticleShell>
  );
}

/* --------- App root --------- */
export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/resources/coup-droit" element={<CoupDroit />} />
        <Route path="/resources/regularite" element={<Regularite />} />
        <Route path="/resources/revers" element={<Revers />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
