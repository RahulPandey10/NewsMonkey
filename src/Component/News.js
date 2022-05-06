import { Component } from 'react'
import General from '../Data/General.json'
import Business from '../Data/Business.json'
import Entertainment from '../Data/Entertainment.json'
import Sports from '../Data/Sports.json'
import Science from '../Data/Science.json'
import Technology from '../Data/Technology.json'
import Health from '../Data/Health.json'
import NewsItem from './NewsItem'

export class News extends Component {

    constructor() {
        super();
        this.state = {
            articles: General
        }
        this.handleChangeNewsCategory = this.handleChangeNewsCategory.bind(this);
    }

    async handleChangeNewsCategory(value) {
        this.setState({
            articles: value
        });
    }

    render() {
        return (
            <div className='container'>
                <h1 className='text-center' style={{ margin: "10px 0" }}>NewsMonkey - Get the latest news here</h1>
                {console.log("Simple", this.state)}
                <div class="text-center" style={{}}>
                    <button className='btn btn-outline-primary mx-1 my-1' onClick={() => { this.handleChangeNewsCategory(General) }}>General</button>
                    <button className='btn btn-outline-primary mx-1 my-1' onClick={() => { this.handleChangeNewsCategory(Business) }}>Business</button>
                    <button className='btn btn-outline-primary mx-1 my-1' onClick={() => { this.handleChangeNewsCategory(Entertainment) }}>Entertainment</button>
                    <button className='btn btn-outline-primary mx-1 my-1' onClick={() => { this.handleChangeNewsCategory(Sports) }}>Sports</button>
                    <button className='btn btn-outline-primary mx-1 my-1' onClick={() => { this.handleChangeNewsCategory(Science) }}>Science</button>
                    <button className='btn btn-outline-primary mx-1 my-1' onClick={() => { this.handleChangeNewsCategory(Technology) }}>Technology</button>
                    <button className='btn btn-outline-primary mx-1 my-1' onClick={() => { this.handleChangeNewsCategory(Health) }}>Health</button>
                </div>
                <h1>{this.state.count}</h1>
                <div className="row">
                    {this.state.articles.map(data => {
                        return (
                            <div className="col-md-4" key={data.url}>
                                <NewsItem title={data.title ? data.title : ""} description={data.description ? data.description : ""} imageUrl={data.urlToImage} newsUrl={data.url} author={data.author} date={data.publishedAt} source={data.source.name} />
                            </div>
                        )
                    })}
                </div>
            </div >
        )
    }
}

export default News