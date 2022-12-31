 require([
	  "esri/config",
	  "esri/Map", 
	  "esri/views/MapView",
	  "esri/widgets/Swipe",
	  "esri/layers/FeatureLayer",
	  "esri/layers/GeoJSONLayer",
	  "esri/layers/TileLayer",
	   ], function ($esriConfig,$Map, $MapView,$Swipe,$FeatureLayer,$GeoJSONLayer,$TileLayer) {
        $esriConfig.apiKey = "AAPK449340f85b664e6b802d2d0e65eb4849vlSII8YqKpEj5Fn0hCy2qr4QyOAZRZSB6XWDc2-X8pFlNoRYoQoetUvFs1Y_JVKL";	
	
	// 创建地图
        const map = new $Map({
          basemap: "arcgis-topographic" // Basemap layer service
        });
	// 创建地图视图
        const view = new $MapView({
          map: map,
          center: [104.07,30.67], // Longitude, latitude
          zoom: 9, // Zoom level
          container: "viewDiv" // Div element
        });
		let dem = new $TileLayer({
		  // URL points to a cached tiled map service hosted on ArcGIS Server
		  url: "https://tiles.arcgis.com/tiles/U26uBjSD32d7xvm2/arcgis/rest/services/dem_/MapServer"
		});		
		map.add(dem);

		const cd = new $FeatureLayer({
		    url: "https://services3.arcgis.com/U26uBjSD32d7xvm2/arcgis/rest/services/cd/FeatureServer",			
		  });
		   map.add(cd);
	  const swipe = new $Swipe({
	      leadingLayers: [dem],
	      trailingLayers: [cd],
	      position: 50, // set position of widget to 35%
	      view: view
	  });
	  });
	  