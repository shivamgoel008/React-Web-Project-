import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom/server";
import Header from "../Header";
import store from "../../Utlis/store";

test("LOGO should load on rendering Header", () => {
  /* 1. load header component 
       2. check if logo is loaded */

  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  console.log(header);
});
