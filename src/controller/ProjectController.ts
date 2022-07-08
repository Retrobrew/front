import {TreeNode} from "@/object/TreeNode";

class ProjectController {

    static createProject(projectId: string, language: string = "rust"): Promise<string> {
        return fetch(
            `${process.env.VUE_APP_PROJECT_API_URL}/create?id=${projectId}&template=${language}`
        ).then((res) => {
            return res.json()
        })
    }

    static createFile(formData: FormData): Promise<string> {
        return fetch(
            `${process.env.VUE_APP_PROJECT_API_URL}/new-file`,
            {
                method: 'POST',
                body: formData
            }
        ).then((res) => {
            return res.text()
        })
    }

    static deleteFile(projectId: string, file: string): Promise<boolean> {
        return fetch(
            `${process.env.VUE_APP_PROJECT_API_URL}/delete?id=${projectId}&path=/${file}`
        ).then((res) => {
            return res.status === 200;
        })
    }

    static getProjectTree(projectId: string, versionNumber: string): Promise<Array<TreeNode>> {

        return fetch(
            `${process.env.VUE_APP_PROJECT_API_URL}/explorer?id=${projectId}&version=${versionNumber}`,
        ).then((res) => {
            return res.json()
        }).then( (json) => {
            const files: Array<TreeNode> = [];
            json.children.forEach((file: any) => {
                const node = TreeNode.createFromApi(file)
                files.push(node);
            })
            const rootNode = new TreeNode(
                "src",
                json.type,
                files
            )
            return [rootNode]
        });
    }

    static getFileContent(
        projectId: string,
        filename: string,
        version: string
    ): Promise<any> {
        return fetch(
            `${process.env.VUE_APP_PROJECT_API_URL}/viewer?id=${projectId}&path=/${filename}&version=${version}`,
        ).then((res) => {
            return res.json()
        }).catch(reason => console.error(reason));
    }

    static compileProject(projectId: string, compiler: string): Promise<string> {
        //retourne les logs, compile le projet
        return fetch(
            `${process.env.VUE_APP_PROJECT_API_URL}/compile?id=${projectId}&compiler=${compiler}`
        ).then(res => res.text())
    }

   static testProject(projectId: string): Promise<string> {
       //retourne l'adresse où le code peut être executé/testé : http://id_du_projet.retrobrew.fr/
        return fetch(
            `${process.env.VUE_APP_PROJECT_API_URL}/execute?id=${projectId}`
        ).then(res => {
            return res.text()
        });

   }

   static saveFile(projectId: string, filename: string, filecontent: string): Promise<boolean> {
        const formData: FormData = new FormData();
        formData.append('project', projectId);
        formData.append('file', `/${filename}`);
        formData.append('content',filecontent );
        return fetch(
           `${process.env.VUE_APP_PROJECT_API_URL}/write`,
           {
               method: 'POST',
               body: formData,
           }
        ).then(res => {
           if (res.status != 200) {
               console.error(res.text())

               return false;
           }
           return true
        });

   }

   static createArchive(projectId: string, versionNb: string): Promise<string> {
       return fetch(
           `${process.env.VUE_APP_PROJECT_API_URL}/archive?id=${projectId}&version=${versionNb}`
       ).then(res => {
           return res.text()
       });
   }

   static getVersions(projectId: string): Promise<string> {
       return fetch(
           `${process.env.VUE_APP_PROJECT_API_URL}/version?id=${projectId}`
       ).then(res => {
           console.log(res)
           return res.text()
       });
   }
}

export default ProjectController;