export type ChefItem = {
  id: string
  title?: string
  description: string
  imageUrl: string
}

export const chefItems: ChefItem[] = [
  {
    id: 'dish-1',
    description: 'dish1',
    imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'dish-2',
    description: 'dish2',
    imageUrl: 'https://images.unsplash.com/photo-1516683037151-9d0d845c76f2?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'dessert-1',
    description: 'dish3',
    imageUrl: 'https://images.unsplash.com/photo-1514516870926-2059890f06cc?q=80&w=1200&auto=format&fit=crop',
  },
]
