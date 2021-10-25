const DROPZONE = $("#dropzone");
const CANVAS = $("#canvas");
var CTX = document.getElementById("canvas").getContext("2d");
const HEADLEN = 10;
const TYPE_OPTIONS = ["frame", "int", "float", "str", "bool", "tuple", "list", "set", "dict", "function"]
const TYPE_TEMPLATE = `<div class="box draggable ui-widget-content"></div>`
const FRAME_NAMES = ["Global Frame", "Function 1"];

function resizeCanvas() {
    CANVAS.attr("width", DROPZONE.width());
    CANVAS.attr("height", DROPZONE.height());
}

function setupOptionTypes() {
    const container = $("#instructions");
    for (var type of TYPE_OPTIONS) {
        const element = $(TYPE_TEMPLATE);
        element.data("type",type);
        element.html(type)
        element.addClass(type);
        container.append(element);
        element.draggable({
            helper: "clone",
            cursor: 'move',
            zIndex: 10,
        });
    }
    
}

function initialSetup() {
    resizeCanvas();
    setupOptionTypes();
}

export {initialSetup}