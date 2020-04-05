/* Toggle between shopper and shoppee login */

function displayShoppee() {
    $("#shopper").removeClass("visible").addClass("hidden");
    $("#shoppee").removeClass("hidden").addClass("visible");
}

function displayShopper() {
    $("#shoppee").removeClass("visible").addClass("hidden");
    $("#shopper").removeClass("hidden").addClass("visible");
}

/* Sign up confirmation */
function confirmation() {
    alert("Sign up successful! Please log in.");
}

/* Create new shopping list */

function displayInputForm() {
    $("#shopping-list-input").removeClass("hidden").addClass("visible-list");
}

var count = 1;

function submitList() {
    alert("Your shopping list has been sent to volunteer shoppers!");
    var store = $("#store").val();
    var items = $("#items").val();
    var JSONobj = { store: store, items: items };
    var JSONstring = JSON.stringify(JSONobj);
    localStorage.setItem(count, JSONstring);
    $("#shopping-list-input").removeClass("visible-list").addClass("hidden");
    $('#store').val('');
    $('#items').val('');
    displayList();
    count += 1;
}

function displayList() {
    list_items = 1;
    while (list_items <= count && list_items <= 3) {
        var getJSON = localStorage.getItem(list_items);
        var JSONobj = JSON.parse(getJSON);
        $("#shopping-list-display-" + list_items.toString()).removeClass("hidden").addClass("visible");
        $("#store-display-" + list_items.toString()).text(JSONobj.store);
        $("#items-display-" + list_items.toString()).text(JSONobj.items);
        list_items += 1;
    }
}

/* Task map */
function initMap() {
    $("#map").removeClass("hidden").addClass("visible-map");
    var user_location = {lat: 37.5485, lng: -121.9886};
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 12, center: user_location, disableDefaultUI: false});
    var marker = new google.maps.Marker({
        position: {lat: 37.5509, lng: -121.9821},
        map: map,
        title: 'Target'
        });
    marker.setMap(map);
    marker.addListener('click', function() {
        openInput();
    });
}

function openInput() {
    $("#info").removeClass("hidden").addClass("visible");
}

function claimList() {
    $("#claim-btn").text("Finished?");
}