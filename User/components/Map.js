import React, { useRef, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import { useDispatch, useSelector } from 'react-redux'
import tw from 'tailwind-react-native-classnames'
import { selectDestination, selectOrigin, setTravelTimeInformation } from '../slices/navSlice'
import { GOOGLE_MAPS_APIKEY } from "@env"
import MapViewDirections from "react-native-maps-directions";


const Map = () => {
    const origin = useSelector(selectOrigin)
    const destination = useSelector(selectDestination)
    const mapRef = useRef(null)
    const dispatch = useDispatch();

    useEffect(() => {
        if (!origin || !destination) return

        //Zoom and fit to markers
        mapRef.current.fitToSuppliedMarkers(["origin", "destination"], {
            edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
        });
    }, [origin, destination])

    //Calculate the travel time using origin, destination and key
    useEffect(() => {
        if (!origin || !destination) return;

        const getTravelTime = async () => {
            const url = `https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${origin.description}&destinations=${destination.description}&key=${GOOGLE_MAPS_APIKEY}`;
            const response = await fetch(url);
            const data = await response.json();
            dispatch(setTravelTimeInformation(data.rows[0].elements[0]));
        }

        getTravelTime();
    }, [origin, destination, GOOGLE_MAPS_APIKEY])

    return (
        <MapView
            ref={mapRef}
            style={tw`flex-1`}
            mapType="mutedStandard"
            initialRegion={{
                latitude: origin?.location?.lat || 7.443298899999999,
                longitude: origin?.location?.lng || 3.9003428,
                //Street Level View
                latitudeDelta: 0.005,
                longitudeDelta: 0.005,
                //
                // latitudeDelta: 0.0922,
                // longitudeDelta: 0.0421,
            }}
        >
            {origin && destination && (
                <MapViewDirections
                    origin={origin.description}
                    destination={destination.description}
                    apikey={GOOGLE_MAPS_APIKEY}
                    strokeWidth={3}
                    strokeColor="green"
                    lineDashPattern={[0]}
                />
            )}

            {origin?.location && (
                <Marker
                    coordinate={{
                        latitude: origin.location.lat,
                        longitude: origin.location.lng,
                    }}
                    title="Origin"
                    description={origin.description}
                    identifier="origin"
                />
            )}

            {destination?.location && (
                <Marker
                    coordinate={{
                        latitude: destination.location.lat,
                        longitude: destination.location.lng,
                    }}
                    title="Destination"
                    description={destination.description}
                    identifier="destination"
                />
            )}
        </MapView>

    )
}

export default Map

const styles = StyleSheet.create({})
