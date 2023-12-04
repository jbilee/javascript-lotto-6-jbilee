import LottoHandler from "./controller/LottoHandler.js";

class App {
  constructor() {
    this.handler = new LottoHandler();
  }
  async play() {
    return this.handler.start();
  }
}

export default App;
