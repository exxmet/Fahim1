module.exports.config = {
	name: "oii",
	version: "1.0.2",
	permission: 2,
	credits: "Fahim islam",
	prefix: false,
	description: "",
	category: "without prefix",
	usages: "[tag]",
	cooldowns: 5
};

module.exports.run = async function({ api, args, Users, event}) {
    var mention = Object.keys(event.mentions)[0];
    if(!mention) return api.sendMessage("আপনি কাকে গেয়ান দিতে চান তাকে ম্যানশন করেন@ম্যানশন করতে হবে", event.threadID);
 let name =  event.mentions[mention];
    var arraytag = [];
        arraytag.push({id: mention, tag: name});
    var a = function (a) { api.sendMessage(a, event.threadID); }
a("Fahim islam🥰");
setTimeout(() => {a({body: "ভালবাসি ভালবাসি শুধু তোমায় ভালোবাসি জান" + " " + name, mentions: arraytag})}, 3000);
setTimeout(() => {a({body: "তোমার সাথে একবার কথা না বললে আমি যেন মরে যাই" + " " + name, mentions: arraytag})}, 5000);
setTimeout(() => {a({body: "আমি খাইতে পারিনা ঘুমাইতে পারিনা কিছু করতে পারি না তোমাকে ছাড়া জান" + " " + name, mentions: arraytag})}, 7000);
setTimeout(() => {a({body: "তুমি আমায় কি করলে তোমাকে ছাড়া আমি কিছু বুঝিনা কেন এই মন শুধু খোঁজে তোমাকে সারাক্ষণ" + " " + name, mentions: arraytag})}, 9000);
setTimeout(() => {a({body: "তোমার চিন্তা আমার মন থেকে কখনই যাবে না কারণ তুমি আমার চিন্তার চিন্তায় মিশে আছো" + " " + name, mentions: arraytag})}, 12000);
setTimeout(() => {a({body: "স্বর্গ আমি চাই না কারণ আমি তোমাকে পেয়েছিnস্বপ্ন আমি দেখতে চাই না কারণ তুমিই আমার স্বপ্ন" + " " + name, mentions: arraytag})}, 15000);
setTimeout(() => {a({body: "যখন থেকে পরী হয়ে বাসা বেধেঁছ আমার চোখে, তখন থেকে তুমি ছাড়া আর কিছুই ভালো লাগেনা" + " " + name, mentions: arraytag})}, 17000);
setTimeout(() => {a({body: "জান তুমি এত সুন্দর কেন আমি যে তোমায় না দেখে থাকতে পারি না" + " " + name, mentions: arraytag})}, 20000);
setTimeout(() => {a({body: "তোমাকে দেখলে আমার এত ভালো লাগে কেন জান আমি কিছুই তো বুঝতে পারি না" + " " + name, mentions: arraytag})},23000);
setTimeout(() => {a({body: "তুমি যদি আমার না হও তাহলে আমি আমার এই জীবন রাখব না কারণ আমি তোমাকে খুব ভালোবাসি" + " " + name, mentions: arraytag})}, 25000);
setTimeout(() => {a({body: "টমেটো লাল কাঁচা মরিচ ঝাল তোমার বুকের মাঝে চুমু দেবো আমি চিরকাল জান" + " " + name, mentions: arraytag})}, 28500);
setTimeout(() => {a({body: "জান তুমার লাল লাল এক টা ummmmmmmah 💋 তোমার জন্য আমি পাগল  হয়ে যাবো জান" + " " + name, mentions: arraytag})},31000);
setTimeout(() => {a({body: "যদি তুমি মনে করো সুখে নেই তবে তুমি ফিরে আসো আমার বুকে এখনো আগের মতো ভালবাসি তোমাকেই!!" + " " + name, mentions: arraytag})}, 36000);
setTimeout(() => {a("i Lo'Ve u Ja n তোমাকে ছাড়া বাঁচবো না তুমি শুধু আমার জান")} , 39000);



  
  }
