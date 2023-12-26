export const displayContactPage = () => {
    const restaurantContainer = document.querySelector(".restaurant-container");

    const pageContainer = document.createElement("div");
    pageContainer.classList.add("page-container");
    
    restaurantContainer.appendChild(pageContainer);
    
    const logoSection = document.createElement("div");
    logoSection.classList.add("logo-section");
    pageContainer.appendChild(logoSection);

        const homepageTitle = document.createElement("h1");
        homepageTitle.classList.add("homepage-title");
        homepageTitle.innerText = "The Restaurant";
        logoSection.appendChild(homepageTitle);

        const homepageImage = document.createElement("img");
        homepageImage.src = "../images/homepage.jpg";
        homepageImage.classList.add("homepage-image");
        logoSection.appendChild(homepageImage);

        const homepageBriefDescription = document.createElement("p");
        homepageBriefDescription.classList.add("homepage-brief-description");
        homepageBriefDescription.innerText = "This is a homepage brief description.";
        logoSection.appendChild(homepageBriefDescription);
    
    const hoursSection = document.createElement("div");
    hoursSection.classList.add("hours-section");
    pageContainer.appendChild(hoursSection);

        const hoursTitle = document.createElement("h2");
        hoursTitle.classList.add("hours-title");
        hoursTitle.innerText = "Hours";
        hoursSection.appendChild(hoursTitle);

        const hoursDescription = document.createElement("p");
        hoursDescription.classList.add("hours-description");
        hoursDescription.innerText = "This is a hours description.";
        hoursSection.appendChild(hoursDescription);

        const hoursList = document.createElement("ul");
        hoursList.classList.add("hours-list");
        hoursSection.appendChild(hoursList);

            const hoursListItem1 = document.createElement("li");
            hoursListItem1.classList.add("hours-list-item");
            hoursListItem1.innerText = "Monday: 11am - 9pm";
            hoursList.appendChild(hoursListItem1);

            const hoursListItem2 = document.createElement("li");
            hoursListItem2.classList.add("hours-list-item");
            hoursListItem2.innerText = "Tuesday: 11am - 9pm";
            hoursList.appendChild(hoursListItem2);

            const hoursListItem3 = document.createElement("li");
            hoursListItem3.classList.add("hours-list-item");
            hoursListItem3.innerText = "Wednesday: 11am - 9pm";
            hoursList.appendChild(hoursListItem3);

            const hoursListItem4 = document.createElement("li");
            hoursListItem4.classList.add("hours-list-item");
            hoursListItem4.innerText = "Thursday: 11am - 9pm";
            hoursList.appendChild(hoursListItem4);

            const hoursListItem5 = document.createElement("li");
            hoursListItem5.classList.add("hours-list-item");
            hoursListItem5.innerText = "Friday: 11am - 9pm";
            hoursList.appendChild(hoursListItem5);

            const hoursListItem6 = document.createElement("li");
            hoursListItem6.classList.add("hours-list-item");
            hoursListItem6.innerText = "Saturday: 11am - 9pm";
            hoursList.appendChild(hoursListItem6);

            const hoursListItem7 = document.createElement("li");
            hoursListItem7.classList.add("hours-list-item");
            hoursListItem7.innerText = "Sunday: 11am - 9pm";
            hoursList.appendChild(hoursListItem7);
        
    const locationSection = document.createElement("div");
    locationSection.classList.add("location-section");
    pageContainer.appendChild(locationSection);

        const locationTitle = document.createElement("h2");
        locationTitle.classList.add("location-title");
        locationTitle.innerText = "Location";
        locationSection.appendChild(locationTitle);

        const locationDescription = document.createElement("p");
        locationDescription.classList.add("location-description");
        locationDescription.innerText = "This is a location description.";
        locationSection.appendChild(locationDescription);

        const locationAddress = document.createElement("p");
        locationAddress.classList.add("location-address");
        locationAddress.innerText = "1234 Main Street, City, State 12345";
        locationSection.appendChild(locationAddress);

        const locationMap = document.createElement("img");
        locationMap.src = "../images/map.jpg";
        locationMap.classList.add("location-map");
        locationSection.appendChild(locationMap);
}





