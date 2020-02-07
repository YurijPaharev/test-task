import React, { useEffect, useRef } from 'react';
import {createPortal} from 'react-dom';
import { createUseStyles } from 'react-jss';


const useStyles = createUseStyles({
  wrapper: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    top: 0, 
    bottom: 0,
    left: 0,
    right: 0,
    background: 'rgba(0, 0, 0, .3)'
  },
  main: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '320px',
    width: '100%',
    background: 'white',
    borderRadius: 8
  }
});

const Modal = ({ children }) => {
  const elRef = useRef(null);
  const classes = useStyles();

  if (!elRef.current) {
    const div = document.createElement('div');
    elRef.current = div;
  } 

  useEffect(() => {
    const modalRoot = document.getElementById('modal');
    modalRoot.appendChild(elRef.current);

    return () => modalRoot.removeChild(elRef.current);
  }, []);

  const contentWrapper = (
    <div className={classes.wrapper}>
      <div className={classes.main}>
        {children}
      </div>
    </div>
  );

  return createPortal(contentWrapper, elRef.current);
}

export default Modal;
