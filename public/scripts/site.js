const copyStatus = document.querySelector("#copy-status");

async function copyValue(value) {
  if (!navigator.clipboard || !window.isSecureContext) {
    throw new Error("Clipboard API is unavailable");
  }

  await navigator.clipboard.writeText(value);
}

document.querySelectorAll("[data-copy-value]").forEach((element) => {
  if (!(element instanceof HTMLButtonElement)) return;

  element.addEventListener("click", async () => {
    const value = element.dataset.copyValue;
    const label = element.dataset.copyLabel ?? "value";
    if (!value) return;

    const buttonLabel = element.querySelector(".copy-button-label");
    const copyIcon = element.querySelector(".copy-icon");
    const checkIcon = element.querySelector(".check-icon");

    try {
      await copyValue(value);
      buttonLabel?.replaceChildren("Copied!");
      copyIcon?.classList.add("hidden");
      checkIcon?.classList.remove("hidden");
      element.dataset.state = "success";
      if (copyStatus) copyStatus.textContent = `${label} copied to clipboard.`;
    } catch (error) {
      console.error("Unable to copy value", error);
      buttonLabel?.replaceChildren("Try again");
      if (copyStatus) copyStatus.textContent = `Unable to copy ${label}.`;
    }

    window.setTimeout(() => {
      buttonLabel?.replaceChildren("Copy");
      copyIcon?.classList.remove("hidden");
      checkIcon?.classList.add("hidden");
      delete element.dataset.state;
    }, 2000);
  });
});

const guadalajaraDateParts = new Intl.DateTimeFormat("en-CA", {
  timeZone: "America/Mexico_City",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
})
  .formatToParts(new Date())
  .reduce((parts, { type, value }) => {
    if (type !== "literal") parts[type] = value;
    return parts;
  }, {});
const guadalajaraDate = `${guadalajaraDateParts.year}-${guadalajaraDateParts.month}-${guadalajaraDateParts.day}`;

document.querySelectorAll("[data-event-date]").forEach((event) => {
  if (!(event instanceof HTMLElement)) return;
  const eventDate = event.dataset.eventDate;
  const status = event.querySelector("[data-event-status]");
  if (eventDate && status && guadalajaraDate >= eventDate) status.remove();
});

const currentYear = String(new Date().getFullYear());
document.querySelectorAll("[data-current-year]").forEach((element) => {
  element.textContent = currentYear;
});
