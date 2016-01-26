module AfterEffects {

    export interface OutputModule {
        file:File;
        postRenderAction:PostRenderAction;
        remove():void;
        saveAsTemplate(name:string);
    }

    export interface OMCollection extends Array<OutputModule> {

    }

    export interface RenderQueueItem extends Duplicable<RenderQueueItem>, Removable {
        numOutputModules:number;
        render:boolean;
        startTime:number;
        elapsedSeconds:number;
        timeSpanStart:number;
        timeSpanDuration:number;
        skipFrames:number;
        comp:CompItem;
        outputModules:OMCollection;
        logType:LogType;
        onStatusChanged:string;
        status:RQItemStatus;
        templates:string[];
        outputModule(index:number):OutputModule;
        saveAsTemplate(name:string):void;
        applyTemplate(templateName:string);
    }

    export interface RQItemCollection {

    }

    export interface RenderQueue {
        firstError:string;
        item();
        items:RQItemCollection;
        lastError:string;
        numItems:number;
        pauseRendering();
        render();
        renderAsync();
        rendering:boolean;
        showWindow(doShow:boolean);
        stopRendering();
    }

}