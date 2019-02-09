import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {
	render() {

		const dish = this.props.selectedDish

		if(dish == null) return <div></div>

		return (
			<div>
				<div className='row'>
					<div className='col-12 col-md-5 m-1'>
						<Card>
							<CardImg width="100%" src={dish.image} alt={dish.name}/>
							<CardBody>
								<CardTitle>{dish.name}</CardTitle>
								<CardText>{dish.description}</CardText>
							</CardBody>
						</Card>
					</div>
					<div className='col-12 col-md-5 m-1'>
					<h4>Customer Comments</h4>
						{dish.comments.map(comment => {
								const shortDate = comment.date.slice(0,10);
							return (
								<div key={comment.id}>
									<p className="bg-primary text-white">{comment.comment}</p>
									<p>{`${comment.author} ${shortDate}`}</p>
								</div>
							)
						})}
					</div>
				</div>
			</div>
		)
		
	}
}

export default DishDetail