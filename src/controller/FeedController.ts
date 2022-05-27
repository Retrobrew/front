import {Post} from "@/object/Post";

export class FeedController {
    static getMyFeed(): Promise<Array<Post>> {
        const token = sessionStorage.getItem('access_token');
        const posts: Array<Post> = [];

        return fetch(`${process.env.VUE_APP_AUTH_API_URL}/feeds/my`,{
            headers: { Authorization: "Bearer " + token }
        })
            .then(response => {
                if(response.status !== 200) {
                    throw new Error("Error while trying to fetch posts");
                }

                return response.json();
            })
            .then(json => {
                json.forEach((item: any) => {
                    const post = new Post(
                        item.uuid,
                        item.title,
                        item.author,
                        item.content,
                        item.media,
                        0,
                        item.createdAt,
                        item.lastUpdatedAt
                    )
                    posts.push(post);
                })

                return posts;
            })
    }

    static getHomeFeed(): Promise<Array<Post>> {
        const posts: Array<Post> = [];

        return fetch(`${process.env.VUE_APP_AUTH_API_URL}/feeds/home`)
            .then(response => {
                if(response.status !== 200) {
                    throw new Error("Error while trying to fetch posts");
                }

                return response.json();
            })
            .then(json => {
                json.forEach((item: any) => {
                    const post = new Post(
                        item.uuid,
                        item.title,
                        item.author,
                        item.content,
                        item.media,
                        item.commentsNb,
                        item.createdAt,
                        item.lastUpdatedAt
                    )
                    posts.push(post);
                })

                return posts;
            })
    }
}