import Global from "./styles/global";

import { Header } from "./pages/Header/Header";
import { Home } from "./pages/Home/Home";
import { Services } from "./pages/Services/Services";


export function App() {
  return (
    <>
      <Global />
      <Header />
      <Home />
      <Services />
    </>
  )
}
