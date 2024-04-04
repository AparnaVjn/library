import React from 'react';
import '../styles/AddBook.css'
import Header from '../components/Header';

function AddBook() {
  return (
    <div>
      <Header />
      <div className='addform'>
        <div className='title'>Add Book</div>
        <form>
          <div className="mb-3">
            <label htmlFor="formGroupExampleInput" className="form-label">Name</label>
            <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Name" />
          </div>
          <div className="mb-3">
            <label htmlFor="formGroupExampleInput2" className="form-label">Author</label>
            <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Author" />
          </div>
          <div className="mb-3">
            <label htmlFor="formGroupExampleInput" className="form-label">Language</label>
            <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Language" />
          </div>
          <div className="mb-3">
            <label htmlFor="formGroupExampleInput" className="form-label">Serial No</label>
            <input type="text" className="form-control" id="formGroupExampleInput" placeholder="1234..." />
          </div>
          <button type="submit" className="btn btn-primary" > Submit</button>
        </form>
      </div>
    </div >
  );
}

export default AddBook;
