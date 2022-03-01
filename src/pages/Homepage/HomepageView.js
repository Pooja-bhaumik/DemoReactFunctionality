import React, {Component} from 'react';
import img1 from '../../assets/images/cat1.jpg'
import './Homepage.scss'


class HomepageView extends Component {
    render() {
        return(
       <>
       <div className='container'>
        <div className='row py-4'>
        <h3 className='text-center fw-bold'>All Categories</h3>
        </div>
        <div class="row categories-row">
            <div className='col-3'>
            <div className='main-card'>
                    <div className='card-img'>
                      <img src={img1} className='img-fluid'/>
                    </div>
                    <div className='content'>
                        <h4 className='text-center'>High collar quilted jacket</h4>
                        <h5 className='text-center'>$132.00</h5>
                    </div>
                </div>
            </div>
            <div className='col-3'>
            <div className='main-card'>
                    <div className='card-img'>
                      <img src={img1} className='img-fluid'/>
                    </div>
                    <div className='content'>
                        <h4 className='text-center'>High collar quilted jacket</h4>
                        <h5 className='text-center'>$132.00</h5>
                    </div>
                </div>
            </div>
            <div className='col-3'>
            <div className='main-card'>
                    <div className='card-img'>
                      <img src={img1} className='img-fluid'/>
                    </div>
                    <div className='content'>
                        <h4 className='text-center'>High collar quilted jacket</h4>
                        <h5 className='text-center'>$132.00</h5>
                    </div>
                </div>
            </div>
            <div className='col-3'>
            <div className='main-card'>
                    <div className='card-img'>
                      <img src={img1} className='img-fluid'/>
                    </div>
                    <div className='content'>
                        <h4 className='text-center'>High collar quilted jacket</h4>
                        <h5 className='text-center'>$132.00</h5>
                    </div>
                </div>
            </div>
        </div>
       </div>
       </>
        );
    }
}

export default HomepageView;