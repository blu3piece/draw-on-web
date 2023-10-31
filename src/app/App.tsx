// enable global css
import "./global.css";
// enable local fonts
import FontInjector from "./modules/font_injector";
// import componenets
import Canvas from "./Canvas";
import Palette from "./Palette";
// import module css
import styles from "./App.module.css";
import { CanvasContextProvider } from "./modules/canvas_context";

FontInjector();


export default function App() {
  return <CanvasContextProvider>
    <div className={styles.wrap}>
      <Palette />
      <Canvas />
    </div>
  </CanvasContextProvider>
}
