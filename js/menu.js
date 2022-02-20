(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-header-mobile-open]"),
    closeModalBtn: document.querySelector("[data-header-mobile-close]"),
    modal: document.querySelector("[data-header-mobile]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("header-mobile--is-open");
  }
})();