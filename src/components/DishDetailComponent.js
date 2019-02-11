import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {
	

	renderComments(){
	
		if(this.props.selectedDish.comments == null)  return(<div></div>)
		
		return (
			this.props.selectedDish.comments.map((comment) => {
				const shortDate = comment.date.slice(0,10);
				return (
					<ul key={comment.id} className="list-unstyled">
						<li className="bg-primary text-white">{comment.comment}</li>
						<li>{` ${comment.author} ${shortDate} `}</li>
						</ul>	
					);
			
			})  
		)

	  }
	 
	renderDish() {
		
		const dish = this.props.selectedDish;
		if(dish == null) return(<div></div>) 

		 return (	
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
				<h3>Customer Comments</h3>
					{this.renderComments()}
				</div>
			</div>
		) 	
	}

	render() {
		return this.renderDish()
	}
}

export default DishDetail