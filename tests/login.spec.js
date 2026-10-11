import { test, expect } from '@playwright/test';

const username = process.env.ERP_USERNAME;
const password = process.env.ERP_PASSWORD;

test("Login To Dsa Portal", async({page})=>
{
    //Login
    await page.goto("https://erp.imsec.ac.in/");
    await page.locator("[name='email']").fill(username);
    await page.locator("#password").fill(password);
    await page.locator(".btn.btn-success.btn-block").click();
}