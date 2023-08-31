function toggleSideNav() {
    var sideNav = document.querySelector('.side-nav');
    sideNav.style.width = (sideNav.style.width === '250px') ? '0' : '250px';
}
function closeSideNav() {
    document.getElementById("SideNav").style.width = "0";
}
const autocomplete = new google.maps.places.Autocomplete(document.getElementById('search-input'));

// When a place is selected, get its details
autocomplete.addListener('place_changed', () => {
    const place = autocomplete.getPlace();

    // You can access place details like place.name, place.geometry.location, etc.
    console.log(place.name);
    console.log(place.geometry.location.lat());
    console.log(place.geometry.location.lng());
});