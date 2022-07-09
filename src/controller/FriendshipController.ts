export class FriendshipController {
    static unfriend(friendUuid: string): Promise<any> {
        const token = sessionStorage.getItem('access_token');
        return fetch(`${process.env.VUE_APP_AUTH_API_URL}/friends/${friendUuid}/unfriend`, {
            method: "POST",
            headers: { Authorization: "Bearer " + token }
        });
    }

    static requestFriendship(friendUuid: string): Promise<any> {
        const token = sessionStorage.getItem('access_token');
        return fetch(`${process.env.VUE_APP_AUTH_API_URL}/users/${friendUuid}/friendRequest`, {
            method: "POST",
            headers: { Authorization: "Bearer " + token }
        });
    }
}