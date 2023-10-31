import BrushSVG from "@/assets/brush.svg";
import styles from "./Brush.module.css";

export default function Brush() {
  
  return <div className={styles.itemWrap}>
    <div className={styles.item}>
      <img src={chrome.runtime.getURL(BrushSVG)} className={styles.brushIcon}/>
    </div>
  </div>;
}
