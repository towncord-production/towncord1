//チュートリアル用
Blockly.Blocks['walk'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("１歩歩く");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['hashi'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("端に着いたら");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['jump'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("ジャンプ！");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};





Blockly.Blocks['money'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("お金を");
    this.appendValueInput("yen")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendDummyInput()
        .appendField("円入れる");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['except'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("1~5円玉を入れたら");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['give_off'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("1~5円玉を出す");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['can_buy'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("入れたお金≧飲み物の金額");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['light_up'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("ボタン点灯");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['if_light_up'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("ランプがついたら");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['push_button'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("ボタンを押す");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['drink_get'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("飲み物が落ちてくる");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['drink_get2'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("飲み物が落ちて消灯");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['light_off'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("ボタン消灯");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['bar'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("差額が出たら");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['change'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("おつりを出す");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['set_drink'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("飲み物の金額を");
    this.appendValueInput("kakaku")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("円にする");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['start'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("はじめ");
    this.setNextStatement(true, null);
    this.setColour(60);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['end'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("おわり");
    this.setPreviousStatement(true, null);
    this.setColour(60);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
