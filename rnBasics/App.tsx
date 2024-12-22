import React, { useState } from 'react';
import { Button, FlatList, StatusBar, StyleSheet, View } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export type Goal = {
  text: string;
  id: string;
};

export default function App() {

  const [modalIsVisible, setModalIsVisible] = useState(false)
  const [goalList, setGoalsList] = useState<Goal[]>([])

  function startAddGoalHandler() {
    setModalIsVisible(true)
  }

  function endAddGoalHandler() {
    setModalIsVisible(false)
  }

  function addGoalHandler(goal: string) {
    setGoalsList((prevGoals) => [...prevGoals, { text: goal, id: Math.random().toString() }])
    endAddGoalHandler()
  }

  function deleteGoalHandler(id: string) {
    console.log("DELETE");
    setGoalsList((prev) => prev.filter((goalItem) => goalItem.id !== id))
  }

  return (
    <>
      <StatusBar barStyle="light-content" />
      <View style={styles.appContainer}>
        <Button title="Add A New Goal" color="#a065ec" onPress={startAddGoalHandler} />
        {modalIsVisible && <GoalInput onAddGoal={addGoalHandler} visible={modalIsVisible} onCancelGoal={endAddGoalHandler} />}
        <View style={styles.listContainer}>
          <FlatList data={goalList} alwaysBounceVertical={false} keyExtractor={(item, index) => item.id} renderItem={(goalItem) => <GoalItem goalItem={goalItem.item} onDeleteItem={deleteGoalHandler} />} />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
    backgroundColor: "#1e085a"
  },
  listContainer: {
    flex: 3
  }
});