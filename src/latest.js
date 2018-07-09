import React from 'react';
import axios from 'axios';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SubscrbPopular from './SubscrbPopular.js';
let datas = [];
export default class Latest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: [],
        }
    }
    componentDidMount() {
        console.log("componentWillMount");
        let requestUrl = "https://api.themoviedb.org/3/movie/top_rated?api_key=0060474990618f8eace5a7835a1fead6&language=en-US&page=1";
        axios.get(requestUrl).then(response => {
            this.setState({
                movie: response.data.results
            })

        });
        
    }
    render() {
        let baseImgURL = "https://image.tmdb.org/t/p/w500";
        let movies = [];
        movies = this
            .state
            .movie
            .slice(1, 7);
        let movieList = movies.map(movie => {
            let imgurl = baseImgURL + movie.poster_path;
            let main_imgid = movie.id;
            return (
                <div className="block_item2">
            <div className="boxshadow_img" id="up_movies">
            <img className="img_align" src={imgurl}  />
            </div>
                              <div className="movie_title">
<Link to={`/Movies/${main_imgid}`}>{movie.title}</Link><p>{movie.release_date}</p></div></div>

);
        });
        
        // console.log(moviess.release_date);
        return (
            <div>
                <div className="toprated-main">
                    <Row>
                        <Col lg={8} md={8} xs={12} sm={8} xs={12}>

                            <div className="contents-toprated">
                                <div className="main-blog">
                                <h4 className="toprated_title">top rated movies</h4>
                                <div className="inner-blog">

                                    {movieList}

                                </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} md={4} sm={4}>
                            <SubscrbPopular/>
                        </Col>
                    </Row>
                </div>
            </div>

        );
    }
}