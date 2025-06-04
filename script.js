document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const form = this;
    const formData = new FormData(form);

    fetch(form.action, {
        method: "POST",
        body: formData,
        headers: {
            Accept: "application/json",
        },
    })
        .then(response => {
            if (response.ok) {
                document.getElementById("formSuccess").style.display = "block";
                form.reset();
            } else {
                alert("❌ Something went wrong.");
            }
        })
        .catch(() => alert("❌ Submission failed. Check your connection."));
});
