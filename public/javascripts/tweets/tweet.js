
window.addEventListener('DOMContentLoaded', () => {
  bindTweet()
})

function bindTweet(){
  const buttons = document.querySelectorAll('.btn-danger');
  const tweetContainer = document.querySelector('#tweet-list-container')
  const tweetCount = document.querySelector('#tweetCount');

  tweetCount.innerHTML = buttons.length;

  buttons.forEach(b => {

    b.addEventListener('click', async ($event) => {
      const id = $event.target.getAttribute("tweetId");
        try { 
          const response = await axios.delete('/tweets/' + id)
          tweetContainer.innerHTML = response.data;
          bindTweet();
        } catch(e) {
          console.error(e);
        }
    })
  })
}