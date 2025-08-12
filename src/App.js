import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const STRIPE = {
  starter: "https://buy.stripe.com/8x27sLdVAeaV5xf5sYeEo00",
  standard: "https://buy.stripe.com/cNi28rg3I1o92l36x2eEo01",
  pro: "https://buy.stripe.com/7sY6oH6t82sd0cVg7CeEo02",
};

const FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfPmESzdIYlhoHkjkCJBamJidndR9TGkY0oRa7777UAhS-Ivw/viewform?usp=dialog";

function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          Breakdown <span className="text-yellow-500">Tennis</span>
        </Link>
        <nav className="space-x-6 text-sm">
          <Link to="/pricing" className="hover:underline">Services</Link>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
        <Link to="/pricing" className="px-4 py-2 rounded-xl bg-black text-white font-semibold">
          Get Your Breakdown
        </Link>
      </div>
    </header>
  );
}

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

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ThankYou from "./ThankYou"; // <-- ajoute ceci

// ... tes composants Header, Home, Pricing, Footer ...

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/thank-you" element={<ThankYou />} /> {/* <-- la route */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
