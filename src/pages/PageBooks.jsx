import { useState, useEffect } from 'react';
import axios from 'axios';

const url = 'https://ejt-livecoding-apisite-back.herokuapp.com';

export const PageBooks = () => {
	const [books, setBooks] = useState([]);

	useEffect(() => {
		(async () => {
			setBooks((await axios.get(url)).data);
		})();
	}, []);

	return (
		<>
			<h2>Books</h2>
			<p>There are {books.length} books:</p>

			<div className="books">
				{books.map((book, index) => {
					return (
						<div key={index} className="book">
							<img
								src={`https://edwardtanguay.netlify.app/share/images/techBooks/${book.idCode}.jpg`}
								alt="book"
							/>
							<div className="info">
								<div className="title">{book.title}</div>
								<div className="description">
									{book.description}
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</>
	);
};
