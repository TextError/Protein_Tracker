import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateItem } from '../../../redux/actions/meal';
import { createStructuredSelector } from 'reselect';
import { state_errors } from '../../../redux/selectors/meal'
import classnames from 'classnames';
import CustomButton from '../../common/button/Custom_Button';
import isEmpty from '../../common/utils/isEmpty';

const Modal = ({ show, setShow, state, setState, item, updateItem }) => {
  const [modal, setModal] = useState({ _id: '', name: '', qty: '', type: '', cal: '', prot: '', fat: '', carb: '' });
  const [input, setInput] = useState('');
  const { name, qty, type, cal, prot, fat, carb } = modal;

  // Update state CDM
  useEffect(() => {
    setModal({ ...state });
    // eslint-disable-next-line
  },[])

  // Update state on Input change CDU
  useEffect(() => {
    if(!isEmpty(input)) { 
      const { cal, prot, fat, carb } = item;
      setModal({ 
        ...modal, 
        cal: String(cal*input),
        prot: String(prot*input),
        fat: String(fat*input),
        carb: String(carb*input),
      })}
    // eslint-disable-next-line
  },[input]);

  // Create Event CDM && CDUM
  useEffect(() => {
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  });

  const onClickOutside = e => {
    if(e.target.className !== 'modal fade d-block') return;
    setShow(!show);
  }

  const onClick = () => setShow(!show);
  const onChange = val => {
    // validation here
    // 0 no good
    setInput(val);
    updateItem({...modal});
  };

  const onSave = () => {
    setState({ ...state, cal, prot, fat, carb, qty:input });
    setShow(!show);
  }

  return (
    <div className={classnames('modal fade', { 'd-block': show })}
      style={{opacity: 1, background:'rgba(34, 36, 38, 0.2)'}}
     tabIndex="-1" role="dialog" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content p-2">
          <div className="modal-header">
            <h5 className="modal-title text-primary">{name}</h5>
            <button type="button" className="close" onClick={onClick} aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className='d-flex justify-content-around border-bottom pb-3'>
              <div>Cal. {cal}</div>
              <div>Prot. {prot}</div>
              <div>Fat {fat}</div>
              <div>Carb. {carb}</div>
            </div>
            <div className='d-flex justify-content-around pt-3'>
              <div>Qty. {qty} {type}</div>
              <div className='d-flex'>
                <i className='text-success mr-2'>NEW</i> Qty. 
                <div className="input-group input-group-sm ml-2">
                  <input 
                    name='input'
                    value={input}
                    onChange={e=>onChange(e.target.value)}
                    error=''
                    className="form-control"
                    type="text"   
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <CustomButton text='Cancel' isClass='btn-outline-danger' onClick={onClick} />
            <CustomButton text='Save' isClass='btn-outline-success' onClick={onSave} />
          </div>
        </div>
      </div>
    </div>
  )
}

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  setShow: PropTypes.func.isRequired,
  state: PropTypes.object.isRequired,
  setState: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
  updateItem: PropTypes.func.isRequired
}

const mapStateToProps = createStructuredSelector({

});

export default connect( mapStateToProps, { updateItem } )(Modal);