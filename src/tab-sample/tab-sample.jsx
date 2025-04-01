import React, { useState } from "react";
import { Button, Tab, Tabs } from "react-bootstrap";

const TabEventKeys = Object.freeze({
  'home': 'home',
  'information': 'information'
});

/**
 * Tab サンプルコンポーネント。
 * @returns {React.JSX.Element}
 */
export default function TabSample() {

  const [tabActiveKey, setTabActiveKey] = useState(TabEventKeys.home);

  return (
    <>
      <h2>Tab sample</h2>

      <Tabs
        activeKey={tabActiveKey}
        defaultActiveKey={TabEventKeys.home}
        onSelect={(eventKey) => setTabActiveKey(eventKey)}
      >
        <Tab
          eventKey={TabEventKeys.home}
          title='Home'
        >
          <h3>Welcome</h3>

          <Button
            type='button'
            onClick={() => setTabActiveKey(TabEventKeys.information)}
          >
            Go to Information
          </Button>
        </Tab>
        <Tab
          eventKey={TabEventKeys.information}
          title='Information'
        >
          <h3>Information</h3>
        </Tab>
      </Tabs>
    </>
  );

}
