import {TreeNode} from "@/object/TreeNode";

class ProjectController {
    static getProjectTree(projectId: number): Array<TreeNode> {
        /* TODO problème CORS
        return fetch(
            `${process.env.VUE_APP_PROJECT_API_URL}/explorer?id=${projectId}`,
        ).then((res) => {
            return res.json()
        });

         */
        const res = [{
            "children":[
                {
                    "name":"rom.rs",
                    "type":"file"
                },
                {
                    "children": [{
                        "name":"file.txt",
                        "type":"file"
                    }],
                    "name":"test",
                    "type":"directory"
                }],
            "name":"src",
            "type":"directory"
        }];

        const files: Array<TreeNode> = [];

        res.forEach(item => {
            const node = TreeNode.createFromApi(item)
            files.push(node);
        });

        return files;
    }

    static getFileContent(projectId: number, filename: string): Promise<any> {
        // return fetch(
        //     `${process.env.VUE_APP_PROJECT_API_URL}/viewer?id=${projectId}&path=/${filename}`,
        // ).then((res) => {
        //     return res.json()
        // }).catch(reason => console.error(reason));

        return fetch('/file.json')
            .then((res) => {
                return res.json()
            })
    }

   static runCode(compiler: string, projectId: number): Promise<void> {
        //TODO plus d'info sur l'API : méthode / headers
        // fetch(
        //     `${process.env.VUE_APP_PROJECT_API_URL}/compile?id=${projectId}&compiler=${compiler}`
        // )

        return new Promise(() => {})
   }

   static saveFile(filename: string, filecontent: string): Promise<boolean> {
        //TODO la route n'existe pas
        return new Promise(() => true )
   }
}

export default ProjectController;