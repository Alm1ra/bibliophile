import './StatisticPage.css';
import Plot from 'react-plotly.js';

export default function StatisticPage() {
    return (
        <div className='stat-content'>
            <div className='stat-header'>
                <h1>STATISTICS</h1>
            </div>
            <div className='stat-charts'>
                <div className='stat-charts-upper'>
                    <div className='stat-all-books'>
                        <h2>All added books:</h2>
                        <div className='stat-all-books-cont'>46</div>
                    </div>
                    <div className='stat-authors'>
                        <h2>Top 3 authors:</h2>
                        <ol>
                            <li>Tolkien, J.R.R.</li>
                            <li>Jane Austen</li>
                            <li>Andy Weir</li>
                        </ol>
                    </div>
                </div>
                <div className='stat-charts-lower'>
                    <div className='stat-genres'>
                        <h2>Genres:</h2>
                        <div className='genres-chart'>
                            <Plot className='plot' 
                            data={[{
                                x: ['Fantasy', 'Romance', 'Science Fiction', 'Adventure', 'Horror', 'Travel'],
                                y: [15, 12, 9, 5, 3, 2],
                                type: 'bar',
                            },
                            ]}
                            layout={{autosize: true, margin:{t:10, b:20, l:20, r:10}, colorway: ['#01786a']}}
                            useResizeHandler={true}
                            style={{width: '100%', height: '100%'}}
                            />                            
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
}