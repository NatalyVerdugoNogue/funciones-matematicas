window.onload = () => {

    const btnSum = document.getElementById('btn-sum');
    const btnMul = document.getElementById('btn-mul');


    btnSum.addEventListener('click', () => {
        const mulOne = document.getElementById('mul-one').value;
        const sumOne = document.getElementById('sum-one').value;
        const sumTwo = document.getElementById('sum-two').value;
        const rSum = add(sumOne, sumTwo);
        const rTotal = multiply(rSum, mulOne);
        document.getElementById('result-total').innerHTML = 'Resultado: ' + rTotal;
    })



}