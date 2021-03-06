module AfterEffects {

    enum BlendingMode {
        ADD = 5020,
        ALPHA_ADD = 5044,
        CLASSIC_COLOR_BURN = 5019,
        CLASSIC_COLOR_DODGE = 5025,
        CLASSIC_DIFFERENCE = 5034,
        COLOR = 5038,
        COLOR_BURN = 5018,
        COLOR_DODGE = 5024,
        DANCING_DISSOLVE = 5014,
        DARKEN = 5015,
        DARKER_COLOR = 5047,
        DIFFERENCE = 5033,
        DISSOLVE = 5013,
        EXCLUSION = 5035,
        HARD_LIGHT = 5028,
        HARD_MIX = 5032,
        HUE = 5036,
        LIGHTEN = 5021,
        LIGHTER_COLOR = 5046,
        LINEAR_BURN = 5017,
        LINEAR_DODGE = 5023,
        LINEAR_LIGHT = 5029,
        LUMINESCENT_PREMUL = 5045,
        LUMINOSITY = 5039,
        MULTIPLY = 5016,
        NORMAL = 5012,
        OVERLAY = 5026,
        PIN_LIGHT = 5031,
        SATURATION = 5037,
        SCREEN = 5022,
        SILHOUETE_ALPHA = 5042,
        SILHOUETTE_LUMA = 5043,
        SOFT_LIGHT = 5027,
        STENCIL_ALPHA = 5040,
        STENCIL_LUMA = 5041,
        SUBTRACT = 5048,
        VIVID_LIGHT = 5030
    }

    enum KeyframeInterpolationType {
        BEZIER = 6413,
        HOLD = 6414,
        LINEAR = 6412
    }

    enum FrameBlendingType {

    }

    enum PostRenderAction {
        NONE = 3412,
        IMPORT = 3413,
        IMPORT_AND_REPLACE_USAGE = 3414,
        SET_PROXY = 3415
    }

    enum ProjectThread {
        MainThread = 2612,
        RQThread = 2613,
        WorkQueueThread = 2614
    }

    enum FeetFramesFilmType {
        MM16 = 2212,
        MM35 = 2213
    }

    enum LightType {
        AMBIENT = 4215,
        PARALLEL = 4214,
        SPOT = 4213
    }

    enum ViewerType {
        VIEWER_COMPOSITION = 7412,
        VIEWER_FOOTAGE = 7414,
        VIEWER_LAYER = 7413
    }

    enum ImportAsType {
        COMP = 3614,
        COMP_CROPPED_LAYERS = 3612,
        FOOTAGE = 3613,
        PROJECT = 3615
    }

    enum AlphaMode {
        IGNORE = 5213,
        PREMULTIPLIED = 5214,
        STRAIGHT = 5212
    }

    enum PropertyType {
        INDEXED_GROUP = 6014,
        NAMED_GROUP = 6013,
        PROPERTY = 6012
    }

    enum PropertyValueType {
        COLOR = 6218,
        CUSTOM_VALUE = 6219,
        LAYER_INDEX = 6221,
        MARKER = 6220,
        MASK_INDEX = 6222,
        NO_VALUE = 6212,
        OneD = 6217,
        SHAPE = 6223,
        TEXT_DOCUMENT = 6224,
        ThreeD = 6214,
        ThreeD_SPATIAL = 6213,
        TwoD = 6216,
        TwoD_SPATIAL = 6215
    }

    enum TrackMatteType {

    }

    enum AutoOrientType {
        ALONG_PATH = 4013,
        CAMERA_OR_POINT_OF_INTEREST = 4014,
        CHARACTERS_TOWARD_CAMERA = 4015,
        NO_AUTO_ORIENT = 4012
    }

    enum CloseOptions {
        DO_NOT_SAVE_CHANGES = 1212,
        PROMPT_TO_SAVE_CHANGES = 1213,
        SAVE_CHANGES = 1214
    }

    enum CloseOptions {
        DO_NOT_SAVE_CHANGES = 1212,
        PROMPT_TO_SAVE_CHANGES = 1213,
        SAVE_CHANGES = 1214
    }

    enum FastPreviewType {
        FP_ADAPTIVE_RESOLUTION = 7813,
        FP_DRAFT = 7814,
        FP_FAST_DRAFT = 7815,
        FP_OFF = 7812,
        FP_WIREFRAME = 7816
    }

    enum FieldSeparationType {
        LOWER_FIELD_FIRST = 5414,
        OFF = 5413,
        UPPER_FIELD_FIRST = 5412
    }


    enum PulldownPhase {

    }

    enum PulldownMethod {
        PULLDOWN_3_2 = 5812,
        ADVANCE_24P = 5813
    }

    enum BitsPerChannel {
        B8 = 8,
        B16 = 16,
        B32 = 32
    }

    enum FootageTimecodeDisplayStartType {
        FTCS_START_0 = 2013,
        FTCS_USE_SOURCE_MEDIA = 2012
    }

    enum FramesCountType {

    }

    enum PurgeTarget {
        ALL_CACHES = 1412,
        UNDO_CACHES = 1413,
        SNAPSHOT_CACHES = 1414,
        IMAGE_CACHES = 1415
    }

    enum LogType {
        ERRORS_ONLY = 3012,
        ERRORS_AND_SETTINGS = 3013,
        ERRORS_AND_PER_FRAME_INFO = 3014
    }

    enum RQItemStatus {
        WILL_CONTINUE = 2812,
        NEEDS_OUTPUT = 2813,
        UNQUEUED = 2814,
        QUEUED = 2815,
        RENDERING = 2816,
        USER_STOPPED = 2817,
        ERR_STOPPED = 2818,
        DONE = 2819
    }

    enum ParagraphJustification {
        LEFT_JUSTIFY = 7213,
        RIGHT_JUSTIFY = 7214,
        CENTER_JUSTIFY = 7215,
        FULL_JUSTIFY_LASTLINE_LEFT = 7216,
        FULL_JUSTIFY_LASTLINE_RIGHT = 7217,
        FULL_JUSTIFY_LASTLINE_CENTER = 7218,
        FULL_JUSTIFY_LASTLINE_FULL = 7219
    }

    enum TimeDisplayType {

    }

    enum Language {
        CHINESE = 1619,
        ENGLISH = 1612,
        FRENCH = 1615,
        GERMAN = 1614,
        ITALIAN = 1616,
        JAPANESE = 1613,
        KOREAN = 1618,
        PORTUGUESE = 1621,
        RUSSIAN = 1620,
        SPANISH = 1617
    }
}