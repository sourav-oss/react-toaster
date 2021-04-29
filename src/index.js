import React, { useState, useEffect, createContext } from 'react'
import './styles.scss';

const ReactToaster = (props) => {

  const [type, setType] = useState(props.type ? props.type : 'info');

  return <div>{type}</div>
}
export default ReactToaster;
