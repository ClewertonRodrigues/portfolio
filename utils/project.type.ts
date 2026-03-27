
export interface ProjectsProps{
    objects: ItemProjectProps[]
}

interface ItemProjectProps{
    metadata: {
        title: string;
        description: string;
        thumbnail: {
            url: string;
        }
        github_url: string;
        live_url: string;
        techs: TechProps[];
    }
}

interface TechProps{
    name: string;
}