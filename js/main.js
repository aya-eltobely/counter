/*
var spancount = document.getElementById('spancount'),
    dec = document.getElementById('dec'),
    rest = document.getElementById('rest'),
    inc = document.getElementById('inc'),
    count = 0;
    
inc.addEventListener('click' , function()
{
    count++;
    spancount.innerHTML = count;
    spancount.style.color = 'green';
    if(count===0)
    {
        spancount.style.color = '#212529';
    }
} ) ;   

rest.addEventListener('click' , function()
{
    count = 0;
    spancount.innerHTML = count;  
    if(count===0)
    {
        spancount.style.color = '#212529';
    }  
            
} ) ;

dec.addEventListener('click' , function()
{
    count--;
    spancount.innerHTML = count ;
    if(count<0)
    {
        spancount.style.color = 'red';
    }
    if(count===0)
    {
        spancount.style.color = '#212529';
    }
    
} ) ;

*/

var spancount = document.getElementById('spancount'),
    btns = document.querySelectorAll('.btnn'),
    count = 0;

btns.forEach(function(btn){  // 1 btn

    btn.addEventListener('click' , function(){

        var classbtn = this.classList ;

        if(classbtn.contains('dec'))
        {
            count--;
        }
        else if(classbtn.contains('rest'))
        {
            count = 0;
        }
        else if(classbtn.contains('inc'))
        {
            count++;
        }
        if(count>0)
        {
            spancount.style.color="green"
        }
        if(count<0)
        {
            spancount.style.color="red"
        }
        if(count==0)
        {
            spancount.style.color="#102A42"
        }

        spancount.innerHTML = count;

    });
});


