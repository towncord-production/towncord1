//チュートリアル用
Blockly.JavaScript['walk'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
    if(t!=1){
      sum_x += 100;
    }
  var code = 'setTimeout(function(){walk();},time);time+=1000;\n';
  return code;
};

Blockly.JavaScript['hashi'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'sum_x >= 550';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['jump'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'setTimeout(function(){jump();},time);time+=1000;\n';
  return code;
};



Blockly.JavaScript['money'] = function(block) {
  yen = Blockly.JavaScript.valueToCode(block, 'yen', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'money();\n';
  return code;
};

Blockly.JavaScript['except'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = yen+' % 10 != 0\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['give_off'] = function(block){
  not_change = yen%10;
  yen = yen/10;
  yen = parseInt(yen);
  yen = yen * 10;
  var code = 'give_off();\n';
  return code;
};

Blockly.JavaScript['can_buy'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  if (yen >= 150){buy_flag = 2;}
  else if (yen >= 100 && yen < 150){buy_flag = 1;}
  var code = buy_flag + '> 0\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['light_up'] = function(block) {
  var code = 'light_up();\n';
  return code;
};

Blockly.JavaScript['if_light_up'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = buy_flag + '> 0';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['push_button'] = function(block) {
  var code = 'push_button();\n';
  return code;
};

Blockly.JavaScript['drink_get'] = function(block) {
  if(yen >= 150){
    cg = yen - 150;
  }else if(yen >=100 && yen <150){
    cg = yen - 100;
  }
  var code = 'drink_get();\n';
  return code;
};

Blockly.JavaScript['light_off'] = function(block) {
  var code = 'light_off();\n';
  return code;
};

Blockly.JavaScript['bar'] = function(block) {
  var code = cg + '!= 0';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['change'] = function(block) {
  var code = 'change();\n';
  return code;
};

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
