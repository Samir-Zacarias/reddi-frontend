export const isSomeFieldsMissing = <T extends object>(
  fields: (keyof T)[],
  data: T
): boolean => {
  return fields.some((field) => !data[field]);
};

export const isFieldInvalid = <T>(field: T): boolean => {
  if (field === null || field === undefined) return true;
  if (typeof field === "string" && field.trim() === "") return true;
  return false;
};
