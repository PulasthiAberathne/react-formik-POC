import * as yup from "yup";

const shopSchema = yup.object().shape({
  status: yup.string().required("Required"),
});

export { shopSchema };
