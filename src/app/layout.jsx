'use client';
import React, { useEffect } from 'react';
import { ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import RTL from '@/app/(DashboardLayout)/layout/shared/customizer/RTL';
import { ThemeSettings } from '@/utils/theme/Theme';
import { store, persistor } from '@/store/store';
import { Notifications } from 'react-push-notification';
import { GetUser, SendNotify } from '@/utils/apiCalls';
import { useSelector,useDispatch } from 'react-redux';
// import { AppState } from "@/store/store";
import { logout } from '@/store/user/userSlice';
import { Provider } from 'react-redux';
import './global.css';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import '@/app/api/index';
import '@/utils/i18n';
import { NextAppDirEmotionCacheProvider } from '@/utils/theme/EmotionCache';
import 'react-quill/dist/quill.snow.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { PersistGate } from 'redux-persist/integration/react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import initializeFirebaseMessaging from '@/utils/firebase';
import { messaging } from '../../public/firebase-messaging-sw';
import { onMessage } from 'firebase/messaging';
export const MyApp = ({ children }) => {
  const theme = ThemeSettings();
const dispatch = useDispatch()
  const customizer = useSelector((state) => state.customizer);
  const user = useSelector((state) => state.user);
  const router = useRouter()
  useEffect(() => {
    initializeFirebaseMessaging();

    // onMessage(messaging,(payload)=>{
    //   console.log(payload);
    // })
    const setupMessaging = async () => {
      const messaging = await initializeFirebaseMessaging();
      if (messaging) {
        // Handle foreground messages
        onMessage(messaging, (payload) => {
          console.log('Message received. ', payload);
          // Customize how you handle the foreground messages here
          // Example: Display a notification
          const notificationTitle = payload.notification.title;
          const notificationOptions = {
            body: payload.notification.body,
            icon: payload.notification.image,
          };

          if (Notification.permission === 'granted') {
            new Notification(notificationTitle, notificationOptions);
          }
        });
      }
    };

    setupMessaging();
  }, []);
  useEffect(() => {
    const tokenFirebase = localStorage.getItem('CurrentToken');
    const targetTime = new Date(localStorage.getItem('mid')); // Define the target time
    const targetTime1 = new Date(localStorage.getItem('eve')); // Define the target time
    const targetTime2 = new Date(localStorage.getItem('mor')); // Define the target time
    const morning = localStorage.getItem('morRemind');
    const midday = localStorage.getItem('midRemind');
    const evening = localStorage.getItem('eveRemind');
    const intervalId = setInterval(() => {
      const currentTime = new Date();
      if (
        morning &&
        currentTime.getHours() === targetTime2.getHours() &&
        currentTime.getMinutes() === targetTime2.getMinutes()
      ) {
        // console.log("first")
        const res = SendNotify(tokenFirebase, '43me', 'Lets Check What to do today!');
        //  console.log(res,'res-data')
      }
      if (
        midday &&
        currentTime.getHours() === targetTime.getHours() &&
        currentTime.getMinutes() === targetTime.getMinutes()
      ) {
        // console.log("first")
        const res = SendNotify(tokenFirebase, '43me', 'Lets Check What to do today!');
        //  console.log(res,'res-data')
      }
      if (
        evening &&
        currentTime.getHours() === targetTime1.getHours() &&
        currentTime.getMinutes() === targetTime1.getMinutes()
      ) {
        // console.log("first")
        const res = SendNotify(tokenFirebase, '43me', 'Lets Check What to do today!');
        //  console.log(res,'res-data')
      }
    }, 60000); // Check every minute

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);
  useEffect(() => {
    const ftc = async () => {
      const res = await GetUser(user?.currentUser?.token);
      // console.log(res, 'userinfo');
      // console.log(res?.data[0].subscriptions[0]?.expiry_date)
      const givenDate = new Date(res?.data[0].subscriptions[0]?.expiry_date);
      const currentDate = new Date();
      if (givenDate < currentDate && res?.data[0].subscriptions[0]?.status==="inactive") {
        dispatch(logout());
        router.replace('/auth/auth1/login')
      } 
    };
    ftc();
  }, []);
  return (
    <>
      <NextAppDirEmotionCacheProvider options={{ key: 'modernize' }}>
        <ThemeProvider theme={theme}>
          <RTL direction={customizer.activeDir}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            {children}
          </RTL>
        </ThemeProvider>
      </NextAppDirEmotionCacheProvider>
    </>
  );
};

export default function RootLayout({ children }) {
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    setTimeout(() => setLoading(true), 3000);
  }, []);
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Notifications />
            {loading ? (
              // eslint-disable-next-line react/no-children-prop
              <MyApp children={children} />
            ) : (
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '100%',
                  height: '100vh',
                }}
              >
                <CircularProgress />
              </Box>
            )}
          </PersistGate>
        </Provider>
      </body>
    </html>
  );
}
