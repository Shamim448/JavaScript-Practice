# JavaScript-Practice

- Shortcut for Google chrome developer tools: ctrl+shift+I
### Primitive Data Type
1. Number 2. String 3. Boolean 4. Undifined 5. Null
- Undifine: যখন আপনি ভ্যারিয়েবল ডিক্লেয়ার করেন, কিন্তু কোনো ডাটা ঐটাতে রাখা হয় না, তখন বাই ডিফল্ট undefined হয়ে থাকে সেটা
- Null: এটার কোনো অস্তিত্ব নাই। কিন্তু আন্ডিফাইন্ড না। মানে আপনি আপনার ভ্যারিয়েবলে কিছু রাখতে চাচ্ছেন না, কিন্তু আবার এটা আন্ডিফাইন্ড ও রাখতে চাচ্ছেন না। var someThhing = null
        akhane someThing ta undifine na karon ar vitor null rakha hoise bur null ar kono ostitto nai, so someThing akhon null
### Non Premitive / Referance Type
1. Array 2. Object  3. Function

### Logical Operator
- AND(&&) = If All true then true other wise false
- OR(||) = If all false then false other wise true
- টার্নারি অপারেটরঃযদি কন্ডিশন সত্য হয় ? তাইলে ভ্যালু এটা : নাইলে ভ্যালু এইটা

### Execution Stack
![image](https://user-images.githubusercontent.com/43339514/203217618-ea7a985e-8741-4eba-ae8d-ce4664dff4c4.png)
এখানে নাম্বার কোডগুলো সিরিয়াল নাম্বার অনুযায়ী এক্সিকিউট হবে। আর ডান পাশের ডায়াগ্রামটা ব্যাসিকালি এক্সিকিউশেন স্ট্যাক। স্ট্যাক ডাটা স্ট্রাকচার সম্পর্কে যদি আপনার ধারণা না থেকে থাকে তাহলে স্ট্যাক এমন একটা স্ট্রাকচার যেখানে ফার্স্ট ইন লাস্ট আউট সিস্টেম মেইন্টেইন করা হয়। 
এখন আমাদের কোড যখন নাম্বার ১ এ তখন name ভ্যারিয়েবলে Zonayed অ্যাসাইন হয়ে যায়। তারপর শুধুমাত্র ফাংশন ডেফিনেশনগুলো একটা একটা করে প্রথমে first(), তারপরে second() এবং সবশেষে third() এক্সিকিউশেন স্ট্যাক এ গ্লোবাল এক্সিকিউশেন কন্টেক্সট এ চলে যায়। এখানে ফাংশনের ভিতরে থেকে কিছুই এক্সকিউট হবে না যেহেতু আমরা ফাংশন কোনোটাই এখন পর্যন্ত কল করি নাই।


### Execution Context
বাই ডিফল্ট জাভাস্ক্রিপ্ট গ্লোবাল কন্টেক্সট এক্সিকিউট করে। অন্যান্য কিছু ল্যাঙ্গুয়েজের মতো কোনো স্পেসেফিক ফাংশন থেকে এক্সিকিউট হয় না। আর জাভাস্ক্রিপ্ট এর গ্লোবাল এক্সিকিউশন কন্টেক্সট হচ্ছে ব্রাউজারের window অবজেক্ট। কোনো গ্লোবাল ভ্যারিয়েবল ডিক্লেয়ার করা বা window অবজেক্ট এ অ্যাসাইন করা একই কথা
var a = 10   a amr man 10 window.a ar man o 10

a === window.a //true
মানে দুইটা একই জিনিস। তো গ্লোবাল ভ্যারিয়েবল ডিক্লেয়ার করা বা window অবজেক্ট এ অ্যাসাইন করা একই কথা।

### This Keyword
this এর ভ্যালু ডিটারমাইন করা হয়। আর এটার ভ্যালু ডিটারমাইন করা হয় এক্সিকিউশনের সময়।





