/// <reference path="enums.d.ts" />

// http://blogs.adobe.com/aftereffects/files/2012/06/After-Effects-CS6-Scripting-Guide.pdf

module AfterEffects {

    export interface FootageItem {

    }

    export interface Shape {
        closed:boolean;
        vertices:Vector3D[];
        inTangents:Vector3D[];
        outTangents:Vector3D[];
        featherSegLocs:any;
        featherRelSegLocs:number[];
        featherRadii:any;
        featherInterps:any;
        featherTensions:any;
        featherTypes:any;
        featherRelCornerAngles:any;

    }

    export interface FootageSource {
        hasAlpha:boolean;
        alphaMode:AlphaMode;
        premulColor:number;
        invertAlpha:boolean;
        isStill:boolean;
        fieldSeparationType:FieldSeparationType;
        highQualityFieldSeparation:boolean;
        loop:number;
        removePulldown:PulldownPhase;
        nativeFrameRate;
        displayFrameRate;
        conformFrameRate;
        guessAlphaMode():void;
        guessPulldown(method:PulldownMethod):void;

    }

    export interface CompItem extends Duplicable<CompItem>, Removable {
        activeCamera:any;
        bgColor:RGBColor;
        comment:string;
        counters:boolean;
        displayStartTime:number;
        draft3d:boolean;
        dropFrame:boolean;
        duration:number;
        footageMissing:boolean;
        frameBlending:boolean;
        frameDuration:number;
        frameRate:number;
        hasAudio:boolean;
        hasVideo:boolean;
        height:boolean;
        hideShyLayers:boolean;
        id:number;
        label:number;
        layers:LayerCollection;
        motionBlur:boolean;
        motionBlurAdaptiveSampleLimit:number;
        motionBlurSamplePerFrame:number;
        name:string;
        numLayers:number;
        parentFolder:FolderItem;
        pixelAspect:number;
        preserveNestedFrameRate:boolean;
        preserveNestedResolution:boolean;
        proxySource:any;
        renderer:string;
        renderers:string[];
        resolutionFactor:Vector2D;
        selected:boolean;
        selectedLayers:TextLayer[];
        selectedProperties:Property[];
        shutterAngle:number;
        shutterPhase:number;
        time:number;
        typeName:string;
        usedIn:any;
        useProxy:boolean;
        width:number;
        workAreaDuration:number;
        workAreaStart:number;

        applyPreset();
        getRendererGUID();
        layer();
        openInViewer();
        ramPreviewTest();
        renderFrame();
        saveFrameToPng();
        setProxy();
        setProxyToNone();
        setProxyWithPlaceholder();
        setProxyWithSequence();
        setProxyWithSolid();
    }

    export interface ImportOptions {
        constructor();
        constructor(file:File);
        canImportAs(type:ImportAsType);
        forceAlphabetical:boolean;
        importAs:ImportAsType;
        sequence:boolean;
    }

    export interface ItemCollection {

    }

    export interface ViewOptions {
        channel:any;
        checkerboards:boolean;
        exposure:number;
        fastPreview:any;
        zoom:number;
    }

    export interface View {
        active:boolean;
        options:ViewOptions;

        onSync();
        saveBlittedImageToPng();
        setActive();
        startPlayback();
        stopPlayback();
    }

    export interface Viewer {
        active:boolean;
        activeViewIndex:number;
        maximized:boolean;
        type:ViewerType;
        views:View[];

        setActive();
    }

}