import { getCanvasContext } from "./modules/canvas_context";
import styles from "./Canvas.module.css";

export default function Canvas() {
  const canvasContext = getCanvasContext();
  if(!canvasContext) return <></>;
  
  return <canvas ref={canvasContext.canvasRef} id="drw-canvas" className={styles.canvas} />
}