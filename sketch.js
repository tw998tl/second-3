
let nbarray = [];
// 初始內容
function setup() {
  createCanvas(500, 500, WEBGL); // 決定 使用 3D 方式進行渲染
  for(let i=0;i<5;i+=1){
     for(let j=0;j<5;j+=1){
    // 怎麼把東西放到 nbarray 袋子裡面的公式
        nbarray.push(new myBox(-width/2+(width/5)*i+30,-height/2+(height/5)*j+30,0,50));
     }
  }
}
function draw() {
  background(255);
  // 將袋子中 所有 東西 稱為 V 執行他的相關函式
  nbarray.forEach((v)=>{
    v.display();
  })
  //nb.display();
  //nb2.display();
  //nb3.display();
}
// 自訂一個類別物件
class myBox{
  // 怎樣建構這個物件 只執行一次
  constructor(x,y,z,size){
    this.x=x;
    this.y=y;
    this.z=z;
    this.size=size;
    this.mx = 1;
    this.my = 1;
  }
  // 定義一些能力 我們呼叫時 執行 
  // 能力1:顯現這box
  display(){
    push();
    fill(255-mouseX/2.2, 255-mouseY/2.2,100)
    noStroke();
      translate(this.x,this.y,this.z);  
      if (mouseX-width/2 > this.x-this.size/2 && 
          mouseX-width/2 < this.x+this.size/2 &&
          mouseY-height/2 > this.y-this.size/2 && 
          mouseY-height/2 < this.y+this.size/2){
        rotateX(frameCount*0.01);
        rotateY(frameCount*0.01);
        this.mx = this.mx+1;
        this.my = this.my+1;
        }
    circle(this.x, this.y, mouseX+mouseY/2.5+10);
      //box(this.size);
    pop();
    this.move();
  }
  //能力2:移動規則
  move(){
    if (this.x>width/2){this.mx = -1*this.mx;}
    if (this.x<-width/2){this.mx = -1*this.mx;}  
    this.x = this.x + this.mx;
    
    if (this.y>width/2){this.my = -1*this.my;}
    if (this.y<-width/2){this.my = -1*this.my;}  
    this.y = this.y + this.my;
  }
}