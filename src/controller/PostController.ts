import {Post} from "@/object/Post";
import {User} from "@/object/User";
import {Comment} from "@/object/Comment";

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
                json.author,
                json.content,
                json.media,
                json.commentsNb,
                json.createdAt,
                json.lastUpdatedAt,
                json.postedIn,
                json.liked,
                json.likesNb
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
                json.email,
                json.username,
                json.dateOfBirth,
                json.country,
                json.sexe,
                json.picture
            );
        });
    }

    static getComments(postUuid: string): Promise<Array<Comment>> {
        const token = sessionStorage.getItem('access_token');

        return fetch(
            `${process.env.VUE_APP_AUTH_API_URL}/posts/${postUuid}/comments`,
            {
                headers: { Authorization: "Bearer " + token }
            }
        ).then(response => {
            if(response.status !== 200) {
                throw new Error("Error while trying to fetch comments");
            }

            return response.json();
        }).then(async json => {
            const comments: Array<Comment> = [];

            for (const item of json) {
                comments.push(await Comment.createFromApi(item));
            }

            return comments;
        })
    }

    static commentPost(postUuid: string, content: string): Promise<boolean> {
        const token = sessionStorage.getItem('access_token');
        return fetch(
            `${process.env.VUE_APP_AUTH_API_URL}/posts/${postUuid}/comment`,
            {
                method: 'POST',
                headers: {
                    Authorization: "Bearer " + token,
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    content: content,
                    createdAt: new Date(),
                })
            }
        ).then(res => {
            return res.status === 200;
        })
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
