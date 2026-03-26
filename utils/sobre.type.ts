export interface SobreDataProps {
  object: {
    metadata: {
      hero: {
        url: string;
      };
      name: string;
      bio: string;
      infos: InfoProps[];
    };
  };
}

export interface InfoProps {
  title: string;
  description: string;
  icon: string;
}
