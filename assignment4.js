/* Problem-01 : Help The Zoo Manager
⚠️ Function Name Must be calculateMoney( )

বাকে র ভাই মি রপুর চি ড়ি য়াখানার ম্যানে জার । প্রতি দি ন তাকে অসংখ্য টি কে ট বি ক্রি করতে হয় । টাকার হি সে ব এ
তি নি সবসময় গড়মি ল বাধি য়ে ফে লে ন । তুমি যে হে তুসদ্য ডে ভে ল োপার হচ্ছ ো বাকে র ভাই ত োমার কাছে একটি
হে ল্প চে য়ে ছে । বাকে র ভাই কে calculateMoney( ) নামে একটি ফাংশন বানি য়ে দি তে হবে যাকে প্রতি দি ন
টি কে ট সে ল করার সংখ্যা ইনপুট দি লে সে সকল খরচ বাদ দি য়ে ম োট কত টাকা বাকে র ভাইর কাছে থাকে তা বলে
দি তে পারে ।

চি ড়ি য়াখানায় প্রতি টি কে ট বি ক্রি হয় ১২০ টাকায় । আর ব্যয় এর মধ্যে প্রতি দি ন ১ জন দার োয়ান কে দি তে হয় ৫০০
টাকা এবং ৮ জন স্টাফ কে লাঞ্চ করান োর জন্যে খরচ হয় জনপ্রতি ৫০ টাকা করে ।

Input :
ফাংশন টি ইনপুট নে বে টি কে ট সে ল করার সংখ্যা । ইনপুট হবে একটি পজি টি ভ সংখ্যা । (0<=Input)

Output :
টি কে টে র আয় ও ব্যয় গুল ো ক্যালকুলে ট করে বাকী কত টাকা বাকে র ভাইর কাছে থাকল ো সে টা ই ত োমার
ফাংশন আউটপুট হি সে বে রি টার্ন করবে । আউটপুট পজি টি ভ নে গে টি ভ যে ক োন কি ছুই হতে পারে ।
💡যে মন ইনপুট যদি 10 হয় তাহলে আউটপুট হবে ( 10 * 120) - ( 500 + (8 * 50) ) = 300

Challenge 📢 : বাকে র ভাই যদি ইনপুট হি সে বে নে গে টি ভ সংখ্যা দে য় তাহলে ত োমাকে একটা error ম্যাসে জ
আউটপুট হি সে বে রি টার্ন করে দি তে হবে ।

SAMPLE INPUT SAMPLE OUTPUT
10                  300
1055                125700
93                  10260
-130                Invalid Number

(you can give your own string error message)  */

/*Problem1 */
function calculateMoney(ticketSale) {
  const zooTicketPrice = 120;
  const expenses = {
    daroan: 500,
    totalStaff: 8,
    staffFood: 50,
  };
  const totalIncome = ticketSale * zooTicketPrice;
  const totalExpenses =
    expenses.daroan + expenses.totalStaff * expenses.staffFood;
  const totalProfit = totalIncome - totalExpenses;
  if (ticketSale < 0) {
    return "Invalid Number, Please Enter a valid number of tickets sold.";
  } else {
    return totalProfit;
  }
}



/*  Problem-02: Good Name , Bad Name
⚠️ Function Name Must be checkName()

সালমান ভাই ও রাশে দা ভাবীর ক োল জুড়ে এসে ছে একটা পুত্র সন্তান । সালমান ভাই পুত্র সন্তানে র একটা ভাল ো নাম
রাখতে চান । কি ন্তু তাদে র এলাকায় গ্রামে র মানষু রা নাম কে ব্যাংগ করে উচ্চারন করে । যে মন কার ো নাম salman
হলে তারা বলে সালমাইন্যা । কার ো নাম jafor হলে তারা বলে জাফইর্যা । সালমান ভাই চান না তার পুত্র সন্তান কে
কে উ এভাবে ক্ষে পাক ।
সালমান ভাই দে খতে পে লে ন যে যাদে র নামে র শে ষে a, y, i , e , o , u, w থাকে তাদে র কে আসলে ক্ষে পান ো
যায় না । যমন Tonoy, utsho , Roide, shanto এসব ধরনে র নাম গুল ো কে ব্যাংগ করে উচ্চারন করা যায় না ।

এখন ত োমাকে সালমান ভাইর জন্য checkName() নামে একটা ফাংশন লি খে দি তে হবে । যে টা একটা স্ট্রি ং
ইনপুট নে বে । এবং ফাংশন টি চে ক করে দে খবে নাম টি রাখা ভাল ো হবে না খারাপ হবে । ভাল ো হলে সে রি টার্ন
করবে Good Name আর নাম টি খারাপ হলে রি টার্ন করবে Bad Name

Input : ত োমার ফাংশন টি ইনপুট নে বে একটি নাম । ইনপুট টি হবে একটি স্ট্রি ং । যে খানে character গুল ো
ছ োট হাতে র বা বড় হাতে র হতে পারে ।

Output : ফাংশন টি আউটপুট হি সে বে রি টার্ন করবে একটি স্ট্রি ং । যার ভ্যালুহবে Good Name অথবা Bad
Name

Challenge 📢 : ইনপুট হি সে বে স্ট্রি ং টাইপে র বাইরে অন্য যে ক োন কি ছুদি লে এটা শুধুমাত্র “invalid” রি টার্ন
করবে ।

SAMPLE INPUT SAMPLE OUTPUT (স্ট্রি ং এ আউটপুট হবে )
Salman       Bad Name
RAFEE        Good Name
Jhankar      Bad Name
199          invalid
["Rashed"]   invalid   */


/*Problem2 */
function checkName(name) {
  if (typeof name !== "string") {
    return "invalid";
  } else {
    name = name.toLowerCase();
    for (let i = name.length - 1; i < name.length; i--) {
      if (
        name[i] === "a" ||
        name[i] === "y" ||
        name[i] === "i" ||
        name[i] === "e" ||
        name[i] === "o" ||
        name[i] === "u" ||
        name[i] === "w"
      ) {
        return "Good Name";
      } else {
        return "Bad Name";
      }
    }
  }
}



/* Problem 03 : Virus in my Array
⚠️ Function Name Must be deleteInvalids()

ত োমাকে deleteInvalids() নামে এমন একটা ফাংশন ক্রি য়ে ট করতে হবে যা ইনপুট হি সে বে একটি Array
নে বে । ফাংশন টি আরে কটি Array রি টার্ন করবে যে খানে ভ্যালুগুল ো হবে শুধুনাম্বার । অর্থাৎ Array এর যে সকল
elements নাম্বার না , তাদে র ডি লি ট করে শুধুমাত্র নাম্বার গুল ো কে Array আকারে রি টার্ন করতে হবে ।
তুমি যদি এই ফাংশনে এই [ NaN, 1,12,0 ,-1 , undefined ] Array টি পাস কর ো কর ো তাহলে সে ত োমাকে
রি টার্ন করবে [ 1 , 12 , 0 , -1 ]

Input :
ফাংশন টি ইনপুট নে বে একটি Array । Array এর উপাদান গুল োর Datatype যে ক োন ধরনে র হতে পারে ।

Output :
ফাংশন টি আউটপুট দে বে আরে কটি Array । Array এর উপাদান গুল ো হবে শুধুমাত্র নাম্বার ।

Challenge 📢 : ফাংশন টি তে Array ছাড়া অন্য ক োন ভ্যালুপাস করলে সে টা একটা error message
রি টার্ন করবে ।

SAMPLE INPUT                                                          SAMPLE OUTPUT
[1, null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }]       [ 1, 18, -19 ]
["1" , {num:2} , NaN ]                                                 []
[ 1 , 2 , -3 ]                                                         [ 1, 2, -3 ]
{num: [ 1 , 2 , 3 ]}                                                   Invalid Array   */


/*Problem3 */
function deleteInvalids(array) {
  if (!Array.isArray(array)) {
    return "Invalid Array, Please Enter a valid array.";
  } else {
    let newArray = [];
    for (let j = 0; j < array.length; j++) {
      if (typeof array[j] === "number" && !isNaN(array[j])) {
        newArray.push(array[j]);
      }
    }
    return newArray;
  }
}



/* Problem 04 : Make A Great Password
⚠️ Function Name Must be password()

কলি মুদ্দি ন সাহে ব নতুন ফ োন কি নে বি ভি ন্ন ওয়ে বসাইটে ভি জি ট করে ন এবং বি ভি ন্ন এপ্লি কে শনে একাউন্ট ক্রি য়ে ট
করে ন । কি ন্তু তি নি পাসওয়ার্ড মনে রাখতে পারে ন না । তি নি এমন একটি ফাংশন চান, যে খানে তার ইনফরমে শন
এবং ওয়ে বসাইট নে ম দি লে সে টা কলি মুদ্দি ন সাহে ব কে একটি মনে রাখার মত ো পাসওয়ার্ড জে নারে ট করে দি তে
পারবে ।
তার জন্য password() নামে একটা ফাংশন লি খতে হবে ।

Input :
ফাংশন টি একটা object ইনপুট হি সে বে নি বে । যে খানে শুধুতি ন টি প্র োপার্টি থাকবে ।
{ name: "kolimuddin" , birthYear: 1999 , siteName: "google" }
⚠️ অব্জে ক্ট এ প্র োপার্টি গুল োর নাম একদম সে ইম হতে হবে ।

Password-Structure :
Website Name
(প্রথম অক্ষর বড় হাতে র হবে )

# ইউজার নে ম @ birthYear

Output:
ফাংশন টি উপরে র স্ট্রাকচার অনযু ায়ী একটা স্ট্রি ং আউটপুট আকারে রি টার্ন করবে ।
Google#kolimuddin@1999

Challenge 📢: যদি ক োন একটা প্র োপার্টি মি সি ং থাকে অথবা যদি birthYear 4 ডি জি টে র না হয় ফাংশন টি
রি টার্ন করবে একটি স্ট্রি ং যার ভ্যালুহবে invalid

SAMPLE INPUT                                                      SAMPLE OUTPUT (string)
{ name: "kolimuddin" , birthYear: 1999 , siteName: "google" }     Google#kolimuddin@1999
{ name: "rahat", birthYear: 2002, siteName: "Facebook" }          Facebook#rahat@2002
{ name: "toky", birthYear: 200, siteName: "Facebook" }            invalid     
{ name: "maisha", birthYear: 2002 }                               invalid        */


/*Problem4 */
function password(obj) {
  if (
    !obj.name ||
    !obj.birthYear ||
    !obj.siteName ||
    typeof obj.name !== "string" ||
    typeof obj.siteName !== "string" ||
    typeof obj.birthYear !== "number" ||
    obj.birthYear.toString().length !== 4
  ) {
    return "invalid";
  } else {
    let siteName = obj.siteName;
    let firstLetter = obj.siteName.charAt(0).toUpperCase();
    let restLetter = obj.siteName.slice(1).toLowerCase();
    siteName = firstLetter + restLetter;
    let name = obj.name;
    let birthYear = obj.birthYear;
    let password = siteName + "#" + name + "@" + birthYear;
    return password;
  }
}



/*   Problem 05 : Monthly Savings of a Freelancer
⚠️ Function Name Must be monthlySavings()

ফ্রি ল্যান্সার শাহে দ প্রতি মাসে বে শ কি ছুপে মে ন্ট ক্লায়ে ন্ট দে র থে কে পায় । কি ন্তু পে মে ন্ট এর কি ছুট্যাক্স পরি শ োধ
এবং নি জে র লি ভি ং কস্ট এর কারনে সে সে ভি ংস করতে পারে না । তার সে ভি ংস এর হি সে ব করার জন্যে তাকে
monthlySavings() নামে একটি ফাংশন তৈ রী করে দি তে যে টা ইনপুট হি সে বে নে বে একটি Array (প্রতি মাসে
পাওয়া সকল পে মে ন্ট ) এবং একটি Number ( শাহে দে র লি ভি ং কস্ট ) ।
শাহে দে র যে সকল পে মে ন্ট 3000 টাকা বা তার বে শি সে সকল পে মে ন্ট থে কে ব্যাংক Tax হি সে বে ২০% টাকা কে টে
নে য় । এখন ম োট ইনকাম থে কে Tax গুল ো বাদ দি য়ে এবং Living cost বাদ দি য়ে বাকী যে টাকা থাকে সে টা ই
হল ো শাহে দে র সে ভি ংস । অর্থাৎ ফাংশন টি শাহে দে র সে ভি ংস কে রি টার্ন করবে । যদি সে ভি ংস করার মত ো টাকা না
থাকে অর্থাৎ সে ভি ংস এর ভ্যালুযদি ০ এর চে য়ে কম হয় তাহলে ফাংশন টি রি টার্ন করবে একটি স্ট্রি ং তাহল ো “earn
more” ।

Input :
ফাংশন টি ইনপুট নে বে একটি Array (All payments) এবং একটি number (Living cost) ।

Output :
ফাংশন টি একটি number অথবা string রি টার্ন করবে ।
● যদি savings 0 বা তার থে কে বে শি হয় তাহলে রি টার্ন করবে একটা number ( Total Savings )
● যদি savings 0 থে কে ছ োট হয় তাহলে রি টার্ন করবে String যার ভ্যালুহবে earn more

Challenge 📢 : ফাংশন টি তখন invalid input কে string টি রি টার্ন করবে ।
● যদি প্রথম প্যারামি টার টি Array না হয়
● যদি ও 2য় প্যারামি টার টি নাম্বার না হয়

SAMPLE INPUT                        SAMPLE OUTPUT
[ 1000 , 2000 , 3000 ] ,            5400 0
[ 1000 , 2000 , 2500 ] ,            5000 500
[ 900 , 2700 , 3400] ,              10000 earn more 
100, [ 900 , 2700 , 3400]           invalid input   */


/*Problem5 */
function monthlySavings(arr, livingCost) {
  if (!Array.isArray(arr) || typeof livingCost !== "number") {
    return "invalid input";
  }
  const totalIncome = arr.reduce((total, payment) => {
    if ((payment) => 0 && payment <= 2999) {
      total += payment;
      if (payment > 2999) {
        const tax = payment > 2999 ? payment * 0.2 : 0;
        total -= tax;
      }
    }
    return total;
  }, 0);
  const savings = totalIncome - livingCost;
  if (savings >= 0) {
    return savings;
  } else {
    return "earn more";
  }
}
