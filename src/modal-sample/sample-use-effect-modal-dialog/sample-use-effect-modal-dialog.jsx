import PropTypes from 'prop-types';
import React, { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

SampleUseEffectModalDialog.propTypes = {
  showDialog: PropTypes.bool.isRequired,
  /**
   * 画面を閉じる処理。
   * @type {PropTypes.Requireable<Function>}
   * @param {string} selectedAnimal 選択した色。
   * @returns {void}
   */
  onClose: PropTypes.func.isRequired
};

/**
 * Sample Modal ダイアログ。
 * @param {SampleUseEffectModalDialog.propTypes}
 * @returns {React.JSX.Element}
 */
export default function SampleUseEffectModalDialog({ showDialog, onClose }) {

  const [selectedColor, setSelectedColor] = useState('');

  /**
   * Modal 表示時の処理。
   */
  useEffect(() => {
    void new Promise((resolve) => {
      setTimeout(() => {
        setSelectedColor('Blue');
        resolve(null);
      }, 3000);
    });
  }, []);

  return (
    <>
      <Modal
        dialogClassName={'modal-dialog-width'}
        show={showDialog}
      >
        <Modal.Header>
          Dialog sample.
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Check
              checked={selectedColor === 'Red'}
              inline
              label='Red'
              name='color'
              type='radio'
              value='Red'
              onChange={(event) => setSelectedColor(event.target.value)}
            />
            <Form.Check
              checked={selectedColor === 'Green'}
              inline
              label='Green'
              name='color'
              type='radio'
              value='Green'
              onChange={(event) => setSelectedColor(event.target.value)}
            />
            <Form.Check
              checked={selectedColor === 'Blue'}
              inline
              label='Blue'
              name='color'
              type='radio'
              value='Blue'
              onChange={(event) => setSelectedColor(event.target.value)}
            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={
              (event) => {
                onClose(selectedColor);
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
