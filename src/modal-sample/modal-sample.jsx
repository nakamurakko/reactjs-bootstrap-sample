import { useState } from "react";
import { Button, Table } from "react-bootstrap";
import SampleModalDialog from "./sample-modal-dialog/sample-modal-dialog";
import SampleSleepModalDialog from "./sample-sleep-modal-dialog/sample-sleep-modal-dialog";
import SampleSuspenseModalDialog from "./sample-suspense-modal-dialog/sample-suspense-modal-dialog";
import SampleUseEffectModalDialog from "./sample-use-effect-modal-dialog/sample-use-effect-modal-dialog";

/**
 * Modal サンプルコンポーネント。
 *
 * @returns {JSX.Element}
 */
export default function ModalSample() {

  //#region ダイアログサンプル。

  const [showDialog, setShowDialog] = useState(false);
  const [selectedAnimal, setSelectedAnimal] = useState('');

  /**
   * Modal 表示処理。
   */
  const handleShowDialoog = () => {
    setShowDialog(true);
  };

  /**
   * Modal 終了処理。
   * @param {string} selectedAnimal 選択した動物。
   */
  const handleCloseDialog = (selectedAnimal) => {
    setSelectedAnimal(selectedAnimal);
    setShowDialog(false);
  };

  //#endregion

  //#region sleep 後に起動するダイアログサンプル。

  const [showSleepDialog, setShowSleepDialog] = useState(false);
  const [selectedCar, setSelectedCar] = useState('');

  const handleShowSleepDialog = () => {
    setShowSleepDialog(true);
  };

  /**
   *
   * @param {string} selectedCar
   */
  const handleCloseSleepDialog = (selectedCar) => {
    setSelectedCar(selectedCar);
    setShowSleepDialog(false);
  };

  //#endregion

  //#region Suspense で遅延表示させるダイアログサンプル。

  const [showSuspenseDialog, setShowSuspenseDialog] = useState(false);
  const [selectedFruit, setSelectedFruit] = useState('');

  const handleShowSuspenseDialog = () => {
    setShowSuspenseDialog(true);
  };

  /**
   *
   * @param {string} selectedFruit
   */
  const handleCloseSuspenseDialog = (selectedFruit) => {
    setSelectedFruit(selectedFruit);
    setShowSuspenseDialog(false);
  };

  //#endregion

  //#region useEffect を使用したダイアログサンプル。

  const [showUseEffectDialog, setShowUseEffectDialog] = useState(false);
  const [selectedColor, setSelectedColor] = useState('');

  const handleShowUseEffectDialog = () => {
    setShowUseEffectDialog(true);
  };

  /**
   *
   * @param {string} selectedColor
   */
  const handleCloseUseEffectDialog = (selectedColor) => {
    setSelectedColor(selectedColor);
    setShowUseEffectDialog(false);
  };

  //#endregion

  return (
    <>
      <h2>Modal sample</h2>

      <Table>
        <tbody>
          <tr>
            <td>
              <Button
                onClick={handleShowDialoog}
              >
                Show dialog
              </Button>
            </td>
            <td>
              <span>{selectedAnimal}</span>
            </td>

            {
              showDialog &&
              <SampleModalDialog
                showDialog={showDialog}
                onClose={handleCloseDialog}
              />
            }
          </tr>
          <tr>
            <td>
              <Button
                onClick={handleShowSleepDialog}
              >
                Show dialog (sleep)
              </Button>
            </td>
            <td>
              <span>{selectedCar}</span>
            </td>

            {
              showSleepDialog &&
              <SampleSleepModalDialog
                showDialog={showSleepDialog}
                onClose={handleCloseSleepDialog}
              />
            }
          </tr>
          <tr>
            <td>
              <Button
                onClick={handleShowSuspenseDialog}
              >
                Show dialog (suspense)
              </Button>
            </td>
            <td>
              <span>{selectedFruit}</span>
            </td>

            {
              showSuspenseDialog &&
              <SampleSuspenseModalDialog
                showDialog={showSuspenseDialog}
                onClose={handleCloseSuspenseDialog}
              />
            }
          </tr>
          <tr>
            <td>
              <Button
                onClick={handleShowUseEffectDialog}
              >

                Show dialog (useEffect)
              </Button>
            </td>
            <td>
              <span>{selectedColor}</span>
            </td>

            {
              showUseEffectDialog &&
              <SampleUseEffectModalDialog
                showDialog={showUseEffectDialog}
                onClose={handleCloseUseEffectDialog}
              />
            }
          </tr>

        </tbody>
      </Table>
    </>
  );

}
