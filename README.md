# Vanden Broele Connect — Démo

Démo frontend-only reproduisant la plateforme Connect. Plateforme **commune** : une seule
charte, et chaque *collection* (CPASConnect, OrangeConnect…) n'est qu'un jeu de données.

## Structure

```
connect/
├── src/                      ← on développe ici (Visual Studio)
│   ├── index.html            squelette : charge styles + config + données + moteur
│   ├── assets/styles.css     charte commune (ne dépend d'aucune collection)
│   ├── config.js             TENANT — la commune cliente (nom, offre, code…)
│   ├── data/
│   │   └── cpasconnect.js    LA collection : rubriques, contenus, réponses Assist
│   └── engine.js             moteur générique (rendu, recherche, Assist, cadenas, offre, visite guidée)
├── build.py                  assemble src/ → dist/index.html (fichier unique)
├── dist/index.html           ← on livre/déploie ceci
└── offres/                   PDF d'offres personnalisées (cf. offer-generator/)
```

Séparation nette : **le moteur ne contient aucune donnée**. Il lit `TENANT` (config.js)
et `RUBRIQUES / TYPES / CONTENT / ASSIST / ELEARNING / UPDATES` (data/*.js).

## Développer
Ouvrez `src/index.html` avec un serveur local (ex. extension **Live Server** de VS Code).
Un serveur est nécessaire pour que le téléchargement d'offre (`fetch`) fonctionne ;
en `file://` direct, l'app s'affiche mais la vérification du code d'offre est limitée.

## Construire
```bash
python build.py        # → dist/index.html (un seul fichier autonome)
```

## Déployer (GitHub Pages)
1. Copiez `dist/index.html` en `index.html` à la racine du repo.
2. Placez le dossier `offres/` à côté.
3. Settings → Pages → branche `main`. En ligne en ~2 min.

## Dupliquer pour une autre collection
1. Copiez `src/data/cpasconnect.js` → `src/data/orangeconnect.js`.
2. Remplacez `RUBRIQUES`, `CONTENT`, `ASSIST`, `ELEARNING`, `UPDATES` par le contenu de la collection.
3. Dans `src/index.html`, pointez le `<script src="data/…">` vers le nouveau fichier.
4. Adaptez `config.js` (`collection`, offre) et rebuild.
   → Le moteur (`engine.js`) et la charte (`styles.css`) ne changent pas.

## Dupliquer pour une autre commune (même collection)
Changez uniquement `src/config.js` (`commune`, `offer`, code de l'offre), puis rebuild.
```

> Logo : `engine.js` → constante `LOGO_URL`. En production, pointez vers le `connect-emblem.svg` local.
> Police : Source Sans Pro (chargée via Source Sans 3 / Google Fonts).

Instruction du prompt de départ (Claude)
Tu es un expert senior en développement SaaS, UX/UI et prototypage de plateformes métier complexes.

🎯 Objectif
Je veux que tu conçoives un outil de démonstration (demo platform) qui reproduit fidèlement (mais de manière simplifiée) nos plateformes Connect développées avec Vanden Broele (ex : CPASConnect, DGConnect, etc.).

👉 L’objectif est de fournir à des communes clientes un accès à une version simulée mais réaliste de notre plateforme :
- navigation identique à la vraie plateforme
- fonctionnalités principales visibles
- certaines fonctionnalités bloquées avec message "réservé à la version complète"

---

🧩 Contexte produit
Les plateformes Connect sont des bases de connaissance avancées pour les pouvoirs locaux, incluant :
- articles métiers structurés
- dossiers thématiques
- procédures
- outils de recherche
- navigation par catégories

👉 Référence : https://www.vandenbroele.be/fr-be/solutions-digitales/vanden-broele-connect

Je pourrai te fournir :
- des screenshots de la plateforme
OU
- un accès à celle-ci

👉 Tu dois prévoir que ton architecture puisse s’adapter facilement à ces inputs.

---

👥 Utilisateurs cibles
- Experts métiers (utilisateurs principaux)
- Utilisateurs plus novices
👉 L’UX doit donc être :
- intuitive
- pédagogique
- mais professionnelle et riche

---

⚙️ Contraintes très importantes
- ❌ Pas d’infrastructure backend complexe
- ✅ Frontend-only ou quasi (mock data)
- ✅ Hébergeable sur GitHub Pages ou équivalent
- ✅ Facilement duplicable pour chaque client
- ✅ Données simulées (JSON ou CMS léger)

---

🎨 Exigence UX/UI
- Reproduire le plus fidèlement possible l'expérience Connect
- Branding aligné avec Vanden Broele (premium, institutionnel)
- Navigation et structure proches du produit réel
- Ajouter des éléments “démo” :
  - badges "Démo"
  - features verrouillées
  - call-to-action vers version complète

---

🔎 Fonctionnalités attendues
1. Navigation par thématiques
2. Visualisation d’articles
3. Recherche avancée (mockée mais crédible)
4. Mise en avant de contenus clés
5. Simulation de fonctionnalités avancées :
   - suggestions intelligentes
   - filtres
   - éventuellement recommandations type “IA simulée”
6. Blocage de certaines features avec message :
   👉 “Disponible dans la version complète”

---

🏗️ Ce que tu dois produire

### 1. Architecture technique
- stack recommandée
- justification
- variantes possibles

### 2. Structure du projet
- organisation fichiers/dossiers
- gestion des données mockées

### 3. Système de personnalisation client
Je veux pouvoir adapter facilement :
- nom de la commune
- logo
- contenu spécifique
- offre commerciale

👉 Propose :
- soit un système multi-config
- soit une duplication simple par client
- compare les deux options

---

### 4. UX / UI détaillée
Décris les pages :
- homepage
- page catégorie
- page article
- recherche
- onboarding (optionnel)

---

### 5. Système de démo intelligente
Comment simuler :
- recherche avancée
- recommandations
- contenu dynamique

---

### 6. Exemple concret
- JSON de données
- exemple de composant/page (code si pertinent)

---

### 7. Déploiement
- méthode simple (GitHub Pages, etc.)
- duplication rapide pour un nouveau client

---

💡 Contraintes produit
- doit être rapide à construire
- doit être impressionnant pour un client
- doit être proche du produit réel
- doit être maintenable

---

🚀 Bonus souhaités
- “mode démo guidée” (parcours utilisateur)
- possibilité d’ajouter une offre commerciale intégrée
- simulation d’un comportement intelligent (IA fake ou rules-based)

---

🎯 Qualité attendue
Je veux une réponse :
- concrète
- directement exploitable
- orientée MVP puis amélioration
- avec des exemples réels (pas seulement théoriques)