const FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfPmESzdIYlhoHkjkCJBamJidndR9TGkY0oRa7777UAhS-Ivw/viewform?usp=dialog";

export default function ThankYou() {
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
