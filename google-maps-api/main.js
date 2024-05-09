/*
@ clou.google.com
1- open console
2- Create a new project
3- Go to "Apis e servicos"
4- Credentials and create a new one.
5- Configure the key.
    6- Configure to use only on your website or app (Chose Website and link to your domain.)
    7 - Eneble you Key @"Apis e servicos ativados" > ativar apis e servicos
    8 - Choose "Maps JavaScript API"
    9 - Enable (Ative)
10- On body of HTML use a script tag like this...
<script defer src="https://maps.googleapis.com/maps/api/js?key=apikey&callback=initMap"></script>

11- then code on you main.js.
*/
//AIzaSyDf3Mg2C7rirZKVj3NHESSGhcKmtB8k3oU
const markers = [
    {
        locationName: "Rancho do Peixe",
        lat: -2.816518415503669,
        lng: -40.40803645227244,
        address: 'Rua da Praia, s/n<br>Caiçara, Cruz - CE'
    },
    {
        locationName: "Vila Kalango",
        lat: -2.7972804650759078, 
        lng: -40.51728949005685,
        address: 'Rua Angela Marques, 30<br>Jijoca de Jericoacoara - CE,'
    },
    {
        locationName: "Water Sport Center",
        lat: -2.8142024055937758, 
        lng: -40.4078433049224,
        address: 'Rua da Praia, s/n<br>Caiçara, Cruz '
    },
    {
        locationName: "Shopping Parangaba",
        lat: -3.7390679622280385,
        lng: -38.54045065865631,
        address: 'Rua Carapinima, 2200<br>Benfica, Fortaleza - CE'
    }
];

const centerMap = {lat: -3.3055909, lng: -39.711319};

const mapOptions = {
    center: centerMap,
    zoom: 9,
    disableDefaultUI: true,
    // mapId: 'TEST_RUN',
    styles: [
      { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
      { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
      { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
      {
        featureType: "administrative.locality",
        elementType: "labels.text.fill",
        stylers: [{ color: "#d59563" }],
      },
      {
        featureType: "poi",
        elementType: "labels.text.fill",
        stylers: [{ color: "#d59563" }],
      },
      {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [{ color: "#263c3f" }],
      },
      {
        featureType: "poi.park",
        elementType: "labels.text.fill",
        stylers: [{ color: "#6b9a76" }],
      },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [{ color: "#38414e" }],
      },
      {
        featureType: "road",
        elementType: "geometry.stroke",
        stylers: [{ color: "#212a37" }],
      },
      {
        featureType: "road",
        elementType: "labels.text.fill",
        stylers: [{ color: "#9ca5b3" }],
      },
      {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [{ color: "#746855" }],
      },
      {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [{ color: "#1f2835" }],
      },
      {
        featureType: "road.highway",
        elementType: "labels.text.fill",
        stylers: [{ color: "#f3d19c" }],
      },
      {
        featureType: "transit",
        elementType: "geometry",
        stylers: [{ color: "#2f3948" }],
      },
      {
        featureType: "transit.station",
        elementType: "labels.text.fill",
        stylers: [{ color: "#d59563" }],
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [{ color: "#17263c" }],
      },
      {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [{ color: "#515c6d" }],
      },
      {
        featureType: "water",
        elementType: "labels.text.stroke",
        stylers: [{ color: "#17263c" }],
      },
    ]
};

async function initMap() {

    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement, PinElement } = await google.maps.importLibrary("marker",);

    map = new google.maps.Map(document.getElementById("map"), mapOptions);

    // const infowindow = new google.maps.InfoWindow({
    //     minWidth: 200,
    //     minHeight: 200
    // });

    markers.forEach(adress => {
        const contentString = `
        <h1 class="mapitens">${adress.locationName}</h1><br>
        <p class="mapitens">${adress.address}<p>
        <a class="mapitens" href="${adress.adres}" target="_blank">Visitar Parceiro</a>`;
        const infowindow = new google.maps.InfoWindow({
            content: contentString,
            ariaLabel: adress.title,
          });
        // const beachFlagImg = document.createElement("img");
        // beachFlagImg.src = "./img/pngtree-salon-logo-png-image_4004444.png";
        const marker = new google.maps.Marker({
            map,
            position: {lat: adress.lat, lng: adress.lng},
            // content: beachFlagImg,
            title: adress.locationName
        });

        marker.addListener("click", () => {
            infowindow.open({map, anchor: marker});
        });
    });
};

//correct use of markers are
//const marker = new google.maps.marker.AdvancedMarkerElement({})
//But you nee to put an ID on mapOptions Objc to use, and with that the styled map will be need a payd version to be set up on de cloud console.