ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:32633").setExtent([399118.900881, 716873.619543, 417767.719631, 729870.491828]);
var wms_layers = [];


        var lyr_ESRIOcean_0 = new ol.layer.Tile({
            'title': 'ESRI Ocean',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/Ocean/World_Ocean_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_ESRISatellite_1 = new ol.layer.Tile({
            'title': 'ESRI Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_affleurement_de_Meiganga_2 = new ol.format.GeoJSON();
var features_affleurement_de_Meiganga_2 = format_affleurement_de_Meiganga_2.readFeatures(json_affleurement_de_Meiganga_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32633'});
var jsonSource_affleurement_de_Meiganga_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_affleurement_de_Meiganga_2.addFeatures(features_affleurement_de_Meiganga_2);
var lyr_affleurement_de_Meiganga_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_affleurement_de_Meiganga_2, 
                style: style_affleurement_de_Meiganga_2,
                interactive: true,
    title: 'affleurement_de_Meiganga<br />\
    <img src="styles/legend/affleurement_de_Meiganga_2_0.png" /> Roche magmatique<br />\
    <img src="styles/legend/affleurement_de_Meiganga_2_1.png" /> Roche metamorphique<br />\
    <img src="styles/legend/affleurement_de_Meiganga_2_2.png" /> Roche sedimentaire<br />'
        });

lyr_ESRIOcean_0.setVisible(true);lyr_ESRISatellite_1.setVisible(true);lyr_affleurement_de_Meiganga_2.setVisible(true);
var layersList = [lyr_ESRIOcean_0,lyr_ESRISatellite_1,lyr_affleurement_de_Meiganga_2];
lyr_affleurement_de_Meiganga_2.set('fieldAliases', {'Num�ro de l\'affleurement': 'Num�ro de l\'affleurement', 'Quartier': 'Quartier', 'latitude': 'latitude', 'longitude': 'longitude', 'altitude': 'altitude', 'precision': 'precision', 'Mode d\'affleurement': 'Mode d\'affleurement', 'Couleur de la patine d\'alt�ration': 'Couleur de la patine d\'alt�ration', 'Structure G�ologique': 'Structure G�ologique', 'Type de roche': 'Type de roche', 'Superficies en m�': 'Superficies en m�', 'Nom provisoire de la roche': 'Nom provisoire de la roche', 'Prendre une photo_URL': 'Prendre une photo_URL', 'field_14': 'field_14', });
lyr_affleurement_de_Meiganga_2.set('fieldImages', {'Num�ro de l\'affleurement': 'Range', 'Quartier': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'altitude': 'TextEdit', 'precision': 'TextEdit', 'Mode d\'affleurement': 'TextEdit', 'Couleur de la patine d\'alt�ration': 'TextEdit', 'Structure G�ologique': 'TextEdit', 'Type de roche': 'TextEdit', 'Superficies en m�': 'TextEdit', 'Nom provisoire de la roche': 'TextEdit', 'Prendre une photo_URL': 'TextEdit', 'field_14': 'TextEdit', });
lyr_affleurement_de_Meiganga_2.set('fieldLabels', {'Num�ro de l\'affleurement': 'no label', 'Quartier': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'altitude': 'no label', 'precision': 'no label', 'Mode d\'affleurement': 'no label', 'Couleur de la patine d\'alt�ration': 'no label', 'Structure G�ologique': 'no label', 'Type de roche': 'no label', 'Superficies en m�': 'no label', 'Nom provisoire de la roche': 'no label', 'Prendre une photo_URL': 'no label', 'field_14': 'no label', });
lyr_affleurement_de_Meiganga_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});