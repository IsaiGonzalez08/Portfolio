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
    type: string
    projectName: string
    description: string
    year: string
    images: string[]
}