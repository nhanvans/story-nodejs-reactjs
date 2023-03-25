export interface Category {
  key?: string
  _id: string
  name: string
  stories: string[]
  createdAt: string
  updatedAt: string
}

export interface responseCategory {
  success?: boolean
  message?: string
  count?: number
  data?: [Category]
}
