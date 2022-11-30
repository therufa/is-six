import test from "ava";
import isSix from "./index.js";

test("does the test suit fail?", (t) => {
  t.pass();
});

test("is 5 six?", (t) => {
  t.false(isSix(5));
});

test("is it 6?", (t) => {
  t.true(isSix(6));
});
