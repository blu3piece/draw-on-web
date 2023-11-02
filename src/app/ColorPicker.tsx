import styles from "./ColorPicker.module.css";
import { getCanvasContext } from "./modules/canvas_context";

export default function ColorPicker() {
  const context = getCanvasContext();

  if(!context || !context.ctx) return <></>;

  const { fillColor, setFillColor } = context;

  return (
    <div className={styles.itemWrap}>
      <input
        type="color"
        name="fillColor"
        id="drw-colorpicker"
        value={fillColor}
        className={styles.item}
        onChange={(e) => setFillColor(e.target.value)}
      />
    </div>
  );
}
