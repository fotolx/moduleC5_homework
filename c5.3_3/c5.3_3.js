const Url = "https://picsum.photos/v2/list?limit=";

function loadPics(url, callback) {
    resultShow.innerHTML = "<div class='message'>Загрузка изображений</div>";
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    
    xhr.onload = function() {
      if (xhr.status != 200) {
        console.log('Статус ответа: ', xhr.status);
      } else {
        const result = JSON.parse(xhr.response);
        if (callback) {
          callback(result);
        }
      }
    };
    
    xhr.onerror = function() {
      console.log('Возникла ошибка! ', xhr.status);
    };
    
    xhr.send();
  };

function displayPics(pics) {
    let cards = '';
    
    pics.forEach(item => {
      const cardBlock = `
        <div class="card">
          <img
            src="${item.download_url}"
            class="card-image"
          />
          <span>${item.author}</span>
        </div>
      `;
      cards = cards + cardBlock;
    });
    resultShow.innerHTML = cards;
  }

const resultShow = document.querySelector('.result');
const btnLoad = document.getElementById('btn');

btnLoad.addEventListener('click', () => {
    const count = Math.round(document.getElementById('number').valueAsNumber);
    if (isNaN(count) || count>10 || count<1)
        alert('Число вне диапазона от 1 до 10');
    else loadPics(Url+count, displayPics);
});
