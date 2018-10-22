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





Blockly.Blocks['red'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("赤く光る");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['blue'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("青く光る");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['off'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("青が消える");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
