var bankacc={
    balance:300,
    interestrate:0.5,
    deposit:function(x){return bankacc.balance+=x},
    withdraw:function(x){
       return bankacc.balance-=x;
    }
};
x=bankacc.withdraw(500);
if(x<0){
    console.log('Error! Not enough balance is available');}
    else{
console.log(x);}

