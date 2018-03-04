import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
export default class SubscrbPopular extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: [],
        
        }
    }

    componentDidMount(){
        let requestUrl1 = "https://api.themoviedb.org/3/movie/popular?api_key=0060474990618f8eace5a7835a1fead6&language=en-US&page=1";
        axios.get(requestUrl1).then(response => {
            this.setState({
                movie: response.data.results
            });
            console.log("got the results");
        });
    }
    render(){
        let baseImgURL = "https://image.tmdb.org/t/p/w500";
        let moviess = [];
        moviess = this.state.movie.slice(1, 4);
        let movieList1 = moviess.map(movie => {
            let imgurl = baseImgURL + movie.poster_path;
            return (
                <img className="img_align" src={imgurl} width="190px" height="140px" />
            );
        });
        console.log("api" + moviess);
        let obj1 = moviess.map(mov => {
            return mov.id;
        });


        // console.log(obj.id)
        // let obj =JSON.parse(moviess[0]);
        // console.log(obj['adult'])

        let movieposter = [];
        movieposter = moviess.map(movie => {
            return (<div>{movie.title}  <p>({movie.release_date})</p></div>
            );
        }
        );
return(
    <div>
<div className="follow-blog">
                                <h4>follow and subscribe</h4>
                                <div className="follow-content">
                                    <h5 className="subtitle">explore new movies</h5>
                                    <div className="follow-message">
                                        ...and share the links to videos with your friends on Facebook & More!
                                  </div>
                                    <div className="follow-social">
                                        <a href="#" class="fa fa-facebook"></a>
                                        <a href="#" class="fa fa-twitter"></a>
                                        <a href="#" class="fa fa-google"></a>
                                        <a href="#" class="fa fa-youtube"></a>

                                    </div>
                                    <div id="subscribe-blog">
                                        <h5 className="subtitle">Alerts for New Movies!</h5>
                                        <div className="subscribe-message">
                                            Sign up and get alerted to your email address as soon as we add a new film on our website!
                                          </div>
                                        <div className="subscribe-block_group">
                                            <input type="email" className="subscribe-block_input" placeholder="Your email" />
                                            <a href="" className="subscribe-block_submit">Subscribe</a>
                                        </div>
                                    </div>

                                </div>

                            </div>
                            <div className="popularmain">
                                <h4>popular movie</h4>
                                <div className="one">
                                    {movieList1}
                                </div>
                                <div className="two">
                                    <Link to={`/Movies/${obj1[0]}`} style={{ color: "white", textDecoration: "none" }}>   <h6 className="name_align">{movieposter[0]}</h6></Link>

                                </div>
                                <div className="two">
                                    <Link to={`/Movies/${obj1[1]}`} style={{ color: "white", textDecoration: "none" }}><h6 className="name_align">{movieposter[1]}</h6></Link>
                                </div>
                                <div className="two">
                                    <Link to={`/Movies/${obj1[2]}`} style={{ color: "white", textDecoration: "none" }}><h6 className="name_align">{movieposter[2]}</h6></Link>
                                </div>
                            </div>
                            </div>

);
    }
}