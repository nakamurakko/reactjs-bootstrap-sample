import PropTypes from 'prop-types';
import React, { Suspense, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { SampleService } from "../../sample-service";

SampleSuspenseModalDialog.propTypes = {
  showDialog: PropTypes.bool.isRequired,
  /**
   * 画面を閉じる処理。
   * @type {PropTypes.Requireable<Function>}
   * @param {string} selectedAnimal 選択した果物。
   * @returns {void}
   */
  onClose: PropTypes.func.isRequired
};

/**
 * Sample Modal ダイアログ。
 * @param {SampleSuspenseModalDialog.propTypes}
 * @returns {React.JSX.Element}
 */
export default function SampleSuspenseModalDialog({ showDialog, onClose }) {

  const [selectedFruit, setSelectedFruit] = useState('');
  const [isCompleted, setIsCompleted] = useState(false);

  /**
   * Modal 表示開始時の処理。
   */
  const handleStartup = async () => {
    setIsCompleted(false);
    await SampleService.sleep();
  };

  /**
   * Modal 表示時の処理。
   */
  const haneleCompleted = () => {
    setIsCompleted(true);
    setSelectedFruit('Grape');
  };

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
          <Suspense fallback={<p>Now loading</p>}>
            <DialogContent isCompleted={isCompleted} onStartup={handleStartup} onCompleted={haneleCompleted} />
            <Form>
              <Form.Check
                checked={selectedFruit === 'Apple'}
                inline
                label='Apple'
                name='fruit'
                type='radio'
                value='Apple'
                onChange={(event) => setSelectedFruit(event.target.value)}
              />
              <Form.Check
                checked={selectedFruit === 'Orange'}
                inline
                label='Orange'
                name='fruit'
                type='radio'
                value='Orange'
                onChange={(event) => setSelectedFruit(event.target.value)}
              />
              <Form.Check
                checked={selectedFruit === 'Grape'}
                inline
                label='Grape'
                name='fruit'
                type='radio'
                value='Grape'
                onChange={(event) => setSelectedFruit(event.target.value)}
              />
            </Form>
          </Suspense>
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={
              (event) => {
                onClose(selectedFruit);
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

DialogContent.propTypes = {
  /**
   * 処理が完了しているかどうか。
   */
  isCompleted: PropTypes.bool,
  /**
   * 起動処理。
   */
  onStartup: PropTypes.func,
  /**
   * 完了処理。
   */
  onCompleted: PropTypes.func
};

/**
 *
 * @param {DialogContent.propTypes}
 * @returns
 */
function DialogContent({ isCompleted, onStartup, onCompleted }) {

  if (isCompleted) {
    return (
      <></>
    );
  }

  throw new Promise(() => {
    void onStartup().then()
      .finally(() => {
        onCompleted();
      });
  });

}
