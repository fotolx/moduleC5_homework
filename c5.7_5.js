const useRequest = (url) => {
  return fetch(url)
    .then((response) => {
      console.log('response', response);
      return response.json();
    })
    .then((json) => {
      console.log('json ', json);
      return json;
    })
    .catch(() => { console.log('error') });
}

function displayPics(pics) {
  let pics_list = '';
  
  pics.forEach(item => {
    const picBlock = `
      <div class="pic">
        <img
          src="${item.download_url}"
          class="pic-image"
        />
        <span>${item.author}</span>
      </div>
    `;
    pics_list = pics_list + picBlock;
  });
  resultShow.innerHTML = pics_list;
}

const resultShow = document.querySelector('.result');
const btnLoad = document.getElementById('btn');
const btnClear = document.getElementById('btn_clear');

if (localStorage.getItem('savedPics') != null)
  displayPics(JSON.parse(localStorage.getItem('savedPics')));

btnLoad.addEventListener('click', async () => {
    const pageNumber = Math.round(document.getElementById('pageNumber').valueAsNumber);
    const limit = Math.round(document.getElementById('limit').valueAsNumber);
    if ((isNaN(pageNumber) || pageNumber>10 || pageNumber<1) && 
        (isNaN(limit) || limit>10 || limit<1)) 
        alert('Номер страницы и лимит вне диапазона от 1 до 10');
    else if (isNaN(pageNumber) || pageNumber>10 || pageNumber<1)
        alert('Номер страницы вне диапазона от 1 до 10');
    else if (isNaN(limit) || limit>10 || limit<1)
        alert('Лимит вне диапазона от 1 до 10');
    else {
        const Url = `https://picsum.photos/v2/list?page=${pageNumber}&limit=${limit}`;
        resultShow.innerHTML = "<div class='message'>Загрузка изображений</div>";
        const requestResult = await useRequest(Url);
        console.log('requestResult', requestResult);
        const json_string = JSON.stringify(requestResult);
        localStorage.setItem('savedPics', json_string);
        displayPics(requestResult);
    }
});

btnClear.addEventListener('click', () => {
  localStorage.clear();
  console.log('Хранилище очищено');
});
