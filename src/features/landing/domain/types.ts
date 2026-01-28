export interface iconItem {
    name: string;
    icon: string;
    href: string;
}

export interface companyItem {
    name: string
    role: string
    date: string
    description: string
    tags: {
        type: string
    }[]
}

export interface WorkCard {
    id: string
    type: string
    projectName: string
    description: string
    year: string
    images: string[]
}

export interface ItemStack {
    id: string
    name: string
    icons: string[]
}

export interface ProjectResult {
    id: string;
    name: string;
    results: ItemResult[];
}

export interface ItemResult {
    title: string;
    description: string;
    image: string;
}

