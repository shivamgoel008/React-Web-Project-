import { sum } from "../sum";

const sumTest1=()=>{
    expect(sum(2,5)).toBe(7);
}

test("Check the sum result",sumTest1)