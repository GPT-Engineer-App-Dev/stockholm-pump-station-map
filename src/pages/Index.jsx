import { Container, Text, VStack, Box, Heading } from "@chakra-ui/react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Custom icon for bike pump stations
const bikePumpIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  iconSize: [25, 25],
});

const bikePumpStations = [
  { lat: 59.3293, lng: 18.0686, name: "Central Station" },
  { lat: 59.33258, lng: 18.0649, name: "City Hall" },
  { lat: 59.334591, lng: 18.06324, name: "Old Town" },
];

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Box bg="blue.500" w="100%" p={4} color="white">
        <Heading as="h1" size="lg">Bike Pump Stations in Stockholm</Heading>
      </Box>
      <Box height="calc(100vh - 80px)">
        <MapContainer center={[59.3293, 18.0686]} zoom={13} style={{ height: "100%", width: "100%" }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {bikePumpStations.map((station, index) => (
            <Marker key={index} position={[station.lat, station.lng]} icon={bikePumpIcon}>
              <Popup>{station.name}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </Box>
    </Container>
  );
};

export default Index;