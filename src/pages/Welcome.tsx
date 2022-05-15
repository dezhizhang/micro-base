import React from 'react';
import { Button } from 'antd'
import { PageContainer } from '@ant-design/pro-layout';
import {  MicroAppWithMemoHistory } from 'umi';
import styles from './Welcome.less';


const Welcome: React.FC = () => {
  const handleClick = () => {
    return <MicroAppWithMemoHistory name='sales' url="/change"/>
  }
  return (
    <PageContainer>
       <div className={styles.container}>
         <Button type='primary' onClick={handleClick}>跨转</Button>
         <a href='/sales/info'>跳转</a>
      <MicroAppWithMemoHistory name='sales' autoSetLoading={true} url="/info"/>
    </div>
    </PageContainer>
  );
};

export default Welcome;
