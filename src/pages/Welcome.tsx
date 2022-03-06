import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import {  MicroAppWithMemoHistory } from 'umi';
import styles from './Welcome.less';


const Welcome: React.FC = () => {

  return (
    <PageContainer>
       <div className={styles.container}>
         <a href='/info'>跳转</a>
      <MicroAppWithMemoHistory name='sales' url="/info"/>
    </div>
    </PageContainer>
  );
};

export default Welcome;
