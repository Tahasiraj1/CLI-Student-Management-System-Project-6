import inquirer from 'inquirer';

const RandomNumber: number = Math.floor(10000 + Math.random() * 90000);
let MyBalance: number = 0;

const answer = await inquirer.prompt([
    {
        name: 'student',
        type: 'input',
        message: 'Enter your name: ',
        validate: function(value){
            if (value.trim !== "")
                return true
        },
        return: "Please enter a non-empty value.",
    },
    {
        name: 'courses',
        type: 'list',
        choices: ["HTML", "CSS", "Typescript", "Javascript", "Python"],
        message: 'Select the course you want to enroll in: '
    }
]);

const tuitionFee: {[key : string]: number} = {
    "HTML": 2000,
    "CSS": 3000,
    "Typescript": 5000,
    "Javascript": 7000,
    "Python": 10000
};

console.log(`\nTuitionFees: ${tuitionFee[answer.courses]}/-\n`);
console.log(`Balance: ${MyBalance}`);

let PaymentMethod = await inquirer.prompt([
    {
        name: 'payment',
        type: 'list',
        choices: ["Bank Transfer", "Easypaisa", "Jazzcash"],
        message: "Select your payment method: "
    },
    {
        name: 'amount',
        type: 'input',
        message: "Money Transfer:",
        validate: function(value){
            if (value.trim !== "")
                return true 
        }, 
        return: "Please enter a non-empty value."
    }
]);

console.log(`Your payment method is: ${PaymentMethod.payment}`);

const TuitionFees = tuitionFee[answer.courses];
const PaymentAmount = parseFloat(PaymentMethod.amount);

if (TuitionFees == PaymentMethod.amount){
    console.log(`\n Congragulations! You have successfully enrolled in ${answer.courses}`)
};

let ans = await inquirer.prompt([
    {
        name: 'select',
        type: 'list',
        message: "What do want to do next? ",
        choices: ["View Status", "Exit"]
    }
]);

if (ans.select == "View Status"){
    console.log('\n*******Status*******');
    console.log(`Student ID: ${RandomNumber}`);
    console.log(`Student Name: ${answer.student}`);
    console.log(`Courses : ${answer.courses}`);
    console.log(`Tuition Fees Paid: ${PaymentAmount}`);
    console.log(`Balance: ${MyBalance += PaymentAmount}`);
} else {
    console.log("\n Exiting Student Management System ")
};



