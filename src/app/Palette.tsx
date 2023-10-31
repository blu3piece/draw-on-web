import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

import styles from "./Palette.module.css";

import Brush from "./Brush";
import { useEffect } from 'react';
import ColorPicker from './ColorPicker';
import { getCanvasContext } from './modules/canvas_context';



function hideCanvas(setCanvasVisible:React.Dispatch<React.SetStateAction<boolean>>) {
  const el = document.querySelector(`.${styles.palette}`);
  if(el == null) return;
  el.classList.add(`${styles.hide}`);
  setCanvasVisible(false);
}
  

function toggleCanvas (setCanvasVisible:React.Dispatch<React.SetStateAction<boolean>>) {
  return (e:KeyboardEvent) => {
    if(!e.altKey) return;
    if(e.key != "1") return;
  
    const el = document.querySelector(`.${styles.palette}`);
    if(el == null) return;
  
    if(el.classList.contains(`${styles.hide}`)) {
      el.classList.remove(`${styles.hide}`);
      setCanvasVisible(true);
    }

    else {
      el.classList.add(`${styles.hide}`);
      setCanvasVisible(false);
    }
    
  }
}

export default function Palette() {
  const ctx = getCanvasContext();
  // 로딩창 구현하기.
  if(!ctx || !ctx.ctx) return <></>;

  useEffect(() => {
    window.addEventListener("keydown", toggleCanvas(ctx.setCanvasVisible));
  }, []);

  const {setCanvasVisible} = ctx;

  return <div className={`${styles.hide} ${styles.palette}`}>
    <div>
      <div className={styles.title}>Draw on Web</div>
      <ColorPicker />
      <Brush />
    </div>
    <div className={styles.closeButtonWrap} onClick={() => { hideCanvas(setCanvasVisible) }}>
      <ArrowBackIosNewIcon />
    </div>
  </div>
}