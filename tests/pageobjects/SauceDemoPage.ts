import { Page, Locator, expect } from '@playwright/test';
import dotenv from 'dotenv';
dotenv.config();

export class SauceDemoPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly loginError: Locator;
  readonly menuButton: Locator;
  readonly logoutLink: Locator;
  readonly productList: Locator;
  readonly backpackTitle: Locator;
  readonly addToCartBackpack: Locator;
  readonly cartIcon: Locator;
  readonly cartCounter: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.getByRole('textbox', { name: 'Username' });
    this.passwordInput = page.getByRole('textbox', { name: 'Password' });
    this.loginButton = page.getByRole('button', { name: 'Login' });
    this.loginError = page.getByRole('heading', {name:'Epic sadface: Username and password do not match any user in this service'});
    this.menuButton = page.getByRole('button', { name: 'Open Menu' });
    this.logoutLink = page.getByRole('link', { name: 'Logout' });
    this.productList = page.getByRole('list');
    this.backpackTitle = page.getByText('Sauce Labs Backpack');
    this.addToCartBackpack = page.getByRole('button', { name: 'Add to cart' });
    this.cartIcon = page.getByRole('link', { name: 'Shopping Cart' });
    this.cartCounter = page.getByRole('status', { name: 'Cart Badge' });
  }

  async login(username: string, password: string) {
    await this.page.goto(process.env.BASE_URL || 'https://www.saucedemo.com/');
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async loginWithEnvCredentials() {
    await this.login(process.env.USER!, process.env.PASSWORD!);
    await expect(this.cartIcon).toBeVisible();
    await expect(this.page).toHaveURL(/inventory/);
  }

  async logout() {
    await this.menuButton.click();
    await this.logoutLink.click();
  }
}
