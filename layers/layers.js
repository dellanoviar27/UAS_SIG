var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_KOTABANDUNG_1 = new ol.format.GeoJSON();
var features_KOTABANDUNG_1 = format_KOTABANDUNG_1.readFeatures(json_KOTABANDUNG_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KOTABANDUNG_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KOTABANDUNG_1.addFeatures(features_KOTABANDUNG_1);
var lyr_KOTABANDUNG_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KOTABANDUNG_1, 
                style: style_KOTABANDUNG_1,
                interactive: true,
    title: 'KOTA BANDUNG<br />\
    <img src="styles/legend/KOTABANDUNG_1_0.png" /> Ancol<br />\
    <img src="styles/legend/KOTABANDUNG_1_1.png" /> Antapani<br />\
    <img src="styles/legend/KOTABANDUNG_1_2.png" /> Antapani Kidul<br />\
    <img src="styles/legend/KOTABANDUNG_1_3.png" /> Antapani Tengah<br />\
    <img src="styles/legend/KOTABANDUNG_1_4.png" /> Arjuna<br />\
    <img src="styles/legend/KOTABANDUNG_1_5.png" /> Babakan<br />\
    <img src="styles/legend/KOTABANDUNG_1_6.png" /> Babakan Ciamis<br />\
    <img src="styles/legend/KOTABANDUNG_1_7.png" /> Babakan Ciparay<br />\
    <img src="styles/legend/KOTABANDUNG_1_8.png" /> Babakan Taroggong<br />\
    <img src="styles/legend/KOTABANDUNG_1_9.png" /> Babakanasih<br />\
    <img src="styles/legend/KOTABANDUNG_1_10.png" /> Babakansari<br />\
    <img src="styles/legend/KOTABANDUNG_1_11.png" /> Babakansurabaya<br />\
    <img src="styles/legend/KOTABANDUNG_1_12.png" /> Balonggede<br />\
    <img src="styles/legend/KOTABANDUNG_1_13.png" /> Batununggal<br />\
    <img src="styles/legend/KOTABANDUNG_1_14.png" /> Beraga<br />\
    <img src="styles/legend/KOTABANDUNG_1_15.png" /> Binong<br />\
    <img src="styles/legend/KOTABANDUNG_1_16.png" /> Buahbatu<br />\
    <img src="styles/legend/KOTABANDUNG_1_17.png" /> Burangrang<br />\
    <img src="styles/legend/KOTABANDUNG_1_18.png" /> Campaka<br />\
    <img src="styles/legend/KOTABANDUNG_1_19.png" /> Cangkuang Kulon<br />\
    <img src="styles/legend/KOTABANDUNG_1_20.png" /> Cangkuang Wetan<br />\
    <img src="styles/legend/KOTABANDUNG_1_21.png" /> Caringin<br />\
    <img src="styles/legend/KOTABANDUNG_1_22.png" /> Ciateul<br />\
    <img src="styles/legend/KOTABANDUNG_1_23.png" /> Cibabat<br />\
    <img src="styles/legend/KOTABANDUNG_1_24.png" /> Cibadak<br />\
    <img src="styles/legend/KOTABANDUNG_1_25.png" /> Cibaduyut<br />\
    <img src="styles/legend/KOTABANDUNG_1_26.png" /> Cibaduyut Kidul<br />\
    <img src="styles/legend/KOTABANDUNG_1_27.png" /> Cibaduyut Wetan<br />\
    <img src="styles/legend/KOTABANDUNG_1_28.png" /> Cibangkong<br />\
    <img src="styles/legend/KOTABANDUNG_1_29.png" /> Cibeunying<br />\
    <img src="styles/legend/KOTABANDUNG_1_30.png" /> Cibeureum<br />\
    <img src="styles/legend/KOTABANDUNG_1_31.png" /> Cibiru Hilir<br />\
    <img src="styles/legend/KOTABANDUNG_1_32.png" /> Cibiru Wetan<br />\
    <img src="styles/legend/KOTABANDUNG_1_33.png" /> Cibuntu<br />\
    <img src="styles/legend/KOTABANDUNG_1_34.png" /> Ciburial<br />\
    <img src="styles/legend/KOTABANDUNG_1_35.png" /> Cicadas<br />\
    <img src="styles/legend/KOTABANDUNG_1_36.png" /> Cicaheum<br />\
    <img src="styles/legend/KOTABANDUNG_1_37.png" /> Cigadung<br />\
    <img src="styles/legend/KOTABANDUNG_1_38.png" /> Cigending<br />\
    <img src="styles/legend/KOTABANDUNG_1_39.png" /> Cigereleng<br />\
    <img src="styles/legend/KOTABANDUNG_1_40.png" /> Cigondewah Hilir<br />\
    <img src="styles/legend/KOTABANDUNG_1_41.png" /> Cigondewah Kaler<br />\
    <img src="styles/legend/KOTABANDUNG_1_42.png" /> Cigondewah Kidul<br />\
    <img src="styles/legend/KOTABANDUNG_1_43.png" /> Cigondewah Rahayu<br />\
    <img src="styles/legend/KOTABANDUNG_1_44.png" /> Cigugur Tengah<br />\
    <img src="styles/legend/KOTABANDUNG_1_45.png" /> Cihapit<br />\
    <img src="styles/legend/KOTABANDUNG_1_46.png" /> Cihaurgeulis<br />\
    <img src="styles/legend/KOTABANDUNG_1_47.png" /> Cihideung<br />\
    <img src="styles/legend/KOTABANDUNG_1_48.png" /> Cijagra<br />\
    <img src="styles/legend/KOTABANDUNG_1_49.png" /> Cijerah<br />\
    <img src="styles/legend/KOTABANDUNG_1_50.png" /> Cikadut<br />\
    <img src="styles/legend/KOTABANDUNG_1_51.png" /> Cikahuripan<br />\
    <img src="styles/legend/KOTABANDUNG_1_52.png" /> Cikawao<br />\
    <img src="styles/legend/KOTABANDUNG_1_53.png" /> Cikutra<br />\
    <img src="styles/legend/KOTABANDUNG_1_54.png" /> Cilengkrang<br />\
    <img src="styles/legend/KOTABANDUNG_1_55.png" /> Cimenyan<br />\
    <img src="styles/legend/KOTABANDUNG_1_56.png" /> Cipadung<br />\
    <img src="styles/legend/KOTABANDUNG_1_57.png" /> Cipadung Kidul<br />\
    <img src="styles/legend/KOTABANDUNG_1_58.png" /> Cipadung Kulon<br />\
    <img src="styles/legend/KOTABANDUNG_1_59.png" /> Cipagalo<br />\
    <img src="styles/legend/KOTABANDUNG_1_60.png" /> Cipaganti<br />\
    <img src="styles/legend/KOTABANDUNG_1_61.png" /> Cipamokalan<br />\
    <img src="styles/legend/KOTABANDUNG_1_62.png" /> Cipanjalu<br />\
    <img src="styles/legend/KOTABANDUNG_1_63.png" /> Cipedes<br />\
    <img src="styles/legend/KOTABANDUNG_1_64.png" /> Ciporeat<br />\
    <img src="styles/legend/KOTABANDUNG_1_65.png" /> Cirangrang<br />\
    <img src="styles/legend/KOTABANDUNG_1_66.png" /> Ciroyom<br />\
    <img src="styles/legend/KOTABANDUNG_1_67.png" /> Cisaranten Binaharapan<br />\
    <img src="styles/legend/KOTABANDUNG_1_68.png" /> Cisaranten Kidul<br />\
    <img src="styles/legend/KOTABANDUNG_1_69.png" /> Cisaranten Kulon<br />\
    <img src="styles/legend/KOTABANDUNG_1_70.png" /> Cisaranten Wetan<br />\
    <img src="styles/legend/KOTABANDUNG_1_71.png" /> Ciseureuh<br />\
    <img src="styles/legend/KOTABANDUNG_1_72.png" /> Cisurupan<br />\
    <img src="styles/legend/KOTABANDUNG_1_73.png" /> Citarum<br />\
    <img src="styles/legend/KOTABANDUNG_1_74.png" /> Ciumbuleuit<br />\
    <img src="styles/legend/KOTABANDUNG_1_75.png" /> Ciwaruga<br />\
    <img src="styles/legend/KOTABANDUNG_1_76.png" /> Dago<br />\
    <img src="styles/legend/KOTABANDUNG_1_77.png" /> Derwati<br />\
    <img src="styles/legend/KOTABANDUNG_1_78.png" /> Dunguscariang<br />\
    <img src="styles/legend/KOTABANDUNG_1_79.png" /> Garuda<br />\
    <img src="styles/legend/KOTABANDUNG_1_80.png" /> Gegerkalong<br />\
    <img src="styles/legend/KOTABANDUNG_1_81.png" /> Gempolsari<br />\
    <img src="styles/legend/KOTABANDUNG_1_82.png" /> Gemuruh<br />\
    <img src="styles/legend/KOTABANDUNG_1_83.png" /> Girimekar<br />\
    <img src="styles/legend/KOTABANDUNG_1_84.png" /> Hegarmanah<br />\
    <img src="styles/legend/KOTABANDUNG_1_85.png" /> Husein Sastranegara<br />\
    <img src="styles/legend/KOTABANDUNG_1_86.png" /> Isola<br />\
    <img src="styles/legend/KOTABANDUNG_1_87.png" /> Jamika<br />\
    <img src="styles/legend/KOTABANDUNG_1_88.png" /> Jatiendah<br />\
    <img src="styles/legend/KOTABANDUNG_1_89.png" /> Kacapiring<br />\
    <img src="styles/legend/KOTABANDUNG_1_90.png" /> Karanganyar<br />\
    <img src="styles/legend/KOTABANDUNG_1_91.png" /> Karangpamulang<br />\
    <img src="styles/legend/KOTABANDUNG_1_92.png" /> Karasak<br />\
    <img src="styles/legend/KOTABANDUNG_1_93.png" /> Kebon Kangkung<br />\
    <img src="styles/legend/KOTABANDUNG_1_94.png" /> Kebongedang<br />\
    <img src="styles/legend/KOTABANDUNG_1_95.png" /> Kebonjayanti<br />\
    <img src="styles/legend/KOTABANDUNG_1_96.png" /> Kebonjeruk<br />\
    <img src="styles/legend/KOTABANDUNG_1_97.png" /> Kebonlega<br />\
    <img src="styles/legend/KOTABANDUNG_1_98.png" /> Kebonpisang<br />\
    <img src="styles/legend/KOTABANDUNG_1_99.png" /> Kebonwaru<br />\
    <img src="styles/legend/KOTABANDUNG_1_100.png" /> Kopo<br />\
    <img src="styles/legend/KOTABANDUNG_1_101.png" /> Kujangsari<br />\
    <img src="styles/legend/KOTABANDUNG_1_102.png" /> Lagadar<br />\
    <img src="styles/legend/KOTABANDUNG_1_103.png" /> Lebak Siliwangi<br />\
    <img src="styles/legend/KOTABANDUNG_1_104.png" /> Lebakgede<br />\
    <img src="styles/legend/KOTABANDUNG_1_105.png" /> Ledeng<br />\
    <img src="styles/legend/KOTABANDUNG_1_106.png" /> Lingkarselatan<br />\
    <img src="styles/legend/KOTABANDUNG_1_107.png" /> Malabar<br />\
    <img src="styles/legend/KOTABANDUNG_1_108.png" /> Maleber<br />\
    <img src="styles/legend/KOTABANDUNG_1_109.png" /> Maleer<br />\
    <img src="styles/legend/KOTABANDUNG_1_110.png" /> Mandalajati<br />\
    <img src="styles/legend/KOTABANDUNG_1_111.png" /> Mandalamekar<br />\
    <img src="styles/legend/KOTABANDUNG_1_112.png" /> Margaasih<br />\
    <img src="styles/legend/KOTABANDUNG_1_113.png" /> Margahayu Tengah<br />\
    <img src="styles/legend/KOTABANDUNG_1_114.png" /> Margahayu Utara<br />\
    <img src="styles/legend/KOTABANDUNG_1_115.png" /> Margasari<br />\
    <img src="styles/legend/KOTABANDUNG_1_116.png" /> Margasenang<br />\
    <img src="styles/legend/KOTABANDUNG_1_117.png" /> Margasuka<br />\
    <img src="styles/legend/KOTABANDUNG_1_118.png" /> Mekarmulya<br />\
    <img src="styles/legend/KOTABANDUNG_1_119.png" /> Mekarsaluyu<br />\
    <img src="styles/legend/KOTABANDUNG_1_120.png" /> Mekarwangi<br />\
    <img src="styles/legend/KOTABANDUNG_1_121.png" /> Melatiwangi<br />\
    <img src="styles/legend/KOTABANDUNG_1_122.png" /> Melong<br />\
    <img src="styles/legend/KOTABANDUNG_1_123.png" /> Mengger<br />\
    <img src="styles/legend/KOTABANDUNG_1_124.png" /> Merdeka<br />\
    <img src="styles/legend/KOTABANDUNG_1_125.png" /> Neglasari<br />\
    <img src="styles/legend/KOTABANDUNG_1_126.png" /> Nyengseret<br />\
    <img src="styles/legend/KOTABANDUNG_1_127.png" /> Padasuka<br />\
    <img src="styles/legend/KOTABANDUNG_1_128.png" /> Pagerwangi<br />\
    <img src="styles/legend/KOTABANDUNG_1_129.png" /> Pajajaran<br />\
    <img src="styles/legend/KOTABANDUNG_1_130.png" /> Palasari<br />\
    <img src="styles/legend/KOTABANDUNG_1_131.png" /> Paledang<br />\
    <img src="styles/legend/KOTABANDUNG_1_132.png" /> Pamoyanan<br />\
    <img src="styles/legend/KOTABANDUNG_1_133.png" /> Panjunan<br />\
    <img src="styles/legend/KOTABANDUNG_1_134.png" /> Pasanggrahan<br />\
    <img src="styles/legend/KOTABANDUNG_1_135.png" /> Pasawahan<br />\
    <img src="styles/legend/KOTABANDUNG_1_136.png" /> Pasirbiru<br />\
    <img src="styles/legend/KOTABANDUNG_1_137.png" /> Pasirendah<br />\
    <img src="styles/legend/KOTABANDUNG_1_138.png" /> Pasirjati<br />\
    <img src="styles/legend/KOTABANDUNG_1_139.png" /> Pasirkaliki<br />\
    <img src="styles/legend/KOTABANDUNG_1_140.png" /> Pasirlayung<br />\
    <img src="styles/legend/KOTABANDUNG_1_141.png" /> Pasirluyu<br />\
    <img src="styles/legend/KOTABANDUNG_1_142.png" /> Pasirwangi<br />\
    <img src="styles/legend/KOTABANDUNG_1_143.png" /> Pasteur<br />\
    <img src="styles/legend/KOTABANDUNG_1_144.png" /> Pelindungwetan<br />\
    <img src="styles/legend/KOTABANDUNG_1_145.png" /> Pungkur<br />\
    <img src="styles/legend/KOTABANDUNG_1_146.png" /> Rahayu<br />\
    <img src="styles/legend/KOTABANDUNG_1_147.png" /> Sadangserang<br />\
    <img src="styles/legend/KOTABANDUNG_1_148.png" /> Samoja<br />\
    <img src="styles/legend/KOTABANDUNG_1_149.png" /> Sarijadi<br />\
    <img src="styles/legend/KOTABANDUNG_1_150.png" /> Sekejati<br />\
    <img src="styles/legend/KOTABANDUNG_1_151.png" /> Sekeloa<br />\
    <img src="styles/legend/KOTABANDUNG_1_152.png" /> Sindangjaya<br />\
    <img src="styles/legend/KOTABANDUNG_1_153.png" /> Sindanglaya<br />\
    <img src="styles/legend/KOTABANDUNG_1_154.png" /> Situsaeur<br />\
    <img src="styles/legend/KOTABANDUNG_1_155.png" /> Sukaasih<br />\
    <img src="styles/legend/KOTABANDUNG_1_156.png" /> Sukabungah<br />\
    <img src="styles/legend/KOTABANDUNG_1_157.png" /> Sukagalih<br />\
    <img src="styles/legend/KOTABANDUNG_1_158.png" /> Sukahaji<br />\
    <img src="styles/legend/KOTABANDUNG_1_159.png" /> Sukaluyu<br />\
    <img src="styles/legend/KOTABANDUNG_1_160.png" /> Sukamaju<br />\
    <img src="styles/legend/KOTABANDUNG_1_161.png" /> Sukamenak<br />\
    <img src="styles/legend/KOTABANDUNG_1_162.png" /> Sukamiskin<br />\
    <img src="styles/legend/KOTABANDUNG_1_163.png" /> Sukapada<br />\
    <img src="styles/legend/KOTABANDUNG_1_164.png" /> Sukapura<br />\
    <img src="styles/legend/KOTABANDUNG_1_165.png" /> Sukaraja<br />\
    <img src="styles/legend/KOTABANDUNG_1_166.png" /> Sukarasa<br />\
    <img src="styles/legend/KOTABANDUNG_1_167.png" /> Sukawarna<br />\
    <img src="styles/legend/KOTABANDUNG_1_168.png" /> Tamansari<br />\
    <img src="styles/legend/KOTABANDUNG_1_169.png" /> Tegalluar<br />\
    <img src="styles/legend/KOTABANDUNG_1_170.png" /> Turangga<br />\
    <img src="styles/legend/KOTABANDUNG_1_171.png" /> Ujungberung<br />\
    <img src="styles/legend/KOTABANDUNG_1_172.png" /> Utama<br />\
    <img src="styles/legend/KOTABANDUNG_1_173.png" /> Wangunsari<br />\
    <img src="styles/legend/KOTABANDUNG_1_174.png" /> Warungmuncang<br />\
    <img src="styles/legend/KOTABANDUNG_1_175.png" /> Wates<br />'
        });
var format_JALAN_2 = new ol.format.GeoJSON();
var features_JALAN_2 = format_JALAN_2.readFeatures(json_JALAN_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JALAN_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JALAN_2.addFeatures(features_JALAN_2);
var lyr_JALAN_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JALAN_2, 
                style: style_JALAN_2,
                interactive: false,
                title: '<img src="styles/legend/JALAN_2.png" /> JALAN'
            });
var format_SARANAKESEHATAN_3 = new ol.format.GeoJSON();
var features_SARANAKESEHATAN_3 = format_SARANAKESEHATAN_3.readFeatures(json_SARANAKESEHATAN_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SARANAKESEHATAN_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SARANAKESEHATAN_3.addFeatures(features_SARANAKESEHATAN_3);
var lyr_SARANAKESEHATAN_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SARANAKESEHATAN_3, 
                style: style_SARANAKESEHATAN_3,
                interactive: true,
                title: '<img src="styles/legend/SARANAKESEHATAN_3.png" /> SARANA KESEHATAN'
            });
var format_CAGARBUDAYA_4 = new ol.format.GeoJSON();
var features_CAGARBUDAYA_4 = format_CAGARBUDAYA_4.readFeatures(json_CAGARBUDAYA_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CAGARBUDAYA_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CAGARBUDAYA_4.addFeatures(features_CAGARBUDAYA_4);
var lyr_CAGARBUDAYA_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CAGARBUDAYA_4, 
                style: style_CAGARBUDAYA_4,
                interactive: true,
                title: '<img src="styles/legend/CAGARBUDAYA_4.png" /> CAGAR BUDAYA'
            });
var format_KANTORPOS_5 = new ol.format.GeoJSON();
var features_KANTORPOS_5 = format_KANTORPOS_5.readFeatures(json_KANTORPOS_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KANTORPOS_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KANTORPOS_5.addFeatures(features_KANTORPOS_5);
var lyr_KANTORPOS_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KANTORPOS_5, 
                style: style_KANTORPOS_5,
                interactive: true,
                title: '<img src="styles/legend/KANTORPOS_5.png" /> KANTOR POS'
            });
var format_SEKOLAH_6 = new ol.format.GeoJSON();
var features_SEKOLAH_6 = format_SEKOLAH_6.readFeatures(json_SEKOLAH_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SEKOLAH_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SEKOLAH_6.addFeatures(features_SEKOLAH_6);
var lyr_SEKOLAH_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SEKOLAH_6, 
                style: style_SEKOLAH_6,
                interactive: true,
                title: '<img src="styles/legend/SEKOLAH_6.png" /> SEKOLAH'
            });
var format_STASIUNKAI_7 = new ol.format.GeoJSON();
var features_STASIUNKAI_7 = format_STASIUNKAI_7.readFeatures(json_STASIUNKAI_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_STASIUNKAI_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_STASIUNKAI_7.addFeatures(features_STASIUNKAI_7);
var lyr_STASIUNKAI_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_STASIUNKAI_7, 
                style: style_STASIUNKAI_7,
                interactive: true,
                title: '<img src="styles/legend/STASIUNKAI_7.png" /> STASIUN KAI'
            });
var format_PEMERINTAHAN_8 = new ol.format.GeoJSON();
var features_PEMERINTAHAN_8 = format_PEMERINTAHAN_8.readFeatures(json_PEMERINTAHAN_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PEMERINTAHAN_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEMERINTAHAN_8.addFeatures(features_PEMERINTAHAN_8);
var lyr_PEMERINTAHAN_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PEMERINTAHAN_8, 
                style: style_PEMERINTAHAN_8,
                interactive: true,
                title: '<img src="styles/legend/PEMERINTAHAN_8.png" /> PEMERINTAHAN'
            });

lyr_OpenStreetMap_0.setVisible(false);lyr_KOTABANDUNG_1.setVisible(true);lyr_JALAN_2.setVisible(true);lyr_SARANAKESEHATAN_3.setVisible(true);lyr_CAGARBUDAYA_4.setVisible(true);lyr_KANTORPOS_5.setVisible(true);lyr_SEKOLAH_6.setVisible(true);lyr_STASIUNKAI_7.setVisible(true);lyr_PEMERINTAHAN_8.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_KOTABANDUNG_1,lyr_JALAN_2,lyr_SARANAKESEHATAN_3,lyr_CAGARBUDAYA_4,lyr_KANTORPOS_5,lyr_SEKOLAH_6,lyr_STASIUNKAI_7,lyr_PEMERINTAHAN_8];
lyr_KOTABANDUNG_1.set('fieldAliases', {'fid': 'fid', 'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_JALAN_2.set('fieldAliases', {'fid': 'fid', 'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_SARANAKESEHATAN_3.set('fieldAliases', {'fid': 'fid', 'NAMOBJ': 'NAMOBJ', 'LUAS': 'LUAS', 'REMARK': 'REMARK', 'TIPSHT': 'TIPSHT', 'FCODE': 'FCODE', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'FSKADD': 'FSKADD', });
lyr_CAGARBUDAYA_4.set('fieldAliases', {'fid': 'fid', 'NAMOBJ': 'NAMOBJ', 'LUAS': 'LUAS', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_KANTORPOS_5.set('fieldAliases', {'fid': 'fid', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'JNKPOS': 'JNKPOS', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_SEKOLAH_6.set('fieldAliases', {'fid': 'fid', 'NAMOBJ': 'NAMOBJ', 'LUAS': 'LUAS', 'KATPDK': 'KATPDK', 'JLPDDK': 'JLPDDK', 'FGGPDK': 'FGGPDK', 'REMARK': 'REMARK', 'FCODE': 'FCODE', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'JJGPDF': 'JJGPDF', 'JNSPDL': 'JNSPDL', });
lyr_STASIUNKAI_7.set('fieldAliases', {'fid': 'fid', 'NAMOBJ': 'NAMOBJ', 'FGSSTA': 'FGSSTA', 'KLSSTA': 'KLSSTA', 'FCODE': 'FCODE', 'KODKOD': 'KODKOD', 'WILSTA': 'WILSTA', 'DOPSTA': 'DOPSTA', 'KMTSTA': 'KMTSTA', 'LINSTA': 'LINSTA', 'KONKON': 'KONKON', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_PEMERINTAHAN_8.set('fieldAliases', {'fid': 'fid', 'NAMOBJ': 'NAMOBJ', 'FGSGOV': 'FGSGOV', 'LUAS': 'LUAS', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_KOTABANDUNG_1.set('fieldImages', {'fid': 'TextEdit', 'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_JALAN_2.set('fieldImages', {'fid': 'TextEdit', 'NAMRJL': 'TextEdit', 'KONRJL': 'TextEdit', 'MATRJL': 'TextEdit', 'FGSRJL': 'TextEdit', 'UTKRJL': 'TextEdit', 'TOLRJL': 'TextEdit', 'WLYRJL': 'TextEdit', 'AUTRJL': 'TextEdit', 'KLSRJL': 'TextEdit', 'SPCRJL': 'TextEdit', 'JPARJL': 'TextEdit', 'ARHRJL': 'TextEdit', 'STARJL': 'TextEdit', 'KLLRJL': 'TextEdit', 'MEDRJL': 'TextEdit', 'LOCRJL': 'TextEdit', 'JARRJL': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_SARANAKESEHATAN_3.set('fieldImages', {'fid': 'TextEdit', 'NAMOBJ': 'TextEdit', 'LUAS': 'TextEdit', 'REMARK': 'TextEdit', 'TIPSHT': 'TextEdit', 'FCODE': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'FSKADD': 'TextEdit', });
lyr_CAGARBUDAYA_4.set('fieldImages', {'fid': 'TextEdit', 'NAMOBJ': 'TextEdit', 'LUAS': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', });
lyr_KANTORPOS_5.set('fieldImages', {'fid': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'JNKPOS': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', });
lyr_SEKOLAH_6.set('fieldImages', {'fid': 'TextEdit', 'NAMOBJ': 'TextEdit', 'LUAS': 'TextEdit', 'KATPDK': 'TextEdit', 'JLPDDK': 'TextEdit', 'FGGPDK': 'TextEdit', 'REMARK': 'TextEdit', 'FCODE': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'JJGPDF': 'TextEdit', 'JNSPDL': 'TextEdit', });
lyr_STASIUNKAI_7.set('fieldImages', {'fid': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FGSSTA': 'TextEdit', 'KLSSTA': 'TextEdit', 'FCODE': 'TextEdit', 'KODKOD': 'TextEdit', 'WILSTA': 'TextEdit', 'DOPSTA': 'TextEdit', 'KMTSTA': 'TextEdit', 'LINSTA': 'TextEdit', 'KONKON': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', });
lyr_PEMERINTAHAN_8.set('fieldImages', {'fid': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FGSGOV': 'TextEdit', 'LUAS': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', });
lyr_KOTABANDUNG_1.set('fieldLabels', {'fid': 'no label', 'KDPPUM': 'no label', 'NAMOBJ': 'inline label - always visible', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'inline label - always visible', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_JALAN_2.set('fieldLabels', {'fid': 'no label', 'NAMRJL': 'no label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'inline label - always visible', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_SARANAKESEHATAN_3.set('fieldLabels', {'fid': 'no label', 'NAMOBJ': 'inline label - always visible', 'LUAS': 'no label', 'REMARK': 'no label', 'TIPSHT': 'no label', 'FCODE': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'FSKADD': 'no label', });
lyr_CAGARBUDAYA_4.set('fieldLabels', {'fid': 'no label', 'NAMOBJ': 'inline label - always visible', 'LUAS': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_KANTORPOS_5.set('fieldLabels', {'fid': 'no label', 'NAMOBJ': 'inline label - always visible', 'FCODE': 'no label', 'JNKPOS': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_SEKOLAH_6.set('fieldLabels', {'fid': 'no label', 'NAMOBJ': 'inline label - always visible', 'LUAS': 'no label', 'KATPDK': 'no label', 'JLPDDK': 'no label', 'FGGPDK': 'no label', 'REMARK': 'no label', 'FCODE': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'JJGPDF': 'no label', 'JNSPDL': 'no label', });
lyr_STASIUNKAI_7.set('fieldLabels', {'fid': 'no label', 'NAMOBJ': 'inline label - always visible', 'FGSSTA': 'no label', 'KLSSTA': 'no label', 'FCODE': 'no label', 'KODKOD': 'no label', 'WILSTA': 'no label', 'DOPSTA': 'no label', 'KMTSTA': 'no label', 'LINSTA': 'no label', 'KONKON': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_PEMERINTAHAN_8.set('fieldLabels', {'fid': 'no label', 'NAMOBJ': 'inline label - always visible', 'FGSGOV': 'no label', 'LUAS': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_PEMERINTAHAN_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});