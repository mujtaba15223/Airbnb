    const mapContainer = document.getElementById('map');
    const popupContent = document.createElement('div');
    const popupTitle = document.createElement('h3');
    const popupLocation = document.createElement('p');

    popupTitle.textContent = mapContainer.dataset.title;
    popupLocation.textContent = mapContainer.dataset.location;
    popupContent.append(popupTitle, popupLocation);

    const map = new mapboxgl.Map({
        accessToken: mapToken,
        container: 'map', // container ID
        center: coordinates, // starting position [lng, lat]. Note that lat must be set between -90 and 90
        zoom: 9 // starting zoom
    });

const marker = new mapboxgl.Marker()
        .setLngLat(coordinates)
    .setPopup(new mapboxgl.Popup({anchor: 'bottom', offset: 25}).setDOMContent(popupContent))
        .addTo(map);


