interface doBrushParams {
  ctx: CanvasRenderingContext2D;
  prevX: React.MutableRefObject<number>;
  prevY: React.MutableRefObject<number>;
  event: MouseEvent;
}

interface toggleCanvasParams {
  ctx: CanvasRenderingContext2D;
  status: boolean;
  prevX : React.MutableRefObject<number>;
  prevY : React.MutableRefObject<number>;
  contextMenuTimer : React.MutableRefObject<number>;
  pressed : React.MutableRefObject<boolean>;
}

// 이벤트 객체에 클로저로 직접 주입한 객체. 근데 이게 맞는지 모르겠다.
class EventContext {
  static params: toggleCanvasParams;
  static setParam(params:toggleCanvasParams): void {
    EventContext.params = params;
  }
}

function doBrush(params: doBrushParams) {
  const { ctx, prevX, prevY, event } = params;

  ctx.beginPath();
  ctx.moveTo(prevX.current, prevY.current);

  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.lineWidth = 30;

  ctx.lineTo(event.pageX, event.pageY);

  ctx.stroke();
  ctx.closePath();

  prevX.current = event.pageX;
  prevY.current = event.pageY;
}


function handleMouseDown(e: MouseEvent) {
  const {pressed, prevX, prevY} = EventContext.params;
  if (e.button != 2) return;
  pressed.current = true;
  prevX.current = e.pageX;
  prevY.current = e.pageY;
}

function handleMouseUp(e: MouseEvent) {
  const {pressed} = EventContext.params;
  if (e.button != 2) return;
  pressed.current = false;
}

function handleMouseMove(e :MouseEvent) {
  const {pressed, contextMenuTimer, ctx, prevX, prevY} = EventContext.params;
  if (!pressed.current) return;
  contextMenuTimer.current++;
  doBrush({ctx, prevX, prevY, event:e});
}

function handleRightClick(e: MouseEvent) {
  const {contextMenuTimer} = EventContext.params;
  if (contextMenuTimer.current >= 10) e.preventDefault();
  contextMenuTimer.current = 0;
}

export function toggleCanvas(params:toggleCanvasParams) {
  EventContext.setParam(params);
  const {ctx, status} = params;

  if (status) {
    ctx.canvas.classList.remove("hide-canvas");

    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("contextmenu", handleRightClick);

  } else {
    ctx.canvas.classList.add("hide-canvas");
    
    window.removeEventListener("mousedown", handleMouseDown);
    window.removeEventListener("mouseup", handleMouseUp);
    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("contextmenu", handleRightClick);
  }
}