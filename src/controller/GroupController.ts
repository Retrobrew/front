import {Group} from "@/object/Group";
import {HTTPStatus} from "@/utils/HTTPStatus";
import {UserProfileGroup} from "@/object/UserProfileGroup";

export class GroupController {
    static createGroup(group: Group, icon?: File, banner?: File): Promise<string> {
        const token = sessionStorage.getItem('access_token');
        const formData = group.generateFormData();
        if(icon){
            formData.append('icon', icon);
        }
        if(banner){
            formData.append('banner', banner);
        }

        return fetch(
            `${process.env.VUE_APP_AUTH_API_URL}/groups`,
            {
                method: 'POST',
                headers: {
                    Authorization: "Bearer " + token,
                },
                body: formData
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

    static getUserGroups(userUuid?: string): Promise<Array<UserProfileGroup>> {
        const token = sessionStorage.getItem('access_token');
        let url = `${process.env.VUE_APP_AUTH_API_URL}/my/groups`;
        if(userUuid) {
            url = `${process.env.VUE_APP_AUTH_API_URL}/users/${userUuid}/groups`;
        }
            return fetch(
            url,
            {
                headers: {Authorization: "Bearer " + token}
            }
        )
            .then(response => response.json())
            .then(json => {
                const groups: UserProfileGroup[] = [];
                json.forEach((group: any) => {
                    const groupDto = new UserProfileGroup(
                        group.uuid,
                        group.name,
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
            `${process.env.VUE_APP_AUTH_API_URL}/groups`,
            {
                headers: {Authorization: "Bearer " + token}
            }
        )
            .then(response => response.json())
            .then(json => {
                const groups: UserProfileGroup[] = [];
                json.forEach((group: any) => {
                    const groupDto = new UserProfileGroup(
                        group.uuid,
                        group.name,
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
                // console.error("Could not quit group")
            }
        }).catch(error => {
            // console.error(error.message)
        })

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
            return response.status === HTTPStatus.ACCEPTED;

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
            return response.status === HTTPStatus.ACCEPTED;
        })

    }

    static uploadIcon(icon: File, groupUuid: string): Promise<void> {
        const token = sessionStorage.getItem('access_token');
        const formData = new FormData();
        formData.append('icon', icon);

        return fetch(
            `${process.env.VUE_APP_AUTH_API_URL}/groups/${groupUuid}/icon`,
            {
                method: 'POST',
                headers: {
                    Authorization: "Bearer " + token,
                },
                body: formData
            }
        ).then(response => {

        }).catch((error) => error.message);
    }

}
