import React, { Component } from "react";
import {
  Platform,
  Text,
  View,
  TouchableOpacity,
  Button,
  StyleSheet,
  ScrollView
} from "react-native";
import Modal from "react-native-modal";
import firebase from "react-native-firebase";
import { strings } from "../config";

const renderSelectModeModal = (visible, selectModeMethod, lang) => {
  return (
    <Modal
      isVisible={visible}
      backdropColor="rgba(0, 0, 0, 0.7)"
      backdropOpacity={1}
    >
      <View style={styles.mainContainer}>
        <ScrollView>
          <Text style={styles.text}>{strings.selectMode[lang]}</Text>
          <Text style={{ margin: 4 }}>
            {strings.singleplayerDescription[lang]}
          </Text>
          <View style={{ margin: 4 }}>
            <Button
              title={strings.singleplayer[lang]}
              onPress={() => {
                selectModeMethod(null);
                firebase.analytics().logEvent(`start_singleplayer`);
              }}
            />
          </View>
          <Text style={{ margin: 4 }}>{strings.playAgainstAI[lang]}</Text>
          <View style={styles.optionsRow}>
            <View style={styles.buttonContainer}>
              <Button
                title={strings.easy[lang]}
                onPress={() => {
                  selectModeMethod({ depth: 2 });
                  firebase.analytics().logEvent(`start_easy_AI`);
                }}
              />
            </View>
            <View style={styles.buttonContainer}>
              <Button
                title={strings.medium[lang]}
                onPress={() => {
                  selectModeMethod({ depth: 3 });
                  firebase.analytics().logEvent(`start_medium_AI`);
                }}
              />
            </View>
          </View>
          <View style={{ margin: 2 }}>
            <Button
              title={strings.hard[lang]}
              onPress={() => {
                selectModeMethod({ depth: 4 });
                firebase.analytics().logEvent(`start_hard_AI`);
              }}
            />
          </View>
          <Text style={styles.warningText}>
            {strings.hardModeWarning[lang]}
          </Text>
        </ScrollView>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "white",
    padding: 22,
    justifyContent: "center",
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)"
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    margin: 6
  },
  optionsRow: {
    flexDirection: "row",
    padding: 1
  },
  buttonContainer: {
    flex: 1,
    margin: 2
  },
  warningText: {
    margin: 4,
    color: "orange",
    fontStyle: "italic"
  }
});

export default renderSelectModeModal;
