import React, { Component } from 'react';
import {params,match} from 'react-router-dom';
import {Col,Row,Thumbnail,Jumbotron} from 'react-bootstrap';
import axios from 'axios';

export default class Movies extends Component{
    constructor(props){
        super(props);
    this.state={
        movie:[],
        movie1:[]
    }
    }
    componentDidMount(){
        let requestUrl="https://api.themoviedb.org/3/movie/"+this.props.match.params.id+"?api_key=0060474990618f8eace5a7835a1fead6&language=en-US";
axios.get(requestUrl).then(response =>{
    this.setState({
        movie:response.data
    }
)
}
    );
    let requestUrl1="https://api.themoviedb.org/3/movie/"+this.props.match.params.id+"/casts?api_key=0060474990618f8eace5a7835a1fead6&language=en-US";
    axios.get(requestUrl1).then(response =>{
        this.setState({
            movie1:response.data.cast
        }
    )
    }
        );

}
    
    render(){
        let baseImgURL = "https://image.tmdb.org/t/p/w500";

        let imgUrl=baseImgURL+this.state.movie.poster_path;
        let movies=[];
        movies= this.state.movie1.slice(1,5);
        let movieList = movies.map(movie => {
            console.log("mapped movie" + movie)
            let imgurl = baseImgURL + movie.profile_path;
            console.log("imgurl" + imgurl)
            return (
                <div className="well well_style">
            <img src={imgurl} width="206px" height="200px" /><p className="casts_name">{movie.name}</p>
            
            </div>);
        });
        return (
            <div id="movie_background">
<div className="movie_details_main">
                
                    <div >
        <img src={imgUrl}  width="300px" height="400px"/>
        
</div>
<div className="sing_colum_blog">
        <p className="movie_details_title">{this.state.movie.original_title}</p>
        <p>Overview :</p>
        <p className="movie_details">{this.state.movie.overview}</p>
        <p>Popularity :</p>
        <p className="movie_details">{this.state.movie.popularity}</p>
        <p>Votes :</p>
        <p className="movie_details">{this.state.movie.vote_count}</p>
</div>

        </div>
        <div className="people">
        <h2>Top Billed Cast</h2>

        <div className="casts">
        {movieList}
        
        </div>
        </div>
        </div>
        );
}
}