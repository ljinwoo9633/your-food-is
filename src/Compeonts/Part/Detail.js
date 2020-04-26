import React from 'react';
import 'aframe';

import './Detail.css';

export let DetailHeader = () => {
    return(
        <header>
        </header>
    )
}

export let DetailArticle = ({
    title,
    description,
    foodImageUrl,
    cookerImageUrl,
    cookerDescription,
    cookerName
}) => {
    return(
        <article className="m-5">
            <div className="detailFoodSimpleIntro__frame card card-body shadow-sm">
                <div style={{
                    marginRight: '1rem'
                }}>
                    <DetailFoodJumbotron
                        title={title}
                        foodImageUrl={foodImageUrl}
                    />
                </div>
                <div style={{
                    marginLeft: '1rem'
                }}>
                    <DetailVrFood
                        foodImageUrl={foodImageUrl} 
                    />
                </div>
            </div>
            <div className="card card-body shadow-sm mt-3">
                <DetailFoodDescription
                    description={description}
                />
                <DetailFoodCooker
                    cookerName={cookerName}
                    cookerDescription={cookerDescription}
                    cookerImageUrl={cookerImageUrl}
                />
            </div>
        </article>
    )
}

export let DetailFooter = () => {
    return(
        <footer>
        </footer>
    )
}

let DetailFoodJumbotron = ({
    title,
    foodImageUrl
}) => {
    return(
        <div>
            <DetailFoodTitle
                title={title}
            />
            <div>
                <img 
                    src={foodImageUrl}
                    alt="foodImage"
                />
            </div>
            <div>
                <button className="btn btn-lg mt-3 w-100" style={{
                    backgroundColor: 'tomato',
                    color: 'white'
                }}>
                    <strong>
                        <i className="fas fa-utensils mr-2"></i> 지금 구매하기!
                    </strong>
                </button>
            </div>
            <div>
                <button className="btn btn-lg w-100 mt-3" style={{
                    backgroundColor: 'tomato',
                    color: 'white'
                }}>
                    <strong>
                        <i className="fas fa-phone-alt mr-2"></i> Seller에게 연락하기!
                    </strong>
                </button>
            </div>
        </div>
    )
}

let DetailFoodTitle = ({
    title
}) => {
    return(
        <h2>{title}</h2>
    )
}

let DetailFoodCooker = ({
    cookerImageUrl,
    cookerDescription,
    cookerName
}) => {
    return(
        <div>
            <div className="border-bottom">
                <label className="text-muted">
                    Cooker
                </label>
            </div>
            <div className="cookerIntro__frame mt-3">
                <div>
                    <img 
                        src={cookerImageUrl}
                        alt="cookerImage"
                        className="cookerImage"    
                    />
                </div>
                <div>
                    <div>
                        <h3>{cookerName}</h3>
                    </div>
                    <div style={{
                        wordBreak: 'break-all',
                        whiteSpace: 'pre-line'
                    }} className="mt-2">
                        <p>
                            {cookerDescription}
                        </p>
                    </div>
                    <div className="cookerFollow__frame">
                        <div>
                            <small>
                                <strong>
                                    Follower
                                </strong>
                            </small>
                            <div>
                                350
                            </div>
                        </div>
                        <div className="cookerFollow">
                            <small>
                                <strong>
                                    Follow
                                </strong>
                            </small>
                            <div>
                                420
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

let DetailFoodDescription = ({
    description
}) => {
    return(
        <div>
            <div className="border-bottom">
                <label className="text-muted">
                    Description
                </label>
            </div>
            <div style={{
                wordBreak: 'break-all',
                whiteSpace: 'pre-line'
            }}>
                <p>
                    {description}
                </p>
            </div>
            
        </div>
    )
}

let DetailVrFood = ({
    foodImageUrl
}) => {
    return(
        <div>
        <a-scene embedded>
            <a-assets>
            </a-assets>
            <a-box
                src={foodImageUrl}
                position="0 0.5 -3"
                rotation="0 45 0"
                width="1"
                height="1"
                depth="1"
            >
            </a-box>
            <a-box
                color="brown"
                position="0 0 -3"
                rotation="90 45 0"
                width="3"
                height="3"
                depth="0.5"
            >
            </a-box>
            
        </a-scene>
        </div>
    )
}