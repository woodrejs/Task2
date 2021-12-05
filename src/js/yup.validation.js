import * as yup from "yup";

const schema = yup.object().shape({
  title: yup.string().required().min(1),
  author: yup.string().required().min(3),
  priority: yup.number().required().integer().min(1).max(5),
  categories: yup
    .string()
    .required()
    .matches(/(romanse|fantastyka|historia)/, { excludeEmptyString: true }),
});

export async function validateForm(data, node) {
  try {
    await schema.validate(data);
    node.textContent = "";
    return true;
  } catch (error) {
    node.textContent = `*${error.errors[0]}`;
    return false;
  }
}
