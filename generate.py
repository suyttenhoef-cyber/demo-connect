#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Génère une offre PDF personnalisée par commune à partir de :
  - template.html  (modèle brandé avec des {{tokens}})
  - communes.json  (liste des communes + données)

Sortie :
  - ../offres/<code>.pdf      (un fichier par commune ; <code> = jeton non devinable)
  - manifest.csv              (commune ; code ; fichier ; URL de téléchargement)

Le <code> est exactement le jeton à coller dans codeUrlPattern de la démo
(ex. codeUrlPattern: "offres/{code}.pdf") et à envoyer par e-mail à la commune.

Usage :
  pip install weasyprint
  python generate.py
"""

import json, csv, re, secrets, datetime, pathlib
from weasyprint import HTML

# ----- Configuration -------------------------------------------------------
BASE_URL   = "https://<votre-commune>.github.io/connect-demo/"  # base publique de la démo
HERE       = pathlib.Path(__file__).parent
TEMPLATE   = HERE / "template.html"
DATA       = HERE / "communes.json"
OUT_DIR    = HERE.parent / "offres"        # les PDF atterrissent ici (= dossier offres/ du build)
MANIFEST   = HERE / "manifest.csv"
# ---------------------------------------------------------------------------


def slugify(text: str) -> str:
    text = text.lower()
    text = (text.replace("é", "e").replace("è", "e").replace("ê", "e")
                .replace("à", "a").replace("â", "a").replace("ç", "c")
                .replace("ô", "o").replace("î", "i").replace("ï", "i").replace("û", "u"))
    text = re.sub(r"[^a-z0-9]+", "-", text).strip("-")
    return text or "commune"


def make_code(commune: str) -> str:
    """Jeton non devinable : slug + 5 caractères aléatoires."""
    return f"{slugify(commune)}-{secrets.token_hex(3)[:5]}"


def fill(template: str, data: dict) -> str:
    """Remplace chaque {{cle}} par sa valeur (échappement HTML minimal)."""
    html = template
    for key, val in data.items():
        safe = (str(val).replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;"))
        html = html.replace("{{" + key + "}}", safe)
    return html


def main():
    template = TEMPLATE.read_text(encoding="utf-8")
    payload  = json.loads(DATA.read_text(encoding="utf-8"))
    communes = payload["communes"]
    today    = datetime.date.today().strftime("%d/%m/%Y")

    OUT_DIR.mkdir(parents=True, exist_ok=True)
    rows = []

    for c in communes:
        code = c.get("code") or make_code(c["commune"])
        ctx = {
            **c,
            "code": code,
            "reference": code.upper(),
            "date": c.get("date", today),
        }
        html = fill(template, ctx)
        out  = OUT_DIR / f"{code}.pdf"
        HTML(string=html, base_url=str(HERE)).write_pdf(str(out))

        url = BASE_URL.rstrip("/") + f"/offres/{code}.pdf"
        rows.append([c["commune"], code, out.name, url])
        print(f"  ✓ {c['commune']:<28}  code={code}  ->  {out.name}")

    with MANIFEST.open("w", newline="", encoding="utf-8") as f:
        w = csv.writer(f, delimiter=";")
        w.writerow(["commune", "code", "fichier", "url_telechargement"])
        w.writerows(rows)

    print(f"\n{len(rows)} offre(s) générée(s) dans {OUT_DIR}")
    print(f"Manifeste : {MANIFEST}")
    print("→ Envoyez à chaque commune le 'code' correspondant ; il déverrouille son offre dans la démo.")


if __name__ == "__main__":
    main()
