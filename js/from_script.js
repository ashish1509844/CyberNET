//login
function validateForm_contact() {
                    let isValid = true;

                    document.getElementById("emailError").textContent = "";
                    document.getElementById("passwordError").textContent = "";
                    document.getElementById("confirmPasswordError").textContent = "";

                    // Get  values
                    const email = document.getElementById("email").value.trim();
                    const password = document.getElementById("password").value.trim();
                    const confirmPassword = document.getElementById("confirmPassword").value.trim();

                    // Validate email
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!emailRegex.test(email)) {
                        document.getElementById("emailError").textContent = "Please enter a valid email address.";
                        isValid = false;
                    }
                    // Validate password
                    if (password.length < 6) {
                        document.getElementById("passwordError").textContent = "Password must be at least 6 characters long.";
                        isValid = false;
                    }

                    // Validate confirm password
                    if (confirmPassword !== password) {
                        document.getElementById("confirmPasswordError").textContent = "Passwords do not match.";
                        isValid = false;
                    }
                    return isValid;
                }

//register
function validateForm() {
                    let isValid = true;

                    document.getElementById("emailError").textContent = "";
                    document.getElementById("mobileError").textContent = "";
                    document.getElementById("passwordError").textContent = "";
                    document.getElementById("confirmPasswordError").textContent = "";

                    // Get  values
                    const email = document.getElementById("email").value.trim();
                    const mobile = document.getElementById("mobile").value.trim();
                    const password = document.getElementById("password").value.trim();
                    const confirmPassword = document.getElementById("confirmPassword").value.trim();

                    // Validate email
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!emailRegex.test(email)) {
                        document.getElementById("emailError").textContent = "Please enter a valid email address.";
                        isValid = false;
                    }
                    //mobile
                    const mobileRegex = /^[0-9]{10}$/;
                     if (!mobileRegex.test(mobile)) {
                        document.getElementById("mobileError").textContent = "Mobile number must be 10 digits.";
                        isValid = false;
                     }

                    // Validate password
                    if (password.length < 6) {
                        document.getElementById("passwordError").textContent = "Password must be at least 6 characters long.";
                        isValid = false;
                    }

                    // Validate confirm password
                    if (confirmPassword !== password) {
                        document.getElementById("confirmPasswordError").textContent = "Passwords do not match.";
                        isValid = false;
                    }
                    return isValid;
                }
//logo & image 
function openModal(imageElement) {
                const modal = document.getElementById("imageModal");
                const modalImage = document.getElementById("modalImage");

                modal.style.display = "flex";
                modalImage.src = imageElement.src;
            }
            function closeModal() {
                const modal = document.getElementById("imageModal");
                modal.style.display = "none";
}

