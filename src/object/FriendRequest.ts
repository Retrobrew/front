import {Friend} from "@/object/Friend";

export class FriendRequest {
    requestId: number;
    requester: Friend;
    sentAt: Date;
    status: string;


    constructor(
        requestId: number,
        requester: Friend,
        sentAt: Date,
        status: string
    ) {
        this.requestId = requestId;
        this.requester = requester;
        this.sentAt = sentAt;
        this.status = status;
    }

    static createFromApi(json: any): FriendRequest {
        let picture =  '/assets/avatar-placeholder.png';
        if(json.requester.picture){
            picture = json.picture;
        }
        const friend = new Friend(
            json.requester.username,
            "",
            picture,
            json.requester.uuid,
        )

        return new FriendRequest(
            json.id,
            friend,
            json.sentAt,
            json.status
        )
    }
}