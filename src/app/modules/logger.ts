const msgList = ["Draw on Web Extension", " :: "];

export function error(text:string, errorType?:Error, ) {
  if(errorType !== undefined) console.error(errorType);
  console.error(...msgList, text);
}

export function warn(text:string) {
  console.warn(...msgList, text);
}

export function log(text:string) {
  console.log(...msgList, text);
}