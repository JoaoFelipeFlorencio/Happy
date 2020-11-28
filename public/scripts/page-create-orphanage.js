// create map
const map = L.map("mapid").setView([-8.1268417, -34.9357666], 16);
// create and add tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);
// create icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
});
let marker;
// create and add marker
map.on("click", (event) => {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  document.querySelector("[name=lat]").value = lat;
  document.querySelector("[name=lng]").value = lng;

  //remove icon
  marker && map.removeLayer(marker);

  //add icon layer
  marker = L.marker([lat, lng], { icon }).addTo(map);
});
// add photo field
function addPhotoField() {
  //get container #images
  const container = document.querySelector("#images");
  //get container for cloning  .new-image
  const fieldsContainer = document.querySelectorAll(".new-upload");
  //make clone of last image added
  const newFieldContainer = fieldsContainer[
    fieldsContainer.length - 1
  ].cloneNode(true);
  //verify empty field
  const input = newFieldContainer.children[0];
  if (input.value == "") {
    return;
  }
  //clear field
  newFieldContainer.children[0].value = "";
  //add clone to image container
  container.appendChild(newFieldContainer);
}
function deleteField(event) {
  const span = event.currentTarget;

  const fieldsContainer = document.querySelectorAll(".new-upload");

  if (fieldsContainer.length < 2) {
    //clear field value
    span.parentNode.children[0].value = "";
    return;
  }

  //delete field
  span.parentNode.remove();
}
//select yes or no
function toggleSelect(event) {
  //remove active class from buttons
  document
    .querySelectorAll(".button-select button")
    .forEach((button) => button.classList.remove("active"));
  //add active class to buttons
  const button = event.currentTarget;
  button.classList.add("active");
  //update hidden input with selected value
  const input = document.querySelector('[name="open_on_weekends"]');
  //verify yes or no
  input.value = button.dataset.value;
  //get pressed button
}
