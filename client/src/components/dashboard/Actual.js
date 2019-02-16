import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Redux
import { connect } from 'react-redux';
import { collectActual } from '../../redux/actions/dashboard';

// Common
import isEmpty from '../common/isEmpty';

class Actual extends Component {

  componentDidUpdate(prevProps, prevState){
    const  { breakfast, lunch, diner, snack } = this.props.calculator;

    if ((prevProps.calculator.breakfast !== breakfast) && (!isEmpty(breakfast)) || 
    (prevProps.calculator.lunch !== lunch) && (!isEmpty(lunch)) ||
    (prevProps.calculator.diner !== diner) && (!isEmpty(diner)) ||
    (prevProps.calculator.snack !== snack) && (!isEmpty(snack))) {
    this.props.collectActual(this.actualFunc(breakfast, lunch, diner, snack))
    }
  }

   // Sum up the prod vals
   sumAll = (...args) => {
    let sum = 0;
    for (let arg of args) sum += Number(arg);
    return sum;
  };

  actualFunc = (breakfast, lunch, diner, snack) => {
    let totalCalories = []; 
    let totalProtein = [];
    let totalFat = [];
    let totalCarbohydrates = [];

    // Collect all data
    totalCalories.push(breakfast.calories, lunch.calories, diner.calories, snack.calories)
    totalProtein.push(breakfast.protein, lunch.protein, diner.protein, snack.protein)
    totalFat.push(breakfast.fat, lunch.fat, diner.fat, snack.fat)
    totalCarbohydrates.push(breakfast.carbohydrates, lunch.carbohydrates, diner.carbohydrates, snack.carbohydrates)

    // Calc the sum
    const calories = this.sumAll(...totalCalories);
    const protein = this.sumAll(...totalProtein);
    const fat = this.sumAll(...totalFat);
    const carbohydrates = this.sumAll(...totalCarbohydrates);

    // Return Obj sum
    const totalVals = {calories, protein, fat, carbohydrates}
    return totalVals;
  }

  
  render() {
    const { actual, breakfast } = this.props.calculator;
    let number;
    if (!isEmpty(actual)) {
      number = Object.entries(actual).map(i => 
        <li key={Object.entries(i)} className='list-inline-item'>
          {Object.values(i)[0]}: {Object.values(i)[1]}
        </li>)
    } else {
      number = Object.entries(breakfast).map(i => 
        <li key={Object.entries(i)} className='list-inline-item'>
          {Object.values(i)[0]}: {Object.values(i)[1]}
        </li>)
    }

    return (
      <div>
        <ul className='navbar list-inline paper'>
          {number}
        </ul>
      </div>
    )
  }
};

Actual.propTypes = {
  calculator: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  calculator: state.calculator
});

export default connect( mapStateToProps, {collectActual} )(Actual);
