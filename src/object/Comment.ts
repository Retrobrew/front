import {User} from "@/object/User";
import {PostController} from "@/controller/PostController";
import APIController from "@/controller/APIController";

export class Comment {
    public uuid: String;
    public content: String;
    public author: User;

    constructor(
        uuid: String,
        content: String,
        author: User) {
        this.uuid = uuid;
        this.content = content;
        this.author = author;
    }

    static async createFromApi(json: any): Promise<Comment> {
        return new Comment(
            json.uuid,
            json.content,
            await APIController.getUser(json.author.uuid).then(author => author),
        );
    }
}
