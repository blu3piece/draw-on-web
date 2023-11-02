import styles from "./Reset.module.css";
import CloseIcon from '@mui/icons-material/Close';
import { getCanvasContext } from "./modules/canvas_context";

export default function Reset() {
  const canvasContext = getCanvasContext();
  if(!canvasContext) return <></>;
  const {clearCanvas} = canvasContext;

  return <div className={styles.itemWrap}>
    <div className={styles.item} onClick={() => clearCanvas()}>
      <CloseIcon />
    </div>
  </div>
}