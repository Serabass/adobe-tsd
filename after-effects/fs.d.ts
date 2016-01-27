module AfterEffects {

    export interface FileSpource {
        file:File;
        missingFootagePath:string;
        reload():void;
    }

    export interface FolderItem extends Removable {
        comment:string;
        id:number;
        item();
        items:ItemCollection;
        label:any;
        name:string;
        numItems:number;
        parentFolder:FolderItem;
        typeName:string;
    }

    export interface File {

    }

    export interface Folder {

    }

}