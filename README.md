# Lab 8 - Unit & E2E Testing
## Name: Tarek Tarif
### Check your Understanding:

#### 1) Where would you fit your automated tests in your Recipe project development pipeline? Select one of the following and explain why.
Personally, I would fit automated tests into GitHub actions that runs whenever code is pushed. This is because running an automated test through GitHub would automatically check if the code breaks any of the tests. Also, GitHub actions would also increase the reliability of code being pushed because it's not depenedent on the current system I'm running and therefore will increase compatibility.

#### 2) Would you use an end to end test to check if a function is returning the correct output? (yes/no)
No, to check if a function is returning the correct output I would use unit testing.

#### 3) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.
 No, I would not. Unit tests wouldn't test the "message" feature because it would require checking essentailly the entire application and therefore a unit test would be out of scope for this sort of work.

#### 4) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.
 For testing the "max message length" feature, I would employ a unit test. This sort of feature fits well in the scope of a unit test because the test is fairly simple and only checking if a string has a length of 80 or less.