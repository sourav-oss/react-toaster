import React, { useState, useEffect, createContext } from 'react'
import './styles.scss';

const ReactToaster = (props) => {

  const [status, setStatus] = useState(false);
  const [type, setType] = useState(props.type ? props.type : 'info')
  const [alert, setAlert] = useState(
    props.alert ? props.alert : 'Something wrong!'
  )

  useEffect(() => { }, [alert, setAlert]);
  return (
    <div>
      {props.type ? props.type : "null"}
    </div>
  )
}
export default ReactToaster;
