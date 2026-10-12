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
        "ss-proactive": "Proactivité",
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

        //projet after impact
        "ai-intro": "Jeu de survie développé sur Unity.",
        "ai-overview": "Dans un univers post-apocalyptique, le joueur doit gérer ses ressources et ses constantes vitales pour survivre face aux éléments et au temps qui passe.",
        "ai-itch-btn": "🎮 Jouer / Voir sur itch.io",
        "ai-contrib-title": "Mes Réalisations Techniques",
        "ai-feat-inventory-title": "Gestionnaire d'inventaire :",
        "ai-feat-inventory-desc": "Conception du système de stockage d'objets, ramassage, utilisation et gestion de la grille d'inventaire.",
        "ai-feat-stats-title": "Système d'états du joueur (Stats & Survival) :",
        "ai-feat-stats-desc": "Développement de la logique de survie gérant le froid, la faim et la santé en fonction de l'environnement.",
        "ai-feat-time-title": "Gestion de l'heure et du temps :",
        "ai-feat-time-desc": "Mise en place d'un cycle temporel régissant la progression de la journée et impactant directement le comportement du climat et des statistiques du joueur.",
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
        "ss-proactive": "Proactive",
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
        "project-projetdesoutenance-title": "Graduation Project",
        "project-afterimpact-desc": "Small game built with Unity.",
        "project-horrortycoon-desc": "Video game project developed with Unity.",
        "project-athaza-desc": "Video game project.",
        "project-portfolio-desc": "Creation of my personal portfolio.",
        "project-destinyofgobo-desc" : "Video game project.",
        "project-projetdesoutenance-desc" : "Graduation project.",
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

        //projet after impact
        "ai-intro": "Survival game developed with Unity.",
        "ai-overview": "In a post-apocalyptic world, players must manage their resources and vital stats to survive against the elements and passing time.",
        "ai-itch-btn": "🎮 Play / View on itch.io",
        "ai-contrib-title": "My Technical Contributions",
        "ai-feat-inventory-title": "Inventory System:",
        "ai-feat-inventory-desc": "Designed item storage, pickup mechanics, usage, and inventory grid management.",
        "ai-feat-stats-title": "Player Status System (Stats & Survival):",
        "ai-feat-stats-desc": "Developed survival logic handling cold, hunger, and health based on environmental conditions.",
        "ai-feat-time-title": "Time & Clock Management:",
        "ai-feat-time-desc": "Implemented a day/night cycle system directly impacting climate behaviors and player statistics.",
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
            // Applique le thème sur html ET body pour éliminer les incohérences
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

    // Réaffiche la page une fois la traduction appliquée sans flash
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