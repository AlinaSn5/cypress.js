import * as data from "../helpers/default_data.json"
import * as main_page from "../locators/main_page.json"
import * as result_page from "../locators/result_page.json"

describe('Проверка авторизации', function () {
    
    beforeEach('Начало теста', function () {                                                  // Зашла на сайт
    cy.visit('/');
    });
    afterEach('Конец теста', function () {                                                    // Проверяю, что крестик виден пользователю
    cy.get(result_page.close).should('be.visible');
    });

    it('Верный логин и верный пароль', function () {
    cy.get(main_page.email).type(data.login);                                                 // Ввелиа верный логин
    cy.get(main_page.password).type(data.password);                                           // Ввела верный пароль
    cy.get(main_page.login_button).click();                                                   // Нажала войти
    cy.get(result_page.title).contains('Авторизация прошла успешно');                         // Проверяю, что полсе авт. вижу текст
    cy.get(result_page.title).should('be.visible');
    })

    it('Проверка восстановления пароля', function () {
    cy.get(main_page.fogot_pass_btn).click();                                                 // Нажала восстановить пароль
    cy.get('#mailForgot').type('syanovaalina@yandex.ru');                                     // Ввела почту 
    cy.get('#restoreEmailButton').click();                                                    // Нажала на кнопку отправить код
    cy.get(result_page.title).contains('Успешно отправили пароль на e-mail');                 // Проверяю, что полсе авт. вижу текст
    cy.get(result_page.title).should('be.visible');
    })

    it('Верный логин и неверный пароль', function () {
    cy.get(main_page.email).type(data.login);                                                 // Ввела верный логин
    cy.get(main_page.password).type('iLoveqastudio7');                                        // Ввела неверный пароль
    cy.get(main_page.login_button).click();                                                   // Нажала войти
    cy.get(result_page.title).contains('Такого логина или пароля нет');                       // Проверяю, что полсе авт. вижу текст
    cy.get(result_page.title).should('be.visible');
    })

    it('Неверный логин и верный пароль', function () {
    cy.get(main_page.email).type('syanovaalina@yandex.ru');                                   // Ввела неверный логин
    cy.get(main_page.password).type(data.password);                                           // Ввела верный пароль
    cy.get(main_page.login_button).click();                                                   // Нажала войти
    cy.get(result_page.title).contains('Такого логина или пароля нет');                       // Проверяю, что полсе авт. вижу текст
    cy.get(result_page.title).should('be.visible');
    })

    it('Ошибка валидации почты и верный пароль', function () {
    cy.get(main_page.email).type('germandolnikov.ru');                                        // Ввела логин без собачки
    cy.get(main_page.password).type(data.password);                                           // Ввела верный пароль
    cy.get(main_page.login_button).click();                                                   // Нажала войти
    cy.get(result_page.title).contains('Нужно исправить проблему валидации');                 // Проверяю, что полсе авт. вижу текст
    cy.get(result_page.title).should('be.visible');
    })

    it('Ввести почту GerMan@Dolnikov.ru', function () {
    cy.get(main_page.email).type('GerMan@Dolnikov.ru');                                       // Ввела логин GerMan@Dolnikov.ru 
    cy.get(main_page.password).type(data.password);                                           // Ввела верный пароль
    cy.get(main_page.login_button).click();                                                   // Нажала войти
    cy.get(result_page.title).contains('Авторизация прошла успешно');                         // Проверяю, что полсе авт. вижу текст
    cy.get(result_page.title).should('be.visible');
    })
    })    