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
}

export const projects: Project[] = [
  {
    id: "storage-management",
    titleKey: "projects.items.storage.title",
    descriptionKey: "projects.items.storage.desc",
    tags: ["React", "TypeScript", "Tailwind", "Cloudflare", "D1", "Docker"],
    image: storageManagementMain,
    repoUrl: "https://github.com/KimSal97/Storagemanagement_webapps_H25",
  },

  {
    id: "delingsapp",
    titleKey: "projects.items.delingsapp.title",
    descriptionKey: "projects.items.delingsapp.desc",
    tags: ["Kotlin", "Android Studio", "Gradle", "Google Maps", "Firebase"],
    image: delingsAppMain,
    repoUrl: "https://github.com/AmalieSG/DelingsApp",
  },

  {
    id: "azure-servicebus-manager",
    titleKey: "projects.items.servicebus.title",
    descriptionKey: "projects.items.servicebus.desc",
    tags: ["React", "TypeScript", "ASP.NET Core", "Redis", "Azure Service Bus"],
    image: serviceBusManagerMain,
    repoUrl: "https://github.com/KimSal97/bachelor_test_ground",
  },

  
]
