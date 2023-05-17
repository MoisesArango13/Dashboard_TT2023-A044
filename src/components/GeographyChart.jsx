import React, {useEffect} from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet.heat/dist/leaflet-heat.js";

const GeographyChart = () => {
  useEffect(() => {

      var container = L.DomUtil.get("map");

      if (container != null) {
      container._leaflet_id = null;
      }
    
      let map = L.map("map").setView([51.505, -0.09], 13);

      // Add tile layer from OpenStreetMap
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "Map data &copy; OpenStreetMap contributors",
        maxZoom: 18,
        scrollWheelZoom: true,
      }).addTo(map);

      // Define heatmap data
      const heatmapData = [
        [51.5, -0.09],
        [51.505, -0.085],
        [51.51, -0.1],
        [51.52, -0.1],
        [51.49, -0.1],
      ];

      // Add heatmap layer
      L.heatLayer(heatmapData, {
        radius: 50,
        blur: 50,
        maxZoom: 17,
      }).addTo(map);
  }, []);

  return <div id="map" style={{ height: "100vh" }}></div>;
};

export default GeographyChart;