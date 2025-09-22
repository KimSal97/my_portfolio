import reactLogo from '../assets/react.svg'


export type Project = {
  id: string
  title: string
  description: string
  tags: string[]
  image?: string
  demoUrl?: string
  repoUrl?: string
}

export const projects: Project[] = [
  {
    id: 'my-portfolio',
    title: 'My Portfolio',
    description: 'This portfolio built with React, TypeScript, Vite, and Tailwind.',
    tags: ['React', 'TypeScript', 'Vite', 'Tailwind'],
    image: '/vite.svg',
    repoUrl: 'https://github.com/DankmemerXDD/my_portfolio',
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
