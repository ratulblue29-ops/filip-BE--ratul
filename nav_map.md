AUTHENTICATION FLOW
SplashScreen → LoginScreen(auto after 2s) → Log In button → BottomTabs
SplashScreen → LoginScreen(auto after 2s) → <Sign up> → BottomTabs
↓
BOTTOM TABS (Main App)
Tab 1: Feed
FeedScreen
import { Text, View, TextInput, StatusBar, TouchableOpacity, Image, FlatList, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createDrawerNavigator } from '@react-navigation/drawer';
import styles from './style';
import { Bookmark, Search } from 'lucide-react-native';
import MainDrawer from '../../components/feed/MainDrawer';
import Gig from '../../components/feed/Gig';
import { useQuery } from '@tanstack/react-query';
import { fetchCurrentUser } from '../../services/user';
import { useUnreadNotifications } from '../../hooks/useUnreadNotifications';
import NotificationDot from '../../components/feed/NotificationDot';
→ Image avatar → MainDrawer
→ NotificationIcon → NotificationDot → NotificationScreen

==============================================================================================================================================================================================
MainDrawer
import { Bookmark, MapPin, ChevronRight, BriefcaseBusiness, FileText, Settings, LogOut, X, PlusCircleIcon, } from 'lucide-react-native';
import { View, Text, ScrollView, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import React, { useState } from 'react';
import styles from '../../screen/feed/style';
import { useNavigation } from '@react-navigation/native';
import UsersAddIcon from '../svg/UsersAddIcon';
import UpgradeIcon from '../svg/UpgradeIcon';
import { useQuery } from '@tanstack/react-query';
import { fetchCurrentUser } from '../../services/user';
→ <Referral Program> → ReferralScreen
→ <My Posted Availability> → PostedAvailabilitiesScreen
→ <View Plans> → MemberShipScreen
→ <Settings> → SettingScreen
→ <Log Out> → LoginScreen

==============================================================================================================================================================================================
2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222

ReferralScreen
import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput, Image, StatusBar, } from 'react-native';
import { Gift, Info, Copy, Share, Mail, CheckCircle2, Clock, } from 'lucide-react-native';
import styles from './style';
import { SafeAreaView } from 'react-native-safe-area-context';

PostedAvailabilitiesScreen
import React, { useState } from 'react';
import { Text, View, ScrollView, TouchableOpacity, StatusBar, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeft, Bell, ChevronRight, CircleSlash, CalendarRange, BriefcaseBusiness, } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';
import { useQuery } from '@tanstack/react-query';
import styles from './style';
import { fetchMyJobs } from '../../services/jobs';
import { formatSchedule, timeAgo } from '../../helper/timeanddateHelper';
import AvailabilitySkeleton from '../../components/skeleton/AvailabilitySkeleton';
import PostTypeModal from '../../components/availiability/PostTypeModal';
import { Mypost } from '../../@types/Mypost.type';
→ <+ Post New> → FullTimeAvailabilityCreation
→ <+ Post New> → SeosonalAvailabilityCreation

MemberShipScreen
import React, { useState } from 'react';
import { Text, View, ScrollView, TouchableOpacity, StatusBar, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import styles from './style';
import { ArrowLeft, Check } from 'lucide-react-native';
→ <Go Premium> → PurchaseScreen

SettingScreen
import React from 'react';
import { Text, View, ScrollView, TouchableOpacity, Image, StatusBar, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { User, Gem, Tag, Globe, Heart, Bell, FileText, ChevronRight, ArrowLeft, } from 'lucide-react-native';
import UserProfileIcon from '../../components/svg/UserProfileIcon';
import { useNavigation } from '@react-navigation/native';
import styles from './style';
→ <Credit> → CreditScreen
import React from 'react';
import { Text, View, ScrollView, TouchableOpacity, StatusBar, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeft, History, Gift, Clock4, Gem, ChevronRight, MedalIcon, PlayCircleIcon, } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './style';
import UsersAddIcon from '../../components/svg/UsersAddIcon';
→ <My Offer> → OfferScreen
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Image, StatusBar, } from 'react-native';
import { WebView } from 'react-native-webview';
import { X, ArrowRight } from 'lucide-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import styles from './SendOver';
import StarIcon from '../../components/svg/StarIcon';
import { Alert } from 'react-native';
import { ToastAndroid, Platform } from 'react-native';
→ <Language> → language
import React, { useState } from 'react';
import { Text, View, ScrollView, TouchableOpacity, StatusBar, TextInput, Image, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Search, CircleCheck, Circle } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './style';
→ <Engagement> → EngagementScreen
import React, { useState } from 'react';
import { Text, View, ScrollView, TouchableOpacity, StatusBar, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeft, Clock4 } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './style';
import TrophyIcon from '../../components/svg/TrophyIcon';
import BadgeIcon from '../../components/svg/BadgeIcon';
→ <Notification> → NotificationScreen
→ <Help And Support> → HelpSupportScreen
import React, { useState } from 'react';
import { Text, View, ScrollView, TouchableOpacity, StatusBar, TextInput, ImageBackground, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeft, Search, CalendarMinus2, Star, ChevronDown, ChevronUp, ArrowRight, MessageSquareText, Mail, } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';
import UsersAddIcon from '../../components/svg/UsersAddIcon';
import styles from './style';
import WalletIcon from '../../components/svg/WalletIcon';
→ <Term And Condition> → TearmsConditionScreen
import React, { useState } from 'react';
import { Text, View, ScrollView, TouchableOpacity, StatusBar, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './style';

LoginScreen
import React, { useState } from 'react';
import { Text, TextInput, View, TouchableOpacity, ScrollView, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Eye, EyeOff } from 'lucide-react-native';
import styles from '../login/style';
import GoogleIcon from '../../components/svg/GoogleIcon';
import AppleIcon from '../../components/svg/AppleIcon';
import Toast from 'react-native-toast-message';
import { useNavigation } from '@react-navigation/native';
import { getAuth, signInWithEmailAndPassword, } from '@react-native-firebase/auth';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigator/RootNavigator';
import { signInWithGoogle } from '../../services/auth';

==============================================================================================================================================================================================
2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222

Gig
import { View, Text, FlatList } from 'react-native';
import styles from '../../screen/feed/style';
import FeedCard from './FeedCard';
import { useQuery } from '@tanstack/react-query';
import FeedCardSkeleton from '../skeleton/FeedCardSkeleton';
import { fetchRecommendedJobs } from '../../services/jobs';

user
import { getAuth } from '@react-native-firebase/auth';
import { collection, doc, getDoc, getDocs, getFirestore, orderBy, query, serverTimestamp, updateDoc, where, } from '@react-native-firebase/firestore';
import { UpdateProfilePayload } from '../@types/UpdateProfile.type';
import { UserInfo } from '../@types/userInfo.type';

useUnreadNotifications
import { useQuery } from '@tanstack/react-query';
import { fetchMyNotifications } from '../services/notification';

NotificationDot
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { Bell } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';
→ NotificationScreen

NotificationScreen
import React, { useMemo, useState } from 'react';
import { Text, View, ScrollView, TouchableOpacity, StatusBar, TextInput, ActivityIndicator, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeft, Search, BriefcaseBusiness, MessageSquareText, CircleCheck, X, Eye, } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import styles from './style';
import WalletIcon from '../../components/svg/WalletIcon';
import firestore from '@react-native-firebase/firestore';
import { fetchMyNotifications, NotificationItem, } from '../../services/notification';

==============================================================================================================================================================================================

Tab 2: Find Jobs Stack
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AvailabilityScreen from '../screen/availabilty/AvailabiltyScreen';
import SeasonAvailabiltyScreen from '../screen/seasonAvailabilty/SeasonAvailabiltyScreen';

AvailabiltyScreen
import React from 'react';
import { FlatList, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './style';
import WorkerCard from '../../components/WorkerCard';
import { useNavigation } from '@react-navigation/native';
import AvailabilityHeader from '../../components/findjob/AvailabilityHeader';
import AvailabilityFilters from '../../components/findjob/AvailabilityFilters';
import PremiumBanner from '../../components/findjob/PremiumBanner';
import { useQuery } from '@tanstack/react-query';
import { fetchFullTimeJobs } from '../../services/jobs';
import Worker from '../../@types/Worker.type';
→ NotificationIcon → NotificationDot → NotificationScreen
→ <Seasonal> → SeasonAvailabiltyScreen
→ <send offer> → SendOfferScreen

Tab 3: Full time
FulltimeScreen
import React, { useCallback, useMemo, useState } from 'react';
import { View, Text, StatusBar, FlatList, ListRenderItem, TouchableOpacity, TextInput, } from 'react-native';
import { Search, SlidersHorizontal } from 'lucide-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useQuery } from '@tanstack/react-query';
import { styles } from './style';
import FilterItem from '../../components/FilterItem';
import { JobCard } from '../../components/fulltime/JobCard';
import { fetchRecommendedJobs } from '../../services/jobs';
import JobCardSkeleton from '../../components/skeleton/JobCardSkeleton';
import { useUnreadNotifications } from '../../hooks/useUnreadNotifications';
import NotificationDot from '../../components/feed/NotificationDot';
→ NotificationIcon → NotificationDot → NotificationScreen

Tab 4: Profile
MainProfile
import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Image, Switch, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CameraIcon, MapPin, X } from 'lucide-react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import Toast from 'react-native-toast-message';
import styles from './mainProfileStyle';
import SkillInput from '../../components/profile/SkillInput';
import UploadBanner from '../../components/availiability/UploadBanner';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchCurrentUser, updateUserProfile } from '../../services/user';
