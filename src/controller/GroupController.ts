import {Group} from "@/object/Group";
import {HTTPStatus} from "@/utils/HTTPStatus";
import {UserProfileGroup} from "@/object/UserProfileGroup";

export class GroupController {
    static createGroup(group: Group): Promise<string> {
        const token = sessionStorage.getItem('access_token');

        return fetch(
            `${process.env.VUE_APP_AUTH_API_URL}/groups`,
            {
                method: 'POST',
                headers: {
                    Authorization: "Bearer " + token,
                    "Content-type": "application/json"
                },
                body: JSON.stringify(group)
            }
        ).then(response => {
            return response.json()
        }).catch((error) => error.message);

    }

    static getGroup(groupUuid: string): Promise<Group> {
        const token = sessionStorage.getItem('access_token');

        return fetch(
            `${process.env.VUE_APP_AUTH_API_URL}/groups/${groupUuid}`,
            {
                headers: {Authorization: "Bearer " + token}
            }
        )
            .then(response => response.json())
            .then(json => {
                return Group.createFromApi(json)
            })

    }

    static getUserGroups(): Promise<Array<UserProfileGroup>> {
        const token = sessionStorage.getItem('access_token');

        return fetch(
            `${process.env.VUE_APP_AUTH_API_URL}/my/groups`,
            {
                headers: {Authorization: "Bearer " + token}
            }
        )
            .then(response => response.json())
            .then(json => {
                const groups: UserProfileGroup[] = [];
                json.forEach((group: any) => {
                    const groupDto = new UserProfileGroup(
                        group.groupUuid,
                        group.groupName,
                        group.creator
                    );

                    if(group.picture){
                        groupDto.picture = group.picture
                    }

                    groups.push(groupDto)
                })

                return groups;
            })

    }

    static getAllGroups(): Promise<Array<UserProfileGroup>> {
        const token = sessionStorage.getItem('access_token');

        return fetch(
            `${process.env.VUE_APP_AUTH_API_URL}/my/groups`,
            {
                headers: {Authorization: "Bearer " + token}
            }
        )
            .then(response => response.json())
            .then(json => {
                const groups: UserProfileGroup[] = [];
                json.forEach((group: any) => {
                    const groupDto = new UserProfileGroup(
                        group.groupUuid,
                        group.groupName,
                        group.creator
                    );

                    if(group.picture){
                        groupDto.picture = group.picture
                    }

                    groups.push(groupDto)
                })

                return groups;
            })

    }

    static quitGroup(groupUuid: string): Promise<void> {
        const token = sessionStorage.getItem('access_token');

        return fetch(
            `${process.env.VUE_APP_AUTH_API_URL}/groups/${groupUuid}/quit`,
            {
                headers: {Authorization: "Bearer " + token},
                method: 'POST'
            }
        ).then(response => {
            if(response.status !== HTTPStatus.ACCEPTED){
                console.error("Could not quit group")
            }
        }).catch(error => console.error(error.message))

    }

    static joinGroup(groupUuid: string): Promise<boolean> {
        const token = sessionStorage.getItem('access_token');

        return fetch(
            `${process.env.VUE_APP_AUTH_API_URL}/groups/${groupUuid}/join`,
            {
                headers: {Authorization: "Bearer " + token},
                method: 'POST'
            }
        ).then(response => {
            if(response.status !== HTTPStatus.ACCEPTED){
                console.error("Could not join group")
                return false;
            }
            return true;
        })
    }

    static deleteGroup(groupUuid: string): Promise<boolean> {
        const token = sessionStorage.getItem('access_token');
        return fetch(
            `${process.env.VUE_APP_AUTH_API_URL}/groups/${groupUuid}`,
            {
                headers: {Authorization: "Bearer " + token},
                method: 'DELETE'
            }
        ).then(response => {
            if(response.status !== HTTPStatus.ACCEPTED){
                console.error("Could not delete group")
                return false;
            }
            return true;
        })

    }

}