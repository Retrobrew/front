import {User} from "@/object/User";

export class Post {
    public uuid: string;
    public title: string;
    public author: User;
    public content: string;
    public media: string = "";
    public comments: Array<Post> = [];
    public createdAt: Date;
    public lastUpdatedAt: Date;


    constructor(
        uuid: string,
        title: string,
        author: User,
        content: string,
        media: string,
        comments: Array<Post>,
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

}