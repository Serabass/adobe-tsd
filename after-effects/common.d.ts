module AfterEffects {

    declare type PropertyKey = string | number;

    export interface Duplicable<T> {
        duplicate():T;
    }

    export interface Removable {
        remove():void;
    }

    export interface Movable<T> {
        moveTo(target:T):void;
    }

    export interface Error {
        start:number;
        end:number;
        line:number;
        number:number;
        fileName:string;
        message:string;
        name:string;
        source:any;
    }

    export interface Screen {
        left:number;
        top:number;
        right:number;
        bottom:number;
        primary:boolean;

        toString():string;
    }

    export interface Helper {
        appEncoding:string;

        build:string;
        buildDate:Date;

        decimalPoint:string;
        dictionary:any;
        engineName:string;
        error:Error;

        fileName:string;
        flags:number;

        global:any;
        hiresTime:number;
        includePath:string;
        level:number;
        line:number;

        locale:string;
        localize:boolean;
        memCache:number;
        os:string;
        screens:Screen[];

        stack:any;
        strict:boolean;

        version:string;

        _ext_AEFT:any;
        _ext_CORE:any;

        about();
        bp();
        colorPicker():number;
        evalFile();
        gc():void;
        getenv(envVariable:string);
        list():string;

        // Very Interesting
        listLO():string;
        setenv(envVariable:string, value:any);
        sleep(time:number);
        summary();
        write(...objs:any[]);
        writeln(...objs:any[]);

    }

    export interface BridgeTalk {

    }

    export interface System {
        machineName:string;
        osName:string;
        osVersion:string;
        userName:string;

        callSystem();
    }

    export interface Reflection {
        description:string;
        help:string;
        methods:string[];
        name:string;
        properties:string[];
        reflect:Reflection;
        sampleCode:any;
        sampleFile:any;
        staticMethods:string[];
        staticProperties:string[];

        find();
    }

}
