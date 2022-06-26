import {Post} from "@/object/Post";

export class FeedController {
    static getMyFeed(): Promise<Array<Post>> {
        const token = sessionStorage.getItem('access_token');
        const posts: Array<Post> = [];

        return fetch(
            `${process.env.VUE_APP_AUTH_API_URL}/feeds/my`,
            {
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
                    posts.push(Post.createFromApi(item));
                })

                return posts;
            })
    }

    static getHomeFeed(): Promise<Array<Post>> {
        const posts: Array<Post> = [];

        return fetch(
            `${process.env.VUE_APP_AUTH_API_URL}/feeds/home`
        )
            .then(response => {
                if(response.status !== 200) {
                    throw new Error("Error while trying to fetch posts");
                }

                return response.json();
            })
            .then(json => {
                json.forEach((item: any) => {
                    posts.push(Post.createFromApi(item));
                })

                return posts;
            })
    }

    static createPost(post: Post): Promise<string> {
        const token = sessionStorage.getItem('access_token');
        console.log(post)
        const formData = post.generateFormData();

        return fetch(
            `${process.env.VUE_APP_AUTH_API_URL}/posts/`,
            {
                method: 'POST',
                body: formData,
                headers: {
                    Authorization: "Bearer " + token,
                }
            }
        ).then(res => res.json())

    }

    static deletePost(postUuid: string): Promise<void> {
        const token = sessionStorage.getItem('access_token');
        return fetch(
            `${process.env.VUE_APP_AUTH_API_URL}/posts/${postUuid}`,
            {
                method: 'DELETE',
                headers: {Authorization: "Bearer " + token }
            }
        ).then(res => {
            if(res.status !== 200){
                throw new Error('Not deleted')
            }
        }).catch(reason => console.error(reason))
    }

    static getGroupFeed(groupUuid: string): Promise<Array<Post>> {
        const token = sessionStorage.getItem('access_token');
        return fetch(
            `${process.env.VUE_APP_AUTH_API_URL}/feeds/group/${groupUuid}`,
            {
                headers: {Authorization: "Bearer " + token }
            }
        )
            .then(res => res.json())
            .then(json => {
                const feed: Array<Post> = [];

                json.forEach((item: any) => {
                    feed.push(Post.createFromApi(item));
                })

                return feed;
            })
    }
}