import GoogleMapReact from 'google-map-react'

const GoogleMap = ({location, zoomLevel}:any) => {
  
  return (
     <>
     <div className="google-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: '' }}
        defaultCenter={location}
        defaultZoom={zoomLevel}
      >
       
      </GoogleMapReact>
    </div>
     </>
  )
};

export default GoogleMap;


