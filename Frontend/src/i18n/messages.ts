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
  'projects.view': 'See project',
  'projects.demo': 'Live Demo',


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

  'projects.items.storage.title': 'Storage Management',
  'projects.items.storage.desc':
    'An inventory management web app for tracking products, locations and loans.',

  'projects.items.servicebus.title': 'Azure Service Bus Manager',
  'projects.items.servicebus.desc':
    'Admin tool for Azure Service Bus with search, filtering, CRUD and real-time updates. (THIS PAGE IS WORK IN PROGRESS)',

  'projects.items.delingsapp.title': 'DelingsApp (Leimeg)',
  'projects.items.delingsapp.desc':
    'Kotlin/Compose mobile app for renting products with chat, maps, camera and NO/EN language support.',


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
    'TypeScript with shared types and validation',

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

  'project.storage.img.Login': 'Authentication flow with login, user registration and password reset.',
  'project.storage.img.dashboard': 'Dashboard overview with quick access to search and creating a new order.',
  'project.storage.img.products': 'Product catalog with stock status, supplier mapping and edit/delete actions.',
  'project.storage.img.new_orders': 'Cart-based order creation: adjust quantities, remove items and submit the order.',
  'project.storage.img.orderhistory': 'Order history with filtering by status and search across products/orders.',
  'project.storage.img.ordermodal': 'Order details modal showing items, quantities and unit prices.',
  'project.storage.img.reorder': 'Reorder suggestions based on minimum stock thresholds and current inventory.',

  "project.delingsapp.title": "DelingsApp (Leimeg)",
  "project.delingsapp.lead":
    "A mobile application built in Kotlin and Jetpack Compose that allows users to rent and share products with others. The app includes chat, map integration, camera support, authentication and multilingual functionality.",

  "project.delingsapp.problem":
    "Many people own products that are rarely used, while others only need them temporarily. There are few simple and user-friendly solutions for private peer-to-peer renting, especially optimized for mobile with built-in communication.",

  "project.delingsapp.solution":
    "We developed DelingsApp as a mobile solution where users can publish products for rent, reserve items using a date picker, chat directly with owners, and manage reservations and returns. The application integrates Firebase, Google Maps API and modern Android development with Jetpack Compose.",

  "project.delingsapp.role":
    "I primarily contributed by implementing screens and navigation, building Compose UI components, integrating Firebase authentication and database features, implementing chat, notifications, camera support and multilingual functionality (NO/EN). I also participated in testing and UX improvements.",

  "project.delingsapp.challenges":
    "The main challenge was learning mobile development from scratch using Jetpack Compose, while integrating advanced features like real-time database, messaging and Google Maps. Structuring navigation and state management correctly was important to keep the project scalable.",

  "project.delingsapp.arch.1": "Built in Kotlin using Jetpack Compose",
  "project.delingsapp.arch.2": "Firebase Authentication and Firestore database",
  "project.delingsapp.arch.3": "Google Maps API for location-based products",
  "project.delingsapp.arch.4": "Modular navigation structure with NavHost",

  "project.delingsapp.features.1": "Create and publish rental products",
  "project.delingsapp.features.2": "Search and filter products",
  "project.delingsapp.features.3": "Reservation system with date picker",
  "project.delingsapp.features.4": "Direct messaging between users",
  "project.delingsapp.features.5": "Profile management and editing",
  "project.delingsapp.features.6": "Return checklist and camera support",

  "project.delingsapp.img.hero": "Main app screen with product overview",
  "project.delingsapp.img.home": "Home screen with search and product feed",
  "project.delingsapp.img.products": "Product grid from other users",
  "project.delingsapp.img.reserve": "Product reservation screen",
  "project.delingsapp.img.datepicker": "Date picker for reservation",
  "project.delingsapp.img.contacts": "Chat contact list",
  "project.delingsapp.img.chat": "User-to-user chat screen",
  "project.delingsapp.img.edit_profile": "Edit user profile screen",
  "project.delingsapp.img.return_product": "Product return checklist",
  "project.delingsapp.img.login_email": "Login with email",
  "project.delingsapp.img.login_phone": "Login with phone number",

  'project.servicebus.title': 'Azure Service Bus Manager',

  'project.servicebus.lead':
    'A web-based administration tool for managing Azure Service Bus resources such as queues, topics and messages. The system provides search, filtering, dead-letter handling, message inspection and operational metrics.',
  'project.servicebus.problem':
    'Managing Azure Service Bus resources through the Azure portal can be slow and inefficient when debugging messages, inspecting payloads or handling dead-letter queues. Developers often need faster ways to inspect messages, resend them and monitor message flow.',
  'project.servicebus.solution':
    'I developed a dedicated management interface that connects to Azure Service Bus and allows users to browse queues and topics, inspect messages, resend dead-letter messages and search through message payloads. The application also provides metrics and message analytics to better understand message flow.',
  'project.servicebus.role':
    'I designed and implemented the full system including frontend UI, backend services and integrations with Azure Service Bus. I also implemented Redis caching for dead-letter messages and built the metrics visualization dashboard.',
  'project.servicebus.challenges':
    'Handling message payload inspection and dead-letter management required careful handling of message metadata and state transitions. Another challenge was building flexible filtering and search capabilities across message payloads while maintaining good performance.',

  'project.servicebus.arch.1':
    'React + TypeScript frontend built with Vite and Tailwind',
  'project.servicebus.arch.2':
    'Backend services interacting with Azure Service Bus SDK',
  'project.servicebus.arch.3':
    'Redis used for caching dead-letter messages and metadata',
  'project.servicebus.arch.4':
    'Metrics dashboard visualizing message throughput and errors',

  'project.servicebus.features.1':
    'Browse and manage Azure Service Bus queues and topics',
  'project.servicebus.features.2':
    'View active messages with payload inspection',
  'project.servicebus.features.3':
    'Dead-letter queue management and message recovery',
  'project.servicebus.features.4':
    'Search messages by payload, ID or sequence number',
  'project.servicebus.features.5':
    'Resend messages directly from the interface',
  'project.servicebus.features.6':
    'Metrics dashboard showing message flow and errors',

  'project.servicebus.img.topics_list':
    'Overview of topics and subscriptions in Azure Service Bus.',
  'project.servicebus.img.queues_list':
    'Overview of queues available in the Service Bus namespace.',
  'project.servicebus.img.topic_message_list':
    'Topic messages displayed in the application interface.',
  'project.servicebus.img.deadletter_list':
    'Dead-letter messages stored for debugging and recovery.',
  'project.servicebus.img.deadletter_details':
    'Detailed view of a dead-letter message including error information.',
  'project.servicebus.img.message_details':
    'Detailed inspection of a message payload and metadata.',
  'project.servicebus.img.resend_message_dialog':
    'Interface for resending messages with custom properties.',
  'project.servicebus.img.redis_connections':
    'Redis storage containing cached Service Bus connection information.',
  'project.servicebus.img.redis_deadletter_storage':
    'Dead-letter messages cached in Redis for faster access.',
  'project.servicebus.img.metrics_dashboard':
    'Metrics dashboard visualizing incoming messages, errors and throughput.',


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
  'projects.view': 'Se prosjekt',
  'projects.demo': 'Demo',

  'projects.items.storage.title': 'Storage Management',
  'projects.items.storage.desc':
    'En lagerstyrings-webapp for å holde oversikt over produkter, lokasjoner og utlån.',

  'projects.items.servicebus.title': 'Azure Service Bus Manager',
  'projects.items.servicebus.desc':
    'Admin-verktøy for Azure Service Bus med søk, filtrering, CRUD og sanntidsoppdateringer. (THIS PAGE IS WORK IN PROGRESS)',

  'projects.items.delingsapp.title': 'DelingsApp (Leimeg)',
  'projects.items.delingsapp.desc':
    'Mobilapp i Kotlin/Compose for utleie av produkter med chat, kart, kamera og NO/EN språk støtte.',


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
    'TypeScript med delte typer og validering',

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

  'project.storage.img.Login': 'Innlogging med registrering av bruker og “glemt passord”-flyt.',
  'project.storage.img.dashboard': 'Dashboard med søk og snarvei til å opprette ny bestilling.',
  'project.storage.img.products': 'Produktoversikt med lagerstatus, leverandørkobling og rediger/slett.',
  'project.storage.img.new_orders': 'Handlekurv-basert bestilling: juster antall, fjern varer og send bestilling.',
  'project.storage.img.orderhistory': 'Bestillingshistorikk med status-filter og søk på ordre/produkter.',
  'project.storage.img.ordermodal': 'Ordredetaljer i modal med produkter, antall og enhetspris.',
  'project.storage.img.reorder': 'Bestillingsforslag basert på minimumslager og nåværende beholdning.',

  "project.delingsapp.title": "DelingsApp (Leimeg)",
  "project.delingsapp.lead":
    "En mobilapplikasjon utviklet i Kotlin og Jetpack Compose hvor brukere kan leie og dele produkter med hverandre. Appen inkluderer chat, kartintegrasjon, kamera, autentisering og flerspråklig støtte.",

  "project.delingsapp.problem":
    "Mange eier produkter som brukes sjeldent, samtidig som andre trenger dem i korte perioder. Det finnes få enkle og brukervennlige løsninger for privat utleie mellom personer, spesielt med fokus på mobilbruk og direkte kommunikasjon.",

  "project.delingsapp.solution":
    "Vi utviklet DelingsApp som en mobil løsning hvor brukere kan legge ut produkter for utleie, reservere produkter med datovalg, chatte direkte med eier, og håndtere reservasjoner og retur. Applikasjonen kombinerer Firebase, Google Maps API og moderne Android-utvikling med Jetpack Compose.",

  "project.delingsapp.role":
    "Jeg bidro hovedsakelig med utvikling av skjermbilder og routing, implementasjon av Compose-UI, Firebase-integrasjon, autentisering, chat, notifikasjoner, kamera-funksjonalitet og oversettelse (NO/EN). Jeg deltok også i testing og forbedring av brukeropplevelse.",

  "project.delingsapp.challenges":
    "Den største utfordringen var å lære mobilutvikling fra bunnen av med Jetpack Compose, samt integrere flere avanserte funksjoner som sanntidsdatabase, meldingssystem og Google Maps. Å strukturere navigasjon og state-håndtering på en god måte var også viktig for å holde prosjektet skalerbart.",

  "project.delingsapp.arch.1": "Utviklet i Kotlin med Jetpack Compose",
  "project.delingsapp.arch.2": "Firebase Authentication og Firestore database",
  "project.delingsapp.arch.3": "Google Maps API for lokasjonsbaserte produkter",
  "project.delingsapp.arch.4": "Modulær navigasjonsstruktur med NavHost",

  "project.delingsapp.features.1": "Opprette og publisere produkter for utleie",
  "project.delingsapp.features.2": "Søke og filtrere produkter",
  "project.delingsapp.features.3": "Reservasjon med datovelger",
  "project.delingsapp.features.4": "Direktemeldinger mellom brukere",
  "project.delingsapp.features.5": "Profilhåndtering og redigering",
  "project.delingsapp.features.6": "Retur-sjekkliste og kamerafunksjonalitet",

  "project.delingsapp.img.hero": "Appens hovedskjerm med produktoversikt",
  "project.delingsapp.img.home": "Hovedside med søk og produktfeed",
  "project.delingsapp.img.products": "Produktgrid fra andre brukere",
  "project.delingsapp.img.reserve": "Reservasjon av produkt",
  "project.delingsapp.img.datepicker": "Datovelger for reservasjon",
  "project.delingsapp.img.contacts": "Kontaktliste for chat",
  "project.delingsapp.img.chat": "Chat mellom brukere",
  "project.delingsapp.img.edit_profile": "Redigering av brukerprofil",
  "project.delingsapp.img.return_product": "Sjekkliste for retur av produkt",
  "project.delingsapp.img.login_email": "Innlogging med e-post",
  "project.delingsapp.img.login_phone": "Innlogging med telefonnummer",

  'project.servicebus.title': 'Azure Service Bus Manager',

'project.servicebus.lead':
  'Et webbasert administrasjonsverktøy for å håndtere Azure Service Bus-ressurser som queues, topics og meldinger. Systemet tilbyr søk, filtrering, håndtering av dead-letter meldinger, meldingsinspeksjon og operasjonelle metrikk.',
'project.servicebus.problem':
  'Administrasjon av Azure Service Bus via Azure-portalen kan være tregt og lite effektivt når man feilsøker meldinger, inspiserer payload eller håndterer dead-letter køer. Utviklere trenger ofte raskere måter å inspisere meldinger, sende dem på nytt og overvåke meldingsflyt.',
'project.servicebus.solution':
  'Jeg utviklet et administrasjonsgrensesnitt som kobler seg til Azure Service Bus og lar brukere navigere i queues og topics, inspisere meldinger, sende dead-letter meldinger på nytt og søke i meldingspayload. Applikasjonen gir også metrikk og analyse av meldingsflyt.',
'project.servicebus.role':
  'Jeg designet og implementerte hele systemet inkludert frontend-grensesnitt, backend-tjenester og integrasjon med Azure Service Bus. Jeg implementerte også Redis caching for dead-letter meldinger og utviklet dashbord for metrikkvisualisering.',
'project.servicebus.challenges':
  'Håndtering av meldingspayload og dead-letter meldinger krevde nøye behandling av meldingsmetadata og tilstandsendringer. En annen utfordring var å bygge fleksible filtrerings- og søkefunksjoner på tvers av payload samtidig som ytelsen ble opprettholdt.',

'project.servicebus.arch.1':
  'Frontend bygget med React, TypeScript, Vite og Tailwind',
'project.servicebus.arch.2':
  'Backend-tjenester som kommuniserer med Azure Service Bus SDK',
'project.servicebus.arch.3':
  'Redis brukt til caching av dead-letter meldinger og metadata',
'project.servicebus.arch.4':
  'Metrikkdashbord som visualiserer meldingsflyt og feil',

'project.servicebus.features.1':
  'Navigere og administrere Azure Service Bus queues og topics',
'project.servicebus.features.2':
  'Se aktive meldinger med inspeksjon av payload',
'project.servicebus.features.3':
  'Håndtering av dead-letter meldinger og gjenoppretting',
'project.servicebus.features.4':
  'Søke etter meldinger via payload, ID eller sekvensnummer',
'project.servicebus.features.5':
  'Sende meldinger på nytt direkte fra grensesnittet',
'project.servicebus.features.6':
  'Metrikkdashbord som viser meldingsflyt og feil',

'project.servicebus.img.topics_list':
  'Oversikt over topics og subscriptions i Azure Service Bus.',
'project.servicebus.img.queues_list':
  'Oversikt over queues i Service Bus namespace.',
'project.servicebus.img.topic_message_list':
  'Topic-meldinger vist i applikasjonen.',
'project.servicebus.img.deadletter_list':
  'Dead-letter meldinger lagret for feilsøking og gjenoppretting.',
'project.servicebus.img.deadletter_details':
  'Detaljvisning av en dead-letter melding med feilinformasjo.',
'project.servicebus.img.message_details':
  'Detaljvisning av meldingspayload og metadata.',
'project.servicebus.img.resend_message_dialog':
  'Grensesnitt for å sende meldinger på nytt med egendefinerte egenskaper.',
'project.servicebus.img.redis_connections':
  'Redis-lagring av Service Bus tilkoblinger.',
'project.servicebus.img.redis_deadletter_storage':
  'Dead-letter meldinger cachet i Redis for raskere tilgang.',
'project.servicebus.img.metrics_dashboard':
  'Metrikkdashbord som viser innkommende meldinger, feil og trafikk.',


  'footer.rights': 'Alle rettigheter forbeholdt.',
}
