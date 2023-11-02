import BrushSVG from "@/assets/brush.svg";
import styles from "./Brush.module.css";
import { getCanvasContext } from "./modules/canvas_context";
import { useEffect, useRef } from "react";

function collapse(el:HTMLElement | null) {
  if(!el) return;
  el.classList.add(styles.hide);
}

function toggle(el:HTMLElement | null) {
  if(!el) return;
  if(el.classList.contains(styles.hide)) el.classList.remove(styles.hide);
  else el.classList.add(styles.hide);
}

export default function Brush() {
  const context = getCanvasContext();
  const initialSize = 10;
  if(!context || !context.ctx) return <></>;

  const sizeElement = useRef<HTMLDivElement>(null);
  const { setBrushSize, canvasVisible } = context;
  
  useEffect(() => {
    setBrushSize(initialSize);
  }, []);

  useEffect(() => {
    if(!canvasVisible) collapse(sizeElement.current);
  }, [canvasVisible]);
  
  return <div className={styles.itemWrap}>
    <div className={styles.item}>
      <img src={chrome.runtime.getURL(BrushSVG)} className={styles.brushIcon} onClick={() => toggle(sizeElement.current)}/>
      <div ref={sizeElement} className={`${styles.strokeSettingWrap} ${styles.hide}`} >
        <button onClick={() => setBrushSize(10)}></button>
        <button onClick={() => setBrushSize(20)}></button>
        <button onClick={() => setBrushSize(30)}></button>
        <button onClick={() => setBrushSize(40)}></button>
      </div>
    </div>
  </div>;
}
