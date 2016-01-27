module AfterEffects {

    export interface Item extends Removable {
        name:string;
        comment:string;
        id:number;
        label:number;
        parentFolder:FolderItem;
        selected:boolean;
        typeName:string;
    }

    export interface Application {
        activeViewer:Viewer;
        areToolTipsEnabled:boolean;
        buildName:string;
        buildNumber:number;
        ccUserGuid:string;
        ccUserName:string;
        effects:Effect[];
        exitAfterLaunchAndEval:boolean;
        exitCode:number;
        isAnalyticsEnabled:boolean;
        isProfessionalVersion:string;
        isRenderEngine:boolean;
        isUISuppressed:boolean;
        isWatchFolder:boolean;
        isoLanguage:string;
        language:any;
        memoryInUse:number;
        preferences:Preferences;
        project:Project;
        reportErrorOnMissingFrame:boolean;
        saveProjectOnCrash:boolean;
        settings:Settings;
        version:string;

        activate():void;
        beginSuppressDialogs():void;
        beginUndoGroup(undoString:String):void;
        cancelTask(taskID:number):void;
        cancelTimeout();
        endSuppressDialogs(alert:boolean):void;
        endUndoGroup():void;
        endWatchFolder():void;
        executeCommand();
        findMenuCommandId();
        getDebugDatabase();
        getenv();
        hasDebugDatabaseValue();
        injectPresetAnimation();
        log();
        newProject();
        objectToJSON();
        open();
        openFast();
        openTemplate();
        parseSwatchFile();
        pauseWatchFolder();
        purge(target:PurgeTarget);
        quit();
        scheduleTask();
        setDebugDatabase();
        setMemoryUsageLimits();
        setSavePreferencesOnQuit();
        setTimeout();
        themeColor();
        watch();
        watchFolder();
    }

    export interface AfterEffects {
        AfterEffectsAppName:string;
        AfterEffectsTargetName:string;
        AfterEffectVersion:string;
        BridgeTargetName:string;

        applyPreset();
        eventHandler();
        executeScript();
        fileArrayToString();
        getExtension();
        open();
        quit();
    }

    export interface Preferences {
        deletePref();
        getPrefAsBool();
        getPrefAsFloat();
        getPrefAsLong();
        getPrefAsString();
        havePref();
        reload();
        savePrefAsBool();
        savePrefAsFloat();
        savePrefAsLong();
        savePrefAsString();
        saveToDisk();
    }

    export interface Project {
        activeItem:CompItem;
        bitsPerChannel:BitsPerChannel;
        displayStartFrame:number; // 0 or 1
        feetFramesFilmType:FeetFramesFilmType;
        file:File;
        footageTimecodeDisplayStartType:FootageTimecodeDisplayStartType;
        framesCountType:FramesCountType;
        framesUseFeetFrames:boolean;
        items:ItemCollection;
        linearBlending:boolean;
        numItems:number;
        renderQueue:RenderQueue;
        revision:number;
        rootFolder:FolderItem;
        selection:CompItem;
        timeDisplayType:TimeDisplayType;
        transparencyGridThumbnails:boolean;
        xmpPacket:string;

        autoFixExpressions(oldText:string, newText:string):void;
        close(closeOptions:CloseOptions):boolean;
        consolidateFootage():number;
        createComp():CompItem;
        importFile(importOptions:ImportOptions);
        importFileWithDialog():Item[];
        importPlaceholder();
        item();
        itemByID();
        placeAsset();
        reduceProject();
        removeUnusedFootage();
        save();
        saveWithDialog();
        serializeToXML();
        showWindow();
    }

    export interface Settings {
        saveSetting(sectionName:string, keyName:string, value:string):void;
        getSetting(sectionName:string, keyName:string):string;
        haveSetting(sectionName:string, keyName:string):boolean;
    }

}