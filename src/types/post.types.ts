

export type TPostFormData = {
    _id?: string; 
    author:  string; 
    postTitle: string;
    slug?: string;
    shortDescription?: string;
    image?: {
        featuresImage?:  string; 
        thumbnail?:  string;
    };
    publishDate: Date ;
    content?: string;
    contents?: Array<{
        priority?: string;
        content?: string;
    }>;
    status: "Publish" | "Unpublish"; 
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
    createdAt?: Date; 
    updatedAt?: Date; 
}
