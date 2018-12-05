function setup() {
  createCanvas(500, 500);
}

 function draw() {
   background('navy');
   noStroke();
   textSize(50)
   textFont('Impact')
   fill('skyblue')
   m = month()
	 d = day()
   y = year()
   h = hour()
   mint = minute()
   sec = second()
   var meridiem = 'AM'
   textAlign(CENTER);
   text(m + ' - ' + d + ' - ' + y, 250, 250)
   
   if(h>12){
     h = h - 12;
     meridiem = 'PM'
   }
   
   if(h === 0){
     h = 12;
   }
   if(mint<10){
     mint = "0" + mint;
   }
   if(sec<10){
     sec = "0" + sec;
   }
   
   textAlign(CENTER);
   text(h+ ':' + mint + ':' + sec + ' ' + meridiem, 250,300)
   
   quote1 = ["'Tik Tok on the clock...'"]
   textAlign(CENTER);
   text(quote1, 250, 150)
   quote2 = ["'But the party don't stop.'"]
   textAlign(CENTER);
   text(quote2, 250,400)
        
        
   
 }
