/* ============================================================
   CONFIG CLIENT — un fichier par commune.
   Plateforme commune : aucune couleur ici. À dupliquer par client.
   ============================================================ */
const TENANT = {
  commune:    "CPAS de Gesves",
  collection: "CPASConnect",        // collection accessible en démo
  contactUrl: "https://www.cpasconnect.be/contact?q=demo",
  offer: {
    title: "Passez à la version complète",
    pitch: "Cette démonstration n'ouvre qu'une partie des contenus de la collection " +
           "CPASConnect. La licence complète donne accès à l'ensemble des documents, " +
           "modèles, livres, jurisprudence et législation — et à l'assistant Assist — " +
           "pour tous les agents, sans limite.",
    price: "Abonnement annuel · accès illimité pour tout le personnel",

    /* --- Téléchargement de l'offre personnalisée --------------------------
       Trois modes possibles, selon ce qui est renseigné ci-dessous :

       A) Document direct (le plus simple) :
            documentUrl: "offres/offre.pdf"      // déposé dans le build de la commune
            requireCode: false

       B) Lien "capability" protégé par un code (RECOMMANDÉ) :
            codeUrlPattern: "offres/{code}.pdf"  // {code} remplacé par le code saisi
            requireCode: true
            // Le code (ex. "gesves-9f3a2") est envoyé par mail à la commune.
            // Aucun code n'est stocké ici : un mauvais code -> fichier introuvable.

       C) SharePoint avec vraies permissions :
            codeUrlPattern: "https://vandenbroele.sharepoint.com/.../offre-{code}.pdf"
            requireCode: true                    // ou documentUrl direct + login SharePoint
       --------------------------------------------------------------------- */
    requireCode:    true,
    codeUrlPattern: "offres/{code}.pdf",   // dérive l'URL à partir du code
    documentUrl:    "offres/offre.pdf",    // utilisé si requireCode = false
    codeHint:       "Code reçu par e-mail avec votre proposition (ex. gesves-9f3a2)"
  }
};
