window.addEventListener("DOMContentLoaded", () => {
  const imageProfile = document.querySelector("#image-profile");
  const inputAvatar = document.querySelector("#input-avatar");
  const formContainer = document.querySelector("#form-container");

  imageProfile.addEventListener('click', (event) => {
    inputAvatar.click();
  })

  inputAvatar.addEventListener('change', (event) => {
    formContainer.submit();
  })

});