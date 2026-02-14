import React from 'react';
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import { Calendar, Lock, SendHorizontal, MapPin } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../../screen/seasonAvailabilty/style';
import { createOrGetChat } from '../../services/chat';
import { JobAttachment } from '../../@types/Chat.type';
import { getAuth } from '@react-native-firebase/auth';

type SeasonalCandidate = {
  id: string;
  user: {
    id: string;
    name: string;
    photo: string | null;
    city: string;
    verified: boolean;
    openToWork: boolean;
  };
  bannerImage: string | null;
  title: string;
  dateRange: {
    start: string | null;
    end: string | null;
  };
  tags: string[];
  locationText: string;
  isLocked?: boolean;
  isAvailable?: boolean;
  status?: 'Available' | 'Starts Soon';
};

type CandidateCardProps = {
  candidate: SeasonalCandidate;
};

const CandidateCard: React.FC<CandidateCardProps> = ({ candidate }) => {
  const navigation = useNavigation<any>();

  const handleEngage = async () => {
  try {
    const currentUser = getAuth().currentUser;
    console.log('🔵 [1] Current User:', currentUser?.uid);
    console.log('🔵 [2] Candidate User:', candidate?.user?.id);
    console.log('🔵 [3] Candidate Object:', JSON.stringify(candidate.user, null, 2));

    if (!currentUser) {
      console.log('🔴 [4] Auth failed - no current user');
      Alert.alert('Error', 'Please login to continue');
      return;
    }

    if (!candidate?.user?.id) {
      console.log('🔴 [5] Invalid candidate:', candidate);
      Alert.alert('Error', 'Invalid candidate information');
      return;
    }

    if (currentUser.uid === candidate.user.id) {
      console.log('🔴 [5.5] Cannot chat with yourself');
      Alert.alert('Error', 'Cannot create chat with yourself');
      return;
    }

    console.log('🔵 [6] Creating jobContext...');
    const jobContext: JobAttachment = {
      jobId: candidate.id,
      title: candidate.title || 'Seasonal Job',
      type: 'seasonal',
      // rate: undefined,
      location: candidate.locationText ? [candidate.locationText] : [],
      schedule: {
        start: candidate.dateRange?.start || '',
        end: candidate.dateRange?.end || '',
      },
    };
    console.log('🔵 [7] JobContext:', JSON.stringify(jobContext, null, 2));

    console.log('🔵 [8] Calling createOrGetChat...');
    const chatId = await createOrGetChat(candidate.user.id, jobContext);
    console.log('🟢 [9] Chat created:', chatId);

    navigation.navigate('ChatDetailScreen', {
      chatId,
      otherUserId: candidate.user.id,
    });
  } catch (error: any) {
    console.log('🔴 [10] Error:', error.message);
    console.log('🔴 [11] Full Error:', error);
    Alert.alert('Error', error.message || 'Failed to create chat. Please try again.');
  }
};

  const formatCustomDate = (dateString?: string | null) => {
    if (!dateString) return '';

    const date = new Date(dateString);

    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <View style={styles.card}>
      <Image
        source={{
          uri:
            candidate?.bannerImage ||
            'https://via.placeholder.com/400x200/1E1E1E/FFD900?text=No+Image',
        }}
        style={styles.candidateImage}
      />

      <View
        style={[
          styles.statusBadge,
          candidate.isAvailable ? styles.statusYellow : styles.statusDark,
        ]}
      >
        <View
          style={[
            styles.dot,
            {
              backgroundColor: candidate?.isAvailable ? '#4ADE80' : '#F59E0B',
            },
          ]}
        />
        <Text style={styles.statusText}>
          {candidate?.isAvailable ? 'Available' : 'Starts Soon'}
        </Text>
      </View>

      <View style={styles.profileRow}>
        <Image
          source={{
            uri:
              candidate.user.photo ||
              'https://via.placeholder.com/50/1E1E1E/FFD900?text=?',
          }}
          style={styles.avatarPlaceholder}
        />
        <View>
          <Text style={styles.candidateName}>{candidate?.user?.name}</Text>
          <View style={styles.locationRow}>
            <MapPin size={12} color="#FFF" />
            <Text style={styles.locationText}>{candidate?.user?.city}</Text>
          </View>
        </View>
      </View>

      <View style={styles.cardContent}>
        <View style={styles.tagContainer}>
          {candidate.tags.map((tag, index) => (
            <View key={index} style={styles.tag}>
              <Text style={styles.tagText}>{tag}</Text>
            </View>
          ))}
        </View>

        <View style={styles.availabilityRow}>
          <Calendar size={24} color="#FFF" />
          <View>
            <Text style={styles.availabilityTitle}>
              {candidate?.title || 'Seasonal Job'}
            </Text>
            <Text style={styles.availabilityDates}>
              {formatCustomDate(candidate.dateRange?.start)} -{' '}
              {formatCustomDate(candidate.dateRange?.end)}
            </Text>
          </View>
        </View>

        {candidate.isLocked ? (
          <TouchableOpacity
            style={styles.lockButton}
            onPress={() => navigation.navigate('membership')}
          >
            <Lock size={18} color="#FFF" />
            <Text style={styles.lockButtonText}>Upgrade To Contact</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.engageButton} onPress={handleEngage}>
            <Text style={styles.engageButtonText}>Engage Candidate</Text>
            <SendHorizontal width={18} height={18} color="#1F2937" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default CandidateCard;