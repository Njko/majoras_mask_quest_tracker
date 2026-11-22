# Carnet de quêtes — Majora's Mask

Site statique pour suivre l'avancement des quêtes de *The Legend of Zelda: Majora's Mask* (N64).

- **Où en es-tu ?** — choisis ton étape dans l'histoire ; le site liste ce qu'il est conseillé de faire avant d'avancer, ce qui est en retard, et ce qui peut attendre.
- **Chaque quête** détaille les jours du cycle concernés, ses conditions, ses étapes à cocher, sa récompense et le meilleur moment pour la faire.
- **Filtre par jour** — prépare ton cycle de trois jours en listant ce qui se joue le jour 1, 2 ou 3.
- **Masques & collections** — les 24 masques, et des compteurs pour les quarts de cœur, le Carnet des Bombers, les fées perdues et les Skulltulas d'or.
- **Progression enregistrée** dans le navigateur (`localStorage`), avec export / import en fichier JSON.

## Structure

| Fichier | Rôle |
| --- | --- |
| `index.html` | Page unique |
| `assets/data.js` | Étapes de l'histoire, quêtes, compteurs et masques (c'est ici qu'on corrige ou ajoute du contenu) |
| `assets/app.js` | Logique, rendu, stockage local |
| `assets/style.css` | Styles (thème clair et sombre) |

Aucune dépendance, aucune étape de build.

Les noms de lieux, d'objets et de masques suivent l'usage courant des fans ; ils peuvent différer de la traduction française officielle. Les corrections sont bienvenues dans `assets/data.js`.

## Publication sur GitHub Pages

Dans le dépôt : **Settings → Pages → Build and deployment → Deploy from a branch**, choisir la branche et le dossier `/ (root)`.

## En local

Ouvrir `index.html` dans un navigateur, ou lancer `python3 -m http.server` à la racine.

---

Site de fans non officiel. The Legend of Zelda est une marque de Nintendo.
