import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import { FaBookmark, FaShareAlt, FaStar, FaEye } from 'react-icons/fa';


const NewsSummaryCard = ({ news }) => {
    const { title, _id, author, total_view, details, image_url, rating } = news
    console.log(news);
    return (
        <Card className="">
            <Card.Header className='d-flex justify-content-between align-items-center'>
                <div className='d-flex '>
                    <Image
                        className='me-2'
                        roundedCircle
                        src={author.img}
                        style={{ height: '60px' }}

                    ></Image>
                    <div>
                        <p className='mb-0'> {author?.name} </p>
                        <p> {author?.published_date} </p>
                    </div>
                </div>
                <div>
                    <FaBookmark className='me-2'></FaBookmark>
                    <FaShareAlt></FaShareAlt>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text>
                    {
                        details.length > 200 ?
                            <p> {details.slice(0, 250) + '...'} <Link to={`/news/${_id}`}>Read More</Link> </p>
                            :
                            <p> {details} </p>
                    }
                </Card.Text>
            </Card.Body>
            <Card.Footer className=" d-flex justify-content-between align-items-center">
                <div className='align-items-center'>
                    <FaStar className='text-warning'></FaStar>
                    <span> {rating?.number} </span>
                </div>
                <div className='align-items-center' >
                    <span className='me-2'>{total_view}</span>
                    <FaEye></FaEye>
                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewsSummaryCard;