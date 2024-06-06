#! /usr/bin/env node
import inquirer from "inquirer";
import { differenceInSeconds } from "date-fns";
const res = await inquirer.prompt({
    name: "userinput",
    type: "number",
    message: "please enter tha amount of second",
    validate: (input) => {
        if (isNaN(input)) {
            return "please enter valid number";
        }
        else if (input > 60) {
            return "second be in 60";
        }
        else {
            return true;
        }
    }
});
let input = res.userinput;
function startTime(val) {
    const intTime = new Date().setSeconds(new Date().getSeconds() + val);
    const intervaltime = new Date(intTime);
    setInterval((() => {
        const currTime = new Date();
        const timediff = differenceInSeconds(intervaltime, currTime);
        if (timediff <= 0) {
            console.log("timer has Expired");
            process.exit();
        }
        const min = Math.floor((timediff % (3600 * 24)) / 3600);
        const sec = Math.floor(timediff % 60);
        console.log(`${min.toString().padStart(2, "0")} :${sec.toString().padStart(2, "0")}`);
    }), 1000);
}
startTime(input);
