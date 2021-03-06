import Validator from 'validator';
import isEmpty from '../../../common/utils/isEmpty';
import isOneDecimal from '../../../common/utils/isOneDecimal';
import { isIntAndMax, isIntAndMin, isIntAndMinOne, isIntAndMaxOneT } from '../../../common/utils/isInteger';
import { isFloatAndMin, isFloatAndMax } from '../../../common/utils/isFloat';
import { isValidNumber, isIntAndNoLeadingZero, isValidNumberAll } from '../../../common/utils/isNumber';

const validateAdmin = ({ name, qty, type, cal, prot, fat, carb }) => {
  let errors = [];

  name = !isEmpty(name) ? name : '';
  qty = !isEmpty(qty) ? qty : '';
  type = !isEmpty(type) ? type : '';
  cal = !isEmpty(cal) ? cal : '';
  prot = !isEmpty(prot) ? prot : '';
  fat = !isEmpty(fat) ? fat : '';
  carb = !isEmpty(carb) ? carb : '';



  // Validate name
  if(!Validator.isLength(name, { min:1, max: 50 })) errors.name = 'Product Name must be between 1 and 50 characters';

  // Validate QTY
  if(isIntAndMaxOneT(qty)) errors.qty = 'Maximum Qty. is 999';
  if(isIntAndMinOne(qty)) errors.qty = 'Minimum Qty. is 1';
  if(type === 'pc.' && qty !== '1') errors.qty = 'Minimum Qty. is 1';
  if(type === 'pc.' && qty > '1') errors.qty = 'Maximum Qty. is 1';
  if(isValidNumberAll(qty)) errors.qty = 'Enter a valid number';


  // Validate Cal
  if(isIntAndMin(cal)) errors.cal = 'Minimum Qty. is 0';
  if(isIntAndMax(cal)) errors.cal = 'Maximum Qty. is 1000';
  if(isFloatAndMin(cal)) errors.cal = 'Minimum Qty. is 0';
  if(isFloatAndMax(cal)) errors.cal = 'Maximum Qty. is 1000';
  if(isOneDecimal(cal)) errors.cal = 'Maximum decimal is 1';
  if(isIntAndNoLeadingZero(cal)) errors.cal = 'Enter a valid number';
  if(isValidNumber(cal)) errors.cal = 'Enter a valid number';

  // Validate Prot
  if(isIntAndMin(prot)) errors.prot = 'Minimum Qty. is 0';
  if(isIntAndMax(prot)) errors.prot = 'Maximum Qty. is 1000';
  if(isFloatAndMin(prot)) errors.prot = 'Minimum Qty. is 0';
  if(isFloatAndMax(prot)) errors.prot = 'Maximum Qty. is 1000';
  if(isOneDecimal(prot)) errors.prot = 'Maximum decimal is 1';
  if(isIntAndNoLeadingZero(prot)) errors.prot = 'Enter a valid number';
  if(isValidNumber(prot)) errors.prot = 'Enter a valid number';

  // Validate Fat
  if(isIntAndMin(fat)) errors.fat = 'Minimum Qty. is 0';
  if(isIntAndMax(fat)) errors.fat = 'Maximum Qty. is 1000';
  if(isFloatAndMin(fat)) errors.fat = 'Minimum Qty. is 0';
  if(isFloatAndMax(fat)) errors.fat = 'Maximum Qty. is 1000';
  if(isOneDecimal(fat)) errors.fat = 'Maximum decimal is 1';
  if(isIntAndNoLeadingZero(fat)) errors.fat = 'Enter a valid number';
  if(isValidNumber(fat)) errors.fat = 'Enter a valid number';

  // Validate Carb
  if(isIntAndMin(carb)) errors.carb = 'Minimum Qty. is 0';
  if(isIntAndMax(carb)) errors.carb = 'Maximum Qty. is 1000';
  if(isFloatAndMin(carb)) errors.carb = 'Minimum Qty. is 0';
  if(isFloatAndMax(carb)) errors.carb = 'Maximum Qty. is 1000';
  if(isOneDecimal(carb)) errors.carb = 'Maximum decimal is 1';
  if(isIntAndNoLeadingZero(carb)) errors.carb = 'Enter a valid number';
  if(isValidNumber(carb)) errors.carb = 'Enter a valid number';
  
  // Validate Numbers
  if(!Validator.isNumeric(qty)) errors.qty = 'No characters allowed';
  if(!Validator.isNumeric(cal)) errors.cal = 'No characters allowed';
  if(!Validator.isNumeric(prot)) errors.prot = 'No characters allowed';
  if(!Validator.isNumeric(fat)) errors.fat = 'No characters allowed';
  if(!Validator.isNumeric(carb)) errors.carb = 'No characters allowed';


  // Validate Empty
  if(Validator.isEmpty(name)) errors.name = 'Product Name field is required';
  if(Validator.isEmpty(qty)) errors.qty = 'Quantity field is required';
  if(Validator.isEmpty(type)) errors.type = 'Type field is required';
  if(Validator.isEmpty(cal)) errors.cal = 'Calories field is required';
  if(Validator.isEmpty(prot)) errors.prot = 'Protein field is required';
  if(Validator.isEmpty(fat)) errors.fat = 'Fat field is required';
  if(Validator.isEmpty(carb)) errors.carb = 'Carbohydrates field is required';


  return {
    errors,
    isValid: isEmpty(errors)
  };
}

export default validateAdmin;