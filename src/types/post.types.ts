export type TPostFormData = {
    author: string; 
    title: string;
    slug?: string; 
    image?: {
      featuresImage?: string;
      thumbnail?: string;
    };
    contents?: Array<{
      priority?: string;
      content?: string;
    }>;
    contactNumber?: string;
    layouts?: {
      banner?: boolean;
      sidebar?: "posts" | "comments" | "author"; 
      isSidebar?: "right" | "left" | "both" | "none"; 
      comments?: boolean;
    };
    seoTitle?: string;
    seoDescription?: string;
    seoKeyword?: string[]; 
}
  