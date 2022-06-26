export class PostController {
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