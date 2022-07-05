import {TreeNode} from "@/object/TreeNode";

class ProjectController {

    static createProject(projectId: number): Promise<string> {
        //Que du GET
        // /create/ID
        // /create?id=ID_DU_PROJET&template=(nom_du_language)
        //  nom_du_langage = rust
        //

        return fetch(
            `${process.env.VUE_APP_PROJECT_API_URL}/create?id=${projectId}`
        ).then((res) => {
            return res.json()
        })
    }

    static getProjectTree(projectId: number): Promise<Array<TreeNode>> {

        return fetch(
            `${process.env.VUE_APP_PROJECT_API_URL}/explorer?id=${projectId}`,
        ).then((res) => {
            return res.json()
        }).then( (json) => {
            const files: Array<TreeNode> = [];
            const node = TreeNode.createFromApi(json)
            files.push(node);

            return files
        });
    }

    static getFileContent(projectId: number, filename: string): Promise<any> {
        return fetch(
            `${process.env.VUE_APP_PROJECT_API_URL}/viewer?id=${projectId}&path=/${filename}`,
        ).then((res) => {
            return res.json()
        }).catch(reason => console.error(reason));
    }

    static compileProject(projectId: number, compiler: string): Promise<string> {
        //retourne les logs, compile le projet
        return fetch(
            `${process.env.VUE_APP_PROJECT_API_URL}/compile?id=${projectId}&compiler=${compiler}`
        ).then(res => res.text())
    }

   static testProject(projectId: number): Promise<string> {
       //retourne l'adresse où le code peut être executé/testé : http://id_du_projet.retrobrew.fr/
        return fetch(
            `${process.env.VUE_APP_PROJECT_API_URL}/execute?id=${projectId}`
        ).then(res => {
            return res.text()
        });

   }

   static saveFile(filename: string, filecontent: string): Promise<boolean> {
        //TODO la route n'existe pas
        return new Promise(() => true )
   }
}

export default ProjectController;