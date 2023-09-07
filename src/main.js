// 페이지 로드 시 바로 실행
import { addEvent } from "./event";
import { appendPalette } from "./palette";

console.log("DEV BY ST");

(function() {
    addEvent();
    appendPalette();
})();