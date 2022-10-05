import { instantiateStore } from "./redux/storeProvider";
import { setRandomValue } from "./redux/testStore";

chrome.storage.onChanged.addListener(function (changes, namespace) {
  for (let [key, { oldValue, newValue }] of Object.entries(changes)) {
    if (key === "test-key") {
      console.log("write to test-key happened");
    }
  }
});

chrome.tabs.onActivated.addListener(({ tabId }) => {
  instantiateStore().then((store) => {
    for(let i = 0; i < 500; i++) {
      store.dispatch(setRandomValue());
    }
  });
});