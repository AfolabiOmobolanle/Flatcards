import {
  StyleSheet,
  Text,
  View,
  Linking,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const ActionCard = () => {
  function openWesite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>What's new in ReactNative?</Text>
        </View>
        <Image
          source={{
            uri: 'https://images.pexels.com/photos/4618226/pexels-photo-4618226.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          }}
          style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
          <Text numberOfLines={3}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis
            necessitatibus quibusdam a minima laborum pariatur exercitationem,
            nisi, inventore sint quas reprehenderit cupiditate ipsa odio
            molestiae quo praesentium nobis optio officia? Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Accusantium harum itaque,
            aspernatur eum incidunt quasi cum, veritatis eos assumenda tempora
            vero ratione unde nesciunt esse vitae natus recusandae, consequatur
            debitis!
          </Text>
        </View>

        <View style={styles.footerContainer}>
          <TouchableOpacity
            onPress={() =>
              openWesite(
                'https://unsplash.com/photos/photo-of-library-with-turned-on-lights-sfL_QOnmy00',
              )
            }>
            <Text style={styles.socialLinks}>Read more</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              openWesite('https://open.spotify.com/collection/tracks')
            }>
            <Text style={styles.socialLinks}>Follow me</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ActionCard;

const styles = StyleSheet.create({
  headingText: {},
  card: {
    width: 350,
    height: 360,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16,
  },

  elevatedCard: {
    backgroundColor: '#e07c24',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.4,
  },
  headingContainer: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: '#000',
    fontSize: 16,
    fontWeight: '600',
  },
  cardImage: {
    height: 190,
  },
  bodyContainer: {
    padding: 10,
  },
  footerContainer: {
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  socialLinks: {
    fontSize: 16,
    color: '#000',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 6,
    borderRadius: 6,
  },
});
