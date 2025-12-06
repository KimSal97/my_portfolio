import reactLogo from '../assets/react.svg'


export type Project = {
  id: string
  title: string
  description: string
  tags: string[]
  image?: string | null
  demoUrl?: string
  repoUrl?: string
}

export const projects: Project[] = [
  {
    id: 'storage-management',
    title: 'Storage Management',
    description:
      'En lagerstyringsløsning som lar deg registrere varer, lokasjoner og utlån. Bygget som en webapp for å holde oversikt over inventar og håndtere inn- og ut-sjekking.',
    tags: ['React', 'TypeScript', 'Tailwind', 'Full-stack', 'Inventory'],
    image: null,
    repoUrl: 'https://github.com/KimSal97/Storagemanagement_webapps_H25',
  },
  {
    id: 'shop-react-csharp',
    title: 'Shop (React + C#)',
    description: 'Full-stack exploration combining React frontend with a C# backend.',
    tags: ['React', 'C#', 'Full-stack'],
    image: reactLogo,
    repoUrl: 'https://github.com/DankmemerXDD/shop_React_cSharp',
  },
  {
    id: 'delingsapp',
    title: 'DelingsApp',
    description:
      'A mobile application built in Android Studio with Kotlin. DelingsApp lets users rent or lease their products to others. It features an integrated chat, camera support for taking item photos, Google Maps integration to show rental locations, and supports both English and Norwegian.',
    tags: ['Kotlin', 'Android Studio', 'Mobile App', 'Google Maps', 'Multilingual'],
    image: null,
    repoUrl: 'https://github.com/Admojo/DelingsApp',
  },
]
