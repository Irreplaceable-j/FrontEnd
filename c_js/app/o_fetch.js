const API_URL = 'https://dapi.kakao.com/v3/search/book?';
const params = {
  query: '해리포터',
  size: '2'
}

// const queryString = new URLSearchParams(params).toString();
// fetch(API_URL+queryString, {
//   headers: {Authorization: 'KakaoAK 02c3dacbea90742588bc5639d9bf19ce'}
// }).then(response => response.json())
// .then(data => {
//   console.dir(data.documents[0].title);
// });

const queryString = new URLSearchParams(params).toString();
(async () => {
  const response = await fetch(API_URL+queryString, {
    headers: {Authorization: 'KakaoAK 02c3dacbea90742588bc5639d9bf19ce'}
  });

  const data = await response.json();
  const{
    documents:[{title}]
  } = data;

  console.log(title);
})();








