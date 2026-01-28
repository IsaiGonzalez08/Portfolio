export type Participant = {
    id: string;
    name: string;
    lastName: string;
    linkedin: string;
}

export type Project = {
    id: string;
    role: string;
    duration: string;
    overview: string;
    participants: Participant[];
    name: string;
    link: string;
    github: string;
    createdAt: Date;
    updatedAt: Date;
}