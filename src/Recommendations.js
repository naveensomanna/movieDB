import React from 'react';
import axios from 'axios';


export default class Recommendation extends React.Component{

constructor(props){
    super(props);
    this.state={
movie:[]
    }
}
componentDidMount(){
//recommendation api
var request=`https://api.themoviedb.org/3/movie/${this.props.id}/recommendations?api_key=0060474990618f8eace5a7835a1fead6&language=en-US&page=1`;
axios.get(request).then(response=>{
    this.setState({
movie:response.data.results
    })
});
}
render()
{
var path="https://image.tmdb.org/t/p/w500";
var img_slice=this.state.movie.slice(1,9);
var poster=img_slice.map(img=>{
    var bgimg=path+img.poster_path;
    return(
        <div id="img_main_blog">
            <img src={bgimg} />
            <p>{img.title}<span >{img.vote_average}<span className="glyphicon glyphicon-star"></span></span></p>
        </div>
    )
}
)
    return(
<div>
<div className="main_recommend">
<div>
    <h2>Recommendation</h2>
</div>
<div className="movie_recommend">
{poster}
</div>
</div>
</div>
    );
}
}