import Joi from "joi";

export const emailSchema = Joi.string()
.custom((value, helpers) => {
  if (/^.+@.+\..+$/.test(value)) {
    return value; // Valid email format
  }
  return helpers.error("string.email"); // Invalid email format
}, "custom email validation");

export const passwordSchema = Joi.string().min(8).required();
export const ageSchema = Joi.number().integer().min(18).max(100).required();
export const genderSchema = Joi.string()
  .valid("Male", "Female", "Other")
  .required();
