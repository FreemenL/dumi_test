# antd 组件

```jsx | inline

import React from 'react';
import { Button } from 'antd';
const href = 'https://www.aliyun.com/sale-season/2020/procurement-new-members?userCode=7duih2sz';

export default () => {
  return (
  <>
    <Button type="primary" onClick={()=>{location.href= href}}>点我吧</Button>
  </>
)}

```
