import {Group} from "@/object/group";

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
        })

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

    static getUserGroups(): Promise<Array<Group>> {
        const token = sessionStorage.getItem('access_token');

        return fetch(
            `${process.env.VUE_APP_AUTH_API_URL}/my/groups`,
            {
                headers: {Authorization: "Bearer " + token}
            }
        )
            .then(response => response.json())
            .then(json => {
                const groups: Group[] = [];
                json.forEach((group: any) => {
                    groups.push(Group.createFromApi(group))
                })

                return groups;
            })

    }

    static quitGroup(groupUuid: string): Promise<void> {
        return new Promise(() =>{})
    }

}