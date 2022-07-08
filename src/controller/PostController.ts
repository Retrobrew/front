import {Post} from "@/object/Post";
import {User} from "@/object/User";

export class PostController {
    static getPost(uuid: string): Promise<Post> {
        const token = sessionStorage.getItem('access_token');

        return fetch(`${process.env.VUE_APP_AUTH_API_URL}/posts/${uuid}`,
    {
            headers: { Authorization: "Bearer " + token }
        })
        .then(response => {
            if(response.status !== 200) {
                throw new Error("Error while trying to fetch post");
            }

            return response.json();
        })
        .then(async json => {
            return new Post(
                json.uuid,
                json.title,
                await this.getAuthor(json.author).then(author => author),
                json.content,
                json.media,
                // json.commentsNb,
                7,
                json.createdAt,
                json.lastUpdatedAt,
                json.postedIn
            );
        });
    }

    static getAuthor(uuid: string): Promise<User> {
        const token = sessionStorage.getItem('access_token');

        return fetch(`${process.env.VUE_APP_AUTH_API_URL}/users/${uuid}`,
    {
            headers: { Authorization: "Bearer " + token }
        })
        .then(response => {
            if(response.status !== 200) {
                throw new Error("Error while trying to fetch author");
            }

            return response.json();
        })
        .then(json => {
            return new User(
                json.uuid,
                json.username,
                json.email,
                json.password,
                json.createdAt,
                json.lastUpdatedAt,
                json.role
            );
        });
    }

    static likePost(postUuid: string): Promise<boolean> {
        const token = sessionStorage.getItem('access_token');

        return fetch(
            `${process.env.VUE_APP_AUTH_API_URL}/posts/${postUuid}/like`,
            {
                method: 'PUT',
                headers: {
                    Authorization: "Bearer " + token,
                }
            }
        ).then(res => {
            return res.status === 200;
        })
    }
    static unlikePost(postUuid: string): Promise<boolean> {
        const token = sessionStorage.getItem('access_token');

        return fetch(
            `${process.env.VUE_APP_AUTH_API_URL}/posts/${postUuid}/unlike`,
            {
                method: 'PUT',
                headers: {
                    Authorization: "Bearer " + token,
                }
            }
        ).then(res => {
            return res.status === 200;
        })
    }
}
