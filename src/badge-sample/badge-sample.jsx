import React, { useState } from "react";
import { Badge, Button } from "react-bootstrap";

/**
 * Badge サンプルコンポーネント。
 *
 * @returns {React.JSX.Element}
 */
export default function BadgeSample() {

  const [clickCount, setClickCount] = useState(0);

  return (
    <>
      <h2>Badge sample</h2>

      <Button onClick={() => setClickCount(clickCount + 1)}>
        Click <Badge bg='danger' pill>{clickCount}</Badge>
      </Button>
    </>
  );

}
