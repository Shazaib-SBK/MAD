// In App.js in a new project

import * as React from 'react';
import {useState} from 'react';
import {View, Text, Button, StatusBar} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {NavigationContainer} from '@react-navigation/native';
import FlightSearch from './ummam/FlightSearch';
import PopularPackages from './ummam/PopularPackages/PopularPackages';
import Navbar from './ummam/Navbar/Navbar';
import FlightDetails from './ummam/FlightDetails';
import BookedFlights from './ummam/BookedFlights';
import SearchResult from './ummam/SearchResult';
import {Provider} from 'react-redux';
import {store} from './ummam/store/MainStore';
import AccomodationsForm from './usman/AccomodationsForm';
import HotelsList from './usman/HotelsList';
import HotelDetail from './usman/HotelDetail';
import PaymentMethods from './usman/PaymentMethods';
import ThankYou from './usman/ThankYou';

import SearchScreen from './shazaib/SearchScreen';
import Result from './shazaib/Result';
import Faisal from './shazaib/Faisal';
import Ticket from './shazaib/Ticket';
import Confirm from './shazaib/Confirm';
import ItineraryDashboard from './muneeb/screens/ItineraryDashboard';
import AddDestination from './muneeb/screens/AddDestination';
import AddActivity from './muneeb/screens/AddActivity';
import ItineraryCreated from './muneeb/screens/ItineraryCreated';
import ViewItinerary from './muneeb/screens/ViewItinerary';

import LoginScreen from './naeem/LoadingScreen';
import RegistrationScreen from './naeem/RegistrationScreen';
import ForgotScreen from './naeem/ForgotScreen';
import VerificationScreen from './naeem/VerificationScreen';
import ChangePasswordScreen from './naeem/ChangePasswordScreen';
import ProfileScreen from './naeem/ProfileScreen';
import LoadingScreen from './naeem/LoadingScreen';
import {auth} from '.naeem/firebase/firebase.config';
import CitiesDataFetcher from './shazaib/CitiesDataFetcher';

const Stack = createNativeStackNavigator();

function App() {
  const [itineraries, setItineraries] = useState([]);
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar backgroundColor="#fff" barStyle={'dark-content'} />

        <Stack.Navigator
          initialRouteName="Loading"
          screenOptions={{headerShown: false}}>
          {/* Shazaib's screens Below */}
          <Stack.Screen name="SearchScreen" component={SearchScreen} />
          <Stack.Screen name="Result" component={Result} />
          <Stack.Screen name="Faisal Mosque" component={Faisal} />
          <Stack.Screen name="Purchase Ticket" component={Ticket} />
          <Stack.Screen name="Ticket Confirmation" component={Confirm} />
          <Stack.Screen name="CitiesDataFetcher" component={CitiesDataFetcher} />
          {/* Ummam's Screen Below */}
          <Stack.Screen name="FlightSearch" component={FlightSearch} />
          <Stack.Screen name="PopularPackages" component={PopularPackages} />
          <Stack.Screen name="FlightDetails" component={FlightDetails} />
          <Stack.Screen name="BookedFlights" component={BookedFlights} />
          <Stack.Screen name="FlightSearchResult" component={SearchResult} />
          {/* Usman's screens Below */}
          <Stack.Screen
            name="AccomodationsForm"
            component={AccomodationsForm}
          />
          <Stack.Screen name="HotelsList" component={HotelsList} />
          <Stack.Screen name="HotelDetail" component={HotelDetail} />
          <Stack.Screen name="PaymentMethods" component={PaymentMethods} />
          <Stack.Screen name="ThankYou" component={ThankYou} />
          {/* Muneeb's Screens */}
          <Stack.Screen name="ItineraryDashboard">
            {props => (
              <ItineraryDashboard
                {...props}
                itineraries={itineraries}
                setItineraries={setItineraries}
              />
            )}
          </Stack.Screen>
          <Stack.Screen name="AddDestination">
            {props => (
              <AddDestination {...props} setItineraries={setItineraries} />
            )}
          </Stack.Screen>
          <Stack.Screen name="AddActivity" component={AddActivity} />
          <Stack.Screen name="ViewItinerary" component={ViewItinerary} />
          <Stack.Screen name="ItineraryCreated">
            {props => (
              <ItineraryCreated {...props} setItineraries={setItineraries} />
            )}
          </Stack.Screen>
          {/* Naeem's screens Below */}
          <Stack.Screen
            name="Loading"
            component={LoadingScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Registration"
            component={RegistrationScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Forgot"
            component={ForgotScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Verification"
            component={VerificationScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ChangePassword"
            component={ChangePasswordScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Profile"
            component={ProfileScreen}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
        <Navbar />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
