module AfterEffects {

    export interface Collection<T> extends Array<T> {

    }

    export interface ItemCollection extends Collection<Item> {
        addComp(name:string, width:Int, height:Int, pixelAspect:Float, duration:Float, frameRate:Float):CompItem;
        addFolder(name:string):FolderItem;
    }

    export interface OMCollection extends Collection<OutputModule> {

    }

    export interface RQItemCollection extends Collection<RenderQueueItem> {

    }

    export interface LayerCollection extends Array {
        add(item:Layer):AVLayer;
        add(item:Layer, duration:number):AVLayer;
        addBoxText():TextLayer;
        addBoxText(sourceText:string):TextLayer;
        addCamera(name:string, centerPoint:Vector3D):CameraLayer;
        addLight(name:string, centerPoint:Vector3D):LightLayer;
        addNull():AVLayer;
        addNull(duration:number):AVLayer;
        addShape():ShapeLayer;
        addSolid(color:RGBColor, name:string, width:number, height:number, pixelAspect:number, duration:number):AVLayer;
        addSolid(color:RGBColor, name:string, width:number, height:number, pixelAspect:number):AVLayer;
        addText():TextLayer;
        addText(sourceText:string):TextLayer;
        byName(name:string):Layer;
        precompose(layerIndices:number[], name:string, moveAllAttributes:boolean):CompItem;
        precompose(layerIndices:number[], name:string):CompItem;
    }

}