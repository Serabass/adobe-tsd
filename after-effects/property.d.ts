module AfterEffects {


    export interface PropertyGroup {
        numProperties:number;
        addProperty(name:string):PropertyBase;
        canAddProperty(name:string):boolean;
        property(index:number);
        property(name:string);
    }

    export interface PropertyBase extends Duplicable<Property>, Removable, CompItem<PropertyGroup>, Movable<number> {
        name:string;
        matchName:string;
        propertyIndex:number;
        propertyDepth:number;
        propertyType:PropertyType;
        parentProperty:Property; // or PropertyBase
        isModified:boolean;
        canSetEnabled:boolean;
        enabled:boolean;
        active:boolean;
        elided:boolean;
        isEffect:boolean;
        isMask:boolean;
        selected:boolean;

        propertyGroup():PropertyGroup;
        propertyGroup(countUp:number):PropertyGroup;
    }

    export interface Property extends PropertyBase {
        active:boolean;
        canSetEnabled:boolean;
        canSetExpression:boolean;
        canVaryOverTime:boolean;
        dimensionsSeparated:boolean;
        elided:boolean;
        enabled:boolean;
        expression:string;
        expressionEnabled:boolean;
        expressionError:string;
        hasMax:boolean;
        hasMin:boolean;
        isEffect:boolean;
        isMask:boolean;
        isModified:boolean;
        isSeprationFollower:boolean;
        isSeparationLeader:boolean;
        isSpatial:boolean;
        isTimeVarying:boolean;
        maxValue:number;
        minValue:number;
        name:string;
        numKeys:number;
        propertyValueType:PropertyValueType;
        reflect:Reflection;
        selected:boolean;
        selectedKeys:number[];
        separationDimension:number;
        separationLeader:Property;
        unitsText:string;
        value:any;

        addKey(time:number);
        getSeparationFollower(dim:number);
        isInterpolationTypeValid(type:KeyframeInterpolationType):boolean;
        keyInInterpolationType(keyIndex:number):KeyframeInterpolationType;
        keyInSpatialTangent(keyIndex:number):number[];
        keyInTemporalEase(keyIndex:number):KeyframeEase[];
        keyOutInterpolationType(keyIndex:number):KeyframeInterpolationType;
        keyOutSpatialTangent(keyIndex:number):number[];
        keyOutTemporalEase(keyIndex:number):KeyframeEase[];
        keyRoving(keyIndex:number):boolean;
        keySelected(keyIndex:number):boolean;
        keySpatialAutoBezier(keyIndex:number):boolean;
        keySpatialContinuous(keyIndex:number):boolean;
        keyTemporalAutoBezier(keyIndex:number):boolean;
        keyTemporalContinuous(keyIndex:number):boolean;
        keyTime(keyIndex:number):number;
        keyTime(markerComment:string):number;
        keyValue(keyIndex:number):number;
        keyValue(markerComment:string):number;
        nearestKeyIndex(time:number):number;
        removeKey(keyIndex:number):void;
        setInterpolationTypeAtKey(keyIndex:number, inType:KeyframeInterpolationType, outType:KeyframeInterpolationType):void;
        setRovingAtKey(keyIndex:number, newVal:boolean):void;
        setSelectedAtKey(keyIndex:number, onOff:boolean):void;
        setSpatialAutoBezierAtKey(keyIndex:number, newVal:boolean):void;
        setSpatialContinuousAtKey(keyIndex:number, newVal:boolean):void;
        setSpatialTangentsAtKey(keyIndex:number, inTangent:number[], outTangent:number[]):void;
        setTemporalAutoBezierAtKey(keyIndex:number, newVal:boolean):void;
        setTemporalContinuousAtKey(keyIndex:number, newVal:boolean):void;
        setTemporalEaseAtKey(keyIndex:number, inTemporalEase:KeyframeEase[], outTemporalEase:KeyframeEase[]):void;
        setValue(value:any):void;
        setValueAtKey(keyIndex:number, value:any):void;
        setValueAtTime(time:number, value:any):void;
        setValuesAtTimes(times:number[], values:any[]):void;
        valueAtTime(time:number):any;
        valueAtTime(time:number, preExpression:boolean):any;
    }

    export interface Effect {
        category:string;
        displayName:string;
        matchName:string;
        version:string;
    }

    export interface KeyframeEase {
        speed:number;
        influence:number;
        constructor(speed:number, influence:number);
    }

}