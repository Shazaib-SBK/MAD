
import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import {useState} from 'react';
import {View, Text, Button, StatusBar, StyleSheet, Image, TouchableOpacity} from 'react-native';



export default function CitiesDataFetcher(){
    const [cities, setCities] = React.useState([]);
    const navigation = useNavigation();

    React.useEffect(() => {
        async function getData(){
            const dataString = await fetch('https://raw.githubusercontent.com/mUne3b1/mydata/main/citiesdata.json');
            const data = (await dataString.json()).cities
            setTimeout(() => {
                setCities(data);
            }, 2000);
        }
        getData();
    }, []);
    return (<View style={styles.screen}>
        <TouchableOpacity onPress={() => navigation.navigate('SearchScreen')}>
            <Text style={{fontSize: 15, color: '#777'}}>
                Back
            </Text>
        </TouchableOpacity>
        <Text style={{fontSize: 28, color: 'black', opacity: 0.8, textAlign: 'center', marginTop: 10}}>Famous Places to Visit</Text>
        {
            cities.length > 0 ? <View>
            {
                cities.map(city => <View key={city.name} style={{borderWidth: 1, borderColor: '#79A2FF', padding: 10, marginVertical: 10, borderRadius: 4}}>
                    <Text style={{fontSize: 18, color: 'black', opacity: 0.7}}>{city.name}</Text>
                    <View>
                        {
                            city.destinations.map(d => <Text key={d} style={{fontSize: 14, color: 'black', opacity: 0.5}}>{d}</Text>)
                        }
                    </View>
                </View>)
            }
        </View>: <Text style={{fontSize: 16, color: '#666', textAlign: 'center', marginTop: 30}}>Loading....</Text>
        }
    </View>)
}


const styles = StyleSheet.create({
    screen: {
        paddingVertical: 20,
        paddingHorizontal: 25,
    }
});