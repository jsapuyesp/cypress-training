import { MenuContentPage } from "../page/index";

const menuContentPage = new MenuContentPage();

describe("Buy a t-shirt", () => {
  it("then the t-shirt should be bought", () => {
    menuContentPage.visitMenuContentPage();
    menuContentPage.goToTShirtMenu();
    menuContentPage.addToCart();
    menuContentPage.goCheckout();
    menuContentPage.goCheckout1();
    menuContentPage.login();
    menuContentPage.procedCheckout();
    menuContentPage.setCheckbox();
    menuContentPage.procedCheckout();
    menuContentPage.selectPayMethod();
    menuContentPage.procedCheckout();
    menuContentPage.testSuccess();
  });
});
