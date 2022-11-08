SMK.INIT( {
    containerSel: '#smk-map-frame',
    config: [ './smk-config.json', '?' ]
} )
.then( function ( smk ) {
    // SMK initialized
    // Code to add Electric Charging Stations in Canada layer
    // const featureLayer = L.esri.featureLayer({
    //     url: "https://services.arcgis.com/zmLUiqh7X11gGV2d/arcgis/rest/services/alt_fuel_stations/FeatureServer/0"
    // });
    // featureLayer.addTo(smk.$viewer.map);

} )
