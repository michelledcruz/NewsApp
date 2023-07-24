import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  render() {
    return (
    <div class="container">
        <div class="row">
            <div class="col-md-6">
            <h1 class="headline text-center fw-bold">Poland's deployment of border troops concerns Russia - EURACTIV</h1>
                <NewsItem title="mytitile" description="this is short desc...." urlToImage="https://www.euractiv.com/wp-content/uploads/sites/2/2023/07/11418152-800x450.jpg"/>
            </div>
            <div class="col-md-3">
            <NewsItem title="mytitile" description="this is short desc...." urlToImage="https://nbcsports.brightspotcdn.com/dims4/default/5d89dc2/2147483647/strip/true/crop/565x318+0+1/resize/1440x810!/quality/90/?url=https%3A%2F%2Fnbc-sports-production-nbc-sports.s3.amazonaws.com%2Fbrightspot%2Fbb%2F2d%2F97256797dbace85f35106737a52b%2Fgettyimages-623392262-e1671030179522.jpg"/>
            <span data-editable="headline">Spains far-right Vox party is targeting womens rights. It may end up kingmaker in Sundays election</span>
            <span data-editable="headline">It may end up kingmaker in Sundays election</span>
            </div>
            <div class="col-md-3">
            <NewsItem title="mytitile" description="this is short desc...." urlToImage="https://media.cnn.com/api/v1/images/stellar/prod/230328073155-rishi-sunak-030823.jpg?c=16x9&q=w_800,c_fill"/>
            <span data-editable="headline">Spains far-right Vox party is targeting womens rights. It may end up kingmaker in Sundays election</span>
            <span data-editable="headline"> It may end up kingmaker in Sundays election</span>
            </div>
        </div>
        <div class="row">
            <div class="col-md-3">
                <NewsItem title="mytitile" description="this is short desc...." urlToImage="https://dims.apnews.com/dims4/default/87963ae/2147483647/strip/true/crop/8134x4575+0+424/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fe9%2F2e%2Fcff248537152fc4130f3c73b8c41%2F50eebcba3fa142eaa7018c169b619beb"/>
                <span data-editable="headline">Spains far-right Vox party is targeting womens rights. It may end up kingmaker in Sundays election</span>
                <span data-editable="headline"> It may end up kingmaker in Sundays election</span>
                <span data-editable="headline">Spains far-right Vox party is targeting womens rights. It may end up kingmaker in Sundays election</span>
                <span data-editable="headline"> It may end up kingmaker in Sundays election</span>
            </div>
            <div class="col-md-6">
                <NewsItem title="mytitile" description="this is short desc...." urlToImage="https://variety.com/wp-content/uploads/2023/07/williamXbritney_MindYourBusiness_CVR_IMAGE.jpg?crop=0px%2C551px%2C3000px%2C1687px&resize=1000%2C563"/>
            </div>
            <div class="col-md-3">
                <span data-editable="headline">Spains far-right Vox party is targeting womens rights. It may end up kingmaker in Sundays election</span>
                <span data-editable="headline"> It may end up kingmaker in Sundays election</span>
                <span data-editable="headline">Spains far-right Vox party is targeting womens rights. It may end up kingmaker in Sundays election</span>
                <span data-editable="headline"> It may end up kingmaker in Sundays election</span>
            </div>
        </div>
    </div>
    )
  }
}

export default News
