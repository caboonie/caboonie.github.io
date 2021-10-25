import { functionSetup } from './modules/function.js';
import { initialSetup } from './modules/setup.js';

initialSetup();

DROPZONE.droppable({
    drop: function(event, ui) {
      
      if (!ui.draggable.hasClass('object')) {
        itemCount++;
        var element = ui.helper.clone();
        var dropzoneOffset = DROPZONE.position();
        var offset = {
          left: ui.position.left - dropzoneOffset.left,
          top: ui.position.top - dropzoneOffset.top
        };
        setupElement(element, offset);
        DROPZONE.append(element);
        element.attr("id", itemCount);
      }
    }
  });

  function setupElement(element, canElOff, value = null, lines_to_make = null) {
    if (element.hasClass("function")) {
        console.log("calling setup function, element", element);
        functionSetup(element, value, lines_to_make);
    }

    // set position to be entirely inside of the DROPZONE
    element.css({
      left: Math.min(DROPZONE.width()-element.width(), Math.max(canElOff.left, 0)),
      top: Math.min(DROPZONE.height()-element.height(), Math.max(canElOff.top, 0)),
      position: 'absolute',
      Zindex: 10
    });
        
    // whenever this element is moved, we redraw any lines it involves, and contain the element in the dropzone
    element.draggable({
      cursor: 'move',
      containment: '#dropzone-background',
      drag: function(event, ui) {
        if (!isDown) 
            redrawStoredLines();
        }
    });
  }