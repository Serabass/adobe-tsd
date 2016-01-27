module AfterEffects {

    export interface Layer<T> extends Duplicable<T>, Removable, Movable<CompItem> {
        active:boolean;
        adjustmentLayer:boolean;
        audioActive:boolean;
        audioEnabled:boolean;
        autoOrient:AutoOrientType;
        blendingMode:BlendingMode;
        canSetCollapseTransformation:boolean;
        canSetEnabled:boolean;
        canSetTimeRemapEnabled:boolean;
        collapseTransformation:boolean;
        comment:string;
        containingComp:CompItem;
        effectsActive:boolean;
        elided:boolean;
        enabled:boolean;
        environmentLayer:boolean;
        frameBlending:boolean;
        frameBlendingType:FrameBlendingType;
        guideLayer:boolean;
        hasAudio:boolean;
        hasTrackMatte:boolean;
        hasVideo:boolean;
        height:number;
        index:Int;
        inPoint:number;
        isEffect:boolean;
        isMask:boolean;
        isModified:boolean;
        isNameFromSource:boolean;
        isNameSet:boolean;
        isTrackMatte:boolean;
        label:number;
        locked:boolean;
        matchName:string;
        motionBlur:boolean;
        name:string;
        nullLayer:boolean;
        numProperties:number;
        outPoint:Float;
        parent:Layer;
        parentProperty:any;
        preserveTransparency:boolean;
        propertyDepth:number;
        propertyType:PropertyType;
        quality:any;
        samplingQuality:any;
        selected:boolean;
        selectedProperties:(Property|PropertyGroup)[];
        shy:boolean;
        solo:boolean;
        source:FootageItem;
        startTime:number;
        stretch:number;
        threeDLayer:boolean;
        threeDPerChar:boolean;
        time:number;
        timeRemapEnabled:boolean;
        trackMatteType:TrackMatteType;
        width:number;

        activeAtTime(time:Float):boolean;
        addProperty();
        applyPreset(file:File):void;
        audioActiveAtTime(time:Float):boolean;
        calculateTransformFromPoints();
        canAddProperty():boolean;
        compPointToSource();
        copyToComp(intoComp:CompItem):void;
        getRendererGUID();
        mask():PropertyGroup;
        moveAfter(layer:Layer):void;
        moveBefore(layer:Layer):void;
        moveToBeginning():void;
        moveToEnd():void;
        openInViewer():Viewer;
        property(prop:PropertyKey):Property;
        propertyGroup();
        replaceSource();
        setParentWithJump():void;
        setParentWithJump(newParent:Layer):void;
        sourcePointToComp();
        sourcePointToComp(newParent:Layer);
        sourceRectAtTime();
    }

    export interface TextLayer extends Layer<TextLayer> {

    }

    export interface AVLayer extends Layer<AVLayer> {

    }

    export interface ShapeLayer extends Layer<ShapeLayer> {

    }

    export interface LightLayer extends Layer<LightLayer> {
        color:Property;
        lightType:LightType;
    }

    export interface CameraLayer extends Layer<CameraLayer> {

    }

    export interface SolidSource extends Layer<CameraLayer> {
        color:RGBColor;
    }

}