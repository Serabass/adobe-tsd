module AfterEffects {

    export interface OutputModule {
        file:File;
        postRenderAction:PostRenderAction;
        remove():void;
        saveAsTemplate(name:string);
    }

    export interface OMCollection extends Array<OutputModule> {

    }

    export interface RenderQueueItem {
        numOutputModules:number;
        render:boolean;
        startTime:number;
        elapsedSeconds:number;
        timeSpanStart:number;
        timeSpanDuration:number;
        skipFrames:number;
        comp:CompItem;
        outputModules:OMCollection;
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
        showWindow();
        stopRendering();
    }

}