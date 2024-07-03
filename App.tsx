import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import Flatcard from './Components/Flatcard';
// import FlatCards from './Components/FlatCards';
// import ElevatedCards from './Components/ElevatedCards';
// import FancyCards from './Components/FancyCards';
// import ActionCard from './Components/ActionCard';
// import ContactList from './Components/ContactList';

function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        {/* <FlatCards />
        <ElevatedCards />
        <FancyCards />
        <ContactList />
        <ActionCard /> */}
        <Flatcard />
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
