import * as Yup from "yup";

export interface CreditCardForm {
  holderName: string;
  cvv: string;
  cardNumber: string;
  expirationDate: string;
  cpf: string;
  installments: number;
}

export const cardsRegex: { [key: string]: RegExp } = {
  Visa: /^4[0-9]{12}(?:[0-9]{3})/,
  Amex: /^3[47][0-9]{13}/,
};

const monthYearRegex = /(0[1-9]{1}|1[0-2]{1})\/\d{4}/g;
const cpfRegex = /^[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}$/;
const holderNameRegex = /^[A-Z\s]*$/;

const creditCard = Yup.object().shape({
  holderName: Yup.string()
    .matches(holderNameRegex, "This name has a invalid character")
    .required("This field is required"),
  cvv: Yup.string()
    .required("This field is required")
    .min(3, "This cvv is invalid")
    .max(4, "This cvv is invalid"),
  cardNumber: Yup.string()
    .required("This field is required")
    .test("card-number", "This card number is invalid", (number) => {
      for (const key in cardsRegex) {
        const match = number?.match(cardsRegex[key]);
        if (match) return true;
      }
      return false;
    }),
  expirationDate: Yup.string()
    .required("This field is required")
    .matches(monthYearRegex, "This expiration date is invalid"),
  cpf: Yup.string()
    .required("This field is required")
    .matches(cpfRegex, "This cpf is invalid"),
  installments: Yup.number()
    .required("This field is required")
    .typeError("This field is required"),
});

export default creditCard;
