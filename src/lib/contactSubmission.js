const CONTACT_FORM_API_URL =
  import.meta.env.VITE_CONTACT_FORM_API_URL || "/api/contact.php";

export const submitContactForm = async (form) => {
  const response = await fetch(CONTACT_FORM_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(form),
  });

  let result = {};
  try {
    result = await response.json();
  } catch {
    result = {};
  }

  if (!response.ok || !result.success) {
    throw new Error(result.error || "Unable to send your enquiry.");
  }

  return result;
};
