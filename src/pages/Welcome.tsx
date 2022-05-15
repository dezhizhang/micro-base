import React from 'react';
import { Button } from 'antd'
import { PageContainer } from '@ant-design/pro-layout';
import { MicroApp, MicroAppWithMemoHistory } from 'umi';
import styles from './Welcome.less';


const Welcome: React.FC = () => {

  return (
    <div>
      <MicroAppWithMemoHistory name='micro-sales' url="/" />
    </div>
  );
};

export default Welcome;
