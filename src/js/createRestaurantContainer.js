export const createRestaurantContainer = () => {
    let body = document.querySelector("body");

    const restaurantContainer = document.createElement("div");

    restaurantContainer.classList.add("restaurant-container");

    body.appendChild(restaurantContainer);
}