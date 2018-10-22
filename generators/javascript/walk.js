Blockly.JavaScript['walk'] = function(block) {
  var value_xpos = Blockly.JavaScript.valueToCode(block, 'XPOS', Blockly.JavaScript.ORDER_ATOMIC);
  var value_ypos = Blockly.JavaScript.valueToCode(block, 'YPOS', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  //var myAnimation = anime({
  //  targets:['.move'],
  //  translateX: value_xpos
  //});
  var code = 'anime({targets:[".move"],translateX: ' + value_xpos + ',translateY: ' + -value_ypos + ',easing: "easeInOutQuad"});';
//  var code = 'alert("walk to ' + value_xpos + '");\n';
  return code;
};
