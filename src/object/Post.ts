export class Post {
    public uuid: string;
    public title: string;
    public author: string;
    public content: string;
    public media: string = "";
    public comments: number;
    public createdAt: Date;
    public lastUpdatedAt: Date;


    constructor(
        uuid: string,
        title: string,
        author: string,
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

}