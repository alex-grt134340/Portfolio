/* ==========================================================================
   ANIMATION AU SCROLL (INTERSECTION OBSERVER)
   ========================================================================== */
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll('.soft-skills li, .hard-skills li').forEach(el => {
    el.classList.add('scroll-animate');
    observer.observe(el);
});

/* ==========================================================================
   DICTIONNAIRE DE TRADUCTION (FR / EN)
   ========================================================================== */
const translations = {
    fr: {
        "nav-home": "Accueil",
        "nav-about": "À propos de moi",
        "nav-skills": "Compétences",
        "nav-projects": "Projets",
        "nav-contact": "Contact",

        "hero-title": "Étudiante en développement de jeux vidéo",
        "cv-button": "Télécharger mon CV",

        "about-heading": "À propos",
        "about-intro": "Étudiante passionnée par la création de jeux vidéo.",
        "label-location": "Emplacement :",
        "val-location": "Nîmes, France (ouverte à une mutation)",
        "label-birth": "Naissance :",
        "val-birth": "4 janvier 2005 (21 ans)",
        "label-role": "Rôle :",
        "val-role": "Programmeuse Gameplay / Network",
        "label-specialty": "Spécialité :",
        "val-specialty": "Unity, Network",

        "status-heading": "Ma situation actuelle",
        "status-intro": "Étudiante en programmation spécialisée dans le jeu vidéo.",
        "status-p1": "Actuellement en 4ème et dernière année de programmation dans le jeu vidéo à l'école <strong class=\"tech-accent\">Creajeux</strong> à Nîmes en France.",
        "status-p2": "À la recherche d'un <strong class=\"tech-accent\">stage d'une durée de 3 à 6 mois</strong> dans le domaine de la programmation de jeu vidéo.",
        
        "about-me-title": "À propos de moi",
        "about-me-lead": "Passionnée par le code et animée par une grande curiosité technique, je me définis comme une développeuse persévérante, toujours désireuse d'apprendre et d'évoluer.",
        "about-me-p1": "Ce parcours m'a permis d'allier créativité et logique mathématique. J'aime particulièrement m'investir dans des projets de jeux vidéo stimulants qui me poussent à sortir de ma zone de confort. Relever des défis complexes est pour moi le meilleur moyen de dépasser mes limits et de concevoir des systèmes dont je suis fière.",
        "about-me-p2": "Mon objectif principal est de concevoir des expériences interactives fluides, immersives et agréables à jouer. Tout ce processus de création de la première ligne de code au résultat final me passionne et me pousse à donner le meilleur de moi-même pour offrir la meilleure expérience possible aux joueurs.",
        
        "passions-title": "Mes passions",
        "passions-intro": "En dehors de la programmation, mon esprit reste constamment tourné vers la découverte et la création :",
        "passion-games": "<span class=\"passion-tag\">Jeux vidéo</span> : Passionnée de gaming, j'explore tous les genres : du dynamisme compétitif d'<strong>Overwatch</strong> à l'ambiance plus calme de <strong>Cult of the Lamb</strong>.",
        "passion-boardgames": "<span class=\"passion-tag\">Jeux de société</span> : Joueuse régulière de <strong>Magic: The Gathering</strong>, j'apprécie la stratégie et la réflexion autour du deckbuilding.",
        "passion-reading": "<span class=\"passion-tag\">Lecture</span> : Grande dévoreuse de récits, qu'il s'agisse de romans, de bandes dessinées ou de mangas.",
        "passion-creative": "<span class=\"passion-tag\">Créativité</span> : Curieuse d'apprendre dans d'autres domaines artistiques et manuels, je m'intéresse de près à la photographie et à la pâtisserie.",
        
        "now-title": "Actuellement et après",
        "now-lead": "Je suis actuellement en 4ème et dernière année de spécialisation en programmation de jeux vidéo à l'école <strong class=\"tech-accent\">Creajeux</strong> (Nîmes, France).",
        "now-p1": "Dans le cadre de cette fin de cursus, je consacre mon année à la réalisation de notre <strong>projet de soutenance</strong>, un jalon majeur que nous présenterons devant un jury de professionnels en fin d'année.",
        
        "now-badge": "Objectif",
        "now-goal": "À la recherche d'un <strong>stage de 3 à 6 mois</strong> pour concrétiser ma formation et intégrer une équipe de développement.",
        
        "tech-skills-title": "Compétences Techniques",
        "cat-languages": "Langages",
        "cat-engines": "Moteurs, frameworks & services",
        "cat-tools": "Outils de Développement",

        "soft-skills-title": "Savoir-être (Soft Skills)",
        "ss-communication": "Communication",
        "ss-teamwork": "Travail d'équipe",
        "ss-eager": "Soif d'apprendre",
        "ss-feedback": "À l'écoute du feedback",
        "ss-ownership": "Autonomie & Responsabilité",

        "hard-skills-title": "Compétences Métier (Hard Skills)",
        "hs-programming": "Programmation",
        "hs-engines": "Moteurs de jeu",
        "hs-ui": "Interface Utilisateur (UI)",
        "hs-optimization": "Optimisation",
        "hs-debugging": "Débogage",
        "hs-network": "Réseau (Network)",

        "projects-title": "Mes projets",
        "project-projetdesoutenance-title": "Projet de soutenance",
        "project-afterimpact-desc": "Projet de jeu réalisé avec Unity.",
        "project-horrortycoon-desc": "Projet de jeu vidéo réalisé avec Unity.",
        "project-athaza-desc": "Projet de jeu vidéo réalisé avec SFML.",
        "project-portfolio-desc": "Création de mon portfolio personnel.",
        "project-destinyofgobo-desc": "Projet de jeu vidéo.",
        "project-projetdesoutenance-desc": "Projet de soutenance.",

        "contact-main-title": "Me contacter",

        "contact-subtitle": "Vous pouvez m'envoyer un message directement via ce formulaire ou me retrouver sur les réseaux sociaux :",
        "form-name-label": "Nom / Prénom :",
        "form-name-ph": "Votre nom",
        "form-email-label": "Votre Email :",
        "form-email-ph": "nom@exemple.com",
        "form-subject-label": "Sujet :",
        "form-subject-ph": "Sujet de votre message",
        "form-message-label": "Message :",
        "form-message-ph": "Écrivez votre message ici...",
        "form-submit-btn": "Envoyer le message",

        "contact-email-label": "Email :",
        "contact-linkedin-link": "Mon profil LinkedIn",
        "contact-discord-link": "Mon profil Discord",
        "contact-github-link": "Mon profil GitHub",

       // Projet After Impact
        "ai-intro": "Jeu de survie développé sur Unity.",
        "ai-overview": "Dans un univers post-apocalyptique, le joueur doit gérer ses ressources et ses constantes vitales pour survivre face aux éléments et au temps qui passe.",
        "ai-itch-btn": "Jouer / Voir sur itch.io",
        "ai-contrib-title": "Mes réalisations techniques",
        "ai-feat-inventory-title": "Gestionnaire d'inventaire",
        "ai-feat-inventory-desc": "Conception du système de stockage, de ramassage, d'utilisation et de gestion de la grille d'inventaire à la the Forest.",
        "ai-feat-inventory-p1": "Grille d'emplacements dynamique avec empilement des objets identiques",
        "ai-feat-inventory-p2": "Ramassage d'objets dans le monde et ajout automatique à l'inventaire",
        "ai-feat-inventory-p3": "Interaction directe (consommer, équiper, jeter) depuis l'interface",
        "ai-feat-inventory-caption": "La grille d'inventaire en jeu",
        "ai-feat-stats-title": "Système d'états et de survie",
        "ai-feat-stats-desc": "Développement de la logique de survie gérant le froid, la faim et la soif en fonction de l'environnement.",
        "ai-feat-stats-p1": "Jauges de faim, de froid et de soif évoluant en temps réel",
        "ai-feat-stats-p2": "Impact direct de l'environnement sur le froid (météo, abri)",
        "ai-feat-stats-p3": "Augementation des différentes jaugent en fonction des actions du joueur (le frois remonte si il est à côté d'un feu)",
        "ai-feat-stats-caption": "Les jauges de survie du joueur",
        "ai-feat-time-title": "Gestion du temps et cycle temporel",
        "ai-feat-time-desc": "Mise en place d'un système jour/nuit relier au cyle visuel.",
        "ai-feat-time-p1": "Horloge de jeu synchronisée avec un cycle jour / nuit",
        "ai-feat-time-p2": "Influence directe de l'heure et du climat sur les mécaniques de survie et les stats du joueur",
        "ai-feat-time-caption": "Le cycle jour / nuit",
        
        // Athaza
        "at-intro": "Jeu d'extraction et de survie développé avec SFML.",
        "at-overview": "Athaza est un jeu de survie et d’exploration post-apocalyptique. Restez sur vos gardes, car les humains ne sont pas les seules menaces de ce monde.",
        "at-itch-btn": "Jouer / Voir sur itch.io",
        "at-contrib-title": "Mes réalisations techniques",
        "at-feat-QG-title": "Conception et architecture du QG",
        "at-feat-QG-desc": "Création et gestion des mécaniques de la base du joueur.",
        "ai-feat-QG-p1": "Mise en place de l'architecture logicielle pour simplifier l'intégration et le bon fonctionnement des modules de la base",
        "ai-feat-QG-p2": "Développement d'un système de jardinage pour produire des ressources alimentaires et permettre au joueur de se soigner",
        "ai-feat-QG-p3": "Implémentation d'un système d'apparition (spawning) progressif des PNJ dans la base au fil de l'aventure",
        "at-feat-QG-caption": "La base du joueur",
        "at-feat-npc-title": "Comportement et logique des PNJ",
        "at-feat-npc-desc": "Développement des comportements et des logiques pour les différents types de PNJ.",
        "at-feat-npc-p1": "Gestion des différents rôles et types de PNJ présents dans le jeu",
        "at-feat-npc-p2": "Intégration et synchronisation des animations des PNJ",
        "at-feat-npc-p3": "Déclenchement contextuel de leur apparition au bon moment de la partie",
        "at-feat-npc-caption": "Les PNJ en jeu",
        "at-feat-txt-title": "Gestion des textes et des dialogues",
        "at-feat-txt-desc": "Création et gestion des systèmes textuels du jeu.",
        "at-feat-txt-p1": "Mise en place d'un système de tutoriel contextuel réagissant aux actions du joueur",
        "at-feat-txt-p2": "Affichage des messages informatifs et narratifs pour guider l'exploration",
        "at-feat-txt-caption": "Interface textuelle",

        // Horror Tycoon
        "horrortycoon-intro": "Jeu de gestion (tycoon) sur le thème de l'horreur, développé sur Unity pour mobiles.",
        "horrortycoon-overview": "Un jeu inspiré des parcs de type tycoon, revisité dans une ambiance effrayante et immersive.",
        "horrortycoon-itch-btn": "Jouer / Voir sur itch.io",
        "horrortycoon-contrib-title": "Mes réalisations techniques",
        "horrortycoon-feat-shop-title": "Conception de la boutique (Shop)",
        "horrortycoon-feat-shop-desc": "Création et gestion des mécaniques d'achat et de placement.",
        "horrortycoon-feat-shop-p1": "Mise à jour dynamique de la boutique en fonction des fonds du joueur",
        "horrortycoon-feat-shop-p2": "Liaison entre la boutique et les bâtiments pour permettre un retour fluide vers l'écran principal lors de l'achat et du placement",
        "horrortycoon-feat-shop-p3": "Optimisation de l'ergonomie et de la navigation tactile adaptées aux supports mobiles",
        "horrortycoon-feat-shop-caption": "La boutique en jeu",
        "horrortycoon-feat-UI-title": "Interface utilisateur (UI) et statistiques",
        "horrortycoon-feat-UI-desc": "Intégration de l'UI pour transmettre clairement les informations et données du joueur.",
        "horrortycoon-feat-UI-p1": "Mise en place du système d'économie (argent) et d'un indice de popularité du parc basé sur la satisfaction des visiteurs",
        "horrortycoon-feat-UI-p2": "Conception de l'UX pour assurer un suivi visuel clair des performances de la structure",
        "horrortycoon-feat-UI-caption": "Interface utilisateur",

        // Destiny of Gobo
        "dg-intro": "Jeu d'exploration et de combat développé avec SFML.",
        "dg-overview": "Aventure en 2D centrée sur l'exploration de donjons et les combats tactiques.",
        "dg-itch-btn": "Jouer / Voir sur itch.io",
        "dg-contrib-title": "Mes réalisations techniques",
        "dg-feat-inventory-title": "Conception de l'inventaire",
        "dg-feat-inventory-desc": "Création et gestion complète du système d'inventaire.",
        "dg-feat-inventory-p1": "Mise en place d'un inventaire en grille accueillant les objets récupérés en cours de partie",
        "dg-feat-inventory-p2": "Mise à jour en temps réel de l'affichage lors de la suppression ou de l'utilisation d'objets",
        "dg-feat-inventory-caption": "L'inventaire",
        "dg-feat-menu-title": "Menu principal et options",
        "dg-feat-menu-desc": "Implémentation du menu et des paramètres de configuration.",
        "dg-feat-menu-p1": "Création de l'interface visuelle du menu et des écrans d'options",
        "dg-feat-menu-p2": "Intégration d'un système de gestion audio pour contrôler les volumes",
        "dg-feat-menu-p3": "Programmation des interactions et fonctionnalités de chaque bouton",
        "dg-feat-menu-caption": "Menu et options",

        // Projet de soutenance
        "pp-intro": "Développement d'une infrastructure réseau complète et autonome pour le projet de fin d'études.",
        "pp-overview": "Conception technique approfondie de la couche multijoueur et de la synchronisation des données.",
        "pp-contrib-title": "Mes futures réalisations : ",
        "pp-realisations-p1" : "API Backend (PlayFab-like) : Développement d’une API sur mesure robuste sous ASP.NET Core pour la gestion sécurisée des profils (JWT) et des données de jeu.",
        "pp-realisations-p2" : "Matchmaking : Algorithme de mise en relation des joueurs basé sur la latence et les compétences via un service d'arrière-plan synchrone.",
        "pp-realisations-p3" : "Gestion des Lobbies & Instances : Système de synchronisation en temps réel des salons d'attente et du cycle de vie des sessions de jeu.",
        "pp-realisations-p4" : "Chat temps réel : Intégration d’une messagerie instantanée bidirectionnelle à faible latence optimisée avec SignalR.",
        
        // Portfolio
        "portfolio-intro": "Développement de mon site portfolio personnel.",
        "portfolio-overview": "Vitrine interactive présentant mon parcours et mes projets de jeux vidéo.",
        "portfolio-contrib-title": "Réalisations",
        "portfolio-feat-dev-title": "Intégration et design",
        "portfolio-feat-dev-desc": "Création d'un design épuré, responsive et multilingue.",
        "portfolio-feat-dev-p1": "Structure HTML/CSS moderne avec support bilingue (FR/EN)",
        "portfolio-feat-dev-p2": "Optimisation pour la lisibilité sur tous types d'écrans",

    },
    en: {
        "nav-home": "Home",
        "nav-about": "About me",
        "nav-skills": "Skills",
        "nav-projects": "Projects",
        "nav-contact": "Contact",

        "hero-title": "Game Development Student",
        "cv-button": "Download my Resume",

        "about-heading": "About",
        "about-intro": "Student passionate about video game creation.",
        "label-location": "Location:",
        "val-location": "Nîmes, France (open to relocation)",
        "label-birth": "Birth:",
        "val-birth": "January 4, 2005 (21 years old)",
        "label-role": "Role:",
        "val-role": "Gameplay / Network Programmer",
        "label-specialty": "Specialty:",
        "val-specialty": "Unity, Network",

        "status-heading": "Current Situation",
        "status-intro": "Student in programming specialized in video games.",
        "status-p1": "Currently in my 4th and final year of video game programming at <strong class=\"tech-accent\">Creajeux</strong> in Nîmes, France.",
        "status-p2": "Looking for a <strong class=\"tech-accent\">3 to 6-month internship</strong> in video game programming.",
        
        "about-me-title": "About Me",
        "about-me-lead": "Passionate about coding and driven by a strong technical curiosity, I define myself as a persistent developer, always eager to learn and evolve.",
        "about-me-p1": "This journey has allowed me to combine creativity and mathematical logic. I particularly enjoy working on challenging video game projects that push me out of my comfort zone. Overcoming complex technical challenges is the best way for me to exceed my limits and design systems I'm proud of.",
        "about-me-p2": "My main goal is to design smooth, immersive, and enjoyable interactive experiences. The entire creation process, from the first line of code to the final result, fascinates me and drives me to give my best to deliver the best possible player experience.",
        
        "passions-title": "My Passions",
        "passions-intro": "Outside of programming, my mind remains constantly turned toward discovery and creativity:",
        "passion-games": "<span class=\"passion-tag\">Video Games</span>: Passionate gamer, I explore all genres: from the competitive dynamism of <strong>Overwatch</strong> to the calmer vibe of <strong>Cult of the Lamb</strong>.",
        "passion-boardgames": "<span class=\"passion-tag\">Board Games</span>: Regular player of <strong>Magic: The Gathering</strong>, I enjoy deckbuilding strategy and critical thinking.",
        "passion-reading": "<span class=\"passion-tag\">Reading</span>: Avid story consumer, whether it's novels, comics, or manga.",
        "passion-creative": "<span class=\"passion-tag\">Creativity</span>: Curious to learn in other artistic and manual fields, I'm deeply interested in photography and baking.",
        
        "now-title": "Current Status & Next Steps",
        "now-lead": "I am currently in my 4th and final year specializing in video game programming at <strong class=\"tech-accent\">Creajeux</strong> school (Nîmes, France).",
        "now-p1": "As part of my final year, I am dedicating my time to our <strong>graduation project</strong>, a major milestone that we will present to a panel of industry professionals at the end of the year.",
        
        "now-badge": "Goal",
        "now-goal": "Looking for a <strong>3 to 6-month internship</strong> to finalize my education and join a development team.",
        
        "tech-skills-title": "Technical Skills",
        "cat-languages": "Languages",
        "cat-engines": "Engines, Frameworks & Services",
        "cat-tools": "Development Tools",

        "soft-skills-title": "Soft Skills",
        "ss-communication": "Communication",
        "ss-teamwork": "Teamwork",
        "ss-eager": "Eager to Learn",
        "ss-feedback": "Feedback Driven",
        "ss-ownership": "Ownership",

        "hard-skills-title": "Hard Skills",
        "hs-programming": "Programming",
        "hs-engines": "Game Engines",
        "hs-ui": "UI",
        "hs-optimization": "Optimization",
        "hs-debugging": "Debugging",
        "hs-network": "Network",

        "projects-title": "My Projects",
        "project-projetdesoutenance-title": "Defense Project",
        "project-afterimpact-desc": "Small game built with Unity.",
        "project-horrortycoon-desc": "Video game project developed with Unity.",
        "project-athaza-desc": "Video game project.",
        "project-portfolio-desc": "Creation of my personal portfolio.",
        "project-destinyofgobo-desc": "Video game project.",
        "project-projetdesoutenance-desc": "Defense project.",

        "contact-main-title": "Contact Me",

        "contact-subtitle": "You can send me a message directly through this form or find me on social media:",
        "form-name-label": "Full Name:",
        "form-name-ph": "Your name",
        "form-email-label": "Your Email:",
        "form-email-ph": "name@example.com",
        "form-subject-label": "Subject:",
        "form-subject-ph": "Subject of your message",
        "form-message-label": "Message:",
        "form-message-ph": "Write your message here...",
        "form-submit-btn": "Send Message",

        "contact-email-label": "Email:",
        "contact-linkedin-link": "My LinkedIn profile",
        "contact-discord-link": "My Discord profile",
        "contact-github-link": "My GitHub profile",

        // Project After Impact
        "ai-intro": "Survival game developed with Unity.",
        "ai-overview": "In a post-apocalyptic world, players must manage their resources and vital stats to survive against the elements and passing time.",
        "ai-itch-btn": "Play / View on itch.io",
        "ai-contrib-title": "My Technical Contributions",
        "ai-feat-inventory-title": "Inventory System",
        "ai-feat-inventory-desc": "Designed storage, item pickup, usage, and grid inventory management inspired by The Forest.",
        "ai-feat-inventory-p1": "Dynamic slot grid system with stacking for identical items",
        "ai-feat-inventory-p2": "In-world item pickup with automatic addition to the inventory",
        "ai-feat-inventory-p3": "Direct interaction (consume, equip, drop) straight from the interface",
        "ai-feat-inventory-caption": "In-game inventory grid",
        "ai-feat-stats-title": "Player Status & Survival System",
        "ai-feat-stats-desc": "Developed survival logic managing cold, hunger, and thirst based on environmental conditions.",
        "ai-feat-stats-p1": "Hunger, cold, and thirst meters evolving in real time",
        "ai-feat-stats-p2": "Direct environmental impact on cold exposure (weather conditions, shelter)",
        "ai-feat-stats-p3": "Restoration of survival meters through player interactions (e.g. warmth recovers near a campfire)",
        "ai-feat-stats-caption": "Player survival meters",
        "ai-feat-time-title": "Time & Day/Night Cycle Management",
        "ai-feat-time-desc": "Implemented a day/night system linked to the visual day cycle.",
        "ai-feat-time-p1": "In-game clock synchronized with a day/night cycle",
        "ai-feat-time-p2": "Direct influence of time of day and weather on survival mechanics and player stats",
        "ai-feat-time-caption": "Day / Night cycle",

        // Athaza
        "at-intro": "Survival and extraction game developed with SFML.",
        "at-overview": "Athaza is a post-apocalyptic survival and exploration game. Keep your friends close, because humans aren't the only creatures roaming this world.",
        "at-itch-btn": "Play / View on itch.io",
        "at-contrib-title": "My Technical Contributions",
        "at-feat-QG-title": "HQ Architecture & Design",
        "at-feat-QG-desc": "Creation and management of the base mechanics.",
        "at-feat-QG-p1": "Engineered the base system at code level to streamline the integration of various HQ modules smoothly",
        "at-feat-QG-p2": "Implemented a gardening system allowing players to produce food for sustenance and healing",
        "at-feat-QG-p3": "Developed NPC spawning mechanics inside the base that progress alongside the game",
        "at-feat-QG-caption": "The HQ base",
        "at-feat-npc-title": "NPC Behavior & Logic",
        "at-feat-npc-desc": "Development of behavioral logic for various non-player characters.",
        "at-feat-npc-p1": "Management of different NPC roles and types within the game",
        "at-feat-npc-p2": "Integration and synchronization of NPC animations",
        "at-feat-npc-p3": "Contextual spawning triggered at the right moments in the game progression",
        "at-feat-npc-caption": "The NPCs",
        "at-feat-txt-title": "Text & Dialogue Management",
        "at-feat-txt-desc": "Creation and management of in-game text systems.",
        "at-feat-txt-p1": "Implemented a contextual tutorial text system triggered by player actions",
        "at-feat-txt-p2": "Displayed narrative and informative messages to guide the player's journey",
        "at-feat-txt-caption": "Text systems",

        // Horror Tycoon
        "horrortycoon-intro": "Horror-themed tycoon game developed with Unity for mobile devices.",
        "horrortycoon-overview": "A park-management game inspired by tycoon classics, wrapped in a spooky, chilling atmosphere.",
        "horrortycoon-itch-btn": "Play / View on itch.io",
        "horrortycoon-contrib-title": "My Technical Contributions",
        "horrortycoon-feat-shop-title": "Shop System Design",
        "horrortycoon-feat-shop-desc": "Creation and management of shop and purchase mechanics.",
        "horrortycoon-feat-shop-p1": "Dynamic shop updates based on the player's current funds",
        "horrortycoon-feat-shop-p2": "Connected the shop to in-game structures to smoothly return to the main screen upon purchasing and placing objects",
        "horrortycoon-feat-shop-p3": "Optimized navigation and UI ergonomics tailored for mobile touch controls",
        "horrortycoon-feat-shop-caption": "The shop interface",
        "horrortycoon-feat-UI-title": "UI & Statistics Integration",
        "horrortycoon-feat-UI-desc": "Added interface elements to convey crucial player indicators and metrics.",
        "horrortycoon-feat-UI-p1": "Implemented an economy system and park popularity rating based on visitor satisfaction",
        "horrortycoon-feat-UI-p2": "Designed clear UX layouts to help players monitor their performance data easily",
        "horrortycoon-feat-UI-caption": "User Interface",

        // Destiny of Gobo
        "dg-intro": "Exploration and combat game built with SFML.",
        "dg-overview": "A 2D adventure focused on dungeon exploration and combat mechanics.",
        "dg-itch-btn": "Play / View on itch.io",
        "dg-contrib-title": "My Technical Contributions",
        "dg-feat-inventory-title": "Inventory System Design",
        "dg-feat-inventory-desc": "Creation and full management of the inventory system.",
        "dg-feat-inventory-p1": "Grid-based inventory system storing collected items seamlessly",
        "dg-feat-inventory-p2": "Real-time UI updates when items are removed or consumed",
        "dg-feat-inventory-caption": "The inventory",
        "dg-feat-menu-title": "Main Menu & Options Integration",
        "dg-feat-menu-desc": "Implementation of game options and main menu mechanics.",
        "dg-feat-menu-p1": "Creation of visual elements for the menu and configuration screens",
        "dg-feat-menu-p2": "Integration of an audio management system to control volume levels",
        "dg-feat-menu-p3": "Programming interactive button functionality across all menus",
        "dg-feat-menu-caption": "Menu / Options",

        // defense Project
        "pp-intro": "Development of a complete and autonomous network infrastructure for the graduation project.",
        "pp-overview": "In-depth technical design of the multiplayer layer and data synchronization.",
        "pp-contrib-title": "My future achievements: ",
        "pp-realisations-p1" : "Backend API (PlayFab-like): Development of a robust custom API under ASP.NET Core for secure profile management (JWT) and game data.",
        "pp-realisations-p2" : "Matchmaking: Player matching algorithm based on latency and skill via a synchronous background service.",
        "pp-realisations-p3" : "Lobby & Instance Management: Real-time synchronization system for waiting rooms and game session lifecycles.",
        "pp-realisations-p4" : "Real-time chat: Integration of a low-latency bidirectional instant messaging system optimized with SignalR.",

        // Portfolio
        "portfolio-intro": "Development of my personal portfolio website.",
        "portfolio-overview": "Interactive showcase presenting my background and video game projects.",
        "portfolio-contrib-title": "Key Features",
        "portfolio-feat-dev-title": "Design & Integration",
        "portfolio-feat-dev-desc": "Created a clean, responsive, and bilingual web interface.",
        "portfolio-feat-dev-p1": "Modern HTML/CSS structure with full bilingual support (FR/EN)",
        "portfolio-feat-dev-p2": "Optimized responsiveness for all screen sizes",
    }
};

/* ==========================================================================
   LOGIQUE DOM & ÉVÉNEMENTS
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {

    /* --- GESTION DU THÈME --- */
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');

    if (themeToggleBtn && themeIcon) {
        const isDark = document.body.classList.contains('dark-theme') || document.documentElement.classList.contains('dark-theme');
        themeIcon.textContent = isDark ? '☀️' : '🌙';

        themeToggleBtn.addEventListener('click', () => {
            const nowDark = document.body.classList.toggle('dark-theme');
            document.documentElement.classList.toggle('dark-theme', nowDark);

            themeIcon.textContent = nowDark ? '☀️' : '🌙';
            localStorage.setItem('theme', nowDark ? 'dark' : 'light');
        });
    }

    /* --- GESTION DE LA LANGUE --- */
    const langToggleBtn = document.getElementById('lang-toggle');
    const langText = document.getElementById('lang-text');
    let currentLang = localStorage.getItem('lang') || 'fr';

    function updateLanguage(lang) {
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                element.innerHTML = translations[lang][key];
            }
        });

        document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
            const key = element.getAttribute('data-i18n-placeholder');
            if (translations[lang] && translations[lang][key]) {
                element.placeholder = translations[lang][key];
            }
        });

        if (langText) {
            langText.textContent = lang === 'fr' ? 'EN' : 'FR';
        }

        document.documentElement.lang = lang;
        localStorage.setItem('lang', lang);

        document.documentElement.classList.remove('i18n-loading');
    }

    updateLanguage(currentLang);

    if (langToggleBtn) {
        langToggleBtn.addEventListener('click', () => {
            currentLang = currentLang === 'fr' ? 'en' : 'fr';
            updateLanguage(currentLang);
        });
    }
});