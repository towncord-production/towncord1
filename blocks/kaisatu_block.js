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

Blockly.Blocks['syonbori'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("しょんぼりする");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};



Blockly.Blocks['touch'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("ICカードをタッチする");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['read'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("カードを読み込む");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['pi'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("「ピッ」と音がなる");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['zankin'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("残金を表示する");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['vanish'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("表示を消す");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['charge'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("ICカードに");
    this.appendValueInput("yen")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("円入っている");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['enough'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("200円以上お金が入っていなかったら");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['pinpon'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("ピンポンと音が鳴る");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['close'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("改札が閉まる");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['error'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("エラーを表示する");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['train_fare'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("運賃を");
    this.appendValueInput("fare")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("円に設定する");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
