import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function App() {
  const [menu, setMenu] = useState([]);
  const [dish, setDish] = useState('');
  const [description, setDescription] = useState('');
  const [course, setCourse] = useState('');
  const [price, setPrice] = useState('');

  const addMenuItem = () => {
    if (dish && description && course && price) {
      const newItem = { dish, description, course, price };
      setMenu([...menu, newItem]);
      setDish('');
      setDescription('');
      setCourse('');
      setPrice('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>🍽️ Chef Menu App</Text>

      <TextInput
        style={styles.input}
        placeholder="Dish Name"
        placeholderTextColor="#ffb6c1"
        value={dish}
        onChangeText={setDish}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        placeholderTextColor="#ffb6c1"
        value={description}
        onChangeText={setDescription}
      />
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={course}
          onValueChange={(itemValue) => setCourse(itemValue)}
          style={styles.picker}
          dropdownIconColor="#ff69b4"
        >
          <Picker.Item label="Select Course" value="" color="#ffb6c1" />
          <Picker.Item label="Starter" value="Starter" color="#fff" />
          <Picker.Item label="Main" value="Main" color="#fff" />
          <Picker.Item label="Dessert" value="Dessert" color="#fff" />
        </Picker>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Price"
        placeholderTextColor="#ffb6c1"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.button} onPress={addMenuItem}>
        <Text style={styles.buttonText}>Add Menu Item</Text>
      </TouchableOpacity>

      <Text style={styles.total}>Total Menu Items: {menu.length}</Text>

      <FlatList
        data={menu}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemText}>
              {item.course}: {item.dish} - R{item.price}
            </Text>
            <Text style={styles.desc}>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', // black base
    padding: 20,
    marginTop: 50,
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#ffffff', // white headline
  },
  input: {
    borderWidth: 1,
    borderColor: '#ff69b4', // pink border
    color: '#ffffff', // white text
    padding: 10,
    marginVertical: 6,
    borderRadius: 8,
    backgroundColor: '#1a1a1a', // dark gray field
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#ff69b4',
    borderRadius: 8,
    marginVertical: 6,
    backgroundColor: '#1a1a1a',
  },
  picker: {
    color: '#ffffff', // white picker text
  },
  button: {
    backgroundColor: '#ff69b4', // pink button
    padding: 12,
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    color: '#ffffff', // white text on pink
    fontWeight: 'bold',
    textAlign: 'center',
  },
  total: {
    marginTop: 15,
    fontWeight: 'bold',
    fontSize: 16,
    color: '#ffb6c1', // light pink text
  },
  item: {
    backgroundColor: '#111', // slightly lighter black
    padding: 12,
    marginVertical: 6,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ffffff', // white border for clarity
    shadowColor: '#ff69b4', // pink glow accent
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  itemText: {
    color: '#ffffff', // white text for dish details
    fontWeight: '600',
  },
  desc: {
    fontStyle: 'italic',
    color: '#ffb6c1', // soft pink description
  },
});
