// Library for IBScanUltimate Web interface
// Copyright (c) Integrated Biometrics 2021

// Developer note: to debug the plain text JavaScript, use the sequence in the web page 
// in place of IBScanUltimate.min.js:
//     <script src = "http://localhost:5020/easyXDM/easyXDM.debug.js"></script >
//     <script src="http://localhost:5020/IBScanUltimate.js"></script>



var IBSU_STATUS_OK = 0;

var CAPTURE_SEQ_FLAT_SINGLE_FINGER = "1 Flat";
var CAPTURE_SEQ_ROLL_SINGLE_FINGER = "1 Roll";
var CAPTURE_SEQ_2_FLAT_FINGERS = "2 Flats";
var CAPTURE_SEQ_10_SINGLE_FLAT_FINGERS = "10x1 Flats";
var CAPTURE_SEQ_10_SINGLE_ROLLED_FINGERS = "10x1 Rolls";
var CAPTURE_SEQ_4_FLAT_FINGERS = "4 Flats";
var CAPTURE_SEQ_10_FLAT_WITH_4_FINGER_SCANNER = "4-4-2";


// Key button definitions
var __LEFT_KEY_BUTTON__ = 1;
var __RIGHT_KEY_BUTTON__ = 2;


/* Minimum value of contrast. */
var IBSU_MIN_CONTRAST_VALUE = 0;

/* Maximum value of contrast. */
var IBSU_MAX_CONTRAST_VALUE = 34;

var IBSU_OPTION_AUTO_CONTRAST = 1;
var IBSU_OPTION_AUTO_CAPTURE = 2;
var IBSU_OPTION_IGNORE_FINGER_COUNT = 4;

IBSU_BeeperType = {
    ENUM_IBSU_BEEPER_TYPE_NONE: 0,
    ENUM_IBSU_BEEPER_TYPE_MONOTONE: 1
};


IBSU_FingerCountState = {
    ENUM_IBSU_FINGER_COUNT_OK: 0,
    ENUM_IBSU_TOO_MANY_FINGERS: 1,
    ENUM_IBSU_TOO_FEW_FINGERS: 2,
    ENUM_IBSU_NON_FINGER: 3
};


IBSU_BeepPattern = {
    ENUM_IBSU_BEEP_PATTERN_GENERIC: 0,
    ENUM_IBSU_BEEP_PATTERN_REPEAT: 1
};


IBSU_LedType = {
    ENUM_IBSU_LED_TYPE_NONE: 0,
    ENUM_IBSU_LED_TYPE_TSCAN: 1,
    ENUM_IBSU_LED_TYPE_FSCAN: 2
};


IBSU_FingerQualityState = {
    ENUM_IBSU_FINGER_NOT_PRESENT: 0,
    ENUM_IBSU_QUALITY_GOOD: 1,
    ENUM_IBSU_QUALITY_FAIR: 2,
    ENUM_IBSU_QUALITY_POOR: 3,
    ENUM_IBSU_QUALITY_INVALID_AREA_TOP: 4,
    ENUM_IBSU_QUALITY_INVALID_AREA_LEFT: 5,
    ENUM_IBSU_QUALITY_INVALID_AREA_RIGHT: 6,
    ENUM_IBSU_QUALITY_INVALID_AREA_BOTTOM: 7
};

IBSU_PlatenState = {
    ENUM_IBSU_PLATEN_CLEARD: 0,
    ENUM_IBSU_PLATEN_HAS_FINGERS: 1
};


IBSU_PropertyId = {
    ENUM_IBSU_PROPERTY_PRODUCT_ID: 0,
    ENUM_IBSU_PROPERTY_SERIAL_NUMBER: 1,
    ENUM_IBSU_PROPERTY_VENDOR_ID: 2,
    ENUM_IBSU_PROPERTY_IBIA_VENDOR_ID: 3,
    ENUM_IBSU_PROPERTY_IBIA_VERSION: 4,
    ENUM_IBSU_PROPERTY_IBIA_DEVICE_ID: 5,
    ENUM_IBSU_PROPERTY_FIRMWARE: 6,
    ENUM_IBSU_PROPERTY_REVISION: 7,
    ENUM_IBSU_PROPERTY_PRODUCTION_DATE: 8,
    ENUM_IBSU_PROPERTY_SERVICE_DATE: 9,
    ENUM_IBSU_PROPERTY_IMAGE_WIDTH: 10,
    ENUM_IBSU_PROPERTY_IMAGE_HEIGHT: 11,
    ENUM_IBSU_PROPERTY_IGNORE_FINGER_TIME: 12,
    ENUM_IBSU_PROPERTY_RECOMMENDED_LEVEL: 13,
    ENUM_IBSU_PROPERTY_POLLINGTIME_TO_BGETIMAGE: 14,
    ENUM_IBSU_PROPERTY_ENABLE_POWER_SAVE_MODE: 15,
    ENUM_IBSU_PROPERTY_RETRY_WRONG_COMMUNICATION: 16,
    ENUM_IBSU_PROPERTY_CAPTURE_TIMEOUT: 17,
    ENUM_IBSU_PROPERTY_ROLL_MIN_WIDTH: 18,
    ENUM_IBSU_PROPERTY_ROLL_MODE: 19,
    ENUM_IBSU_PROPERTY_ROLL_LEVEL: 20,
    ENUM_IBSU_PROPERTY_CAPTURE_AREA_THRESHOLD: 21,
    ENUM_IBSU_PROPERTY_ENABLE_DECIMATION: 22,
    ENUM_IBSU_PROPERTY_ENABLE_CAPTURE_ON_RELEASE: 23,
    ENUM_IBSU_PROPERTY_DEVICE_INDEX: 24,
    ENUM_IBSU_PROPERTY_DEVICE_ID: 25,
    ENUM_IBSU_PROPERTY_SUPER_DRY_MODE: 26,
    ENUM_IBSU_PROPERTY_MIN_CAPTURE_TIME_IN_SUPER_DRY_MODE: 27,
    ENUM_IBSU_PROPERTY_ROLLED_IMAGE_WIDTH: 28,
    ENUM_IBSU_PROPERTY_ROLLED_IMAGE_HEIGHT: 29,
    ENUM_IBSU_PROPERTY_NO_PREVIEW_IMAGE: 30,
    ENUM_IBSU_PROPERTY_ROLL_IMAGE_OVERRIDE: 31,
    ENUM_IBSU_PROPERTY_WARNING_MESSAGE_INVALID_AREA: 32,
    ENUM_IBSU_PROPERTY_ENABLE_WET_FINGER_DETECT: 33,
    ENUM_IBSU_PROPERTY_WET_FINGER_DETECT_LEVEL: 34,
    ENUM_IBSU_PROPERTY_WET_FINGER_DETECT_LEVEL_THRESHOLD: 35,
    ENUM_IBSU_PROPERTY_START_POSITION_OF_ROLLING_AREA: 36,
    ENUM_IBSU_PROPERTY_START_ROLL_WITHOUT_LOCK: 37,
    ENUM_IBSU_PROPERTY_ENABLE_TOF: 38,
    ENUM_IBSU_PROPERTY_ENABLE_ENCRYPTION: 39,
    ENUM_IBSU_PROPERTY_IS_SPOOF_SUPPORTED: 40,
    ENUM_IBSU_PROPERTY_ENABLE_SPOOF: 41,
    ENUM_IBSU_PROPERTY_SPOOF_LEVEL: 42,
    ENUM_IBSU_PROPERTY_VIEW_ENCRYPTION_IMAGE_MODE: 43,
    ENUM_IBSU_PROPERTY_FINGERPRINT_SEGMENTATION_MODE: 44,
    ENUM_IBSU_PROPERTY_ROLL_METHOD: 45,
    ENUM_IBSU_PROPERTY_RENEWAL_OPPOSITE_IMGAE_LEVEL: 46,
    ENUM_IBSU_PROPERTY_PREVIEW_IMAGE_QUALITY_FOR_KOJAK: 47,
    ENUM_IBSU_PROPERTY_ADAPTIVE_CAPTURE_MODE: 48,
    ENUM_IBSU_PROPERTY_ENABLE_KOJAK_BEHAVIOR_2_6: 49,
    ENUM_IBSU_PROPERTY_VERTICAL_DIRECTION_SEGMENT: 50,

    ENUM_IBSU_PROPERTY_RESERVED_1: 200,
    ENUM_IBSU_PROPERTY_RESERVED_2: 201,
    ENUM_IBSU_PROPERTY_RESERVED_100: 202,

    ENUM_IBSU_PROPERTY_RESERVED_IMAGE_PROCESS_THRESHOLD: 400,
    ENUM_IBSU_PROPERTY_RESERVED_ENABLE_TOF_FOR_ROLL: 401,
    ENUM_IBSU_PROPERTY_RESERVED_CAPTURE_BRIGHTNESS_THRESHOLD_FOR_FLAT: 402,
    ENUM_IBSU_PROPERTY_RESERVED_CAPTURE_BRIGHTNESS_THRESHOLD_FOR_ROLL: 403,
    ENUM_IBSU_PROPERTY_RESERVED_ENHANCED_RESULT_IMAGE: 404,
    ENUM_IBSU_PROPERTY_RESERVED_ENHANCED_RESULT_IMAGE_LEVEL: 405,
    ENUM_IBSU_PROPERTY_RESERVED_ENABLE_SLIP_DETECTION: 406,
    ENUM_IBSU_PROPERTY_RESERVED_SLIP_DETECTION_LEVEL: 407,
    ENUM_IBSU_PROPERTY_RESERVED_ENABLE_TRICK_CAPTURE: 408
};

IBSU_ImageResolution = {
    ENUM_IBSU_IMAGE_RESOLUTION_500: 500,
    ENUM_IBSU_IMAGE_RESOLUTION_1000: 1000
};

IBSU_ImageType = {
    ENUM_IBSU_TYPE_NONE: 0,
    ENUM_IBSU_ROLL_SINGLE_FINGER: 1,
    ENUM_IBSU_FLAT_SINGLE_FINGER: 2,
    ENUM_IBSU_FLAT_TWO_FINGERS: 3,
    ENUM_IBSU_FLAT_FOUR_FINGERS: 4,
    ENUM_IBSU_FLAT_THREE_FINGERS: 5
};


IBSU_ImageFormat = {
    IBSU_IMG_FORMAT_GRAY: 0,
    IBSU_IMG_FORMAT_RGB24: 1,
    IBSU_IMG_FORMAT_RGB32: 2,
    IBSU_IMG_FORMAT_UNKNOWN: 3
};

IBSU_RollingState = {
    ENUM_IBSU_ROLLING_NOT_PRESENT: 0,
    ENUM_IBSU_ROLLING_TAKE_ACQUISITION: 1,
    ENUM_IBSU_ROLLING_COMPLETE_ACQUISITION: 2,
    ENUM_IBSU_ROLLING_RESULT_IMAGE: 3
};


IBSU_LEOperationMode = {
    ENUM_IBSU_LE_OPERATION_AUTO: 0,
    ENUM_IBSU_LE_OPERATION_ON: 1,
    ENUM_IBSU_LE_OPERATION_OFF: 2
};


IBSU_HashType = {
    ENUM_IBSU_HASH_TYPE_SHA256: 0,
    ENUM_IBSU_HASH_TYPE_RESERVED: 1
};


IBSU_Warnings = {

    100: ' Missing an image frame. (Only used on IBTraceLogger.)',
    101: 'Camera work is wrong. reset is required (Only used on IBLogTracer.) ',
    200: 'Device firmware version outdated.',
    201: 'Device/component has already been initialized and is ready to be used.',
    202: 'API function was deprecated.',
    203: 'Image has already been enhanced.',
    300: 'Device still has not gotten the first image frame.',
    301: 'Rolling has not started.',
    302: 'No finger detected in result image.',
    303: 'Incorrect fingers detected in result image.',
    304: 'Smear detected in rolled result image.',
    305: 'Horizontal Smear detected in rolled result image.',
    306: 'Vertical Smear detected in rolled result image.',
    307: 'Horizontal and vertical smear detected in rolled result image.',
    400: 'Empty result image.',
    603: 'Spoof Detected'



};



function getQueryParams(qs) {
    qs = qs.split("+").join(" ");

    var params = {}, tokens,
        re = /[?&]?([^=]+)=([^&]*)/g;

    while ((tokens = re.exec(qs))) {
        params[decodeURIComponent(tokens[1])]
            = decodeURIComponent(tokens[2]);
    }

    return params;
}





// Get address this script is being loaded from
var getIBSUScriptURL = (function () {
    var scripts = document.getElementsByTagName('script');
    var index = scripts.length - 1;
    var myScript = scripts[index];
    return function () { return myScript.src; };
})();



let ibsu_url = new URL(getIBSUScriptURL());

let ibsu_port = 80;
if (ibsu_url.port) ibsu_port = ibsu_url.port;
let ibsu_proto = "ws://";
if (ibsu_url.protocol === "https:") ibsu_proto = "wss://";
let ibsu_web_host = "localhost";


// Note: Callback functions (IBSU.on***) are also added to this object
// by the client
var IBSU = new easyXDM.Rpc(/** The channel configuration */{
    /**
     * Register the url to the remote interface
     * @field
     */
    remote: ibsu_proto + ibsu_web_host + ":" + ibsu_port + "/rpc",
    onReady: function () {
    }
}, /** The interface configuration */ {
    remote: {
        GetDeviceCount: {},
        GetDeviceDescription: {},
        OpenDevice: {},
        OpenDeviceEx: {},
        IsDeviceOpened: {},
        CloseDevice: {},
        CloseAllDevice: {},
        SetLEDs: {},
        GetLEDs: {},
        GetOperableLEDs: {},
        GetOperableBeeper: {},
        SetBeeper: {},
        EnableTraceLog: {},
        IsCaptureAvailable: {},
        IsCaptureActive: {},
        IsTouchedFinger: {},
        BeginCaptureImage: {},
        TakeResultImageManually: {},
        CancelCaptureImage: {},
        SetProperty: {},
        GetProperty: {},
        GetContrast: {},
        SetContrast: {},
        SetLEOperationMode: {},
        GetLEOperationMode: {},
        BGetRollingInfo: {},
        BGetInitProgress: {},
        SetProcessingOptions: {},
        GetSDKVersion: {},
        SetCustomerKey: {}
    },
    local: {
    }
});



// callbackWebSocket to handle Scanner callback events
var callbackWebSocket;

callbackWebSocket = new WebSocket(ibsu_proto + ibsu_web_host + ":" + ibsu_port + "/callback");
callbackWebSocket.onopen = function (event) {
    var fn = window.IBSU['onSDKConnection'];
    if (typeof (fn) === 'function') fn.apply(undefined);
};
callbackWebSocket.onclose = function (event) {
    var fn = window.IBSU['onSDKClose'];
    if (typeof (fn) === 'function') fn.apply(undefined, [event]);
};
callbackWebSocket.onerror = function () {
    var fn = window.IBSU['onSDKConnectionError'];
    if (typeof (fn) === 'function') fn.apply(undefined);
};
callbackWebSocket.onmessage = function (event) {
    //document.getElementById("statusInfo").innerHTML = 'Got message : ' + event.data;

    var rpc = JSON.parse(event.data);
    var functionName = "on" + rpc.method;
    var fn = window.IBSU[functionName];
    if (typeof fn === 'function') {
        try {
            fn.apply(undefined, rpc.params);
        } catch (e) {
            console.error(e, e.stack);
        }
    }
};




