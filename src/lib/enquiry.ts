// Labels for the enquiry message; keys are the contact form's field names.
export const fieldLabels: Record<string, string> = {
  name: "Name",
  business: "Business",
  phone: "Phone/WhatsApp",
  email: "Email",
  need: "Needs",
  budget: "Budget",
  message: "About the project",
};

/** Readable enquiry text (used for the WhatsApp message). Empty fields are left out. */
export function enquiryText(get: (field: string) => unknown, siteName: string) {
  const lines = Object.entries(fieldLabels)
    .map(([key, label]) => [label, String(get(key) ?? "").trim()])
    .filter(([, value]) => value)
    .map(([label, value]) => `${label}: ${value}`);
  return [`New enquiry from the ${siteName} website`, ...lines].join("\n");
}
