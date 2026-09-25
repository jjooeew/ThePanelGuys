export type ProjectImage = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

export type Project = {
  id: number;
  title: string;
  category: string;
  location: string;
  description: string;
  image: ProjectImage | null;
  gallery: ProjectImage[];
};
