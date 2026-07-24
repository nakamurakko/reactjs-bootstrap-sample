import { useImperativeHandle, useRef, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

/**
 * @typedef SampleUseImperativeHandleDialogRef SampleUseImperativeHandleDialog の Ref 型定義。
 * @property {(resultFunction?: (value: string) => void) => void} showdDialog ダイアログを表示する。
 * @property {() => Promise<string>} showDialogAsync ダイアログを表示する。
 */

/**
 * Sample Modal ダイアログ。
 * @param {SampleUseImperativeHandleDialogRef}
 * @returns {React.JSX.Element}
 */
export default function SampleUseImperativeHandleDialog({ ref }) {

  const dialogRef = useRef(null);
  const [showSelf, setShowSelf] = useState(false);
  /** 実行結果を処理する関数への参照。 */
  const resultFunctionRef = useRef(undefined);

  const [selectedGem, setSelectedGem] = useState('');

  /**
   * ダイアログを表示する。
   * @param {(value: string) => void} resultFunction 表示終了後に実行する関数。
   */
  const showdDialog = (resultFunction) => {
    setShowSelf(true);
    resultFunctionRef.current = resultFunction;
  };

  const handleClose = (value) => {
    setShowSelf(false);
    if (resultFunctionRef.current) {
      resultFunctionRef.current(value);
    }
  };

  useImperativeHandle(ref,
    () => ({

      showdDialog: (resultFunction) => {
        showdDialog(resultFunction);
      },

      showDialogAsync: async () => {
        return await new Promise((resolve) => {
          showdDialog(resolve);
        });
      }

    })
  );

  return (
    <>
      <Modal
        dialogClassName={'modal-dialog-width'}
        ref={dialogRef}
        show={showSelf}
      >
        <Modal.Header
          closeButton
          onHide={() => handleClose('')}
        >
          Dialog sample.
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Check
              checked={selectedGem === 'Diamond'}
              inline
              label='Diamond'
              name='color'
              type='radio'
              value='Diamond'
              onChange={event => setSelectedGem(event.target.value)}
            />
            <Form.Check
              checked={selectedGem === 'Ruby'}
              inline
              label='Ruby'
              name='color'
              type='radio'
              value='Ruby'
              onChange={event => setSelectedGem(event.target.value)}
            />
            <Form.Check
              checked={selectedGem === 'Topaz'}
              inline
              label='Topaz'
              name='color'
              type='radio'
              value='Topaz'
              onChange={event => setSelectedGem(event.target.value)}
            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={() => handleClose(selectedGem)}
          >
            Select
          </Button>
          <Button
            onClick={() => handleClose('')}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );

}
