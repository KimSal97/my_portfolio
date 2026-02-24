import storageManagementMain from "../assets/projects/storageManagement/storageManagementMain.png"
import delingsAppMain from "../assets/projects/delingsapp/delingsAppMain.png"
import serviceBusManagerMain from "../assets/serviceBusManagerMain.png"


export type Project = {
  id: string
  titleKey: string
  descriptionKey: string
  tags: string[]
  image?: string | null
  demoUrl?: string
  repoUrl?: string
  imageScale?: number
  imagePosition?: string
}

export const projects: Project[] = [
  {
    id: "storage-management",
    titleKey: "projects.items.storage.title",
    descriptionKey: "projects.items.storage.desc",
    tags: ["React", "TypeScript", "Tailwind", "Cloudflare", "D1", "Docker"],
    image: storageManagementMain,
    repoUrl: "https://github.com/KimSal97/Storagemanagement_webapps_H25",
    imagePosition: "50% 40%",
  },

  {
    id: "delingsapp",
    titleKey: "projects.items.delingsapp.title",
    descriptionKey: "projects.items.delingsapp.desc",
    tags: ["Kotlin", "Android Studio", "Gradle", "Google Maps", "Firebase"],
    image: delingsAppMain,
    repoUrl: "https://github.com/AmalieSG/DelingsApp",
    imageScale: 1.3,
    imagePosition: "50% 30%",
  },

  {
    id: "azure-servicebus-manager",
    titleKey: "projects.items.servicebus.title",
    descriptionKey: "projects.items.servicebus.desc",
    tags: ["React", "TypeScript", "ASP.NET Core", "Redis", "Azure Service Bus"],
    image: serviceBusManagerMain,
    imageScale: 1.2,
    imagePosition: "50% 30%",
  },

  
]
