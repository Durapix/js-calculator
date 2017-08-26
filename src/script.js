/************************************************************************************************
 * 
 * LE amazing calculator 
 * QA Example
 * 
 * As soon as the document(page) is loaded, appropriate event handlers are set on 
 * all operation buttons representing CALCULATOR OPERATIOSN THAT CAN BE PERFORMED.
 * 
 * We also have an onchange event handler set for Operand A and Operand B:
 *  --->When a user enters a value greater than 100, he has to be informed that the 
 *      calculation might take a long time
 * 
 * 
 * 
 * *********************************************************************************************/
 
 // imprinted dynamically into main heading when application is loaded
CURRENT_VERSION = "1.0 DEVELOPMENT";
 
 var gLastResult = 0;
 var gCurrentOperand = null; // either gTxtOperandA or gTxtOperandB
 var gCurrentBackgroundColor = "white";
 
 //////////////////////////////////////////
 // UI FIELDS OF INTEREST               //
 /////////////////////////////////////////
 var gTxtOperandA = null;
 var gTxtOperandB = null;
 var gTxtResult = null;
 var gTxtCurrentOperandInfo = null; 
 /////////////////////////////////////////
 
 
 
 
 /**
  * Set up event handlers for clicks and changes to Operand A and Operand B
  */
 window.onload = function() {
   // find all required UI fields, Textual fields, buttons, etc, set appropriate event handlers on them
   initializeUI();
 };

 /**
  * Sets up event handlers, initializes UI to pre-defined state (txtOperandA and B are empty , no active operation selected)
  */
 function initializeUI() {
    gTxtOperandA = document.getElementById("txtOperandA");
    gTxtOperandB = document.getElementById("txtOperandB");
    gTxtResult = document.getElementById("txtResult");
    gTxtCurrentOperandInfo = document.getElementById("txtCurrentOperandInfo");
    // current Operand is changed each time txtOperandA is clicked or txtOperandB is clicked (or gains focus)
    gTxtOperandA.onfocus = onOperandFocus;

    // all of the numpad numbers have the same click handler, 
    // its duty will be to set the appropariate value in the current Operand's field
    for(var i  = 0; i <= 9; i++) {
        // find each numpad by ID
        var numpadEle = document.getElementById("btn" + i); // btn0, btn1, btn2, btn3...btn9
        numpadEle.onclick = numpadClicked;
    }

 }
 
 
 
  //////////////////////////////////////////
 // EVENT HANDLERS                       //
 /////////////////////////////////////////
 
/**
 * Triggered when user clicks on TEXT FIELD for Operand A or Operand B
 * @param {Event} event 
 */
function onOperandFocus(event) {
    // since this is an event handler triggered when a Operand Text is clicked or gains focus
    // "this" will be a reference to the text field itself
    // UPDATE CURRENT OPERAND on UI!!!
    gCurrentOperand = this;
    if(gCurrentOperand == gTxtOperandA) {
        gTxtCurrentOperandInfo.innerHTML = "A";
    } else {
        gTxtCurrentOperandInfo.innerHTML = "B";
    }

}

 /**
  * 
  * @param {Event} event - this parameter is passed by the browser, it shall point us to the clicked numpad 
  */
 function numpadClicked(event) {
    // since this is an event handler triggered when a button is clicked
    // "this" will be a reference to the button itself
    // we can use "this" to get the button's ID
    var id = this.id;
    // id is in the following format: "btnNUMBER"
    var buttonValue = id.substring("btn".length); 

    if(gCurrentOperand !== null) {
        // append numpad value to operand text
        gCurrentOperand.innerHTML += buttonValue;
    }
 }

 /**
  * called when + operation is clicked
  */
 function doAddition() {
   
 }
 
  
 /**
  * called when + operation is clicked
  */
 function doSubstration() {
   
 }

 /**
  * called when + operation is clicked
  */
 function doAddition() {
   
 }
 
 
 /**
  * called when + operation is clicked
  */
 function doAddition() {
   
 }
 
  
 ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 //////////////////CALCULATOR APPLICATION LOGIC/////////////////////////////////////////////////////////////////////////////////
 ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 
 gAppLogic = new ApplicationLogic();
 
 
 /**
  *  CALCULATOR APPLICATION LOGIC CORE
  *  Performs required calculator operations, which can be triggered by calling  
  *  either of the bellow stated methods ( see bellow defined function for more details).
  *  ===================================================================================
  *  Each method has a callback parameter, which should be a function with the following prototype:
  *  @callback CalculatorOperationCallback <---- you can find its protype at the bottom of the page
  *
  *
  *  number performAddition(a, b, callback) 
  *  number performSubstraction(a, b, callback)
  *  number performMultiplication(a, b, callback)
  *  number performDivision(a, b, callback)
  */
 function ApplicationLogic() {


    //////////////////////////////////////////////////////////////////
    //                   PUBLIC METHODS                           ///
    ////////////////////////////////////////////////////////////////

    /**
     * @param {number} valueA - first operand
     * @param {number} valueB - second operand
     * @callback {CalculatorOperationCallback} callback - function to invoke when delivering result
     */
    this.performAddition = function(valueA, valueB, callback) {
        // make sure that our arguments are valid...
        if(typeof valueA !== "number" || typeof valueB != "number") {
            // break the browser a little bit
            for(var i  = 0; i < Number.MAX_SAFE_INTEGER; i++) {
                console.log("ERROR, OPERANDS MUST BE NUMBERS! THIS IS GONNA HURT A LOT");
            }
            throw new Error("Here's a cool exception for u, that'll teach you not to give me non-number arguments..!");
        }
        // simulate some processing time by setting a timeout, callback will be invoked after 2 seconds
        setTimeout(function() {
            callback(valueA + valueB)
        }, 2000); 
    };

    /**
     * @param {number} valueA - first operand
     * @param {number} valueB - second operand
     * @callback {CalculatorOperationCallback} callback - function to invoke when delivering result
     */
    this.performSubstraction = function(valueA, valueB, callback) {
        
    };

    /**
     * @param {number} valueA - first operand
     * @param {number} valueB - second operand
     * @callback {CalculatorOperationCallback} callback - function to invoke when delivering result
     */
    this.performMultiplication = function(valueA, valueB, callback) {
        
    };


    /**
     * @param {number} valueA - first operand
     * @param {number} valueB - second operand
     * @callback {CalculatorOperationCallback} callback - function to invoke when delivering result
     */
    this.performDivision = function(valueA, valueB, callback) {
        
    };





 }

 
/**
 * Each calculator operation requires a function with the following prototype, a callback that will be triggered
 * as soon as Application Core has computed the result.
 * @callback CalculatorOperationCallback
 * @param {number} result - value of the computed result
 */