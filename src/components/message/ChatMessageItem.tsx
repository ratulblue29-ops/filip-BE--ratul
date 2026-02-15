import React from 'react';
import { View, Text, Image } from 'react-native';
import { ChatMessage } from '../../@types/ChatMessage.type';
import { styles } from '../../screen/chat/chatDetailStyle';
import { Calendar, MapPin } from 'lucide-react-native';

type ChatMessageItemProps = {
  message: ChatMessage;
};

const ChatMessageItem: React.FC<ChatMessageItemProps> = ({ message }) => {
  // ✅ Handle job attachment
  if (message.type === 'job_attachment' && message.metadata?.jobAttachment) {
    const job = message.metadata.jobAttachment;

    return (
      <View
        style={
          message.isMe ? styles.myMessageContainer : styles.otherMessageWrapper
        }
      >
        {!message.isMe && (
          <Text style={styles.senderName}>
            {message.sender}, {message.time}
          </Text>
        )}

        <View style={message.isMe ? styles.jobCardMe : styles.jobCardOther}>
          <Text style={styles.jobTitle}>{job.title}</Text>

          {job.location && job.location.length > 0 && (
            <View style={styles.jobRow}>
              <MapPin size={14} color="#666" />
              <Text style={styles.jobDetail}>{job.location[0]}</Text>
            </View>
          )}

          {job.schedule && (
            <View style={styles.jobRow}>
              <Calendar size={14} color="#666" />
              <Text style={styles.jobDetail}>
                {new Date(job.schedule.start).toLocaleDateString()} -{' '}
                {new Date(job.schedule.end).toLocaleDateString()}
              </Text>
            </View>
          )}
        </View>

        {message.isMe && <Text style={styles.timeText}>{message.time}</Text>}
      </View>
    );
  }

  // ✅ Regular text message
  if (message.isMe) {
    return (
      <View style={styles.myMessageContainer}>
        <View style={styles.myBubble}>
          <Text style={styles.messageTextBlack}>{message.text}</Text>
        </View>
        <Text style={styles.timeText}>{message.time}</Text>
      </View>
    );
  }

  return (
    <View style={styles.otherMessageWrapper}>
      <Text style={styles.senderName}>
        {message.sender}, {message.time}
      </Text>

      <View style={styles.otherMessageRow}>
        {message.avatar && (
          <Image source={{ uri: message.avatar }} style={styles.chatAvatar} />
        )}

        <View style={styles.otherBubble}>
          <Text style={styles.messageTextBlack}>{message.text}</Text>
        </View>
      </View>
    </View>
  );
};

export default ChatMessageItem;
