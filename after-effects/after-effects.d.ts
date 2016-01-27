/// <reference path="enums.d.ts" />

// http://blogs.adobe.com/aftereffects/files/2012/06/After-Effects-CS6-Scripting-Guide.pdf

module AfterEffects {

    export interface FootageItem extends Item {

    }

    export interface Shape {
        closed:boolean;
        vertices:Vector3D[];
        inTangents:Vector2D[];
        outTangents:Vector2D[];
        featherSegLocs:Float[];
        featherRelSegLocs:number[];
        featherRadii:any;
        featherInterps:any;
        featherTensions:Float[];
        featherTypes:Int[];
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

    export interface CompItem extends Item, Duplicable<CompItem> {
        activeCamera:CameraLayer;
        bgColor:RGBColor;
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
        layers:LayerCollection;
        motionBlur:boolean;
        motionBlurAdaptiveSampleLimit:number;
        motionBlurSamplePerFrame:number;
        name:string;
        numLayers:number;
        pixelAspect:number;
        preserveNestedFrameRate:boolean;
        preserveNestedResolution:boolean;
        proxySource:FootageSource;
        renderer:string;
        renderers:string[];
        resolutionFactor:Vector2D;
        selectedLayers:TextLayer[];
        selectedProperties:Property[];
        shutterAngle:number;
        shutterPhase:number;
        time:number;
        usedIn:CompItem[];
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