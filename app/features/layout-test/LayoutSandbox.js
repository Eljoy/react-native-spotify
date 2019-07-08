import React, { Component } from "react";

import { View, Picker } from "react-native";
import { Block } from "../../core";

export default class LayoutSandbox extends Component {
  state = {
    layout: "column",
    mainAxis: "none",
    crossAxis: "none"
  };

  render() {
    const { layout, mainAxis, crossAxis } = this.state;
    const layoutAlign = `${mainAxis} ${crossAxis}`;

    return (
      <Block flex={1} layout="column">
        <Block layout="row">
          <Picker
            selectedValue={layout}
            style={{ height: 50, flex: 1 }}
            onValueChange={(itemValue) =>
              this.setState({ layout: itemValue })
            }>
            <Picker.Item label="Column" value="column"/>
            <Picker.Item label="Row" value="row"/>
          </Picker>

          <Picker
            selectedValue={mainAxis}
            style={{ height: 50, flex: 1 }}
            onValueChange={(itemValue) =>
              this.setState({ mainAxis: itemValue })
            }>
            <Picker.Item label="none (start default)" value="none"/>
            <Picker.Item label="start (default)" value="start"/>
            <Picker.Item label="center" value="center"/>
            <Picker.Item label="end" value="end"/>
            <Picker.Item label="space-around" value="space-around"/>
            <Picker.Item label="space-between" value="space-between"/>
            <Picker.Item label="space-evenly" value="space-evenly"/>
          </Picker>

          <Picker
            selectedValue={crossAxis}
            style={{ height: 50, flex: 1 }}
            onValueChange={(itemValue) =>
              this.setState({ crossAxis: itemValue })
            }>
            <Picker.Item label="none (stretch default)" value="none"/>
            <Picker.Item label="start" value="start"/>
            <Picker.Item label="center" value="center"/>
            <Picker.Item label="end" value="end"/>
            <Picker.Item label="stretch (default)" value="stretch"/>
            <Picker.Item label="baseline" value="baseline"/>
          </Picker>
        </Block>
        <Block flex={1} layout={layout} layoutAlign={layoutAlign}>
          <View style={{ backgroundColor: "#14963D", minWidth: 40, minHeight: 40 }}/>
          <View style={{ backgroundColor: "#F6CA2E", minWidth: 40, minHeight: 40}}/>
          <View style={{ backgroundColor: "#000000", minWidth: 40,  minHeight: 40}}/>
        </Block>
      </Block>
    );
  }
}
