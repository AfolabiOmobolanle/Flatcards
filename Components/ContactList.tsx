import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ContactList() {
  const contacts = [
    {
      uid: 1,
      name: 'Reina Persia',
      status: 'pending',
      imageUrl:
        'https://images.pexels.com/photos/4006759/pexels-photo-4006759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      uid: 2,
      name: 'Reina Persia',
      status: 'pending',
      imageUrl:
        'https://images.pexels.com/photos/4006759/pexels-photo-4006759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      uid: 3,
      name: 'Reina Persia',
      status: 'pending',
      imageUrl:
        'https://images.pexels.com/photos/4006759/pexels-photo-4006759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      uid: 4,
      name: 'Reina Persia',
      status: 'pending',
      imageUrl:
        'https://images.pexels.com/photos/4006759/pexels-photo-4006759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      uid: 5,
      name: 'Reina Persia',
      status: 'pending',
      imageUrl:
        'https://images.pexels.com/photos/4006759/pexels-photo-4006759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      uid: 6,
      name: 'Reina Persia',
      status: 'pending',
      imageUrl:
        'https://images.pexels.com/photos/4006759/pexels-photo-4006759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
  ];
  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {contacts.map(({uid, name, status, imageUrl}) => (
          <View key={uid} style={styles.userCard}>
            <Image
              source={{
                uri: imageUrl,
              }}
              style={styles.userImage}
            />
            <View>
              <Text style={styles.userName}>{name}</Text>
              <Text style={styles.userStatus}>{status}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  container: {
    paddingHorizontal: 16,
    marginBottom: 4,
  },
  userCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 3,
    backgroundColor: '#8d3daf',
    borderRadius: 2,
  },

  userImage: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    marginRight: 14,
  },
  userName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  userStatus: {
    fontSize: 12,
  },
});
