// // import "@/styles/globals.css";
// // import { SessionProvider as AuthProvider } from "next-auth/react";
// // import { Provider } from "react-redux";
// // import { store } from "../src/store"; // Ensure the correct path to your store.js
// // import Navbanner
// //  from "./components/nabar/navabrbelt/Nabarbanner/navbanner";
// //  import Navbarbelt from "./components/nabar/navabrbelt/navbarbelt";
// // export default function App({ Component, pageProps }) {
// //   return (
// //     <AuthProvider session={pageProps.session}>
// //       <Provider store={store}>
    
// //         <Navbarbelt/>
// //         <Navbanner/>
// //         <Component {...pageProps} />
     
// //       </Provider>
// //     </AuthProvider>
// //   );
// // }

// import "@/styles/globals.css";
// import { SessionProvider as AuthProvider } from "next-auth/react";
// import { Provider } from "react-redux";
// import { store } from "../src/store";
// import Navbanner from "./components/nabar/navabrbelt/Nabarbanner/navbanner";
// import Navbarbelt from "./components/nabar/navabrbelt/navbarbelt";
// import { AddressProvider } from "../pages/context/AddressContext"; // Import AddressProvider

// export default function App({ Component, pageProps }) {
//   return (
//     <AuthProvider session={pageProps.session}>
//       <Provider store={store}>
//         <AddressProvider> {/* Wrap with AddressProvider */}
//           <Navbarbelt />
//           <Navbanner />
//           <Component {...pageProps} />
//         </AddressProvider>
//       </Provider>
//     </AuthProvider>
//   );
// }
import "@/styles/globals.css";
import { SessionProvider as AuthProvider } from "next-auth/react";
import { Provider } from "react-redux";
import { store } from "../src/store";
import Navbanner from "./components/nabar/navabrbelt/Nabarbanner/navbanner";
import Navbarbelt from "./components/nabar/navabrbelt/navbarbelt";
import { AddressProvider } from "../pages/context/AddressContext";
import { DeliveryProvider } from '../pages/context/DeliverContext'; // Changed to DeliveryProvider
import Footer from "./components/footer";
export default function App({ Component, pageProps }) {
  return (
    <AuthProvider session={pageProps.session}>
      <Provider store={store}>
        <AddressProvider>
          <DeliveryProvider> {/* Proper provider component */}
            <Navbarbelt />
            <Navbanner />
          
            <Component {...pageProps} />  <Footer/>
          </DeliveryProvider>
        </AddressProvider>
      </Provider>
    </AuthProvider>
  );
}