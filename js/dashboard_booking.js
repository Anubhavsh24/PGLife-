document.addEventListener("DOMContentLoaded", function () {

    document.querySelectorAll(".cancel-booking")
        .forEach(button => {

        button.addEventListener("click", function () {

            if (!confirm("Are you sure you want to cancel this booking?")) {
                return;
            }

            let booking_id = this.getAttribute("booking_id");

            let formData = new FormData();
            formData.append("booking_id", booking_id);

            fetch("api/cancel_booking.php", {
                method: "POST",
                body: formData
            })
            .then(response => response.json())
            .then(data => {

                if (data.success) {

                    this.closest(".card").remove();

                    alert("Booking Cancelled");

                } else {

                    alert("Unable to cancel booking");

                }

            });

        });

    });

});