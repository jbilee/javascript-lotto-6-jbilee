import LottoHandler from "./controller/LottoHandler.js";

class App {
  constructor() {
    this.handler = new LottoHandler();
  }
  async play() {
    this.handler.start();
  }
}

export default App;
