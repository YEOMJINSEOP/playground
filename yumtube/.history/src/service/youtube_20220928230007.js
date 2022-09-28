class Youtube{
  constructor(key){
    this.key = key;
    this.getRequestOptions ={
      method: 'GET',
      redirect: 'follow'
    };
  }

  mostPopular(){
    fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=AIzaSyBbOFJZ0wPaBnrt1n8uKB0kNdtN1EZ1KJ4`,
    requestOptions)
      .then(response => response.json())
      .then(result => 
        result.items.map(item => ({...item, id: item.id.videoId})))
      .then(items=> setVideos(items))
      .catch(error => console.log('error', error));
  }
}