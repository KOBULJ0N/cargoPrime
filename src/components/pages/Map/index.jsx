import React from 'react';
import {
  Button,
  Container,
  Form,
  GoogleMapWrap,
  Input,
  Textarea,
  Title,
} from './style';
// import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";

const Map = () => {
  const apiKey = 'AIzaSyC17GeRPQ0k7veGOvlta9Ts7fcy-vL-_BQ';
  //REACT_APP_xxx_key >> access with ${process.env.REACT_APP_xxx_KEY}

  const gmapURL = `https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${apiKey}`;

  // will return library using, google map
  function Map() {
    return (
      <GoogleMap defaultZoom={10} defaultCenter={{ lat: 37.75, lng: -122.5 }} />
    );
  }

  const WrappedMap = withScriptjs(withGoogleMap(Map));

  return (
    <Container>
      <Title>GET A QUOTE</Title>
      <Form>
        <Form.Title>Personal Data</Form.Title>
        <Input.Wrap>
          <Input mr placeholder='Name' />
          <Input mr placeholder='Phone' />
          <Input placeholder='E-mail' />
        </Input.Wrap>
        <Input.Wrap>
          <Input mr placeholder='Company name' />
          <Input placeholder='MC#' />
        </Input.Wrap>

        <Form.Title mt='73'>Notes</Form.Title>
        <Input.Wrap>
          <Textarea placeholder='Notes' />
        </Input.Wrap>

        <Form.Title mt='24'>Personal Data</Form.Title>
        <Input.Wrap>
          <Input mr placeholder='From' />
          <Input mr placeholder='To' />
          <Input placeholder='E-Pick-up date' />
        </Input.Wrap>
        <Input.Wrap>
          <Input placeholder='Delivery date' />
        </Input.Wrap>
        <Button>Submit</Button>
      </Form>

      <GoogleMapWrap className='App'>
        <WrappedMap
          googleMapURL={gmapURL}
          loadingElement={<div style={{ height: '100%' }} />}
          containerElement={<div style={{ height: '100%' }} />}
          mapElement={<div style={{ height: '100%' }} />}
        />
      </GoogleMapWrap>
    </Container>
  );
};

export default Map;
