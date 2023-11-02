import { useContext, createContext, useRef, useEffect, useState } from "react";
import { toggleCanvas as tg } from "./canvas_context/event_listener";

type BrushSize = 10 | 20 | 30 | 40;

interface CanvasContext {
  canvasVisible:boolean;
  fillColor:string;
  brushSize:BrushSize;
  setCanvasVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setFillColor: React.Dispatch<React.SetStateAction<string>>;
  setBrushSize: React.Dispatch<React.SetStateAction<BrushSize>>;
  canvasRef: React.RefObject<HTMLCanvasElement>;
  clearCanvas : () => void;
  ctx: React.RefObject<CanvasRenderingContext2D | null>;
}

interface CanvasContextProviderParams {
  children: React.ReactNode;
}

const canvasContext = createContext<CanvasContext | null>(null);

export const CanvasContextProvider = (params: CanvasContextProviderParams) => {
  const { children } = params;

  const canvas = useRef<HTMLCanvasElement>(null);
  const ctx = useRef<CanvasRenderingContext2D | null>(null);

  const prevX = useRef<number>(0);
  const prevY = useRef<number>(0);
  const contextMenuTimer = useRef<number>(0);
  const pressed = useRef<boolean>(false);

  const [fillColor, setFillColor] = useState<string>("#ffffff");
  const [brushSize, setBrushSize] = useState<BrushSize>(20);
  const [canvasVisible, setCanvasVisible] = useState<boolean>(false);

  function clearCanvas() {
    if(!ctx.current) return;
    ctx.current.clearRect(0, 0, ctx.current.canvas.width, ctx.current.canvas.height);
  }

  useEffect(() => {
    if (!ctx.current) return;
    ctx.current.strokeStyle = ctx.current.fillStyle = fillColor;
    ctx.current.lineWidth = brushSize;
  }, [fillColor, brushSize]);

  useEffect(() => {
    if (!ctx.current) return;
    ctx.current.lineWidth = brushSize;
    tg({
      ctx: ctx.current,
      status: canvasVisible,
      contextMenuTimer,
      pressed,
      prevX,
      prevY,
    });

  }, [canvasVisible]);

  useEffect(() => {
    if (canvas.current) {
      ctx.current = canvas.current.getContext("2d");
      if (ctx.current) {
        ctx.current.canvas.width = document.body.scrollWidth - 1;
        ctx.current.canvas.height = document.body.scrollHeight - 1;
        ctx.current.strokeStyle = ctx.current.fillStyle = fillColor;
      }
      
    }
  }, []);

  const exportProps = {
    canvasVisible,
    brushSize,
    fillColor,
    setBrushSize,
    setCanvasVisible,
    setFillColor,
    ctx,
    canvasRef: canvas,
    clearCanvas,
  };

  return <canvasContext.Provider value={exportProps}>{children}</canvasContext.Provider>;
};

export function getCanvasContext() {
  return useContext(canvasContext);
}
