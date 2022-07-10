import {Friend} from "@/object/Friend";
import {FriendRequest} from "@/object/FriendRequest";

export class FriendshipController {
    static unfriend(friendUuid: string): Promise<any> {
        const token = sessionStorage.getItem('access_token');
        return fetch(`${process.env.VUE_APP_AUTH_API_URL}/friends/${friendUuid}/unfriend`, {
            method: "POST",
            headers: { Authorization: "Bearer " + token }
        });
    }

    static requestFriendship(friendUuid: string): Promise<string> {
        const token = sessionStorage.getItem('access_token');
        return fetch(`${process.env.VUE_APP_AUTH_API_URL}/users/${friendUuid}/friendRequest`, {
            method: "POST",
            headers: { Authorization: "Bearer " + token }
        }).then(response => {
            return response.text()
        })
    }

    static cancelRequest(friendRequest: string): Promise<any> {
        const token = sessionStorage.getItem('access_token');
        return fetch(`${process.env.VUE_APP_AUTH_API_URL}/friendRequests/sent/${friendRequest}/cancel`, {
            method: "POST",
            headers: { Authorization: "Bearer " + token }
        });
    }

    static getMyFriends(): Promise<Array<Friend>> {
        const token = sessionStorage.getItem('access_token');
        const friends: Array<Friend> = [];

        return fetch(`${process.env.VUE_APP_AUTH_API_URL}/my/friends`, {
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
                    let picture =  '/assets/avatar-placeholder.png';
                    if(json.picture){
                        picture = json.picture;
                    }
                    const friend = new Friend(
                        item.username,
                        item.country,
                        picture,
                        item.userUuid
                    );
                    friends.push(friend);
                })
                return friends
            })
    }

    static getFriendRequests(): Promise<Array<FriendRequest>> {
        const token = sessionStorage.getItem('access_token');
        const requests: Array<FriendRequest> = [];

        return fetch(`${process.env.VUE_APP_AUTH_API_URL}/friendRequests/received`, {
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
                    const request = FriendRequest.createFromApi(item);
                    requests.push(request);
                })

                return requests;
            })
    }

    static acceptRequest(requestId: number): Promise<boolean> {
        const token = sessionStorage.getItem('access_token');

        return fetch(`${process.env.VUE_APP_AUTH_API_URL}/friendRequests/received/${requestId}/accept`, {
            method: "POST",
            headers: { Authorization: "Bearer " + token }
        }).then(response => {
            return response.status === 201
        })
    }

    static declineRequest(requestId: number): Promise<boolean> {
        const token = sessionStorage.getItem('access_token');

        return fetch(`${process.env.VUE_APP_AUTH_API_URL}/friendRequests/received/${requestId}/decline`, {
            method: "POST",
            headers: { Authorization: "Bearer " + token }
        })
            .then(response => {
                return response.status === 201
            })
    }
}