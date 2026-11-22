/*
 * Données du carnet — The Legend of Zelda: Majora's Mask (N64).
 *
 * PHASES : les grandes étapes de l'histoire, dans l'ordre.
 * QUESTS : chaque quête possède
 *   id      identifiant stable (sert de clé dans le stockage local — ne pas renommer)
 *   title   nom affiché
 *   cat     "main" (histoire) | "mask" (masque) | "song" (chant) | "gear" (équipement) | "side" (quête annexe) | "mini" (mini-jeu)
 *   days    jours du cycle où la quête se joue : [1], [2, 3], [1, 2, 3]…
 *   time    précision horaire facultative ("nuit", "18 h – 6 h"…)
 *   from    index de la phase à partir de laquelle la quête devient faisable
 *   best    index de la phase où il est conseillé de la terminer
 *   key     true si la quête est indispensable (ou presque) pour finir le jeu
 *   reward  récompense
 *   needs   conditions à remplir avant de commencer
 *   steps   étapes à cocher
 *   when    pourquoi la faire à ce moment-là
 *   tip     astuce facultative
 *
 * Les noms de lieux, d'objets et de masques suivent l'usage courant des fans
 * francophones ; ils peuvent différer de la traduction officielle de 2000.
 */

const PHASES = [
  {
    id: "p0", title: "Premier cycle au Bourg-Horloge",
    goal: "Reprendre l'ocarina à Skull Kid au sommet de la Tour de l'Horloge, à minuit du troisième jour.",
    advice: "Sous forme Mojo, tu ne peux pas faire grand-chose : ne cherche pas à tout voir. Concentre-toi sur la Grande Fée, le code des Bombers et la Larme de Lune. Une fois l'ocarina récupéré, tout le reste du jeu s'ouvre."
  },
  {
    id: "p1", title: "Marais du Sud & Bois-Cascade",
    goal: "Réveiller le Temple de Bois-Cascade et vaincre Odolwa.",
    advice: "Tu redeviens humain : c'est le moment de faire le tour du Bourg-Horloge (banque, Bremen, Kamaro, la vieille dame de la boutique de bombes). Apprends le Chant de l'Envol au marais : il change tout le reste de l'aventure."
  },
  {
    id: "p2", title: "Village Goron & Pic des Neiges",
    goal: "Ramener le printemps sur les montagnes en vainquant Goht.",
    advice: "Le printemps ne dure que jusqu'au prochain Chant du Temps : course des Gorons, forge et Don Gero sont à faire dans le cycle où tu bats Goht (ou il faudra refaire le boss)."
  },
  {
    id: "p3", title: "Ranch Romani",
    goal: "Dégager la route du ranch avec un Baril de poudre et apprendre le Chant d'Epona.",
    advice: "Le ranch concentre trois quêtes liées sur le même cycle : extraterrestres la nuit 1, escorte de Cremia le jour 2, Masque de Romani. Prévois un cycle entier."
  },
  {
    id: "p4", title: "Grande Baie",
    goal: "Retrouver les œufs de Lulu, réveiller la Tortue géante et vaincre Gyorg.",
    advice: "Le Grappin trouvé dans la Forteresse des Pirates ouvre beaucoup de choses : Maison des Skulltulas de l'Océan, quart de cœurs, Bourse de géant."
  },
  {
    id: "p5", title: "Vallée d'Ikana & Tour de Pierre",
    goal: "Atteindre le sommet de la Tour de Pierre, retourner le temple et vaincre Twinmold.",
    advice: "Ikana se prépare : Masque de Garo, Casque du Capitaine et Chant de la Tempête sont nécessaires pour avancer. C'est aussi là que se conclut la quête d'Anju et Kafei."
  },
  {
    id: "p6", title: "La Lune",
    goal: "Arrêter la Lune et vaincre Majora.",
    advice: "Avant de jouer l'Ode à l'Ordre, vérifie tes masques : avec les 20 masques ordinaires, les enfants de la Lune te donnent le Masque du Dieu Démon."
  }
];

const QUESTS = [
  /* ───────────── HISTOIRE ───────────── */
  {
    id: "m-p0", title: "Retrouver l'ocarina", cat: "main", days: [1, 2, 3], from: 0, best: 0, key: true,
    reward: "Ocarina du Temps, Chant du Temps, Chant de l'Apaisement, Masque Mojo",
    needs: ["Aucune : c'est le début du jeu."],
    steps: [
      "Capturer la fée perdue du Bourg (Blanchisserie le jour, Bourg Est la nuit) et la ramener à la Grande Fée du Bourg Nord : bulles Mojo.",
      "Jouer à cache-cache avec les Bombers au Bourg Nord pour obtenir leur code secret.",
      "Entrer dans l'Observatoire par le repaire des Bombers (Bourg Est) et regarder la Lune au télescope.",
      "Ramasser la Larme de Lune tombée dans la plaine, devant l'Observatoire.",
      "L'échanger contre l'Acte de propriété au Peste Mojo marchand du Bourg Sud.",
      "La nuit du troisième jour, à minuit, monter au sommet de la Tour de l'Horloge par la fleur Mojo du Bourg Sud.",
      "Toucher Skull Kid avec une bulle Mojo, reprendre l'ocarina et jouer le Chant du Temps.",
      "De retour au premier jour, écouter le Marchand de masques : Chant de l'Apaisement et Masque Mojo."
    ],
    when: "Étape obligatoire. Tout ce que tu fais pendant ce premier cycle (sauf la magie de la Grande Fée) sera effacé.",
    tip: "Joue le Chant du Temps à l'envers pour ralentir le temps (indispensable), et chaque note en double pour avancer de douze heures."
  },
  {
    id: "m-p1", title: "Le Temple de Bois-Cascade", cat: "main", days: [1, 2, 3], from: 1, best: 1, key: true,
    reward: "Arc des Héros, Sonate de l'Éveil, Ode à l'Ordre, réceptacle de cœur",
    needs: ["Masque Mojo.", "Une bouteille (pour la princesse Mojo)."],
    steps: [
      "Au Marais du Sud, trouver Koume blessée dans les Bois Mystérieux ; la sorcière Kotake (boutique de potions) donne une bouteille de potion rouge pour la soigner.",
      "Avec la barque, rejoindre le Palais Mojo.",
      "Sous forme Mojo, traverser les jardins du palais jusqu'au singe emprisonné : il enseigne la Sonate de l'Éveil.",
      "Monter jusqu'à Bois-Cascade de fleur en fleur et jouer la Sonate sur la plateforme Mojo : le temple émerge.",
      "Dans le temple, obtenir l'Arc des Héros.",
      "Vaincre Odolwa ; les Géants enseignent l'Ode à l'Ordre.",
      "Capturer la princesse Mojo dans une bouteille et la ramener au roi Mojo (le singe est libéré)."
    ],
    when: "Premier temple. Le marais redevient propre : la balade en barque devient plus agréable et la Maison des Skulltulas plus accessible.",
    tip: "Après la princesse, le majordome Mojo propose une course dans le sanctuaire Mojo : c'est le Masque des Senteurs."
  },
  {
    id: "m-p2", title: "Le Temple du Pic des Neiges", cat: "main", days: [1, 2, 3], from: 2, best: 2, key: true,
    reward: "Masque de Goron, Berceuse de Goron, Arc de feu, Monocle de Vérité, réceptacle de cœur",
    needs: ["Arc des Héros (pour ouvrir le chemin de la montagne)."],
    steps: [
      "Atteindre le Village des Montagnes enneigé.",
      "Dans la grotte du Village Goron, obtenir le Monocle de Vérité.",
      "Avec le Monocle, suivre le fantôme de Darmani jusqu'au cimetière et jouer le Chant de l'Apaisement : Masque de Goron.",
      "Retrouver l'Aîné des Gorons pris dans une boule de neige et le dégeler avec de l'eau de source chaude : il enseigne le début de la berceuse.",
      "Jouer ce début au fils de l'Aîné, au Sanctuaire Goron : Berceuse de Goron complète.",
      "Endormir le Goron géant qui bloque le chemin du Pic des Neiges avec la Berceuse.",
      "Dans le temple, obtenir l'Arc de feu.",
      "Vaincre Goht : le printemps revient sur les montagnes."
    ],
    when: "Deuxième temple. Le printemps ouvre la course des Gorons et la forge : enchaîne-les sans rejouer le Chant du Temps."
  },
  {
    id: "m-p3", title: "Ouvrir la route du Ranch Romani", cat: "main", days: [1], time: "jour", from: 3, best: 3, key: true,
    reward: "Permis de Baril de poudre, Chant d'Epona",
    needs: ["Masque de Goron."],
    steps: [
      "Au Village Goron, réussir l'épreuve du Baril de poudre (forme Goron) pour obtenir le permis.",
      "Porter un Baril de poudre jusqu'au rocher qui bloque la Route du Lait et le faire exploser.",
      "Au ranch, le premier jour, s'entraîner au tir à l'arc avec Romani : elle enseigne le Chant d'Epona.",
      "Appeler Epona avec l'ocarina."
    ],
    when: "Sans Epona, impossible de sauter les barrières vers la Grande Baie et la route d'Ikana.",
    tip: "Le rocher se reforme à chaque cycle, mais Epona reste avec toi : il suffit de l'appeler."
  },
  {
    id: "m-p4", title: "Le Temple de la Grande Baie", cat: "main", days: [1, 2, 3], from: 4, best: 4, key: true,
    reward: "Masque de Zora, Grappin, Nouvelle Bossa-Nova, Arc de glace, réceptacle de cœur",
    needs: ["Chant d'Epona.", "Une bouteille (deux ou trois aident beaucoup)."],
    steps: [
      "Avec Epona, sauter la barrière de la plaine vers la Grande Baie.",
      "Pousser Mikau jusqu'au rivage et jouer le Chant de l'Apaisement : Masque de Zora.",
      "Sous forme Zora, infiltrer la Forteresse des Pirates et obtenir le Grappin.",
      "Récupérer les quatre œufs de Zora de la forteresse (en bouteille) et les déposer au Laboratoire marin.",
      "Photographier une pirate avec la boîte à photos, l'échanger au pêcheur contre l'hippocampe.",
      "Avec l'hippocampe, récupérer les trois œufs du Rocher du Pinacle.",
      "Les œufs éclosent : jouer la Nouvelle Bossa-Nova à Lulu au Cap Zora, la Tortue géante émerge.",
      "Dans le temple, obtenir l'Arc de glace.",
      "Vaincre Gyorg."
    ],
    when: "Troisième temple. Le Grappin est la clé de nombreuses quêtes annexes (Skulltulas de l'Océan, Ikana)."
  },
  {
    id: "m-p5", title: "Le Temple de la Tour de Pierre", cat: "main", days: [1, 2, 3], from: 5, best: 5, key: true,
    reward: "Élégie du Vide, Bouclier miroir, Arc de lumière, Masque du Géant, réceptacle de cœur",
    needs: ["Masque de Garo.", "Grappin.", "Arc de glace.", "Chant de la Tempête."],
    steps: [
      "Sauter avec Epona la barrière de la route d'Ikana, puis entrer dans la vallée au Grappin, Masque de Garo porté.",
      "Geler les Octoroks de la rivière avec l'Arc de glace pour atteindre la source.",
      "Jouer le Chant de la Tempête au fantôme de Sharp, dans la grotte : l'eau coule de nouveau.",
      "Sous le puits, obtenir le Bouclier miroir (Masque de Gibdo très utile).",
      "Au Château d'Ikana, vaincre le roi Igos : Élégie du Vide.",
      "Gravir la Tour de Pierre en plaçant tes statues (Élégie) sur les interrupteurs.",
      "Dans le temple, obtenir l'Arc de lumière et retourner la tour.",
      "Vaincre Twinmold avec le Masque du Géant."
    ],
    when: "Dernier temple, le plus long. Fais-le au début d'un cycle."
  },
  {
    id: "m-p6", title: "Arrêter la Lune", cat: "main", days: [3], time: "minuit", from: 6, best: 6, key: true,
    reward: "Fin du jeu",
    needs: ["Les quatre restes des boss (Odolwa, Goht, Gyorg, Twinmold)."],
    steps: [
      "La nuit du troisième jour, à minuit, monter au sommet de la Tour de l'Horloge.",
      "Jouer l'Ode à l'Ordre pour appeler les Géants.",
      "Sur la Lune, rejoindre l'enfant au Masque de Majora sous l'arbre.",
      "Vaincre Majora."
    ],
    when: "Fin du jeu. Les donjons des enfants de la Lune demandent des masques : plus tu en as, plus tu as de quarts de cœur."
  },

  /* ───────────── MASQUES ───────────── */
  {
    id: "mk-gfairy", title: "Masque de la Grande Fée", cat: "mask", days: [1, 2, 3], from: 1, best: 1,
    reward: "Masque de la Grande Fée",
    needs: ["Forme humaine (après le premier cycle)."],
    steps: [
      "Capturer de nouveau la fée perdue du Bourg-Horloge.",
      "La ramener sous forme humaine à la Grande Fée du Bourg Nord."
    ],
    when: "Dès le deuxième cycle. Le masque attire les fées perdues dans les temples : précieux pour la suite."
  },
  {
    id: "mk-bremen", title: "Masque de Brême", cat: "mask", days: [1, 2], time: "nuit", from: 1, best: 1,
    reward: "Masque de Brême",
    needs: ["Forme humaine."],
    steps: [
      "La nuit du premier ou du deuxième jour, retrouver Guru-Guru à la Blanchisserie.",
      "Écouter son histoire jusqu'au bout."
    ],
    when: "Facile et rapide. Indispensable pour le Masque de Lapin et le Masque du Chef de troupe."
  },
  {
    id: "mk-blast", title: "Masque d'Explosion", cat: "mask", days: [1], time: "minuit", from: 1, best: 1,
    reward: "Masque d'Explosion",
    needs: ["Épée ou arc."],
    steps: [
      "La nuit du premier jour, vers minuit, se poster au Bourg Nord.",
      "Frapper Sakon le voleur avant qu'il n'emporte le sac de la vieille dame.",
      "La vieille dame donne le Masque d'Explosion."
    ],
    when: "Premier jour seulement. En la sauvant, la boutique de bombes vend aussi le grand sac de bombes."
  },
  {
    id: "mk-kafei", title: "Masque de Kafei", cat: "mask", days: [1, 2], time: "jour", from: 1, best: 1,
    reward: "Masque de Kafei",
    needs: ["Forme humaine."],
    steps: [
      "En journée, entrer dans la résidence du maire (Bourg Est).",
      "Parler à Madame Aroma dans la pièce de droite : elle te confie le masque pour retrouver son fils."
    ],
    when: "Point de départ de la quête d'Anju et Kafei, la plus longue du jeu."
  },
  {
    id: "mk-kamaro", title: "Masque de Kamaro", cat: "mask", days: [1, 2, 3], time: "minuit – 6 h", from: 1, best: 1,
    reward: "Masque de Kamaro",
    needs: ["Chant de l'Apaisement."],
    steps: [
      "La nuit, après minuit, trouver le fantôme qui danse sur un rocher au nord de la Plaine de Termina.",
      "Lui jouer le Chant de l'Apaisement."
    ],
    when: "Rapide. Montre ensuite la danse aux sœurs Rosa au Bourg Ouest : quart de cœur."
  },
  {
    id: "mk-scents", title: "Masque des Senteurs", cat: "mask", days: [1, 2, 3], from: 1, best: 1,
    reward: "Masque des Senteurs",
    needs: ["Avoir ramené la princesse Mojo à son père."],
    steps: [
      "Parler au majordome Mojo, puis entrer dans le sanctuaire Mojo.",
      "Le suivre jusqu'au bout de la course sans le perdre."
    ],
    when: "Juste après Bois-Cascade, pendant le même cycle."
  },
  {
    id: "mk-truth", title: "Masque de Vérité", cat: "mask", days: [1, 2, 3], from: 1, best: 2,
    reward: "Masque de Vérité",
    needs: ["Forme Mojo, bombes, une bouteille.", "Haricots magiques et eau de source.", "Forme Goron, Grappin et Arc aident."],
    steps: [
      "Entrer dans la Maison des Skulltulas du Marais, près de la sortie du Palais Mojo.",
      "Récupérer les 30 Skulltulas d'or dans un seul cycle.",
      "Parler à l'homme libéré de la malédiction."
    ],
    when: "Après Bois-Cascade. Le masque permet de lire dans les pensées (Pierres Commères, chiens, animaux).",
    tip: "Les jetons sont perdus si tu joues le Chant du Temps avant de finir : prévois un cycle entier."
  },
  {
    id: "mk-gero", title: "Masque de Don Gero", cat: "mask", days: [1, 2, 3], from: 2, best: 2,
    reward: "Masque de Don Gero",
    needs: ["Masque de Goron."],
    steps: [
      "Au Sanctuaire Goron, faire tomber le lustre en roulant sous forme Goron : un aloyau de roche tombe.",
      "Le porter au Goron affamé du Village des Montagnes."
    ],
    when: "Pendant l'hiver du Pic des Neiges. Le masque sert à diriger la chorale des grenouilles (quart de cœur)."
  },
  {
    id: "mk-romani", title: "Masque de Romani", cat: "mask", days: [1, 2], from: 3, best: 3,
    reward: "Masque de Romani, bouteille de lait",
    needs: ["Arc des Héros.", "Chant d'Epona."],
    steps: [
      "Le jour 1, accepter d'aider Romani au ranch.",
      "La nuit 1, de 2 h 30 à 5 h 15, repousser les extraterrestres autour de la grange : Romani donne une bouteille de lait.",
      "Le jour 2 à 18 h, escorter la charrette de Cremia jusqu'au Bourg en repoussant les Frères Gorman.",
      "Cremia donne le Masque de Romani."
    ],
    when: "Un seul cycle, à faire dès que le ranch est accessible. Le masque ouvre le Bar Latte."
  },
  {
    id: "mk-bunny", title: "Masque de Lapin", cat: "mask", days: [1, 2, 3], from: 3, best: 3,
    reward: "Masque de Lapin",
    needs: ["Masque de Brême."],
    steps: [
      "Au Ranch Romani, entrer dans le poulailler et parler à Grog.",
      "Porter le Masque de Brême et faire marcher les poussins derrière toi jusqu'à ce qu'ils deviennent des coqs."
    ],
    when: "Pendant le passage au ranch. Le masque fait courir plus vite : très pratique pour la suite."
  },
  {
    id: "mk-circus", title: "Masque du Chef de troupe", cat: "mask", days: [1, 2], time: "22 h – 5 h", from: 4, best: 4,
    reward: "Masque du Chef de troupe",
    needs: ["Masque de Romani (pour entrer au Bar Latte).", "Formes Mojo, Goron et Zora."],
    steps: [
      "La nuit du premier ou du deuxième jour, entrer au Bar Latte avec le Masque de Romani.",
      "Parler à Toto, puis jouer la Ballade du Poisson-Rêve sous les formes humaine, Mojo, Goron et Zora.",
      "Gorman, ému, donne son masque."
    ],
    when: "Dès que tu as la forme Zora."
  },
  {
    id: "mk-garo", title: "Masque de Garo", cat: "mask", days: [1, 2], from: 3, best: 5, key: true,
    reward: "Masque de Garo",
    needs: ["Chant d'Epona.", "10 rubis."],
    steps: [
      "Aller à la piste des Frères Gorman, sur la Route du Lait.",
      "Gagner la course à cheval contre les deux frères."
    ],
    when: "Indispensable pour entrer dans la Vallée d'Ikana."
  },
  {
    id: "mk-captain", title: "Casque du Capitaine", cat: "mask", days: [1, 2, 3], time: "nuit", from: 3, best: 5, key: true,
    reward: "Casque du Capitaine",
    needs: ["Chant d'Epona.", "Sonate de l'Éveil."],
    steps: [
      "La nuit, au Cimetière d'Ikana, jouer la Sonate de l'Éveil devant le squelette géant du capitaine Keeta.",
      "Le battre à la course jusqu'à la grille, en éliminant les squelettes qui le suivent."
    ],
    when: "Avant Ikana : le casque donne des ordres aux squelettes du cimetière (Chant de la Tempête)."
  },
  {
    id: "mk-stone", title: "Masque de Pierre", cat: "mask", days: [1, 2, 3], from: 3, best: 5,
    reward: "Masque de Pierre",
    needs: ["Monocle de Vérité.", "Une potion rouge (ou bleue)."],
    steps: [
      "Sur la route d'Ikana, repérer le soldat invisible Shiro au Monocle de Vérité.",
      "Lui donner une potion."
    ],
    when: "Rend presque invisible : idéal pour la Forteresse des Pirates si tu ne l'as pas encore faite."
  },
  {
    id: "mk-gibdo", title: "Masque de Gibdo", cat: "mask", days: [1, 2, 3], from: 5, best: 5,
    reward: "Masque de Gibdo",
    needs: ["Avoir rétabli la rivière d'Ikana (Chant de la Tempête à Sharp).", "Chant de l'Apaisement."],
    steps: [
      "La boîte à musique de la maison de Pamela tourne de nouveau : attendre que Pamela sorte.",
      "Se glisser dans la maison et descendre à la cave.",
      "Jouer le Chant de l'Apaisement à son père à moitié momifié."
    ],
    when: "Sous le Puits d'Ikana, le masque permet de parler aux Gibdos (Bouclier miroir)."
  },
  {
    id: "mk-keaton", title: "Masque du Renard", cat: "mask", days: [3], time: "après-midi", from: 1, best: 5,
    reward: "Masque du Renard, Lettre exprès pour Maman",
    needs: ["Avoir rencontré Kafei (quête d'Anju et Kafei, jour 2)."],
    steps: [
      "Le jour 3, dans l'après-midi, entrer dans l'arrière-boutique de la Boutique de curiosités.",
      "Le propriétaire donne le Masque du Renard et la lettre exprès de Kafei."
    ],
    when: "Fait naturellement partie de la quête d'Anju et Kafei."
  },
  {
    id: "mk-postman", title: "Casquette du Facteur", cat: "mask", days: [3], time: "soir", from: 1, best: 5,
    reward: "Casquette du Facteur",
    needs: ["Lettre exprès pour Maman (Masque du Renard)."],
    steps: [
      "Le jour 3, confier la lettre exprès au facteur, au bureau de poste.",
      "Il la livre à Madame Aroma, puis, libéré de son service, te donne sa casquette avant de fuir le Bourg."
    ],
    when: "Variante de fin de quête : si tu livres la lettre toi-même à Madame Aroma, tu obtiens une bouteille de Château Romani à la place. Fais les deux sur deux cycles."
  },
  {
    id: "mk-couple", title: "Anju et Kafei", cat: "mask", days: [1, 2, 3], from: 5, best: 5,
    reward: "Masque des Amoureux",
    needs: ["Masque de Kafei.", "Accès au repaire de Sakon (Vallée d'Ikana)."],
    steps: [
      "Jour 1, après 13 h : obtenir la clé de chambre de l'Auberge (réservation au nom de Link).",
      "Jour 1 : parler à Anju avec le Masque de Kafei, puis la retrouver à 23 h 30 dans la cuisine : Lettre pour Kafei.",
      "Poster la lettre dans une boîte aux lettres avant la fin du jour 1.",
      "Jour 2 après-midi : sonner à la porte de la Blanchisserie et rencontrer Kafei : Pendentif des souvenirs.",
      "Jour 2 : remettre le pendentif à Anju, qui promet d'attendre.",
      "Jour 3 après-midi : à la Boutique de curiosités, récupérer le Masque du Renard et la lettre exprès.",
      "Jour 3 vers 18 h : au repaire de Sakon, aider Kafei à reprendre le Masque du Soleil.",
      "Nuit 3 : attendre avec Anju dans sa chambre de l'Auberge jusqu'à l'aube. Kafei arrive : Masque des Amoureux."
    ],
    when: "Un cycle entier à y consacrer, une fois Ikana accessible. Le Carnet des Bombers t'aide à suivre les horaires.",
    tip: "Joue le Chant du Temps inversé avant de commencer : les horaires sont serrés le jour 3."
  },
  {
    id: "mk-allnight", title: "Masque de Nuit Blanche", cat: "mask", days: [3], time: "22 h – 5 h", from: 4, best: 4,
    reward: "Masque de Nuit Blanche",
    needs: ["Avoir sauvé la vieille dame (Masque d'Explosion) dans le même cycle.", "Bourse de géant (500 rubis)."],
    steps: [
      "Sauver la vieille dame de Sakon la nuit 1.",
      "La nuit du jour 3, acheter le masque à la Boutique de curiosités (500 rubis)."
    ],
    when: "Dès que tu as la Bourse de géant. Le masque permet d'écouter les histoires de la grand-mère (deux quarts de cœur)."
  },
  {
    id: "mk-fd", title: "Masque du Dieu Démon", cat: "mask", days: [3], from: 6, best: 6,
    reward: "Masque du Dieu Démon",
    needs: ["Les 20 masques ordinaires (hors Mojo, Goron, Zora)."],
    steps: [
      "Sur la Lune, donner des masques à chacun des quatre enfants et terminer leurs donjons.",
      "Parler à l'enfant au Masque de Majora : il propose de jouer à un autre jeu."
    ],
    when: "Tout à la fin. Rend le combat final beaucoup plus simple."
  },

  /* ───────────── CHANTS ───────────── */
  {
    id: "so-soaring", title: "Chant de l'Envol", cat: "song", days: [1, 2, 3], from: 1, best: 1, key: true,
    reward: "Chant de l'Envol (téléportation vers les statues de hibou)",
    needs: ["Forme Mojo."],
    steps: [
      "Au Marais du Sud, monter vers l'entrée de Bois-Cascade.",
      "Le hibou Kaepora Gaebora, posé sur une stèle près de la cascade, enseigne le Chant de l'Envol."
    ],
    when: "Le plus tôt possible. Frappe chaque statue de hibou à l'épée pour pouvoir t'y téléporter.",
    tip: "Jouer le chant devant une statue permet aussi de sauvegarder sans revenir au premier jour."
  },
  {
    id: "so-storms", title: "Chant de la Tempête", cat: "song", days: [1], time: "nuit", from: 3, best: 5, key: true,
    reward: "Chant de la Tempête",
    needs: ["Casque du Capitaine."],
    steps: [
      "La nuit du premier jour, au Cimetière d'Ikana, porter le Casque du Capitaine et ordonner aux squelettes d'ouvrir la tombe.",
      "Vaincre le Hache-Viande sous la tombe.",
      "Le fantôme de Flat enseigne le Chant de la Tempête."
    ],
    when: "Indispensable pour rétablir la rivière d'Ikana."
  },

  /* ───────────── ÉQUIPEMENT ───────────── */
  {
    id: "g-wallet", title: "Grande bourse", cat: "gear", days: [1, 2, 3], from: 1, best: 1,
    reward: "Grande bourse (200 rubis)",
    needs: ["Forme humaine."],
    steps: [
      "À la banque du Bourg Ouest, déposer un total de 200 rubis.",
      "Le banquier donne la Grande bourse."
    ],
    when: "Le plus tôt possible : l'argent déposé à la banque est conservé d'un cycle à l'autre.",
    tip: "Avant chaque Chant du Temps, dépose tes rubis à la banque. À 1000 rubis déposés : quart de cœur."
  },
  {
    id: "g-quiver", title: "Carquois", cat: "gear", days: [1, 2, 3], from: 1, best: 2,
    reward: "Grand carquois (40), puis Carquois géant (50)",
    needs: ["Arc des Héros."],
    steps: [
      "Au stand de tir du Bourg Est, réaliser un score parfait : Grand carquois.",
      "Au stand de tir du Marais, battre le record : Carquois géant."
    ],
    when: "Dès que tu as l'arc. Indispensable pour les boss suivants."
  },
  {
    id: "g-sword", title: "Épée Dorée", cat: "gear", days: [1, 2, 3], from: 2, best: 2,
    reward: "Épée Rasoir, puis Épée Dorée",
    needs: ["Goht vaincu (printemps).", "100 rubis.", "Poussière d'or (course des Gorons)."],
    steps: [
      "À la forge de la Montagne, au printemps, confier ton épée et 100 rubis le jour 1.",
      "Revenir le jour 2 : Épée Rasoir.",
      "Gagner la course des Gorons pour obtenir la Poussière d'or.",
      "Rapporter l'Épée Rasoir et la Poussière d'or au forgeron : Épée Dorée le lendemain."
    ],
    when: "Dans le cycle où tu bats Goht. L'Épée Rasoir s'use et disparaît au Chant du Temps ; l'Épée Dorée est permanente."
  },
  {
    id: "g-giantwallet", title: "Bourse de géant", cat: "gear", days: [1, 2, 3], from: 5, best: 5,
    reward: "Bourse de géant (500 rubis)",
    needs: ["Bombes, Grappin, Arc de feu.", "Casque du Capitaine."],
    steps: [
      "Faire exploser l'entrée de la Maison des Skulltulas de l'Océan, à la Grande Baie.",
      "Récupérer les 30 Skulltulas d'or dans un seul cycle.",
      "Parler à l'homme de la maison le jour 1 pour obtenir la bourse."
    ],
    when: "Après avoir obtenu le Casque du Capitaine. Plus tard dans le cycle, il ne donne que des rubis."
  },

  /* ───────────── QUÊTES ANNEXES ───────────── */
  {
    id: "s-goronrace", title: "Course des Gorons", cat: "side", days: [1, 2, 3], from: 2, best: 2,
    reward: "Bouteille de Poussière d'or",
    needs: ["Goht vaincu (printemps).", "Baril de poudre."],
    steps: [
      "Faire exploser le rocher qui bloque l'accès à la piste, près du Village des Montagnes.",
      "Gagner la course sous forme Goron."
    ],
    when: "Dans le cycle où tu bats Goht : c'est une des six bouteilles du jeu."
  },
  {
    id: "s-beaver", title: "Course des castors", cat: "side", days: [1, 2, 3], from: 4, best: 4,
    reward: "Une bouteille, puis un quart de cœur",
    needs: ["Masque de Zora.", "Grappin."],
    steps: [
      "Au-dessus de la cascade de la Grande Baie, défier le petit castor : bouteille.",
      "Battre ensuite les deux frères ensemble : quart de cœur."
    ],
    when: "Après la Forteresse des Pirates."
  },
  {
    id: "s-dampe", title: "Dampé et le Grand Esprit", cat: "side", days: [3], time: "nuit", from: 3, best: 5,
    reward: "Une bouteille",
    needs: ["Chant d'Epona."],
    steps: [
      "La nuit du troisième jour, au Cimetière d'Ikana, entrer dans la tombe ouverte.",
      "Guider Dampé pour qu'il creuse aux bons endroits, puis vaincre le Grand Esprit."
    ],
    when: "Une des six bouteilles du jeu."
  },
  {
    id: "s-aroma-bottle", title: "La bouteille de Madame Aroma", cat: "side", days: [3], time: "soir", from: 1, best: 5,
    reward: "Bouteille de Château Romani",
    needs: ["Lettre exprès pour Maman.", "Masque de Romani (pour entrer au Bar Latte)."],
    steps: [
      "Le soir du jour 3, apporter toi-même la lettre exprès à Madame Aroma, au Bar Latte."
    ],
    when: "Une des six bouteilles. Incompatible avec la Casquette du Facteur dans le même cycle."
  },

  /* ───────────── MINI-JEUX ───────────── */
  {
    id: "mi-deku", title: "Parcours des Mojo", cat: "mini", days: [1, 2, 3], from: 1, best: 1,
    reward: "Quart de cœur",
    needs: ["Forme Mojo."],
    steps: [
      "Au Bourg Nord, gagner le parcours des Peste Mojo le jour 1.",
      "Le gagner aussi le jour 2.",
      "Le gagner encore le jour 3."
    ],
    when: "Sur un seul cycle, à combiner avec autre chose."
  },
  {
    id: "mi-honey", title: "Honey & Darling", cat: "mini", days: [1, 2, 3], from: 1, best: 2,
    reward: "Quart de cœur",
    needs: ["Arc des Héros, bombes."],
    steps: [
      "Au Bourg Est, gagner l'épreuve du jour 1.",
      "Gagner celle du jour 2.",
      "Gagner celle du jour 3."
    ],
    when: "Sur un seul cycle."
  },
  {
    id: "mi-postman", title: "Le chronomètre du facteur", cat: "mini", days: [1, 2], time: "nuit", from: 1, best: 3,
    reward: "Quart de cœur",
    needs: ["Masque de Lapin (pour voir le chronomètre défiler)."],
    steps: [
      "La nuit, au bureau de poste, arrêter le compteur exactement sur 10,00 secondes."
    ],
    when: "Plus simple avec le Masque de Lapin."
  },
  {
    id: "mi-dog", title: "Course des chiens", cat: "mini", days: [1, 2, 3], time: "jour", from: 1, best: 2,
    reward: "Quart de cœur (150 rubis gagnés en un pari)",
    needs: ["Masque de Vérité."],
    steps: [
      "Au Ranch Romani, chez Mamamu Yan, soulever les chiens avec le Masque de Vérité pour trouver le plus motivé.",
      "Parier 50 rubis sur lui et gagner."
    ],
    when: "Après le Masque de Vérité."
  },
  {
    id: "mi-chest", title: "Boutique au trésor", cat: "mini", days: [1, 2, 3], from: 2, best: 2,
    reward: "Quart de cœur",
    needs: ["Masque de Goron."],
    steps: [
      "Au Bourg Est, jouer à la Boutique au trésor sous forme Goron.",
      "Atteindre le coffre avant la fin du temps imparti."
    ],
    when: "Le labyrinthe change selon la forme : celle de Goron donne le quart de cœur."
  }
];

/*
 * Compteurs de la vue Collections.
 *   id       clé dans le stockage local (ne pas renommer)
 *   total    maximum
 *   rewards  paliers facultatifs { at, label }
 *   note     texte d'aide
 */
const COUNTERS = [
  {
    id: "hearts", title: "Quarts de cœur", total: 52,
    note: "52 quarts de cœur et 4 réceptacles de boss : on atteint 20 cœurs. Les quarts et réceptacles sont conservés au Chant du Temps."
  },
  {
    id: "notebook", title: "Carnet des Bombers", total: 20,
    note: "Rubans du carnet : chacun marque une personne aidée. Le carnet aide à retrouver les horaires des rendez-vous."
  },
  {
    id: "fairies-woodfall", title: "Fées perdues — Bois-Cascade", total: 15,
    rewards: [{ at: 15, label: "Attaque tournoyante améliorée" }],
    note: "Les fées se perdent au Chant du Temps si tu ne les rapportes pas à la Grande Fée de Bois-Cascade."
  },
  {
    id: "fairies-snowhead", title: "Fées perdues — Pic des Neiges", total: 15,
    rewards: [{ at: 15, label: "Magie doublée" }]
  },
  {
    id: "fairies-greatbay", title: "Fées perdues — Grande Baie", total: 15,
    rewards: [{ at: 15, label: "Défense doublée" }]
  },
  {
    id: "fairies-ikana", title: "Fées perdues — Tour de Pierre", total: 15,
    rewards: [{ at: 15, label: "Épée de la Grande Fée" }]
  },
  {
    id: "skulls-swamp", title: "Skulltulas d'or — Marais", total: 30,
    rewards: [{ at: 30, label: "Masque de Vérité" }],
    note: "Les 30 dans un même cycle, sinon tout est à refaire."
  },
  {
    id: "skulls-ocean", title: "Skulltulas d'or — Océan", total: 30,
    rewards: [{ at: 30, label: "Bourse de géant (le jour 1)" }],
    note: "Les 30 dans un même cycle, sinon tout est à refaire."
  }
];

/* Les 24 masques : chacun est terminé quand la quête liée l'est. */
const MASKS = [
  { name: "Masque Mojo", quest: "m-p0" },
  { name: "Masque de Goron", quest: "m-p2" },
  { name: "Masque de Zora", quest: "m-p4" },
  { name: "Masque du Dieu Démon", quest: "mk-fd" },
  { name: "Masque de Vérité", quest: "mk-truth" },
  { name: "Masque de Kafei", quest: "mk-kafei" },
  { name: "Masque de Nuit Blanche", quest: "mk-allnight" },
  { name: "Masque de Lapin", quest: "mk-bunny" },
  { name: "Masque du Renard", quest: "mk-keaton" },
  { name: "Masque de Garo", quest: "mk-garo" },
  { name: "Masque de Romani", quest: "mk-romani" },
  { name: "Masque du Chef de troupe", quest: "mk-circus" },
  { name: "Casquette du Facteur", quest: "mk-postman" },
  { name: "Masque des Amoureux", quest: "mk-couple" },
  { name: "Masque de la Grande Fée", quest: "mk-gfairy" },
  { name: "Masque de Gibdo", quest: "mk-gibdo" },
  { name: "Masque de Don Gero", quest: "mk-gero" },
  { name: "Masque de Kamaro", quest: "mk-kamaro" },
  { name: "Casque du Capitaine", quest: "mk-captain" },
  { name: "Masque de Pierre", quest: "mk-stone" },
  { name: "Masque de Brême", quest: "mk-bremen" },
  { name: "Masque d'Explosion", quest: "mk-blast" },
  { name: "Masque des Senteurs", quest: "mk-scents" },
  { name: "Masque du Géant", quest: "m-p5" }
];
