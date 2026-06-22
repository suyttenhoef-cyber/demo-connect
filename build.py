#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Build : assemble les modules en un seul fichier autonome index.html.

  index.src.html   (squelette)
  styles.css       -> inliné dans <style>
  config.js        -> inliné
  cpasconnect.js   -> inliné
  engine.js        -> inliné

Le fichier index.html est :
  - prévisualisable directement,
  - déployable tel quel sur GitHub Pages (avec le dossier offres/ à côté).

Workflow :
  - On DÉVELOPPE les fichiers sources (.js, .css) séparément.
  - On LIVRE index.html (un seul fichier, simple à héberger/dupliquer).

Usage :  python build.py
"""
import re, pathlib, base64

ROOT = pathlib.Path(__file__).parent

html = (ROOT / "index.src.html").read_text(encoding="utf-8")

# 1) Inline de la feuille de styles locale.
def inline_css(m):
    href = m.group(1)
    if href.startswith("http"):
        return m.group(0)
    css = (ROOT / href).read_text(encoding="utf-8")
    return "<style>\n" + css + "\n</style>"
html = re.sub(r'<link rel="stylesheet" href="([^"]+)">', inline_css, html)

# 2) Inline des scripts locaux (les src http(s) externes sont laissés tels quels).
def inline_js(m):
    src = m.group(1)
    if src.startswith("http"):
        return m.group(0)
    js = (ROOT / src).read_text(encoding="utf-8")
    return "<script>\n" + js + "\n</script>"
html = re.sub(r'<script src="([^"]+)"></script>', inline_js, html)

# 3) Substitution du logo : remplace le chemin local par un data URI base64.
logo_path = ROOT / "Image" / "logo_demo.png"
logo_b64 = base64.b64encode(logo_path.read_bytes()).decode()
html = html.replace(
    'const LOGO_URL="Image/logo_demo.png"',
    f'const LOGO_URL="data:image/png;base64,{logo_b64}"'
)

out = ROOT / "index.html"
out.write_text(html, encoding="utf-8")
print(f"OK {out}  ({len(html):,} caracteres)")
print("  Deployable tel quel ; placez le dossier offres/ a cote.")
