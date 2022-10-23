import { useEffect, useState } from "react";
import L from "leaflet";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine";
import { useMap } from "react-leaflet";

L.Marker.prototype.options.icon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png"
});

  const Routing = ({ source, destination }) => {
  const map = useMap();

    useEffect(() => {
      if (!map) return;

      if ( source?.lat !== undefined && destination?.lat !== undefined  ) {
          const routingControl = L.Routing.control({
          waypoints: [
            L.latLng( parseFloat(source.lat), parseFloat(source.lng) ), 
            L.latLng( parseFloat(destination.lat), parseFloat(destination.lng) )
          ],
          routeWhileDragging: true,
          lineOptions: {
            styles: [{ color: "#17458A", weight: 4 }]
          },
          show: false,
          showAlternatives: false,
          addWaypoints: true, 
          fitSelectedRoutes: true,
        }).addTo(map);

        return () => map.removeControl(routingControl);
      }
      


    }, [map, source, destination]);   

  return null;
}

export default Routing;