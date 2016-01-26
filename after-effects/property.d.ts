module AfterEffects {


    export interface PropertyGroup {

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
        maxValue:any;
        minValue:any;
        name:string;
        parentProperty:Property;
        propertyDepth:number;
        propertyType:PropertyType;
        propertyValueType:PropertyValueType;
        reflect:Reflection;
        selected:boolean;
        selectedKeys:any[];
        separationDimension:any;
        separationLeader:any;
        unitsText:string;
        value:any;

        addKey();
        getSeparationFollower();
        isInterpolationTypeValid():boolean;
        keyInInterpolationType();
        keyInSpatialTangent();
        keyInTemporalEase();
        keyOutInterpolationType();
        keyOutSpatialTangent();
        keyOutTemporalEase();
        keyRoving();
        keySelected();
        keySpatialAutoBezier();
        keySpatialContinuous();
        keyTemporalAutoBezier();
        keyTemporalContinuous();
        keyTime();
        keyValue();
        nearestKeyIndex();
        numKeys();
        removeKey();
        valueAtTime():any;
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