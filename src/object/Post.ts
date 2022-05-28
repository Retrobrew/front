import {User} from "@/object/User";

export class Post {
    public uuid: string;
    public title: string;
    public author: User | null;
    public content: string;
    public media: string = "";
    public comments: number;
    public createdAt: Date | null;
    public lastUpdatedAt: Date | null;

    constructor(
        uuid: string,
        title: string,
        author: User | null,
        content: string,
        media: string,
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
            "",
            0,
            new Date(),
            new Date()
        );
    }

}