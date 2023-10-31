import { useContext, createContext, useRef, useEffect, useState } from "react";
import { toggleCanvas as tg } from "./canvas_context/event_listener";

interface CanvasContext {
  setCanvasVisible: React.Dispatch<React.SetStateAction<boolean>>;
  fillColor:string;
  setFillColor: React.Dispatch<React.SetStateAction<string>>;
  canvasRef: React.RefObject<HTMLCanvasElement>;
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
  const [canvasVisible, setCanvasVisible] = useState<boolean>(false);

  useEffect(() => {
    if (!ctx.current) return;
    ctx.current.strokeStyle = ctx.current.fillStyle = fillColor;
  }, [fillColor]);

  useEffect(() => {
    if (!ctx.current) return;
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
    setCanvasVisible,
    fillColor,
    setFillColor,
    ctx,
    canvasRef: canvas,
  };

  return <canvasContext.Provider value={exportProps}>{children}</canvasContext.Provider>;
};

export function getCanvasContext() {
  return useContext(canvasContext);
}
