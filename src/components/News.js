import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Shimmer from './Shimmer'

export class News extends Component {
    data={
    articles : [
            {
            "source": {
            "id": null,
            "name": "Variety"
            },
            "author": "Elizabeth Wagmeister",
            "title": "Britney Spears and Will.i.am Drop New Song ‘Mind Your Business’ - Variety",
            "description": "Britney Spears is getting back to the music — again. The Princess of Pop and her frequent collaborator, Will.i.am, have dropped a new single, “Mind Your Business,” which is t…",
            "url": "https://variety.com/2023/music/news/britney-spears-will-i-am-song-mind-your-business-1235673190/",
            "urlToImage": "https://variety.com/wp-content/uploads/2023/07/williamXbritney_MindYourBusiness_CVR_IMAGE.jpg?crop=0px%2C551px%2C3000px%2C1687px&resize=1000%2C563",
            "publishedAt": "2023-07-21T04:07:00Z",
            "content": "Britney Spears is getting back to the music — again. The Princess of Pop and her frequent collaborator, Will.i.am, have dropped a new single, “Mind Your Business,” which is the second song to be rel… [+3177 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Walmart.com"
            },
            "author": "xyz",
            "title": "Walmart Launches Walmart+ Assist: Half Price Memberships for Those on Government Assistance - Walmart Corporate",
            "description": "Helping people save money and live better is at the core of everything we do at Walmart, and Walmart+ is that mission supercharged. Since launching Walmart+ in 2020, we have worked hard to curate a membership offering that pairs benefits with savings, providi…",
            "url": "https://corporate.walmart.com/newsroom/2023/07/20/walmart-launches-walmart-assist-half-price-memberships-for-those-on-government-assistance",
            "urlToImage": "https://cdn.corporate.walmart.com/dims4/WMT/c373844/2147483647/strip/true/crop/3333x1750+0+63/resize/1200x630!/quality/90/?url=https%3A%2F%2Fcdn.corporate.walmart.com%2Fb3%2F21%2Ffaa991954aeaa5278a0308d16be1%2Fw-bag-of-groceries-on-the-counter.jpg",
            "publishedAt": "2023-07-21T04:02:20Z",
            "content": "Helping people save money and live better is at the core of everything we do at Walmart, and Walmart+ is that mission supercharged. Since launching Walmart+ in 2020, we have worked hard to curate a m… [+1991 chars]"
            },
            {
            "source": {
            "id": "cnn",
            "name": "CNN"
            },
            "author": "John Miller, Christina Maxouris",
            "title": "Investigators in Gilgo Beach case operating on theory that the killings occurred in suspect’s home - CNN",
            "description": "Since the spring of this year, investigators looking into the Gilgo Beach serial killings case have been operating on the theory that the suspect, Rex Heuermann, committed the killings in his Massapequa Park, New York, home.",
            "url": "https://www.cnn.com/2023/07/20/us/gilgo-beach-serial-killings-rex-heuermann-house/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230720142616-01-rex-heuermann-home-investigation-0719.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2023-07-21T02:07:00Z",
            "content": "Since the spring of this year, investigators looking into the Gilgo Beach serial killings case have been operating on the theory that the suspect, Rex Heuermann, committed the killings in his Massape… [+5843 chars]"
            }
            ],
            
    }

    capitalizeFirstLetter = (str) => { return str.charAt(0).toUpperCase() + str.slice(1); }

    constructor(props){
        super(props);
        this.state = {
            articles: this.data.articles,
            country: this.data.country,
            loading: false,
            page:1,
            test:false
      }
      document.title = `The Daily Digest-${this.capitalizeFirstLetter(this.props.category)}`;
    }

    async componentDidMount(){
        // let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=0a38ea26222a4fa99a10b6c869fff197";
       // let url="https://newsdata.io/api/1/news?apikey=pub_2915514a13cdff2e5d6a0fffb864150ede00b";
        let url=`https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=us&apiKey=0a38ea26222a4fa99a10b6c869fff197&pageSize=${this.props.pageSize}&page=${this.state.page}`;
    
        let data = await fetch(url);
    
        let parsedData = await data.json();
       
        // console.log(parsedData);
        this.setState({articles: parsedData.articles});

        this.timer = setInterval(
            () => this.setState({test: true}),
            800,
        );

    }

    async componentWillUnmount() {
        clearInterval(this.timer);
    }

     nextClick = async () => {
        // console.log("next is clicked");
        let url=`https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=us&apiKey=0a38ea26222a4fa99a10b6c869fff197&pageSize=${this.props.pageSize}&page=${this.state.page + 1}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            page: this.state.page + 1,
            articles: parsedData.articles,
            test:false
        })
        this.timer = setInterval(
            () => this.setState({test: true}),
            2000,
        );
     }

     prevClick = async () =>{
        // console.log("prev is clicked");
        let url=`https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=us&apiKey=0a38ea26222a4fa99a10b6c869fff197&pageSize=${this.props.pageSize}&page=${this.state.page - 1}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles
        })
     } 
  render() {

    return (  ( this.state.test === false) ? <Shimmer />: 
        <>
        <div className="container wrapper">
            

            {/* <h2 class="container__title-text container_lead-plus-headlines-with-images__title-text" data-editable="title">{`${this.props.category}`}</h2> */}
            <div className="row states box-1">     
            {this.state.articles.slice(0,1).map((element,index)=>{
            return <>
                <div className={`${index % 5 === 0 ? 'column6' : 'column3'}`} key={element.url}>
                <a href={element.url}  target="_blank" rel="noopener noreferrer"  style={{ textDecoration: "none", color: "#000" }}>
                     {/* <h1 className="headline text-center fw-bold">{element.title}</h1> */}
                    <p className={`${index % 5 === 0 ? 'headline text-center fw-bold h1' : 'headline text-center fw-bold h5'}`}>{element.title}</p>
                    <NewsItem description={element.description} urlToImage={element.urlToImage?element.urlToImage:"https://nypost.com/wp-content/uploads/sites/2/2023/10/NYPICHPDPICT000055138580.jpg?quality=75&strip=all&w=1024"} author={element.author} source={element.source.name} /> 
                    </a>
                </div>
            </>
            }
            )}
            </div>
            <div className="row states box-2">     
            {this.state.articles.slice(1,2).map((element,index)=>{
            return <>
                <div className={`${index % 5 === 0 ? 'column6' : 'column3'}`} key={element.url}>
                <a href={element.url}  target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "#000" }}>
                     {/* <h1 className="headline text-center fw-bold">{element.title}</h1> */}
                    <p className={`${index % 5 === 0 ? 'headline text-center fw-bold h1' : 'headline text-center fw-bold h5'}`}>{element.title}</p>
                    <NewsItem description={element.description.slice(0, 175)+'...'} urlToImage={element.urlToImage?element.urlToImage:""} author={element.author} source={element.source.name} /> 
                    </a>
                </div>
            </>
            }
            )}
            </div>
            <div className="row states box-3">     
            {this.state.articles.slice(3,4).map((element,index)=>{
            return <>
                <div className="links" key={element.url}>
                <a href={element.url}  target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "#000" }}>
                     {/* <h1 className="headline text-center fw-bold">{element.title}</h1> */}
                     <p className={`${index % 5 === 0 ? 'headline text-center fw-bold h1' : 'headline text-center fw-bold h5'}`}>{element.title}</p>
                    <NewsItem description={element.description?element.description.slice(0, 150)+'...':""} urlToImage={element.urlToImage?element.urlToImage:""} author={element.author} source={element.source.name} /> 
                    </a>
                </div>
            </>
            }
            )}
            </div>
            <div className="row states box-4">     
            {this.state.articles.slice(4,8).map((element,index)=>{
            return <>
                <div className="links" key={element.url}>
                <a href={element.url}  target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "#000" }}>
                     {/* <h1 className="headline text-center fw-bold">{element.title}</h1> */}
                     <ul>
                        <li className='headlines'>{element.title}</li>
                     </ul>
                    {/* <p className={`${index % 5 === 0 ? 'headline text-center fw-bold h1' : 'headline text-center fw-bold h5'}`}>{element.title}</p> */}
                    </a>
                </div>
            </>
            }
            )}
            </div>
            <div className="row states box-5">     
            {this.state.articles.slice(8,9).map((element,index)=>{
            return <>
                 <div className="links" key={element.url}>
                <a href={element.url}  target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "#000" }}>
                     {/* <h1 className="headline text-center fw-bold">{element.title}</h1> */}
                    <NewsItem urlToImage={element.urlToImage?element.urlToImage:""} title={element.title} />
                    {/* <h1 className="headline text-center fw-bold">{element.title}</h1> */}
                    </a>
                </div>
            </>
            }
            )}
            </div>
            <div className="row states box-6">     
            {this.state.articles.slice(9,10).map((element,index)=>{
            return <>
                 <div className="links" key={element.url}>
                <a href={element.url}  target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "#000" }}>
                     {/* <h1 className="headline text-center fw-bold">{element.title}</h1> */}
                    <NewsItem urlToImage={element.urlToImage?element.urlToImage:""} title={element.title} />
                    {/* <h1 className="headline text-center fw-bold">{element.title}</h1> */}
                    </a>
                </div>
            </>
            }
            )}
            </div>
        </div>
        <div className="container d-flex justify-content-between">
        <button type="button" disabled={this.state.page<=1} class="btn btn-dark btn-next" onClick={this.prevClick}>PREVIOUS</button>
        <button type="button" disabled={this.state.page>=3}class="btn btn-dark btn-prev" onClick={this.nextClick}>NEXT</button>
        </div>
        </>
        )
  }
}

export default News
