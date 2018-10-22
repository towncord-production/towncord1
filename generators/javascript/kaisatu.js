Blockly.JavaScript['start'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'start_flag=1;\n';
  return code;
};

Blockly.JavaScript['end'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'end_flag=1;\nend();\n';
  return code;
};

//チュートリアル用
Blockly.JavaScript['walk'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  setTimeout(function(){
    if(x<550){
      x += 100;
      document.getElementById("walk").style.left= x + "px";
    }
  },time);
  time+=1000;
  var code = 'walk();\n';
  return code;
};

Blockly.JavaScript['hashi'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'x >= 550';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['jump'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  setTimeout(function(){
    if(x>=550){
    document.getElementById("jump").style.left= x + "px";
    document.getElementById("jump").style.bottom= "140px";
    imageOff("walk");
    imageOff("syonbori");
    imageOn("jump");
  }
  },time);
  time+=1000;
  var code = '';
  return code;
};

Blockly.JavaScript['syonbori'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  setTimeout(function(){
    if(x<550){
    document.getElementById("syonbori").style.left= x + "px";
    imageOff("walk");
    imageOn("syonbori");
    imageOff("jump");
  }
  },time);
  time+=1000;
  var code = '';
  return code;
};




Blockly.JavaScript['touch'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'touch();\n';
  return code;
};

Blockly.JavaScript['read'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'read();\n';
  return code;
};

Blockly.JavaScript['pi'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'pi();\n';
  return code;
};

Blockly.JavaScript['zankin'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'zankin();\n';
  return code;
};

Blockly.JavaScript['vanish'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'vanish();\n';
  return code;
};

Blockly.JavaScript['charge'] = function(block) {
  yen = Blockly.JavaScript.valueToCode(block, 'yen', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'charge();\n';
  return code;
};

Blockly.JavaScript['enough'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  if (yen < fare){flag = 1;}
  var code = flag + ' == 1\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['pinpon'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'pinpon();\n';
  return code;
};

Blockly.JavaScript['close'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'close();\n';
  return code;
};

Blockly.JavaScript['error'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'error();\n';
  return code;
};

Blockly.JavaScript['train_fare'] = function(block) {
  var fare = Blockly.JavaScript.valueToCode(block, 'fare', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'train_fare();\n';
  return code;
};
