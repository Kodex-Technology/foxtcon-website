export const validateForm = (
  formData: Record<string, unknown>,
  rules: Record<string, string>,
  numberFields: string[] = [],
  emailFields: string[] = [],
  passwordFields: Record<string, number> = {},
): Record<string, string> => {
  const errors: Record<string, string> = {};

  Object.keys(rules).forEach((key) => {
    const value = formData[key];

    // Check for empty values
    if (
      value === null ||
      value === undefined ||
      value.toString().trim() === ""
    ) {
      errors[key] = rules[key];
      return; // Stop further validation for empty fields
    }

    // Skip boolean fields
    if (typeof value === "boolean") {
      return;
    }

    // Validate number fields
    if (numberFields.includes(key)) {
      if (isNaN(Number(value))) {
        errors[key] = `${rules[key]} must be a number`;
      }
    }
    // Validate email fields
    if (
      emailFields.includes(key) &&
      typeof value === "string" &&
      !/^\S+@\S+\.\S+$/.test(value)
    ) {
      errors[key] = "Invalid email format";
    }

    // Validate password fields with min length
    if (
      passwordFields[key] !== undefined &&
      typeof value === "string" &&
      value.length < passwordFields[key]
    ) {
      errors[key] =
        `Password must be at least ${passwordFields[key]} characters long`;
    }
  });

  return errors;
};
