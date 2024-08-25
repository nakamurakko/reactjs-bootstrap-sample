import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { SampleService } from "../../sample-service";

/**
 * Sample Modal ダイアログ。
 */
export default function SampleSleepModalDialog({ showDialog, onClose }) {

  const [selectedCar, setSelectedCar] = useState('');

  /**
   * Modal 表示時の処理。
   */
  const handleShow = () => {
    void SampleService.sleep()
      .then(() => {
        setSelectedCar('SUV');
      });
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
              checked={selectedCar === 'Sedan'}
              inline
              label='Sedan'
              name='car'
              type='radio'
              value='Sedan'
              onChange={(event) => setSelectedCar(event.target.value)}
            />
            <Form.Check
              checked={selectedCar === 'Wagon'}
              inline
              label='Wagon'
              name='car'
              type='radio'
              value='Wagon'
              onChange={(event) => setSelectedCar(event.target.value)}
            />
            <Form.Check
              checked={selectedCar === 'SUV'}
              inline
              label='SUV'
              name='car'
              type='radio'
              value='SUV'
              onChange={(event) => setSelectedCar(event.target.value)}
            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={
              (event) => {
                onClose(selectedCar);
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
