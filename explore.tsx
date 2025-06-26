import { Image } from 'expo-image';
import { Platform, StyleSheet } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#50C878' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">My profile</ThemedText>
      </ThemedView>
      <ThemedText>My name is Derek Machado and this is my EXPO page (hence the imagery). I am a hard working person, and I always attempt to keep the group working. I have a passion for coding and working hard!</ThemedText>
      
        <ThemedText>
          My role in SCLA would be the developer, as I try my best in working in code
        </ThemedText>
        <Image source={require('@/assets/images/Derek-M-Picture.png')} style={{ alignSelf: 'center' }} />
        <ThemedText>
          My dream career would be to work in computer science, with a minor in cybersecurity.
        </ThemedText>
      <Collapsible title="My skills/core components">
        <ThemedText>
          - working hard and diligently
          - being adaptable to different situations
          - being open to many ideas
        </ThemedText>
      </Collapsible>
      <Collapsible title="Where can these practices be applied?">
       <ThemedText>
        Theoretically, these skills can be implemented in various aspects of ones' work, such as in projects
       </ThemedText>
      </Collapsible>
        {Platform.select({
          ios: (
            <ThemedText>
                Thank you for checking out my profile!
            </ThemedText>
          ),
        })}

    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
