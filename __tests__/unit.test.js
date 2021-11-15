// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test('Test if phone number is proper', () => {
    expect(functions.isPhoneNumber("(949)667-3855")).toBe(true);
});

test('Test if phone number is proper', () => {
    expect(functions.isPhoneNumber("(714)797-7305")).toBe(true);
});

test('Test if phone number is proper', () => {
    expect(functions.isPhoneNumber("123-456")).toBe(false);
});

test('Test if phone number is proper', () => {
    expect(functions.isPhoneNumber("714949323")).toBe(false);
});

test('Test if email is proper', () => {
    expect(functions.isEmail("ttarif@ucsd.edu")).toBe(true);
});

test('Test if email is proper', () => {
    expect(functions.isEmail("example@mail.com")).toBe(true);
});

test('Test if email is proper', () => {
    expect(functions.isEmail("123@mail")).toBe(false);
});

test('Test if email is proper', () => {
    expect(functions.isEmail("gmail.com")).toBe(false);
});

test('Test if password is strong enough', () => {
    expect(functions.isStrongPassword("KidFlash")).toBe(true);
});

test('Test if password is strong enough', () => {
    expect(functions.isStrongPassword("Kyrie")).toBe(true);
});

test('Test if password is strong enough', () => {
    expect(functions.isStrongPassword("123456")).toBe(false);
});

test('Test if password is strong enough', () => {
    expect(functions.isStrongPassword("abc")).toBe(false);
});

test('Test if the date is correct', () => {
    expect(functions.isDate("1/27/2000")).toBe(true);
});

test('Test if the date is correct', () => {
    expect(functions.isDate("10/31/2020")).toBe(true);
});

test('Test if the date is correct', () => {
    expect(functions.isDate("2021/11/14")).toBe(false);
});

test('Test if the date is correct', () => {
    expect(functions.isDate("1272000")).toBe(false);
});

test('Test if the HEX color is correct', () => {
    expect(functions.isHexColor("BFA")).toBe(true);
});

test('Test if the HEX color is correct', () => {
    expect(functions.isHexColor("FFCC22")).toBe(true);
});

test('Test if the HEX color is correct', () => {
    expect(functions.isHexColor("GFG")).toBe(false);
});

test('Test if the HEX color is correct', () => {
    expect(functions.isHexColor("fff0000")).toBe(false);
});