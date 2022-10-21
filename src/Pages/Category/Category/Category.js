import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCard from '../../Shared/NewsSummaryCard/NewsSummaryCard';

const Category = () => {
    const CategoryNews = useLoaderData();
    return (
        <div>
            <h2>News got: {CategoryNews.length} </h2>
            {
                CategoryNews.map(news => <NewsSummaryCard
                    key={news.id}
                    news={news}
                ></NewsSummaryCard>)
            }
        </div>
    );
};

export default Category;