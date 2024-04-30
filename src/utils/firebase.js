// // Import the functions you need from the SDKs you need
// import { initializeApp } from 'firebase/app';
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries
// import { getMessaging, getToken, isSupported } from 'firebase/messaging';

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: 'AIzaSyAhrB-GqeBvAxw7eFCgxi9FylQMJot3QUg',
//   authDomain: 'me-demo-97723.firebaseapp.com',
//   projectId: 'me-demo-97723',
//   storageBucket: 'me-demo-97723.appspot.com',
//   messagingSenderId: '991460977094',
//   appId: '1:991460977094:web:48d6a625108fd324232ac7',
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const messaging = getMessaging(app);

// export const generateToken = async () => {
//   const permission = await Notification.requestPermission();
//   console.log(permission);
//   if(permission==="granted"){
//   // const support = await isSupported();
//   // console.log(support);
//   getToken(messaging, { vapidKey: "BAZINr-HZoli3EJZndiUnpyWImGxtnzb5pdWXUUzU8LTvO7uKnzJoB2A_lERTRH7FQHgE9MjgEXp7zEAxhwUA3M" })
//     .then((currentToken) => {
//       if (currentToken) {
//         // Send the token to your server and update the UI if necessary
//         // ...
//         console.log(currentToken);
//       } else {
//         // Show permission request UI
//         console.log('No registration token available. Request permission to generate one.');
//         // ...
//       }
//     })
//     .catch((err) => {
//       console.log('An error occurred while retrieving token. ', err);
//       // ...
//     });
//   }
//   // const token = await getToken(messaging,{
//   //   vapidKey:"BAZINr-HZoli3EJZndiUnpyWImGxtnzb5pdWXUUzU8LTvO7uKnzJoB2"
//   // })
//   // console.log(token)

//   // }
// };
