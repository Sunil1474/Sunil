var wms_layers = [];

var format_layer1_0 = new ol.format.GeoJSON();
var features_layer1_0 = format_layer1_0.readFeatures(json_layer1_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_layer1_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_layer1_0.addFeatures(features_layer1_0);
var lyr_layer1_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_layer1_0, 
                style: style_layer1_0,
                popuplayertitle: "layer1",
                interactive: true,
                title: '<img src="styles/legend/layer1_0.png" /> layer1'
            });
var lyr_P5_PAN_CD_N17_000_E079_000_DEM_30m_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "P5_PAN_CD_N17_000_E079_000_DEM_30m",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/P5_PAN_CD_N17_000_E079_000_DEM_30m_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [8794239.543306, 1920826.085388, 8905559.123155, 2037549.689166]
                            })
                        });
var format_pointsamplinggpkg_2 = new ol.format.GeoJSON();
var features_pointsamplinggpkg_2 = format_pointsamplinggpkg_2.readFeatures(json_pointsamplinggpkg_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pointsamplinggpkg_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pointsamplinggpkg_2.addFeatures(features_pointsamplinggpkg_2);
var lyr_pointsamplinggpkg_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_pointsamplinggpkg_2, 
                style: style_pointsamplinggpkg_2,
                popuplayertitle: "point sampling.gpkg",
                interactive: true,
                title: '<img src="styles/legend/pointsamplinggpkg_2.png" /> point sampling.gpkg'
            });
var format_sample1DW_3 = new ol.format.GeoJSON();
var features_sample1DW_3 = format_sample1DW_3.readFeatures(json_sample1DW_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sample1DW_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sample1DW_3.addFeatures(features_sample1DW_3);
var lyr_sample1DW_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sample1DW_3, 
                style: style_sample1DW_3,
                popuplayertitle: "sample1DW",
                interactive: true,
                title: '<img src="styles/legend/sample1DW_3.png" /> sample1DW'
            });
var lyr_Interpolated_4 = new ol.layer.Image({
                            opacity: 1,
                            title: "Interpolated",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Interpolated_4.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [8799719.140644, 1923729.676792, 8904410.532033, 2032249.600891]
                            })
                        });

lyr_layer1_0.setVisible(true);lyr_P5_PAN_CD_N17_000_E079_000_DEM_30m_1.setVisible(true);lyr_pointsamplinggpkg_2.setVisible(true);lyr_sample1DW_3.setVisible(true);lyr_Interpolated_4.setVisible(true);
var layersList = [lyr_layer1_0,lyr_P5_PAN_CD_N17_000_E079_000_DEM_30m_1,lyr_pointsamplinggpkg_2,lyr_sample1DW_3,lyr_Interpolated_4];
lyr_layer1_0.set('fieldAliases', {});
lyr_pointsamplinggpkg_2.set('fieldAliases', {'fid': 'fid', 'P5_PAN_CD_N17_000_E079_000_DEM_30m': 'P5_PAN_CD_N17_000_E079_000_DEM_30m', });
lyr_sample1DW_3.set('fieldAliases', {'fid': 'fid', 'P5_PAN_CD_': 'P5_PAN_CD_', });
lyr_layer1_0.set('fieldImages', {});
lyr_pointsamplinggpkg_2.set('fieldImages', {'fid': '', 'P5_PAN_CD_N17_000_E079_000_DEM_30m': '', });
lyr_sample1DW_3.set('fieldImages', {'fid': '', 'P5_PAN_CD_': '', });
lyr_layer1_0.set('fieldLabels', {});
lyr_pointsamplinggpkg_2.set('fieldLabels', {'fid': 'no label', 'P5_PAN_CD_N17_000_E079_000_DEM_30m': 'no label', });
lyr_sample1DW_3.set('fieldLabels', {'fid': 'no label', 'P5_PAN_CD_': 'no label', });
lyr_sample1DW_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});