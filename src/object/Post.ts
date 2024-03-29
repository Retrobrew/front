import {User} from "@/object/User";
import {Group} from "@/object/Group";

export class Post {
    public uuid: string;
    public title: string;
    public author: User | null;
    public content: string;
    public media: File | null;
    public comments: number;
    public createdAt: Date | null;
    public lastUpdatedAt: Date | null;
    public postedIn: Group | undefined;
    public likedByUser: boolean;
    public likesNb: number;

    constructor(
        uuid: string,
        title: string,
        author: User | null,
        content: string,
        media: File | null,
        comments: number,
        createdAt: Date,
        lastUpdatedAt: Date,
        postedIn: Group,
        liked: boolean,
        likesNb: number
    ) {
        this.uuid = uuid;
        this.title = title;
        this.author = author;
        this.content = content;
        this.media = media;
        this.comments = comments;
        this.createdAt = createdAt;
        this.lastUpdatedAt = lastUpdatedAt;
        this.postedIn = postedIn;
        this.likedByUser = liked;
        this.likesNb = likesNb;
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
            new Date(),
            Group.homeGroup(),
            false,
            0
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
            formData.append('postedIn', this.postedIn.uuid)
        }

        return formData;
    }

    static createFromApi(json: any): Post {
        return new Post(
            json.uuid,
            json.title,
            json.author,
            json.content,
            json.media,
            json.commentsNb,
            json.createdAt,
            json.lastUpdatedAt,
            json.postedIn,
            json.likedByUser,
            json.likesNb
        )
    }

}