export class TreeNode {
    public name: string;
    public type: string;
    public children: Array<TreeNode>;

    constructor(name: string, type: string, children: Array<TreeNode>) {
        this.name = name;
        this.type = type;
        this.children = children;
    }

    static createFromApi(json: any): TreeNode {
        const children: Array<TreeNode> = [];
        if(json.children && json.children.length > 0) {
            json.children.forEach((child: any) => {
                children.push(this.createFromApi(child))
            })
        }

        return new TreeNode(
            json.name,
            json.type,
            children
        )
    }
}