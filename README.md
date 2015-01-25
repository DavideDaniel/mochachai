# TDD - Test Driven Development tutorial
---
  ####Get started with mocha, chai and test driven development in 5 easy steps!
  ***

Testing with mocha & chai is super easy.
Let's start in whichever root directory you'd like. Keep in mind you'll be making a test dir inside there and also locally installing chai.

**Step 1**

Global install mocha
```
$ npm install -g mocha
```

**Step 2**

Make a new directory and touch your files...
```
$ mkdir test
$ touch test/testing.js
```

**Step 3**

Locally install chai and npm init
```
$ npm init
$ npm install --save chai
```

**Step 4**

Let's start testing/developing!
```
$ cd test
$ [youreditor] testing.js
```
Start writing in your test file. You can use terms like describe, it, should, do, be and lots more depending on which library you choose to use.
Check out [ChaiJs styles](http://chaijs.com/guide/styles/) for more language styles.

**Step 5**

Once you've completed your test file and are ready to test, cd back out to the root directory and run mocha.
```
$ cd ..
$ mocha
```

Your test should tell you if there were any issues and move your development forward. Watch this 8ish minute video for a quick look into how awesome TDD can be!

Thanks [Collin](https://github.com/cfmeyers) for the intro to TDD =)




