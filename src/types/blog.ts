export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  content: string;
  readingTime: number;
}

export interface BlogMetadata {
  title: string;
  date: string;
  description: string;
  tags: string[];
}
