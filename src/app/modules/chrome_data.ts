const STORAGE_KEY = "__DRW_STORAGE__";

type DrwChromeStorageData = {
  isHide: boolean;
};

async function getStoragData() {
  const chromeStorage: DrwChromeStorageData = (await chrome.storage.local.get(
    STORAGE_KEY
  )) as DrwChromeStorageData;
  
  return chromeStorage;
}
