"use client";
import React , {useEffect }from "react";
import { ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import RTL from "@/app/(DashboardLayout)/layout/shared/customizer/RTL";
import { ThemeSettings } from "@/utils/theme/Theme";
import { store,persistor } from "@/store/store";
import { Notifications } from 'react-push-notification';

import { useSelector } from 'react-redux';
// import { AppState } from "@/store/store";
import { Provider } from "react-redux";
import './global.css'
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import "@/app/api/index";
import "@/utils/i18n";
import { NextAppDirEmotionCacheProvider } from "@/utils/theme/EmotionCache";
import "react-quill/dist/quill.snow.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PersistGate } from 'redux-persist/integration/react'
import initializeFirebaseMessaging from "@/utils/firebase";
export const MyApp = ({ children }) => {
  const theme = ThemeSettings();

  const customizer = useSelector((state) => state.customizer);
useEffect(() => {
  initializeFirebaseMessaging()
}, [])

  return (
    <>
      <NextAppDirEmotionCacheProvider options={{ key: "modernize" }}>
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
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100vh",
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
