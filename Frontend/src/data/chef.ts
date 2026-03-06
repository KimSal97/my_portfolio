import salmonPlating from "../assets/foods/Bankett_Thon.jpg"
import burger from "../assets/foods/Burger_Thon.jpg"
import banketSalad from "../assets/foods/Banket2t_Thon.jpg"

export type ChefItem = {
  id: string
  titleKey?: string
  description: string
  imageUrl: string
}

export const chefItems: ChefItem[] = [
  {
    id: "dish-1",
    description: "chef.dish.1",
    imageUrl: salmonPlating,
  },
  {
    id: "dish-2",
    description: "chef.dish.2",
    imageUrl: burger,
  },
  {
    id: "dish-3",
    description: "chef.dish.3",
    imageUrl: banketSalad,
  },
]