export type Language = 'en' | 'no'

export type Messages = Record<string, string>

export const en: Messages = {
  'nav.home': 'Home',
  'nav.about': 'About',
  'nav.projects': 'Projects',
  'nav.education': 'My Journey',
  'nav.contact': 'Contact',
  'nav.toggle.en': 'EN',
  'nav.toggle.no': 'NO',

  'hero.badge': 'Built with React + Vite + Tailwind',
  'hero.title': 'Welcome to my Portfolio',
  'hero.subtitle': 'This site is about my journey and work ',
  'hero.ctaProjects': 'View Projects',
  'hero.ctaAbout': 'About Me',

  'about.title': 'About Me',
  'about.p1': 'I’m Kim Salihu, 28 years old from Norway.',
  'about.p2': 'I hold a Bachelor’s degree in Computer Science and VFX. In addition, I am a certified chef with four years of the food-industry experience.',
  'about.p3': 'My hobbies are programming, gaming, hanging out with friends and going to the Gym',
  'about.degrees': 'I hold a Bachelor degree in Computer Science and in VFX. I’m also an educated Chef',
  'about.showreel': 'Watch my VFX showreel',

  'projects.title': 'Projects',
  'projects.subtitle': 'A selection of things I’ve made.',
  'projects.tabs.chef': 'Cooking',
  'projects.tabs.vfx': 'VFX',
  'projects.tabs.cs': 'Computer Science',
  'projects.chef.subtitle': 'Highlights from my time as a chef.',
  'projects.vfx.subtitle': 'My VFX showreel and visual work from my studies.',
  'projects.cs.subtitle': 'Software projects I’ve made.',

  'projects.more': 'More info',
  'projects.less': 'Less',
  'projects.description': 'Description',
  'projects.source': 'Source Code',
  'projects.openVimeo': 'Open on Vimeo',

  'education.title': 'My Journey in Education',
  'education.subtitle': 'What I have learned along the way.',
  'education.cs.title': 'Computer Science',
  'education.cs.desc': 'Through computer science I developed problem-solving skills and a passion for building reliable applications.',
  'education.vfx.title': 'VFX',
  'education.vfx.desc': 'Exploring visual effects gave me an eye for design, detail, and storytelling.',
  'education.cooking.title': 'Cooking',
  'education.cooking.desc': 'Working as a chef taught me discipline, creativity, and handling pressure.',

  'project.back': 'Back to projects',

  'project.storage.title': 'Storage Management',
  'project.storage.lead':
    'A full-stack inventory management system for tracking products, suppliers, orders and sales in real time.',

  'project.section.problem': 'The Problem',
  'project.section.solution': 'The Solution',
  'project.section.architecture': 'Architecture',
  'project.section.features': 'Key Features',
  'project.section.role': 'My Role',
  'project.section.challenges': 'Challenges & Learnings',

  'project.storage.problem':
    'Manual inventory management or spreadsheet-based solutions often result in inaccurate stock levels, poor visibility of product movement and inefficient restocking decisions.',
  'project.storage.solution':
    'I developed a full-stack web application that centralizes inventory operations. The system manages products, suppliers, orders and sales, while providing dashboards and statistics for better decision-making.',
  'project.storage.role':
    'I worked across the full stack, contributing to frontend implementation, backend API routes, database schema design and integration using a structured architecture.',
  'project.storage.challenges':
    'One of the main challenges was maintaining consistent business logic across products, orders and sales while ensuring type safety and a scalable backend structure.',

  'project.storage.arch.1':
    'Cloudflare Workers backend with REST API routes',
  'project.storage.arch.2':
    'Layered architecture: Routes → Controller → Service → Repository',
  'project.storage.arch.3':
    'Cloudflare D1 (SQLite) database with Drizzle ORM and migrations',
  'project.storage.arch.4':
    'TypeScript-first development with shared types and validation',

  'project.storage.features.1':
    'Product CRUD with validation and supplier integration',
  'project.storage.features.2':
    'Order creation through a cart-based workflow (multiple products per order)',
  'project.storage.features.3':
    'Order history with status filtering (pending, completed, cancelled)',
  'project.storage.features.4':
    'Sales registration affecting inventory levels in real time',
  'project.storage.features.5':
    'Statistics dashboard visualizing sales and order trends',
  'project.storage.features.6':
    'Local and remote development workflow using D1 and migrations',

  'footer.rights': 'All rights reserved.',
}

export const no: Messages = {
  'nav.home': 'Hjem',
  'nav.about': 'Om',
  'nav.projects': 'Prosjekter',
  'nav.education': 'Min reise',
  'nav.contact': 'Kontakt',
  'nav.toggle.en': 'EN',
  'nav.toggle.no': 'NO',

  'hero.badge': 'Bygget med React + Vite + Tailwind',
  'hero.title': 'Velkommen til porteføljen min',
  'hero.subtitle': 'Dette nettstedet handler om reisen min og arbeidet mitt',
  'hero.ctaProjects': 'Se prosjekter',
  'hero.ctaAbout': 'Om meg',

  'about.title': 'Om meg',
  'about.p1': 'Jeg er Kim Salihu, 28 år gammel fra Norge.',
  'about.p2': 'Jeg har en bachelorgrad i informatikk og VFX. I tillegg er jeg utdannet kokk med fire års erfaring fra matindustrien.',
  'about.p3': 'Hobbyene mine er programmering, gaming, henge med venner og trening.',
  'about.degrees': 'Jeg har en bachelorgrad i informatikk og i VFX. Jeg er også utdannet kokk.',
  'about.showreel': 'Se VFX-showreelen min',

  'projects.title': 'Prosjekter',
  'projects.subtitle': 'Et utvalg av ting jeg har laget.',
  'projects.tabs.chef': 'Matlaging',
  'projects.tabs.vfx': 'VFX',
  'projects.tabs.cs': 'Informatikk',
  'projects.chef.subtitle': 'Høydepunkter fra tiden min som kokk.',
  'projects.vfx.subtitle': 'Min VFX-showreel og visuelt arbeid fra studiene mine.',
  'projects.cs.subtitle': 'Programvareprosjekter jeg har laget.',

  'projects.more': 'Mer info',
  'projects.less': 'Mindre',
  'projects.description': 'Beskrivelse',
  'projects.source': 'Kildekode',
  'projects.openVimeo': 'Åpne på Vimeo',

  'education.title': 'Min utdanningsreise',
  'education.subtitle': 'Hva jeg har lært på veien.',
  'education.cs.title': 'Informatikk',
  'education.cs.desc': 'Gjennom informatikk utviklet jeg problemløsningsferdigheter og en lidenskap for å bygge pålitelige applikasjoner.',
  'education.vfx.title': 'VFX',
  'education.vfx.desc': 'Utforskning av visuelle effekter ga meg øye for design, detaljer og historiefortelling.',
  'education.cooking.title': 'Kokk',
  'education.cooking.desc': 'Å jobbe som kokk lærte meg disiplin, kreativitet og å håndtere press.',

  'project.back': 'Tilbake til prosjekter',

  'project.storage.title': 'Storage Management',
  'project.storage.lead':
    'Et full-stack lagerstyringssystem for håndtering av produkter, leverandører, bestillinger og salg i sanntid.',

  'project.section.problem': 'Problemet',
  'project.section.solution': 'Løsningen',
  'project.section.architecture': 'Arkitektur',
  'project.section.features': 'Hovedfunksjoner',
  'project.section.role': 'Min rolle',
  'project.section.challenges': 'Utfordringer og læring',

  'project.storage.problem':
    'Manuell lagerstyring eller bruk av regneark fører ofte til feil lagerstatus, dårlig oversikt over vareflyt og ineffektive gjenbestillinger.',
  'project.storage.solution':
    'Jeg utviklet en full-stack webapplikasjon som samler lageroperasjoner på ett sted. Systemet håndterer produkter, leverandører, bestillinger og salg, samtidig som det gir oversikt gjennom dashbord og statistikk.',
  'project.storage.role':
    'Jeg jobbet på hele stacken og bidro med frontend, backend API-ruter, databaseskjema og integrasjon gjennom en strukturert arkitektur.',
  'project.storage.challenges':
    'En sentral utfordring var å opprettholde konsistent forretningslogikk mellom produkter, bestillinger og salg, samtidig som systemet forble typesikkert og skalerbart.',

  'project.storage.arch.1':
    'Cloudflare Workers-backend med REST API-ruter',
  'project.storage.arch.2':
    'Lagvis arkitektur: Routes → Controller → Service → Repository',
  'project.storage.arch.3':
    'Cloudflare D1 (SQLite) med Drizzle ORM og migrasjoner',
  'project.storage.arch.4':
    'TypeScript-first utvikling med delte typer og validering',

  'project.storage.features.1':
    'CRUD-operasjoner for produkter med validering og kobling til leverandører',
  'project.storage.features.2':
    'Bestilling via handlekurv (flere produkter per bestilling)',
  'project.storage.features.3':
    'Bestillingshistorikk med filtrering etter status',
  'project.storage.features.4':
    'Registrering av salg som oppdaterer lagerbeholdning i sanntid',
  'project.storage.features.5':
    'Statistikkdashbord som visualiserer salg og bestillingstrender',
  'project.storage.features.6':
    'Lokal og remote utviklingsflyt med D1 og migrasjoner',

  'footer.rights': 'Alle rettigheter forbeholdt.',
}
