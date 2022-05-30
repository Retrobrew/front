import {User} from "@/object/User";

export class Post {
    public uuid: string;
    public title: string;
    public author: User | null;
    public content: string;
    public media: File | null;
    public comments: number;
    public createdAt: Date | null;
    public lastUpdatedAt: Date | null;
    public postedIn: string | undefined;

    constructor(
        uuid: string,
        title: string,
        author: User | null,
        content: string,
        media: File | null,
        comments: number,
        createdAt: Date,
        lastUpdatedAt: Date
    ) {
        this.uuid = uuid;
        this.title = title;
        this.author = author;
        this.content = content;
        this.media = media;
        this.comments = comments;
        this.createdAt = createdAt;
        this.lastUpdatedAt = lastUpdatedAt;
    }

    static emptyPost(): Post {
        return new Post(
            "",
            "",
            null,
            "",
            null,
            0,
            new Date(),
            new Date()
        );
    }

    generateFormData(): FormData {
        const formData = new FormData();
        const date  = this.createdAt?.toUTCString()

        formData.append('title', this.title);
        formData.append('content', this.content);
        formData.append('createdAt',date ? date : "" );
        if(this.media){
            formData.append('media', this.media)
        }
        if(this.postedIn){
            formData.append('postedIn', this.postedIn)
        }

        return formData;
    }

}