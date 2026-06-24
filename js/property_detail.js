document.addEventListener("DOMContentLoaded", function () {

    let heart = document.querySelector(".is-interested-image");

    if (!heart) return;

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

            let countElement = document.querySelector(".interested-user-count");
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