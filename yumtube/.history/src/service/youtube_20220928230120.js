class Youtube{
  constructor(key){
    this.key = key;
    this.getRequestOptions ={
      method: 'GET',
      redirect: 'follow'
    };
  }

  mostPopular(){
    fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyBbOFJZ0wPaBnrt1n8uKB0kNdtN1EZ1KJ4", 
      this.getRequestOptions
    )
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
  }
}