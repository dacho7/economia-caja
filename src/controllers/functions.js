import Product from "../models/Product";

export function generateEAN() {
  const countryCode = 770; // 770 to colombia
  const businessCode = 4321; //4 digits to business is assigned by gs1

  let productCode = parseInt(
    Math.floor(Math.random() * (99999 - 10000 + 1) + 10000)
  ); // product code

  let message = "" + countryCode + businessCode + productCode;
  const code = ean13_checksum(message);
  return message + code;
}

function ean13_checksum(message) {
  var checksum = 0;
  message = message.split("").reverse();
  for (var pos in message) {
    checksum += message[pos] * (3 - 2 * (pos % 2));
  }
  return (10 - (checksum % 10)) % 10;
}

async function findCode(code) {
  Product.findOne({ where: { code } })
    .then((result) => {
      if (result) {
        console.log("el product existe");
        return true;
      }
      return false;
    })
    .catch((e) => {
      console.log(e);
      return false;
    });
}
