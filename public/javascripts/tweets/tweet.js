
window.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.btn-danger');
  const tweetContainer = document.querySelector('#tweet-list-container')
  buttons.forEach(b => {
    b.addEventListener('click', async ($event) => {
      const id = $event.target.getAttribute("tweetId");
      console.log("0");
        try {
          
          const response = await axios.delete('/tweets/' + id)
          console.log("2");
          tweetContainer.innerHTML = response.data;
          console.log(response);
        } catch(e) {
          console.error(e);
        }

    })
  })
})