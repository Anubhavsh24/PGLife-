document.addEventListener("DOMContentLoaded", function () {

    document.querySelectorAll(".is-interested-image").forEach(function (heart) {

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

                if (data.success) {

                    this.closest(".property-card").remove();

                } else {

                    alert(data.message);

                }

            });

        });

    });

});