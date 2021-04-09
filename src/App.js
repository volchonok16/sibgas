import React from "react";
import { Navigator, Footer, Main, Description, Product, Contacts,
Mzta, Wilo, Npo, Dungs, Kvant } from "./app/components";
import { Route } from "react-router-dom";

export const App = () => {
  return (
   
        <div className="app">
          <Route path={''} component={Navigator} />
          <Route path={''} component={Footer} />
          <Route exact path={'/'} component={Main} />
          <Route path={'/description'} component={Description} />
          <Route path={'/product'} component={Product} />
          <Route path={'/contacts'} component={Contacts} />
          <Route path={'/mzta'} component={Mzta} />
          <Route path={'/wilo'} component={Wilo} />
          <Route path={'/npo'} component={Npo} />
          <Route path={'/dungs'} component={Dungs} />
          <Route path={'/kvant'} component={Kvant} />






        </div>
  );
};
