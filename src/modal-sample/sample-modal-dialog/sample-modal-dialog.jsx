import PropTypes from 'prop-types';
import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

SampleModalDialog.propTypes = {
  showDialog: PropTypes.bool.isRequired,
  /**
   * 画面を閉じる処理。
   * @type {PropTypes.Requireable<Function>}
   * @param {string} selectedAnimal 選択した動物。
   * @returns {void}
   */
  onClose: PropTypes.func.isRequired
};

// /**
//  * @typedef Props
//  * @type {object}
//  * @property {boolean} showDialog
//  * @property {Function} onClose
//  * @param {Props} props
//  * @returns {React.JSX.Element}
//  */
/**
 * Sample Modal ダイアログ。
 * @param {SampleModalDialog.propTypes}
 * @returns {React.JSX.Element}
 */
export default function SampleModalDialog({ showDialog, onClose }) {

  const [selectedAnimal, setSelectedAnimal] = useState('');

  /**
   * Modal 表示時の処理。
   */
  const handleShow = () => {
    setSelectedAnimal('Hamster');
  };

  return (
    <>
      <Modal
        dialogClassName={'modal-dialog-width'}
        show={showDialog}
        onShow={handleShow}
      >
        <Modal.Header>
          Dialog sample.
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Check
              checked={selectedAnimal === 'Dog'}
              inline
              label='Dog'
              name='animal'
              type='radio'
              value='Dog'
              onChange={(event) => setSelectedAnimal(event.target.value)}
            />
            <Form.Check
              checked={selectedAnimal === 'Cat'}
              inline
              label='Cat'
              name='animal'
              type='radio'
              value='Cat'
              onChange={(event) => setSelectedAnimal(event.target.value)}
            />
            <Form.Check
              checked={selectedAnimal === 'Hamster'}
              inline
              label='Hamster'
              name='animal'
              type='radio'
              value='Hamster'
              onChange={(event) => setSelectedAnimal(event.target.value)}
            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={
              (event) => {
                onClose(selectedAnimal);
              }
            }
          >
            Select
          </Button>
          <Button
            onClick={
              (event) => {
                onClose('');
              }
            }
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );

}
