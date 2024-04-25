import React, { useState } from 'react'
import TestdataContext from './testdataContext';

const TestdataProvider = ({children}) => {
  const [testData, setTestData] = useState({});

  return (
    <TestdataContext.Provider value={{testData, setTestData}}>
      {children}
    </TestdataContext.Provider>
  )
}

export default TestdataProvider