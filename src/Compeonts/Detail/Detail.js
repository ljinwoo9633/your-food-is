import React from 'react';
import Nav from '../Part/Nav';
import { PageLoading } from '../Part/Loading';
import { DetailHeader, DetailArticle, DetailFooter } from '../Part/Detail';

class Detail extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            isLoading: false,
            title: 'Pan Cake',
            cookerImageUrl: 'https://usercontent2.hubstatic.com/12597481_f520.jpg',
            description: 'A pancake (or hotcake, griddlecake, or flapjack, not to be confused with oat bar flapjacks) is a flat cake, often thin and round, prepared from a starch-based batter that may contain eggs, milk and butter and cooked on a hot surface such as a griddle or frying pan, often frying with oil or butter. Archaeological evidence suggests that pancakes were probably the earliest and most widespread cereal food eaten in prehistoric societies.',
            cookerDescription: "I Love Cooking~~❤️❤️",
            cookerName: "Just An Ordinary & Boring Man",
            foodImageUrl: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        }
    }
    render()
    {
        let {
            isLoading,
            title,
            foodImageUrl,
            description,
            cookerImageUrl,
            cookerDescription,
            cookerName
        } = this.state;
        return(
            isLoading
            ?
            (<PageLoading />)
            :
            (<div>
                <Nav />
                <DetailHeader />
                <DetailArticle
                    title={title}
                    description={description}
                    foodImageUrl={foodImageUrl}
                    cookerName={cookerName}
                    cookerDescription={cookerDescription}
                    cookerImageUrl={cookerImageUrl}
                />
                <DetailFooter />
            </div>)
        )
    }
}

export default Detail;