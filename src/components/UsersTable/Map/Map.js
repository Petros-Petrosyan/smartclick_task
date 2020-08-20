import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends Component {
    static defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 10
    };

    render() {
        const {row: {lat, lng}, center, zoom} = this.props;
        return (
            <div style={{ height: '300px', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyBSZAH1qdgSvPPl6qGcQ8wnMeQmS-SVWpo'}}
                    defaultCenter={center}
                    defaultZoom={zoom}
                >
                    <AnyReactComponent
                        lat={lat}
                        lng={lng}
                        text="My Marker"
                    />
                </GoogleMapReact>
            </div>
        );
    }
}

export { Map };