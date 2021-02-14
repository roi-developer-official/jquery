

let arr = [];
let ansArr = ['b', 'a', 'd', 'b', 'd'];
var count =0;

const button = document.querySelector('button');

button.addEventListener('click', function (e) {
    e.preventDefault();
    const inputs = document.querySelectorAll('input:checked');

    inputs.forEach(input => {
        arr.push(input.value);
    })
    if (arr.length < 5) {
        alert('you missed a question');

    }
    else {
        for (var i = 0; i < ansArr.length; i++) {

            console.log(arr[i] + ' ' + ansArr[i]);
            if (arr[i] == ansArr[i]) {
                count += 1;
            }
      
        }

        window.scroll(0, 0);
        $('#results').text(`you have ${count} answers currect from 5 questions`);
        $('#results').css({background : 'green' , color: 'red'});
    }
    arr.clear = [];
});

