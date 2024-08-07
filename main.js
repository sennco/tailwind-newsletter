function alternarModal(modalId, abrir) {
  const modal = document.querySelector(`#${modalId}`);

  if (abrir) {
    modal.classList.remove("hidden");
  } else {
    modal.classList.add("hidden");
  }

  if (abrir) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
}
