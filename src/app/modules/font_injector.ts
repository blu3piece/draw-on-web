const FONT_LOCATION_PREFIX = "src/assets/fonts/";

type fontType = {
  fontName:string,
  fileName:string,
  fileType:string,
  fontWeight:number
};

const styleNode = document.createElement("style");

const fontList:fontType[] = [
  {
    fontName:"Ubuntu",
    fileName:"Ubuntu-Regular",
    fileType:"ttf",
    fontWeight:400,
  },
  {
    fontName:"Ubuntu",
    fileName:"Ubuntu-Light",
    fileType:"ttf",
    fontWeight:300,
  },
  {
    fontName:"Ubuntu",
    fileName:"Ubuntu-Medium",
    fileType:"ttf",
    fontWeight:500,
  },
  {
    fontName:"Ubuntu",
    fileName:"Ubuntu-Bold",
    fileType:"ttf",
    fontWeight:700,
  }
];

function addFont({fontName, fileName, fileType, fontWeight}:fontType) {
  
  styleNode.innerText += `@font-face {\n
    font-family: ${fontName};\n
    src:url(${chrome.runtime.getURL(`${FONT_LOCATION_PREFIX}${fileName}.${fileType}`)});\n
    font-weight:${fontWeight};\n
  }\n`;
}

export default function run() {
  fontList.forEach((font) => {
    addFont(font);
  })
  const head = document.querySelector('head');
  if (!head) {
    throw Error("there is no head in html");
  }
  head.appendChild(styleNode);
}