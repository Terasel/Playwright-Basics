import { Locator, Page } from "@playwright/test"

export class LoginPage{

    private readonly usernameTextbox: Locator
    private readonly passwordTextbox: Locator
    private readonly loginButton: Locator

    constructor(page: Page){
        this.usernameTextbox = page.getByRole('textbox', { name: 'Username' })
        this.passwordTextbox = page.getByRole('textbox', { name: 'Password' })
        this.loginButton = page.getByRole('button', { name: 'Login' })
    }

    async fillUsername(){
        this.usernameTextbox.fill('standard_user')
    }

    async fillPassword(){
        this.passwordTextbox.fill('secret_sauce')
    }

    async clickOnLogin(){
        this.loginButton.click()
    }
}