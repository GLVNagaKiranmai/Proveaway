const radioBtns = document.querySelectorAll('input[type="radio"]');
const blocks = document.querySelectorAll('#block');
const total = document.getElementById('total_amt');
const rupees = document.querySelectorAll('.pair_rupees'); 

radioBtns.forEach((radioBtn, index) => {
    radioBtn.addEventListener('click',()=>{
        blocks.forEach((block)=>{
            block.style.backgroundColor = '';
            block.style.border = '';
            block.style.height = '';
        });
        blocks[index].style.backgroundColor = '#F4FBF9';
        blocks[index].style.border = '1px solid #007F61';
        blocks[index].style.height = 'auto';
        rupees.forEach((rupee) =>{
            total.innerHTML = "Total : " + rupees[index].innerHTML;
        })
        
    })
})
        