document.addEventListener("DOMContentLoaded", function () {

    let hearts = document.querySelectorAll(".is-interested-image");

    hearts.forEach(function (heart) {

        heart.addEventListener("click", function () {

            let property_id = this.getAttribute("property_id");

            let formData = new FormData();
            formData.append("property_id", property_id);

            fetch("api/toggle_interested.php", {
                method: "POST",
                body: formData
            })
            .then(response => response.json())
            .then(data => {

                if (!data.success) {
                    alert(data.message);
                    return;
                }

                let propertyCard = heart.closest(".property-card");
                let countElement = propertyCard.querySelector(".interested-user-count");
                let count = parseInt(countElement.innerText);

                if (heart.classList.contains("far")) {
                    heart.classList.remove("far");
                    heart.classList.add("fas");
                    count++;
                } else {
                    heart.classList.remove("fas");
                    heart.classList.add("far");
                    count--;
                }

                countElement.innerText = count;
            });
        });

    });

});

// SORT HIGH TO LOW
document.getElementById("sort-desc").addEventListener("click", function () {

    let container = document.querySelector(".page-container");
    let cards = Array.from(document.querySelectorAll(".property-card"));

    cards.sort((a, b) => {

        let rentA = parseInt(a.querySelector(".rent").innerText.replace(/[^0-9]/g, ""));
        let rentB = parseInt(b.querySelector(".rent").innerText.replace(/[^0-9]/g, ""));

        return rentB - rentA;
    });

    cards.forEach(card => container.appendChild(card));
});

// SORT LOW TO HIGH
document.getElementById("sort-asc").addEventListener("click", function () {

    let container = document.querySelector(".page-container");
    let cards = Array.from(document.querySelectorAll(".property-card"));

    cards.sort((a, b) => {

        let rentA = parseInt(a.querySelector(".rent").innerText.replace(/[^0-9]/g, ""));
        let rentB = parseInt(b.querySelector(".rent").innerText.replace(/[^0-9]/g, ""));

        return rentA - rentB;
    });

    cards.forEach(card => container.appendChild(card));
});

// GENDER FILTER
// GENDER FILTER
document.querySelectorAll(".gender-filter").forEach(btn => {

    btn.addEventListener("click", function () {

        document.querySelectorAll(".gender-filter").forEach(b =>
            b.classList.remove("btn-active")
        );

        this.classList.add("btn-active");

        let gender = this.dataset.gender;

        document.querySelectorAll(".property-card").forEach(card => {

            let icon = card.querySelector(".property-gender img").src;
            let imageName = icon.substring(icon.lastIndexOf("/") + 1);

            if (gender === "all") {
                card.style.display = "";
            }
            else if (gender === "male" && imageName === "male.png") {
                card.style.display = "";
            }
            else if (gender === "female" && imageName === "female.png") {
                card.style.display = "";
            }
            else if (gender === "unisex" && imageName === "unisex.png") {
                card.style.display = "";
            }
            else {
                card.style.display = "none";
            }

        });

    });

});