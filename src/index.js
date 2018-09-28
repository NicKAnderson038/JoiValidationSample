document.getElementById("app").innerHTML = `
<h1 style="font-size:70px;">Joi Validation Schema</h1>
<div>
  <p>This application using parcel.js (webpack is NOT required).</p> 
  <p>Look
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>
  for more info about Parcel.</p>
</div>
`;
const joi = require("joi");

const schema = {
  a: joi.string().required()
};

/* Sync */
const result = joi.validate({ a: "1" }, schema);
console.log(result.error);
console.log(result.value);

/* Callback */
joi.validate({ a: "2" }, schema, (err, value) => {
  if (err) {
    throw err;
  }
  console.log(value);
});

/* Promise.then() */
joi
  .validate({ a: "3" }, schema)
  .then(res => console.log(res))
  .catch(err => console.error(err));

/* Async/Await */
const joiRun = async () => {
  try {
    const res = await joi.validate({ a: "4" }, schema);
    console.log(res);
  } catch (err) {
    console.error(err);
  }
};
joiRun();

const addressSchema = joi.object().keys({
  name: joi.string().required(),
  city: joi.string().optional(),
  address: joi.string().optional(),
  age: joi.number().optional()
});

const payload = {
  name: "Homes",
  city: "Long Beach",
  address: "223 B. Baker Street",
  age: 38
};

const joiRun2 = async (pay, adress) => {
  try {
    const res = await joi.validate(pay, adress);
    console.log(res);
  } catch (err) {
    console.error(err);
  }
};
joiRun2(payload, addressSchema);
