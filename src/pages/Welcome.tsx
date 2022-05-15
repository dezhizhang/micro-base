import React, { useEffect, useRef, useState } from 'react';
import { MicroAppWithMemoHistory } from 'umi';
import styles from './Welcome.less';

const Welcome: React.FC = () => {
  const microAppRef = useRef(null);
  useEffect(() => {
    (microAppRef as React.MutableRefObject<any>)?.current?.mountPromise?.then(() => {
      console.log('app1 mount');
    });
  }, []);
  const [name, setName] = useState(null);
  console.log('name', name);
  return (
    <div className={styles.container}>
      <MicroAppWithMemoHistory
        ref={microAppRef}
        name="micro-sales"
        url="/"
        autoSetLoading
        onNameChange={(newName: React.SetStateAction<null>) => setName(newName)}
        props={{ name: 'hello', "age": 22 }}
        errorBoundary={(error) => <div>Error: {error.message}</div>}
      />
    </div>
  );
};

export default Welcome;
