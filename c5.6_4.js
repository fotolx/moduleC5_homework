const Url = "https://picsum.photos/";

function displayPic(url) {
      const picture = `
        <div class="pic">
          <img
            src="${url}"
            class="pic-image"
          />
        </div>
      `;
    resultShow.innerHTML = picture;
  }

const useRequest = (url) => {
  return fetch(url)
    .then((response) => {
      return response.url;
    })
    .catch(() => { console.log('error') });
}

const resultShow = document.querySelector('.result');
const btnLoad = document.getElementById('btn');

btnLoad.addEventListener('click', async () => {
    const count = Math.round(document.getElementById('number').valueAsNumber);
    const count2 = Math.round(document.getElementById('number2').valueAsNumber);
    if (isNaN(count) || count>300 || count<100 || isNaN(count2) || count2>300 || count2<100) 
        alert('Одно из чисел вне диапазона от 100 до 300');
    else {
          resultShow.innerHTML = "<div class='message'>Загрузка изображения</div>";uestResult = await useRequest(Url+count+'\\'+count2);
          const requestResult = await useRequest(Url+count+'\\'+count2);
          displayPic(requestResult);
    }
});
