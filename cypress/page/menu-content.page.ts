class MenuContentPage {
  private menuContentPageURL: string;
  private tShirtMenu: string;
  private addToCartBtn: string;
  private checkoutBtn: string;
  private checkoutBtn1: string;
  private emailFiled: string;
  private passwField: string;
  private email: string;
  private passw: string;
  private loginBtn: string;
  private procedCheckoutBtn: string;
  private checkbox: string;
  private payMethod: string;
  private textComponent: string;
  private haveText: string;
  private verifyText: string;

  constructor() {
    this.menuContentPageURL = "http://automationpractice.com/";
    this.tShirtMenu = "#block_top_menu > ul > li:nth-child(3) > a";
    this.addToCartBtn =
      "#center_column a.button.ajax_add_to_cart_button.btn.btn-default";
    this.checkoutBtn = '[style*="display: block;"] .button-container > a';
    this.checkoutBtn1 = "#center_column > p > a.button";
    this.emailFiled = "#email";
    this.passwField = "#passwd";
    this.email = "aperdomobo@gmail.com";
    this.passw = "WorkshopProtractor";
    this.loginBtn = "#SubmitLogin";
    this.procedCheckoutBtn =
      "#center_column button.button.btn.btn-default.button-medium";
    this.checkbox = "#form > div > p > div > span > input";
    this.payMethod = "#center_column a.bankwire";
    this.textComponent = "#center_column > div > p > strong";
    this.haveText = "have.text";
    this.verifyText = "Your order on My Store is complete.";
  }

  public visitMenuContentPage(): void {
    cy.visit(this.menuContentPageURL);
  }

  public goToTShirtMenu(): void {
    cy.get(this.tShirtMenu).click();
  }

  public addToCart(): void {
    cy.get(this.addToCartBtn).click();
  }

  public goCheckout(): void {
    cy.get(this.checkoutBtn).click();
  }

  public goCheckout1(): void {
    cy.get(this.checkoutBtn1).click();
  }

  public login(): void {
    cy.get(this.emailFiled).type(this.email);
    cy.get(this.passwField).type(this.passw);
    cy.get(this.loginBtn).click();
  }

  public procedCheckout(): void {
    cy.get(this.procedCheckoutBtn).click();
  }

  public setCheckbox(): void {
    cy.get(this.checkbox).click();
  }

  public selectPayMethod(): void {
    cy.get(this.payMethod).click();
  }

  public testSuccess(): void {
    cy.get(this.textComponent).should(this.haveText, this.verifyText);
  }
}
export { MenuContentPage };
