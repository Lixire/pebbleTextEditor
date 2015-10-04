/**
 * this is a text editor named app.js!
 *
 * Why would you ever want a txt editor for pebble?
 */

var UI = require('ui');
var output = "";
var check = "Hey";
var allThings = [" ", "a","b","c","d","e","f","g", "h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
                 "(",")","'","{","}","1","2","3","4","5","6","7","8","9","0"
                 ,"*","+","-","/","%",">","<","=","\"", "\""," "];
var into = "";
var framecount = 0;

var main = new UI.Card({
  title: 'Terrible Compiler',
  body: "Up/Down to choose letters"
});

main.show();

main.on('click', 'up', function(e) {
  if (output!=check)
    {output=output.substring(-1, output.length-1);}
  framecount += 1;
  into = allThings[framecount%allThings.length];
  output = output + into;
  console.log(output);
  main.body(output);
  main.show();
});

main.on('click', 'select', function(e) {
  check = output;
  framecount = 0;
  into = "";
  console.log(output);
  main.body(output);
  main.show();
});

main.on('longclick', 'select', function(e) {
  console.log(output);
});

main.on('longclick', 'back', function(e){
  main.hide();
});
main.on('click', 'back', function(e) {
  output = output.substring(-1, output.length-1);
  framecount = 0;
  main.body(output);
  main.show();
});

main.on('click', 'down', function(e) {
  if (output!=check)
    {output=output.substring(-1, output.length-1);}
  if(framecount - 1 < 0){framecount = allThings.length-1;}
  else{framecount-=1;}
  into = allThings[framecount%allThings.length];
  output = output + into;
  console.log(output);
  main.body(output);
  main.show();
});