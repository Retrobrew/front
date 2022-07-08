import {User} from "@/object/User";
import {PostController} from "@/controller/PostController";

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
            await PostController.getAuthor(json.author.uuid).then(author => author),
        );
    }
}
